import React, { useState } from "react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
}

function CTAButton({ children }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const backgroundVariants = {
    initial: { scale: 1, opacity: 0 },
    hover: { scale: 999, opacity: 1, backgroundColor: "#759AC4" },
    click: { scale: 999, opacity: 1, backgroundColor: "#273F5B" },
  };

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsClicked(false);
      }}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      className="relative flex justify-center items-center bg-primary text-white px-6 py-3 rounded-full overflow-clip"
      whileTap={{ scale: 0.9 }}
    >
      <p className="z-10">{children}</p>
      <motion.div
        className="w-1 h-1 absolute bg-white rounded-full"
        variants={backgroundVariants}
        initial="initial"
        animate={isClicked ? "click" : isHovered ? "hover" : "initial"}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      />
    </motion.button>
  );
}

export default CTAButton;
