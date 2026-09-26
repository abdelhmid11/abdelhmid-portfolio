@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --deep-brown: #241712;
  --dark-brown: #120c09;
  --warm-cream: #f5f0e8;
  --soft-white: #fcfaf6;
  --warm-gray: #b8aea3;
  --muted-gold: #b89b68;
  --line: rgba(36, 23, 18, 0.1);
  --shadow: 0 20px 45px rgba(18, 12, 9, 0.12);
  --content-width: 1200px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--soft-white);
  color: var(--dark-brown);
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
}

button,
a {
  font: inherit;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  color: var(--deep-brown);
  letter-spacing: -0.04em;
  line-height: 0.95;
}

p,
span,
li,
button,
a {
  font-family: 'Inter', sans-serif;
}

p {
  margin: 0;
  color: rgba(18, 12, 9, 0.75);
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(252, 250, 246, 0.8);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.nav {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 1.15rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  border: none;
  padding: 0;
}

.brand-mark {
  width: 2.1rem;
  height: 2.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  background: var(--deep-brown);
  color: var(--warm-cream);
  letter-spacing: 0.12em;
}

.brand span:last-child {
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--deep-brown);
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.1rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  border: none;
  background: transparent;
  padding: 0.2rem 0;
  color: rgba(18, 12, 9, 0.7);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  position: relative;
  transition: color 0.25s ease;
}

.nav-link.active,
.nav-link:hover {
  color: var(--deep-brown);
}

.nav-link.active::after,
.nav-link:hover::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.35rem;
  height: 1px;
  background: var(--muted-gold);
}

.menu-btn {
  display: none;
  background: transparent;
  border: none;
  color: var(--deep-brown);
}

.hero {
  position: relative;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 3rem;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 18%, rgba(184, 155, 104, 0.12), transparent 28%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: var(--content-width);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 4rem;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.eyebrow {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted-gold);
  font-weight: 600;
}

.hero-name {
  display: flex;
  flex-wrap: wrap;
  max-width: 650px;
  font-size: clamp(3.4rem, 7vw, 7rem);
  line-height: 0.9;
  font-weight: 600;
  color: var(--deep-brown);
  background: transparent;
  min-height: 6.4rem;
}

.hero-letter {
  display: inline-block;
  transition: transform 0.18s ease, opacity 0.18s ease;
  will-change: transform;
}

.subtitle {
  max-width: 32rem;
  font-size: 1.08rem;
  color: rgba(18, 12, 9, 0.72);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 0.5rem;
}

.cta-button,
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 0.95rem 1.5rem;
  border: 1px solid var(--deep-brown);
  background: var(--deep-brown);
  color: var(--warm-cream);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 600;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cta-button:hover,
.ui-button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}

.secondary-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--deep-brown);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 600;
}

.hero-portrait {
  display: flex;
  justify-content: center;
}

.portrait-frame {
  position: relative;
  width: min(100%, 480px);
  aspect-ratio: 3 / 4;
  background: linear-gradient(180deg, rgba(184, 155, 104, 0.12), rgba(36, 23, 18, 0.04));
  border: 1px solid rgba(36, 23, 18, 0.08);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.portrait-frame::before {
  content: '';
  position: absolute;
  inset: 1.1rem;
  border: 1px solid rgba(184, 155, 104, 0.6);
  z-index: 2;
}

.portrait-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.08) brightness(0.97);
  transform: scale(1.04);
}

.section {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 7rem 1.5rem;
}

.section-title {
  max-width: 46rem;
  margin-bottom: 3.5rem;
}

.section-title h2 {
  font-size: clamp(2.6rem, 4vw, 4rem);
  margin-top: 0.8rem;
  line-height: 0.98;
}

.section-title p {
  margin-top: 1.25rem;
  max-width: 40rem;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(18, 12, 9, 0.72);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr;
  gap: 3rem;
  align-items: center;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-text p {
  font-size: 1.05rem;
  line-height: 1.9;
  color: rgba(18, 12, 9, 0.72);
}

.info-list {
  display: grid;
  gap: 0.9rem;
  margin-top: 1rem;
}

.info-list span {
  display: block;
  padding-left: 1.1rem;
  position: relative;
  color: var(--deep-brown);
  font-size: 0.83rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.info-list span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 0.45rem;
  height: 0.45rem;
  background: var(--muted-gold);
  border-radius: 50%;
}

.about-image {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(184, 155, 104, 0.08), rgba(36, 23, 18, 0.02));
  min-height: 470px;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.split-title {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: end;
  gap: 2rem;
}

.ambient-note {
  display: flex;
  align-items: start;
  gap: 0.8rem;
  padding: 1.25rem 1.4rem;
  background: rgba(184, 155, 104, 0.06);
  border: 1px solid rgba(184, 155, 104, 0.14);
  min-height: 130px;
}

.ambient-note svg {
  color: var(--muted-gold);
  margin-top: 0.15rem;
}

.ambient-note p {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(18, 12, 9, 0.72);
}

.experience-content {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  margin-top: 3.5rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 1.1rem 1fr;
  gap: 1.2rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--line);
}

.timeline-dot {
  width: 0.7rem;
  height: 0.7rem;
  background: var(--muted-gold);
  border-radius: 50%;
  margin-top: 0.35rem;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.period {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-gold);
  font-weight: 700;
}

.role {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--deep-brown);
}

.place {
  font-size: 0.95rem;
  color: rgba(18, 12, 9, 0.68);
}

