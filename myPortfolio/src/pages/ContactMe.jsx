import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si"; 
import AnimatedOnScroll from "../components/AnimatedOnScroll";


export default function ContactMe() {
  const [showForm, setShowForm] = useState(false);

  // Define your dock items (replace icon components with your actual icons)
  const dockItems = [
  { title: "Email", href: "mailto:john.doe@example.com", icon: <FaEnvelope className="text-xl text-white" /> },
  { title: "Instagram", href: "https://instagram.com/johndoe", icon: <FaInstagram className="text-xl text-white" /> },
  { title: "LinkedIn", href: "https://linkedin.com/in/johndoe", icon: <FaLinkedin className="text-xl text-white" /> },
  { title: "X", href: "https://x.com/johndoe", icon: <SiX className="text-xl text-white" /> },
  { title: "WhatsApp", href: "https://wa.me/15551234567", icon: <FaWhatsapp className="text-xl text-white" /> },
];


  return (
    <div id="contact" className="min-h-screen flex flex-col px-4">
        <AnimatedOnScroll animation="fade-down">
            <h1
        className="text-3xl md:text-5xl font-bold text-white text-center mt-18 mb-4"
        style={{
          background: "linear-gradient(to right, #00c6ff, #0072ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Contact Me
      </h1>
        </AnimatedOnScroll>
      

      
        <div className="flex-grow flex items-center justify-center ">
        <motion.div
          layout
          className="w-full max-w-md rounded-2xl shadow-lg p-6"
          style={{
            background: "linear-gradient(135deg, #141e30, #243b55)",
            backdropFilter: "blur(30px)",
            borderRadius: "1rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full max-w-md mx-auto">
            <div className="flex items-center flex-row gap-8 w-full justify-center">
              <div className="flex flex-col items-center">
                <img
                  src="/images/avatar.jpg"
                  alt="Avatar"
                  className="w-14 sm:w-20 h-14 sm:h-20 rounded-full object-cover"
                />
                <h2 className="text-sm sm:text-xl text-white font-semibold mt-2">
                  Rudra Pratap Padhi
                </h2>
              </div>

              {!showForm && (
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-500 text-white text-sm sm:text-lg font-semibold px-3 sm:px-5 py-2 rounded-md"
                >
                  CONTACT ME
                </button>
              )}
            </div>
          </div>
          <AnimatePresence>
            {showForm && (
              <motion.form
                key="contact-form"
                className="mt-6 w-full max-w-md mx-auto flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full text-white border-0 border-b-2 border-gray-500 bg-transparent px-2 py-2 focus:border-blue-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full text-white border-0 border-b-2 border-gray-500 bg-transparent px-2 py-2 focus:border-blue-400 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                    rows={4}
                    className="w-full text-white border-0 border-b-2 border-gray-500 bg-transparent px-2 py-2 focus:border-blue-400 focus:outline-none resize-none overflow-hidden"
                />

                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatedOnScroll animation="fade-right"> 
    <div className="max-w-md mx-auto mt-8 text-center text-white mb-10">
        <p className="text-lg font-semibold mb-2">You can also contact me through</p>
        <div className="flex justify-center gap-6 mt-4">
          {dockItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              title={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      </AnimatedOnScroll>
    </div>
  );
}
