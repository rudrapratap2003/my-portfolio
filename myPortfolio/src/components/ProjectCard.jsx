// components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:scale-105 transition-transform flex flex-col items-center text-center"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold text-white">{project.title}</h2>
      <p className="text-sm text-gray-200 mt-2">{project.description}</p>
    </div>
  );
}
