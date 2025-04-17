import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            style={{
              backgroundColor: i % 2 ? 'var(--primary)' : 'var(--secondary)',
              width: `${Math.random() * 20 + 10}rem`,
              height: `${Math.random() * 20 + 10}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}