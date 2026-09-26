import { ArrowUpRight, Download, Mail, MessageSquareText, Quote, X } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/profile';
import { SectionTitle, ProjectCard, ProjectModal, CertificateCard, CertificateModal } from './UI';
import { skillGroups } from '../data/skills';
import { projects } from '../data/projects';
import { experience, education } from '../data/experience';
import { certificates } from '../data/certificates';

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setPointer({ x, y });
  };

  const letters = profile.name.split('');

  return (
    <section className="hero" id="home" onMouseMove={handlePointerMove} onMouseLeave={() => setPointer({ x: 0.5, y: 0.5 })}>
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow reveal">{profile.eyebrow}</span>
          <h1 className="hero-name reveal" aria-label={profile.name}>
            {letters.map((char, index) => {
              const spread = Math.abs(pointer.x - (index + 1) / letters.length);
              const lift = (0.5 - spread) * 18;
              const transform = `translateY(${Math.max(-8, Math.min(8, lift))}px)`;

              return (
                <span
                  key={`${char}-${index}`}
                  className="hero-letter"
                  style={{
                    transform,
                    opacity: char === ' ' ? 0.95 : 1,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </h1>

          <p className="subtitle reveal">{profile.heroSubtitle}</p>

          <div className="hero-actions reveal">
            <a className="cta-button" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
              <MessageSquareText size={18} />
              Let&apos;s work together
            </a>
            <a className="secondary-link" href="#projects">
              View projects <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-portrait reveal">
          <div className="portrait-frame">
            <img src={profile.profileImage} alt={profile.name} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section about" id="about">
      <SectionTitle
        eyebrow="01 / About"
        title="Thoughtful software engineering with a human-centered lens."
        text="I design and build modern digital products that balance technical rigor with elegant interfaces."
      />

      <div className="about-grid">
        <div className="about-text reveal">
          <p>{profile.about}</p>
          <p>{profile.aboutSecondary}</p>

          <div className="info-list">
            <span>Based in Egypt</span>
            <span>Interested in AI, computer vision, UX, automation, and product engineering</span>
            <span>Working across web, backend, and intelligent interfaces</span>
          </div>
        </div>

        <div className="about-image reveal">
          <img src="/images/profile.svg" alt="Abdelhamid Ibrahim portrait placeholder" />
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <SectionTitle
        eyebrow="02 / Skills"
        title="A focused toolkit built for modern digital products."
        text="From interface design to backend systems, I build with clarity, precision, and practical engineering judgment."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group reveal" key={group.label}>
            <div className="skill-group-header">
              <span className="skill-icon">{group.icon}</span>
              <span className="skill-group-title">{group.label}</span>
            </div>
            <div className="skill-items">
              {group.items.map((item) => (
                <span key={item} className="skill-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="section projects" id="projects">
        <SectionTitle
          eyebrow="03 / Projects"
          title="Selected work shaped by curiosity, systems thinking, and product craft."
          text="A mix of AI-focused experiences, automation ideas, frontend work, and experimentation with modern tools."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelected} />
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline-item reveal" key={`${item.period}-${item.role}-${index}`}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="period">{item.period}</span>
            <span className="role">{item.role}</span>
            <span className="place">{item.place}</span>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="split-title">
        <SectionTitle
          eyebrow="04 / Journey"
          title="A path shaped by engineering practice, learning, and digital exploration."
          text="Work, study, and project-building across Egypt and the UAE, with a strong grounding in technology and professional growth."
        />

        <div className="ambient-note reveal">
          <Quote size={24} />
          <p>
            Building reliable systems and thoughtful experiences that turn ideas into modern digital products.
          </p>
        </div>
      </div>

      <div className="experience-content">
        <Timeline items={experience} />
        <div className="education-wrap">
          <h3>Education</h3>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}

export function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="section certificates" id="certificates">
        <SectionTitle
          eyebrow="05 / Certifications"
          title="Professional learning and technology development."
          text="A curated collection of certifications and learning milestones, ready to be replaced with official materials when available."
        />

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <CertificateCard key={`${certificate.title}-${index}`} certificate={certificate} onOpen={setSelected} />
          ))}
        </div>
      </section>

      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-content reveal">
        <span className="eyebrow">06 / Contact</span>
        <h2>Let&apos;s work together.</h2>
        <p>
          I’m interested in meaningful software engineering, thoughtful digital products, AI-driven experiences,
          product design collaboration, and engineering work that combines elegance with practical impact.
        </p>

        <a className="cta-button" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
          <MessageSquareText size={18} />
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div>
        <div>
          <span className="brand-mark">AI</span>
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </div>
        </div>

        <div className="footer-right">
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
