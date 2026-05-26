import { CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Experience() {
  return (
    <section id="experience" className="section split-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Program execution with a data lens.</h2>
      </Reveal>
      <div className="timeline">
        {experience.map((item, index) => (
          <Reveal key={item.title} className="timeline-card tilt-card" delay={index * 120}>
            <div>
              <p className="card-kicker">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.company}</p>
            </div>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckCircle2 size={17} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
