import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeUp({
  children,
  delay = 0,
  duration = 0,
  y,
  x,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y,
          x,
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ delay, type: "spring", duration }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
