"use client";

import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";

export default function FramerHotDealsButton() {

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.85 }}
        className="flex gap-2 bg-[#014162F2] text-white px-6 py-2 rounded-xl"
      >
        <ShoppingCart />
        <span>Add</span>
      </motion.button>
    </>
  );
}
