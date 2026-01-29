"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart } from "lucide-react";

export default function FramerHotDealsButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={() => setOpen(true)}
        className="flex gap-2 bg-[#014162F2] text-white px-6 py-2 rounded-xl"
      >
        <ShoppingCart />
        <span>Add</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-1 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 100,
                damping: 15,
              }}
              className="h-screen w-80 bg-white shadow-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="mb-4 text-sm text-gray-500"
              >
                Close
              </button>

              <h2 className="text-lg font-bold">Cart</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
