import { useEffect } from 'react';
import Navbar from './components/Navbar';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Certificates,
  Contact,
  Footer,
} from './sections/Sections';
import './styles/global.css';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealNodes = document.querySelectorAll('.reveal');
    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}
