import React, { useRef, useState } from "react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";

type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

function Navbar() {
  return (
    <nav className="flex justify-between items-center my-4 mx-20">
      <div className="logo text-2xl font-bold">
        <a href="/" className="flex items-center text-primary gap-2">
          <img src="/logo.svg" alt="CharitEase" />
          <span>CharitEase</span>
        </a>
      </div>
      <NavList />
      <CTAButton>Create a fund</CTAButton>
    </nav>
  );
}

export default Navbar;

const NavList = () => {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
      }}
      className="relative flex items-center font-h5 bg-base-white"
    >
      <NavLinks setPosition={setPosition}>Donate</NavLinks>
      <NavLinks setPosition={setPosition}>About Us</NavLinks>
      <NavLinks setPosition={setPosition}>How CharitEase Works?</NavLinks>
      <NavLinks setPosition={setPosition}>Contact Us</NavLinks>
      <Cursor position={position} />
    </ul>
  );
};

const NavLinks = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative flex items-center z-10 cursor-pointer text-black hover:text-white px-4 py-2 font-bold transition-all duration-300"
    >
      <a href={`/${children}`}>{children}</a>
    </li>
  );
};

const Cursor = ({ position }: { position: CursorPosition }) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-0 h-full bg-primary rounded-full"
    />
  );
};
