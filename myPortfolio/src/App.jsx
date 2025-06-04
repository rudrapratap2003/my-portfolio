import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ProjectSection from './pages/Projects'
import Skills from './pages/Skills'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <div
          className="fixed top-0 left-0 w-full h-full -z-10"
          style={{
            background: 'linear-gradient(135deg, #0b0c0f, #1a1c20)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
          }}
        />
        <Home />
        <About />
        <Skills />
        <ProjectSection />
        <ContactMe />
      </div>
    </>
  );
}


export default App
