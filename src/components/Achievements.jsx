import { achievements } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Achievements() {
  return (
    <section className="section achievements">
      <Reveal className="section-heading centered">
        <p className="eyebrow">Highlights</p>
        <h2>Achievements with momentum.</h2>
      </Reveal>
      <div className="achievement-list">
        {achievements.map((achievement, index) => (
          <Reveal key={achievement} className="achievement-card" delay={index * 100}>
            <span>{index + 1}</span>
            <p>{achievement}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
