import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaChevronDown } from "react-icons/fa";

const ScrollDownButton = () => {
  return (
    <AnchorLink href="#about">
      <motion.div
        className="absolute bottom-10 transform w-auto h-16 bg-transparent rounded-full flex items-center justify-center cursor-pointer z-40"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <FaChevronDown className="text-white text-md" />
      </motion.div>
    </AnchorLink>
  );
};

export default ScrollDownButton;
