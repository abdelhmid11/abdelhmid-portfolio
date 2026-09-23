import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -55% 0px' });
    links.forEach(l => { const el = document.getElementById(l.toLowerCase()); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  const go = (id) => { setOpen(false); document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); };
  return <header className="nav-wrap"><nav className="nav" aria-label="Primary navigation"><button className="brand" onClick={() => go('home')}><span className="brand-mark">AI</span><span>{profile.name}</span></button><div className="desktop-links">{links.map(l => <button className={active === l.toLowerCase() ? 'active' : ''} key={l} onClick={() => go(l)}>{l}</button>)}</div><button className="nav-cta" onClick={() => go('contact')}>Let's talk <ArrowUpRight size={16}/></button><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></nav>{open && <div className="mobile-menu">{links.map(l => <button key={l} onClick={() => go(l)}>{l}<ArrowUpRight size={17}/></button>)}</div>}</header>;
}
