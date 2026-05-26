import { ArrowUpRight, BriefcaseBusiness, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">Portfolio / Data / Startup Programs</p>
        </Reveal>
        <Reveal delay={90}>
          <h1>{profile.name}</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="hero-role">{profile.role} at SIIC IIT Kanpur</p>
          <p className="hero-intro">{profile.intro}</p>
        </Reveal>
        <Reveal className="hero-actions" delay={230}>
          <a className="primary-action" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            Contact Me
          </a>
          <a className="secondary-action" href="#projects">
            View Projects
            <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>

      <Reveal className="hero-card" delay={240}>
        <div className="portrait-orbit">
          <div className="portrait">
            <span>S</span>
          </div>
          <div className="orbit-dot dot-a" />
          <div className="orbit-dot dot-b" />
          <div className="orbit-dot dot-c" />
        </div>
        <div className="mini-panel">
          <BriefcaseBusiness size={18} />
          <span>Innovation programs, analytics, reports, and startup execution.</span>
        </div>
      </Reveal>
    </section>
  );
}
