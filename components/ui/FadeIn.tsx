"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: Props) {
  const variants = {
    up: {
      opacity: 0,
      y: 50,
    },

    left: {
      opacity: 0,
      x: -50,
    },

    right: {
      opacity: 0,
      x: 50,
    },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}