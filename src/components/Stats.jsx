import { stats } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Stats() {
  return (
    <section id="about" className="section stats-band">
      {stats.map(([value, label], index) => (
        <Reveal key={label} delay={index * 80}>
          <div className="stat-card">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
