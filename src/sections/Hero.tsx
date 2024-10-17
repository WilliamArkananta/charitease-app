import React from "react";
import CTAButton from "../components/CTAButton";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col  justify-center h-screen">
          <h1 className="text-4xl font-bold">
            Transform lives with a{" "}
            <motion.span
              className="inline-block"
              whileHover={{ color: "#66BB6A" }}
              whileTap={{ color: "#2B602D", scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{ color: "#4672A4" }}
            >
              Click
            </motion.span>{" "}
          </h1>
          <p>
            Make the difference Effortlessly: CharitEase connects you with
            Projects that matter. Donate today, and change lives tommorrow.
          </p>
          <CTAButton>Join the Movement</CTAButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
