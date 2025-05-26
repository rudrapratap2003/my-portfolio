// components/ProjectSection.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ExpandedCard from '../components/ExpandedCard';
import { AnimatePresence } from 'framer-motion';
import AnimatedOnScroll from '../components/AnimatedOnScroll';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal site to showcase my work and resume.',
  },
  {
    id: 2,
    title: 'Chat App',
    description: 'A real-time chat application built with Socket.IO.',
  },
  {
    id: 3,
    title: 'E-commerce Store',
    description: 'A full-featured online shopping app with cart and checkout.',
  },
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id='projects' className="relative z-10 p-10 min-h-screen text-white">
      <AnimatedOnScroll animation='fade-left'>
        <h1 className="text-4xl font-bold mt-10 mb-10 text-center" style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>My Projects</h1>
      </AnimatedOnScroll>
      <AnimatedOnScroll animation='fade-right'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </AnimatedOnScroll>
      

      <AnimatePresence>
        {selectedProject && (
          <ExpandedCard
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
