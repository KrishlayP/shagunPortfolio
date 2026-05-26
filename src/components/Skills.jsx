import { BarChart3, BrainCircuit, Database, Target } from 'lucide-react';
import { skills } from '../data/portfolio';
import { Reveal } from './Reveal';

const iconMap = {
  BarChart3,
  BrainCircuit,
  Database,
  Target,
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal className="section-heading centered">
        <p className="eyebrow">Skills</p>
        <h2>Analytical, technical, and execution-ready.</h2>
      </Reveal>
      <div className="skill-grid">
        {skills.map((skill, index) => {
          const Icon = iconMap[skill.icon];
          return (
            <Reveal key={skill.title} className="skill-card tilt-card" delay={index * 90}>
              <Icon size={25} />
              <h3>{skill.title}</h3>
              <div>
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
