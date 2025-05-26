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
    <div id='projects' className="relative z-10 p-8 min-h-screen text-white">
      <AnimatedOnScroll animation='fade-left'>
        <h1 className="text-5xl p-3 font-bold mt-10 mb-10 text-center" style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>My Projects</h1>
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

      <AnimatedOnScroll animation='fade-left'>
        <h1 className="text-5xl p-3 font-bold mt-10 mb-10 text-center" style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>My Experience</h1>
      </AnimatedOnScroll>

      <AnimatedOnScroll animation='fade-right'>
  <div className="w-full max-w-6xl mx-auto border-1 border-gray-400 rounded-2xl p-5">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      {/* Left Text */}
      <div className="max-w-2xl text-left space-y-4 p-6">
        <h2 className="text-3xl font-bold text-white text-left">UBS National Hackathon 2025</h2>
        <p className="w-1/2text-sm md:text-lg text-gray-300">
          I have participated in a national-level hackathon organized by UBS Pune from April 3–4, 2025. Our team built <strong>Rise Up</strong>, a web-based platform that connects NGOs with job-seeking students from rural areas. I was responsible for backend development—managing user authentication, and integrating the database to ensure secure and efficient data flow between users and organizations.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-full mt-6 md:mt-0 flex justify-center">
        <img
          src="/images/Experience.jpg"
          alt="Experience"
          className=" object-cover shadow-md"
          style={{width: '250px', height:'250px'}}
        />
      </div>
    </div>
  </div>
</AnimatedOnScroll>

    </div>
  );
}
