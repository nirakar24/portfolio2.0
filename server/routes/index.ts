import { Router } from "express";
import contactRouter from "./contact";

const router = Router();

router.use("/api", contactRouter);

export default router; 