import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
    //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // backdropFilter: 'blur(10px)',
    // WebkitBackdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      position: 'fixed',
      top: 0,
      width: '100%',
      boxSizing: 'border-box',
      zIndex: 1000,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',   // Align links to the right
        maxWidth: '800px',
        margin: '0 auto',
        gap: '6rem',                  // Optional: add space between links
      }}>
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
