import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

    // Try different ports if 5000 is not available
    const ports = [5000, 3000, 8080, 3001];
    let currentPort = 0;

    const startServer = async (port: number) => {
      return new Promise((resolve, reject) => {
        server.on('error', (err: any) => {
          if (err.code === 'EADDRINUSE' || err.code === 'ENOTSUP') {
            log(`Port ${port} is in use or not supported, trying next port...`);
            resolve(false);
          } else {
            reject(err);
          }
        });

        server.listen(port, () => {
          log(`Server is running on port ${port}`);
          resolve(true);
        });
      });
    };

    while (currentPort < ports.length) {
      const success = await startServer(ports[currentPort]);
      if (success) break;
      currentPort++;
    }

    if (currentPort === ports.length) {
      throw new Error('Could not find an available port');
    }
  } catch (error) {
    log(`Failed to start server: ${error}`);
    process.exit(1);
  }
})();
