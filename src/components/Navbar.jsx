import { ArrowUpRight, X } from 'lucide-react';

export function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card reveal" onClick={() => onOpen(project)} onKeyDown={(e) => e.key === 'Enter' && onOpen(project)} tabIndex={0} role="button">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <span className="project-label">{project.category}</span>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </article>
  );
}

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={(event) => event.target === event.currentTarget && onClose()} role="presentation">
      <div className="modal-content" aria-modal="true" role="dialog" aria-label={project.title}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <img className="modal-image" src={project.image} alt={project.title} />

        <div className="modal-body">
          <div className="modal-label">{project.category}</div>
          <h3 className="modal-title">{project.title}</h3>

          <div className="modal-section">
            <h4>Overview</h4>
            <p>{project.description}</p>
          </div>

          <div className="modal-section">
            <h4>Technologies</h4>
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h4>Key Features</h4>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h4>Role</h4>
            <p>{project.role}</p>
          </div>

          {(project.status || project.year) && (
            <div className="modal-section">
              <h4>Project status</h4>
              <p>{project.status || project.year}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function CertificateCard({ certificate, onOpen }) {
  return (
    <article className="certificate-card reveal" onClick={() => onOpen(certificate)} onKeyDown={(e) => e.key === 'Enter' && onOpen(certificate)} tabIndex={0} role="button">
      <img src={certificate.image} alt={certificate.title} />
    </article>
  );
}

export function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="modal-backdrop" onClick={(event) => event.target === event.currentTarget && onClose()} role="presentation">
      <div className="modal-content certificate-modal" aria-modal="true" role="dialog" aria-label={certificate.title}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <img className="modal-image" src={certificate.image} alt={certificate.title} />

        <div className="modal-body">
          <div className="modal-label">{certificate.organization}</div>
          <h3 className="modal-title">{certificate.title}</h3>

          <div className="modal-section">
            <h4>Date</h4>
            <p>{certificate.date}</p>
          </div>

          <div className="modal-section">
            <h4>Description</h4>
            <p>{certificate.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Button({ children, href, className = '' }) {
  if (href) {
    return (
      <a className={`ui-button ${className}`.trim()} href={href} target="_blank" rel="noreferrer">
        {children}
        <ArrowUpRight size={16} />
      </a>
    );
  }

  return <button className={`ui-button ${className}`.trim()} type="button">{children}</button>;
}
