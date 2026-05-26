import { useState } from 'react';
import { projects } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <section id="projects" className="section project-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>From healthcare AI to product prototypes.</h2>
      </Reveal>
      <div className="project-layout">
        <div className="project-tabs">
          {projects.map((item, index) => (
            <button
              key={item.title}
              className={activeProject === index ? 'active' : ''}
              onClick={() => setActiveProject(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.title}
            </button>
          ))}
        </div>
        <Reveal className="project-card tilt-card" key={activeProject}>
          <p className="card-kicker">{project.tag}</p>
          <h3>{project.title}</h3>
          <p>{project.text}</p>
          <div className="stack-row">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