.timeline-content p {
  margin-top: 0.5rem;
  font-size: 0.96rem;
  line-height: 1.75;
  color: rgba(18, 12, 9, 0.7);
}

.education-wrap {
  padding: 1.4rem 1.8rem;
  border: 1px solid var(--line);
  background: rgba(184, 155, 104, 0.03);
}

.education-wrap h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.5rem;
}

.skill-group {
  padding: 1.7rem 1.2rem;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.4);
  min-height: 220px;
}

.skill-group-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.skill-icon {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(184, 155, 104, 0.12);
  color: var(--muted-gold);
  font-size: 1.15rem;
}

.skill-group-title {
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--deep-brown);
  font-weight: 700;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(36, 23, 18, 0.08);
  background: rgba(184, 155, 104, 0.04);
  color: rgba(18, 12, 9, 0.8);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
}

.project-card {
  cursor: pointer;
  outline: none;
}

.project-card:focus-visible {
  box-shadow: 0 0 0 2px rgba(184, 155, 104, 0.4);
}

.project-image {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  background: rgba(184, 155, 104, 0.04);
  aspect-ratio: 16 / 11;
  margin-bottom: 1.2rem;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.project-card:hover .project-image img,
.project-card:focus-visible .project-image img {
  transform: scale(1.04);
}

.project-label {
  display: inline-block;
  color: var(--muted-gold);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  margin-bottom: 0.7rem;
}

.project-title {
  font-size: clamp(1.8rem, 2vw, 2.4rem);
  margin-bottom: 0.65rem;
}

.project-description {
  color: rgba(18, 12, 9, 0.72);
  line-height: 1.75;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.6rem;
}

.certificate-card {
  cursor: pointer;
  border: 1px solid var(--line);
  background: rgba(184, 155, 104, 0.03);
  aspect-ratio: 1.35;
  overflow: hidden;
  outline: none;
}

.certificate-card:focus-visible {
  box-shadow: 0 0 0 2px rgba(184, 155, 104, 0.4);
}

.certificate-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.certificate-card:hover img
{
  transform: scale(1.03);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(18, 12, 9, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 1300;
}

.modal-content {
  position: relative;
  width: min(900px, 92vw);
  background: var(--soft-white);
  border: 1px solid rgba(184, 155, 104, 0.3);
  box-shadow: var(--shadow);
  max-height: 90vh;
  overflow: auto;
}

.modal-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-bottom: 1px solid var(--line);
}

.modal-body {
  padding: 2rem 2rem 2.5rem;
}

.modal-label {
  color: var(--muted-gold);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.modal-title {
  margin-top: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
}

.modal-section {
  margin-bottom: 1.6rem;
}

.modal-section h4 {
  margin-bottom: 0.6rem;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--deep-brown);
}

.modal-section p,
.modal-section li {
  font-size: 0.96rem;
  color: rgba(18, 12, 9, 0.72);
  line-height: 1.7;
}

.feature-list {
  margin: 0;
  padding-left: 1.2rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.tech-tag {
  padding: 0.45rem 0.8rem;
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(184, 155, 104, 0.08);
  border: 1px solid rgba(184, 155, 104, 0.15);
  color: var(--deep-brown);
}

.modal-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(252, 250, 246, 0.85);
  border: 1px solid rgba(18, 12, 9, 0.08);
  color: var(--deep-brown);
  z-index: 2;
}

.contact {
  background: var(--warm-cream);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.contact-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.contact-content h2 {
  font-size: clamp(2.8rem, 4vw, 4.2rem);
  margin-top: 0.9rem;
  margin-bottom: 1.3rem;
}

.contact-content p {
  font-size: 1.07rem;
  line-height: 1.8;
  color: rgba(18, 12, 9, 0.72);
  margin-bottom: 2rem;
}

footer {
  background: var(--dark-brown);
  color: var(--warm-cream);
  padding: 2.5rem 1.5rem;
}

footer > div {
  max-width: var(--content-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

footer .brand-mark {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(184, 155, 104, 0.2);
  color: var(--warm-cream);
}

footer strong,
footer span {
  display: block;
  color: var(--warm-cream);
}

footer strong {
  font-size: 0.9rem;
  letter-spacing: 0.04em;
}

footer span {
  color: rgba(245, 240, 232, 0.72);
  font-size: 0.74rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.footer-right {
  text-align: right;
}

.reveal {
  opacity: 0;
  transform: translateY(20px);
}

.reveal.visible {
  animation: revealUp 0.75s ease forwards;
}

@keyframes revealUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 980px) {
  .hero-content,
  .about-grid,
  .split-title,
  .experience-content,
  .projects-grid,
  .certificates-grid,
  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .projects-grid,
  .certificates-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .nav {
    padding: 1rem 1.25rem;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(252, 250, 246, 0.96);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 1rem 1.25rem 1.5rem;
  }

  .menu-open .nav-links {
    display: flex;
  }

  .menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content,
  .about-grid,
  .split-title,
  .experience-content,
  .projects-grid,
  .certificates-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 4rem;
  }

  .hero-copy {
    align-items: center;
    text-align: center;
  }

  .hero-name {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  footer > div {
    flex-direction: column;
    text-align: center;
  }

  .footer-right {
    text-align: center;
  }
}

@media (max-width: 520px) {
  .section {
    padding: 5rem 1.1rem;
  }

  .cta-button,
  .ui-button {
    width: 100%;
  }

  .hero-actions {
    width: 100%;
  }

  .hero-name {
    font-size: 2.8rem;
  }

  .section-title h2,
  .modal-title,
  .contact-content h2 {
    font-size: 2.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
