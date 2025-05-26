import React from 'react';

const Navbar = () => {
  return (
    <nav
      style={{
        padding: '1rem 2rem',
        position: 'fixed',
        top: 0,
        width: '100%',
        boxSizing: 'border-box',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // semi-transparent background
        backdropFilter: 'blur(10px)',         // blur effect
        WebkitBackdropFilter: 'blur(10px)',   // for Safari
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          maxWidth: '800px',
          margin: '0 auto',
          gap: '6rem',
        }}
      >
        <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
        <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
        <a href="#skills" style={{ textDecoration: 'none', color: 'inherit' }}>Skills</a>
        <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
        <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
