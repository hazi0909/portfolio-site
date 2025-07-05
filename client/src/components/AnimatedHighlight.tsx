import { motion } from "framer-motion";
import React from "react";

interface AnimatedHighlightProps {
  text: string;
  highlightClassName?: string; // e.g. 'text-primary font-semibold'
  normalClassName?: string; // e.g. 'text-foreground'
  delay?: number; // base delay in seconds
}

export const AnimatedHighlight: React.FC<AnimatedHighlightProps> = ({
  text,
  highlightClassName = "text-primary font-semibold",
  normalClassName = "text-foreground",
  delay = 0,
}) => {
  const letters = Array.from(text);
  return (
    <span style={{ display: "inline-block" }}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ color: "inherit" }}
          animate={{ color: "var(--tw-prose-bold, #06b6d4)" }}
          transition={{
            delay: delay + i * 0.04,
            duration: 0.4,
          }}
          className={highlightClassName + " transition-colors duration-300"}
          style={{ color: "inherit" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedHighlight; 