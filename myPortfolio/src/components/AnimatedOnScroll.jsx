// AnimatedOnScroll.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedOnScroll = ({ animation = 'fade-up', duration = 1000, delay = 0, once = true, children }) => {
  useEffect(() => {
    AOS.init({
      duration,
      once,
      delay,
    });
  }, [duration, once, delay]);

  return (
    <div data-aos={animation} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
