import { motion } from 'framer-motion';

export default function FadeIn({
  delay = 0,
  duration = 0.8,
  children,
}: {
  duration?: number;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
