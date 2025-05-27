import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRefs = useRef({});
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  // Update highlight box on active link change
  useEffect(() => {
    const el = navRefs.current[active];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setHighlightStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [active]);

  // Detect section in viewport
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);

      return () => {
        if (section) observer.unobserve(section);
      };
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-[1000] bg-black/20 backdrop-blur-md px-8 py-4">
        <div className="relative flex justify-between items-center max-w-[800px] mx-auto text-white text-xl">

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-24 relative">
            <motion.div
              className="absolute bottom-0 h-[36px] rounded-md bg-blue-500/30"
              animate={{
                left: highlightStyle.left,
                width: highlightStyle.width,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                ref={(el) => (navRefs.current[href] = el)}
                className={`relative z-10 px-2 py-1 ${
                  active === href ? 'font-semibold' : 'opacity-80'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Hamburger / Cross Button */}
          <button
            className="lg:hidden z-[1001] relative w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Cross Icon
              <div className="relative w-6 h-6">
                <span className="absolute w-full h-0.5 bg-white rotate-45 top-1/2 left-0 transform -translate-y-1/2" />
                <span className="absolute w-full h-0.5 bg-white -rotate-45 top-1/2 left-0 transform -translate-y-1/2" />
              </div>
            ) : (
              // Hamburger Icon
              <div className="flex flex-col gap-[5px]">
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-2xl flex flex-col justify-center items-center space-y-8 text-white text-2xl font-medium">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setMenuOpen(false);
                setActive(href);
              }}
              className="hover:text-blue-400 transition"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
