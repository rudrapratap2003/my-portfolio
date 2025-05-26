import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ReactTyped } from "react-typed";
import AnimatedOnScroll from '../components/AnimatedOnScroll.jsx';

const HomePage = () => {
  return (
    <div id="home" className="relative min-h-[90vh] overflow-hidden text-white font-['Roboto']">
      <Navbar />

      <div className="w-full relative top-25 text-center text-2xl md:text-3xl lg:text-5xl font-semibold z-10">
        <ReactTyped
          strings={["&lt;&gt; Welcome To My Portfolio &lt;/&gt;"]}
          typeSpeed={70}
        />
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-y-20 px-4 pt-40 lg:pt-10 lg:top-50">
        <div className="relative w-full  z-10 text-center lg:text-left lg:pl-4 xl:pl-8">
          <AnimatedOnScroll animation="fade-up">
            <div className="mx-auto lg:mx-0 overflow-x-visible">
              <div className="font-medium text-xl xs:text-2xl sm:text-3xl md:text-4xl whitespace-nowrap tracking-tight sm:tracking-normal leading-tight text-[clamp(2.1rem,7vw,4rem)]">
                Hey!! It's Me
              </div>

              <div className="mt-1 font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent overflow-visible tracking-tight sm:tracking-normal leading-tight lg:text-6xl text-[clamp(2.2rem,7vw,4rem)]">
                Rudra Pratap Padhi
              </div>

              <div
                className="mt-3 font-semibold whitespace-nowrap"
                style={{
                  fontSize: 'clamp(1.2rem, 5vw, 2.2rem)',
                  lineHeight: '1.1',
                }}
              >
                I am a <div className="bg-gradient-to-r from-[#005bea] via-[#00c6fb] to-[#e100ff] bg-clip-text text-transparent inline-block">Fullstack Web Developer</div>
              </div>

              <div>
                <button className="mt-5 text-white text-base xs:text-lg sm:text-xl py-2 px-4 rounded-lg font-semibold bg-[#0072ff] transition-all duration-300 hover:shadow-[0_0_20px_8px_rgba(0,114,255,0.3)] hover:bg-[#005bb5] whitespace-nowrap">
                  Resume
                </button>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>

        <div className="w-full flex justify-center lg:justify-end items-center">
          <AnimatedOnScroll animation="fade-left">
            <div
              className="w-full"
              style={{
                maxWidth: 'min(100%, 550px)',
                transform: 'scale(1.2)',
              }}
            >
              <DotLottieReact
                src="https://lottie.host/53faa675-d293-43bb-a39d-3773dc3781da/sDbT4Nf3b6.lottie"
                loop
                autoplay
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: 'clamp(500px, 55vw, 750px)',
                }}
              />
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
