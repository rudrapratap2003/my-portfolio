import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home", icon: <FaHome /> },
  { label: "About", href: "#about", icon: <FaUser /> },
  { label: "Skills", href: "#skills", icon: <FaCode /> },
  { label: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
  { label: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRefs = useRef({});
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = navRefs.current[active];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setHighlightStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [active]);

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
      <nav className="fixed top-0 w-full z-[1000] bg-black/80 backdrop-blur-md px-6 py-4">
        <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center text-white text-lg relative">
          {/* Hamburger / Cross Button */}
          <button
            className="lg:hidden z-[1001] relative w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <div className="relative w-6 h-6">
                <span className="absolute w-full h-0.5 bg-white rotate-45 top-1/2 left-0 transform -translate-y-1/2" />
                <span className="absolute w-full h-0.5 bg-white -rotate-45 top-1/2 left-0 transform -translate-y-1/2" />
              </div>
            ) : (
              <div className="flex flex-col gap-[5px]">
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
              </div>
            )}
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex left-1/2 transform -translate-x-1/2 gap-16 relative">
            <motion.div
              className="absolute bottom-0 h-[44px] rounded-md bg-blue-500/50"
              animate={{
                left: highlightStyle.left,
                width: highlightStyle.width,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            {navItems.map(({ label, href, icon }) => (
              <a
                key={href}
                href={href}
                ref={(el) => (navRefs.current[href] = el)}
                className={`relative z-10 px-4 py-2 flex items-center gap-2 ${
                  active === href ? "font-semibold" : "opacity-80"
                } transition-all duration-300`}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-2xl flex flex-col justify-center items-center space-y-8 text-white text-2xl font-medium">
          {navItems.map(({ label, href, icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setMenuOpen(false);
                setActive(href);
              }}
              className="flex items-center gap-3"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
