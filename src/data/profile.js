import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Certificates', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px' }
    );

    links.forEach((label) => {
      const el = document.getElementById(label.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goToSection = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="nav-wrap">
      <nav className={`nav ${open ? 'menu-open' : ''}`} aria-label="Primary navigation">
        <button type="button" className="brand" onClick={() => goToSection('home')} aria-label="Go to home section">
          <span className="brand-mark">AI</span>
          <span>{profile.name}</span>
        </button>

        <ul className="nav-links">
          {links.map((label) => {
            const id = label.toLowerCase();
            return (
              <li key={label}>
                <button type="button" className={active === id ? 'nav-link active' : 'nav-link'} onClick={() => goToSection(id)}>
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        <button type="button" className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
