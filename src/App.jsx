import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Hero, About, Skills, Projects, Experience, Contact, Footer } from './sections/Sections';
import './styles/global.css';
export default function App() { useEffect(() => { const ob = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(e => ob.observe(e)); return () => ob.disconnect(); }, []); return <><Navbar/><main><Hero/><About/><Skills/><Projects/><Experience/><Contact/></main><Footer/></>; }
