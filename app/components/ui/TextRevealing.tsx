"use client";
import React from "react";
import { motion } from "framer-motion";
import { charVariants } from "@/lib/framer-motion";

const TextRevealing = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          className={className}
          key={index}
          variants={charVariants}
          viewport={{ once: false, amount: 0.0 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextRevealing;
