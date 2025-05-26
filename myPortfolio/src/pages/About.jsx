import React from 'react';
import AnimatedOnScroll from '../components/AnimatedOnScroll';

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col px-8 py-12 text-white">
      <AnimatedOnScroll animation="fade-down">
        <h1
          className="text-5xl font-bold mt-12 text-center"
          style={{
            background: 'linear-gradient(to right, #00c6ff, #0072ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </h1>
      </AnimatedOnScroll>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto mt-4 sm:mt-12 w-full gap-12">
        <AnimatedOnScroll animation="fade-right">
          <div
            className="order-1 lg:order-none flex-shrink-0 self-center mb-8 lg:mb-0"
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
                boxShadow: '0 0 20px 3px #4c60e6',
              }}
            >
              <img
                src="/images/profile.jpg"
                alt="Your Name"
                className="rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover shadow-lg"
                style={{
                  display: 'block',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll animation="fade-left">
          <div className="order-2 lg:order-none max-w-3xl">
            <p
              className="text-xl text-gray-300 mb-4 tracking-wider"
            >
              I am a passionate full-stack web developer with experience in both
              frontend and backend technologies, dedicated to creating efficient,
              user-friendly, and scalable web applications. Working on the backend
              allows me to solve complex problems, optimize performance, and
              ensure the reliability and security of applications. Ultimately, my
              goal is to deliver well-structured, maintainable, and
              high-performing code that supports the frontend and elevates the
              entire user experience.
            </p>

            <div className="order-3 lg:order-none border border-gray-500 rounded-lg p-6 shadow-md mt-10 max-w-xl">
              <h2 className="text-3xl font-semibold mb-4 text-white flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.418C19 19.105 15.418 22 12 22s-7-2.895-7-6.004c0-1.529.308-2.982.84-4.418L12 14z"
                  />
                </svg>
                Education
              </h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">
                    Bachelor of Technology in Computer Science and Engineering
                  </h3>
                  <p className="text-gray-100 text-xl mb-2">
                    Veer Surendra Sai University of Technology, Burla
                  </p>
                  <p className="text-gray-400 text-lg">2022-2026</p>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
};

export default About;
