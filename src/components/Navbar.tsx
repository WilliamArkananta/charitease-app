import React, { useRef, useState } from "react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";

type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

const navItems = ["Donate", "About Us", "How CharitEase Works?", "Contact Us"];

function Navbar() {
  return (
    <nav className="flex justify-between items-center my-4 mx-20">
      <Logo />
      <NavList />
      <CTAButton>Create a fund</CTAButton>
    </nav>
  );
}

const Logo = () => (
  <div className="logo text-2xl font-bold">
    <a href="/" className="flex items-center text-primary gap-2">
      <img src="/logo.svg" alt="CharitEase" />
      <span>CharitEase</span>
    </a>
  </div>
);

const NavList = () => {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleMouseLeave = () =>
    setPosition((prev) => ({ ...prev, opacity: 0 }));

  return (
    <ul
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center text-h5 bg-base-white"
    >
      {navItems.map((item) => (
        <NavLink key={item} setPosition={setPosition}>
          {item}
        </NavLink>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const NavLink = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    const { offsetLeft } = ref.current;
    setPosition({ width, opacity: 1, left: offsetLeft });
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="relative flex items-center z-10 cursor-pointer text-black hover:text-white px-6 py-2 font-normal transition-all duration-300"
    >
      <a href={`/${children}`}>{children}</a>
    </li>
  );
};

const Cursor = ({ position }: { position: CursorPosition }) => (
  <motion.div
    animate={position}
    className="absolute z-0 h-full bg-primary rounded-full"
  />
);

export default Navbar;
