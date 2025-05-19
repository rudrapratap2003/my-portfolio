import React from 'react';
import AnimatedOnScroll from '../components/AnimatedOnScroll';

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col px-8 py-12 text-white"
    >
      {/* Heading centered and pushed down */}
      <AnimatedOnScroll animation='fade-down'>
        <h1 className="text-5xl font-bold mt-12 text-center" style={{background: 'linear-gradient(to right, #00c6ff, #0072ff)',WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',}}>About Me</h1>
      </AnimatedOnScroll>
      

      {/* Content row with spacing */}
      <div className="flex items-start justify-between max-w-7xl mx-auto mt-12 w-full gap-12">
        {/* Image on the left */}
        <AnimatedOnScroll animation='fade-up'>
            <div
          className="flex-shrink-0 self-center"
          style={{ transform: 'translateY(50px)' }}
        >
          <div
            style={{
              padding: '8px',
              borderRadius: '50%',
              background:
                'conic-gradient(from 45deg, blue 0deg 180deg, white 180deg 360deg)',
              display: 'inline-block',
              lineHeight: 0,
              boxShadow: '0 0 60px 3px #0339fc',
            }}
          >
            <img
              src="/images/profile.jpg"
              alt="Your Name"
              className="rounded-full w-100 h-100 object-cover shadow-lg"
              style={{
                display: 'block',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
        </AnimatedOnScroll>
        

        {/* Text on the right */}
        <AnimatedOnScroll animation='fade-left'>
            <div className="max-w-3xl">
          <p className="text-xl text-gray-300 mb-4 tracking-wider" style={{ wordSpacing: '0.2em' }}>
            I am a passionate full-stack web developer with experience in both
            frontend and backend technologies, dedicated to creating efficient,
            user-friendly, and scalable web applications. Working on the backend
            allows me to solve complex problems, optimize performance, and
            ensure the reliability and security of applications. Ultimately, my
            goal is to deliver well-structured, maintainable, and
            high-performing code that supports the frontend and elevates the
            entire user experience.
          </p>
        </div>
        </AnimatedOnScroll>
        
      </div>
    </div>
  );
};

export default About;
