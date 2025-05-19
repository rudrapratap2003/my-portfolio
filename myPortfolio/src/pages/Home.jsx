import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ReactTyped } from "react-typed";
import AnimatedOnScroll from '../components/AnimatedOnScroll.jsx';
const HomePage = () => {
  return (
    <div
      id='home'
      className="relative h-full min-h-screen overflow-hidden" style={{color: 'white'}}
    >
      <Navbar />
      {/* Text Content on Left */}
      
          <div
        style={{
          fontFamily: "'Roboto', sans-serif",
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          paddingLeft: '2rem',
          width: '50%',
          zIndex: 1,
        }}
      >
        <AnimatedOnScroll animation="fade-up">
        <div style={{ maxWidth: '600px', lineHeight: '1.2' }}>
          <div style={{ fontWeight: 500, fontSize: '40px', letterSpacing:'0.2rem'}}>Hey!! It's Me</div>
          <div
            style={{
              width:'110%',
              marginTop: '0.5rem',
              fontSize: '70px',
              fontWeight: 1000,
              background: 'linear-gradient(to right, #00c6ff, #0072ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Rudra Pratap Padhi
          </div>
        </div>

        <div
          style={{
            fontSize: '40px',
            marginTop: '3.5rem',
            fontWeight: '500',
          }}
        >
          I am a{" "}
          <ReactTyped strings={["Fullstack Web Developer"]} typeSpeed={70} style={{ background: 'linear-gradient(to right, #005bea, #00c6fb, #00f2fe, #e100ff)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}/>
        </div>

        <div>
  <button
    style={{
      marginTop:'1.5rem',
      fontSize: '24px',
      padding: '12px 20px',
      borderRadius: '8px',
      backgroundColor: '#0072ff',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
      boxShadow: 'none',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = '0 0 20px 8px rgba(0, 114, 255, 0.3)';
      e.currentTarget.style.backgroundColor = '#005bb5';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.backgroundColor = '#0072ff';
    }}
  >
    Resume
  </button>
</div>


        </AnimatedOnScroll>
      </div>
      
      

      {/* Lottie Animation on Right Side */}
      
            <div
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          width: '800px',
          height: 'auto',
          filter: 'drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.5))',
        }}
      >
        <AnimatedOnScroll animation='fade-left'>
        <DotLottieReact
          src="https://lottie.host/53faa675-d293-43bb-a39d-3773dc3781da/sDbT4Nf3b6.lottie"
          loop
          autoplay
        />
        </AnimatedOnScroll>
      </div>

      
          </div>
  );
};

export default HomePage;
