import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ReactTyped } from "react-typed";
import AnimatedOnScroll from '../components/AnimatedOnScroll.jsx';

const HomePage = () => {
  return (
    <div id="home" className="relative min-h-screen overflow-hidden text-white font-['Roboto']">
      <Navbar />

      <div className="w-full relative top-25 text-center text-2xl sm:text-4xl lg:text-5xl font-semibold z-10" style={{ fontFamily: "'Fira Code', monospace" }}>
        {'< '}
        <ReactTyped
          strings={["Welcome To My Portfolio"]}
          typeSpeed={70}
        />
        {'/>'}
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-y-10 gap-x-10 px-4 pt-36 lg:pt-20 lg:top-40 max-w-7xl mx-auto lg:translate-x-15">
        <div className="relative w-full  z-10 text-center lg:text-left lg:pl-4 xl:pl-8">
          <AnimatedOnScroll animation="fade-up">
            <div className="mx-auto lg:mx-0 overflow-x-visible">
              <div className="font-medium text-[clamp(1.2rem,5vw,2.4rem)]">
                Hey!! It's Me
              </div>

              <div className="mt-1 font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent overflow-visible whitespace-nowrap tracking-tight sm:tracking-normal leading-tight text-[clamp(1.8rem,7vw,4rem)]">
                Rudra Pratap Padhi
              </div>

              <div className="mt-3 font-semibold whitespace-nowrap text-[clamp(1.2rem,5vw,2.4rem)]">
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

        <div className="w-full flex justify-center items-center">
  <AnimatedOnScroll animation="fade-left">
    <div
      className="w-[350px] sm:w-[450px] md:w-[450px] lg:w-[530px] xl:w-[650px] h-auto"
    >
      <DotLottieReact
        src="https://lottie.host/53faa675-d293-43bb-a39d-3773dc3781da/sDbT4Nf3b6.lottie"
        loop
        autoplay
        style={{
          width: '100%',
          height: 'auto',
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
