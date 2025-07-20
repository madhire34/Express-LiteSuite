// src/text-animator-addon/TextAnimatorAddon.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const TextAnimatorAddon = () => {
  const [text, setText] = useState("Express Your Style!");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col items-center justify-center p-6 text-center font-sans text-gray-800">
      <h1 className="text-4xl font-extrabold text-purple-600 mb-6">
        ✨ Text Animator
      </h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-4 py-2 mb-6 border border-purple-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
        placeholder="Enter your text"
      />

      <motion.div
        className="text-3xl font-bold text-purple-800 tracking-wide"
        animate={{ opacity: [0, 1, 0], y: [-20, 0, 20] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {text}
      </motion.div>

      <p className="mt-6 text-sm text-gray-500">
        Animates your text in a loop. Great for reels, intros & headlines!
      </p>
    </div>
  );
};

export default TextAnimatorAddon;
