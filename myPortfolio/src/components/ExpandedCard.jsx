// components/ExpandedCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function ExpandedCard({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-xl p-6 w-[90%] max-w-2xl shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        {/* Project Title and Description */}
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="mt-4 text-gray-700">{project.description}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
