import React, { useState } from "react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
}

function CTAButton({ children }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onMouseEnter={(e) => {
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
      }}
      onClick={() => {
        setIsClicked(true);
      }}
      className="relative flex justify-center items-center bg-primary text-white px-6 py-3 rounded-full overflow-clip"
    >
      <p className="z-10">{children}</p>
      <motion.div
        className="w-1 h-1 absolute bg-white rounded-full"
        animate={{
          scale: isHovered ? 45 : 1,
          opacity: isHovered ? 1 : 0,
          backgroundColor: isHovered ? "#759AC4" : "primary",
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
      />
      <motion.div
        className="w-1 h-1 absolute bg-white rounded-full"
        animate={{
          scale: isClicked ? 45 : 1,
          opacity: isClicked ? 1 : 0,
          backgroundColor: isClicked ? "#273F5B" : "primary",
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
      />
    </button>
  );
}

export default CTAButton;
