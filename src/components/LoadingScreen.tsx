import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  visible: boolean;
}

export default function LoadingScreen({ visible }: LoadingScreenProps): JSX.Element {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-900"
        >
          {/* Leica red dot animation */}
          <div className="relative mb-8">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-16 h-16 rounded-full bg-primary"
            />
            <motion.div
              animate={{
                scale: [1.5, 2, 1.5],
                opacity: [0.2, 0, 0.2],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-primary"
            />
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-2xl md:text-3xl text-white/80 mb-2"
          >
            Hairuo
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-white/30 tracking-widest uppercase"
          >
            Photography Portfolio
          </motion.p>

          {/* Loading bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="h-[2px] bg-primary/60 mt-8 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
