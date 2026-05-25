import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Shagun Bajpai',
  role: 'Project Research Engineer',
  location: 'Uttar Pradesh, India',
  email: 'shagunbajpai15@gmail.com',
  phone: '+91 8707313306',
  intro:
    'Data-focused program coordinator blending startup ecosystem operations, analytical reporting, and product lifecycle tracking for mission-driven innovation programs.',
};

const stats = [
  ['2025', 'SIIC IIT Kanpur'],
  ['150+', 'DSA problems'],
  ['5-Star', 'HackerRank'],
  ['7.2', 'B.Tech CGPA'],
];

const experience = [
  {
    company: 'Startup Incubation and Innovation Centre (SIIC), IIT Kanpur',
    title: 'Project Research Engineer',
    period: 'Apr 2025 - Present',
    bullets: [
      'Coordinate startups, mentors, investors, and internal teams for smooth program execution.',
      'Track incubated startup lifecycles from ideation and validation through implementation and growth.',
      'Prepare analytical reports, summaries, dashboards, and documentation for leadership review.',
      'Support founders with operational guidance while maintaining governance, timelines, and compliance.',
    ],
  },
];

const skills = [
  { icon: BarChart3, title: 'Data Analysis', items: ['Trend analysis', 'Interpretation', 'Dashboards'] },
  { icon: Database, title: 'Data Stack', items: ['Python', 'SQL', 'Pandas', 'NumPy'] },
  { icon: Target, title: 'Tools', items: ['GCP', 'AWS S3', 'Athena', 'dbt', 'Tableau', 'Power BI'] },
  { icon: BrainCircuit, title: 'Soft Skills', items: ['Stakeholder management', 'Presentation', 'Cross-functional work'] },
];

const projects = [
  {
    title: 'Rehab: Your Salutary Companion',
    tag: 'Healthcare AI',
    text: 'A mobile health companion using NLP, OpenCV, and privacy-focused algorithms for chatbot support, medical image analysis, and menstrual cycle insights.',
    stack: ['OpenCV', 'NLP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Home Appliance Control App',
    tag: 'Product Prototype',
    text: 'A working Figma prototype for controlling home appliances through a mobile interface with practical household workflows.',
    stack: ['Figma', 'Mobile UX', 'Prototype'],
  },
  {
    title: 'Driver Drowsiness System',
    tag: 'Computer Vision',
    text: 'A detection system that sounds an alarm when drowsiness is detected and includes emergency alerts for critical situations.',
    stack: ['Python', 'OpenCV', 'Pygame', 'MySQL'],
  },
  {
    title: 'Movie Recommendation System',
    tag: 'Machine Learning',
    text: 'A recommendation engine using machine learning and collaborative filtering to personalize movie suggestions.',
    stack: ['ML', 'Collaborative Filtering', 'Python'],
  },
];

const achievements = [
  'Coordinated ASEAN-India ScaleHub 2025 in Bali for international startup collaboration.',
  'Led Bank of Baroda Hackathon 2025 coordination across participation, evaluation, and stakeholders.',
  'Completed certifications in IBM Data Analytics, Python, OOP, and DBMS.',
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const links = ['about', 'experience', 'skills', 'projects', 'contact'];

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav">
        <a className="brand" href="#top" aria-label="Shagun Bajpai home">
          <Sparkles size={18} />
          <span>Shagun</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link} href={`#${link}`}>
              {link}
            </a>
          ))}
        </div>
        <button className="icon-button menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <button className="icon-button close-button" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}

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

      <section id="skills" className="section">
        <Reveal className="section-heading centered">
          <p className="eyebrow">Skills</p>
          <h2>Analytical, technical, and execution-ready.</h2>
        </Reveal>
        <div className="skill-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
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

      <section id="projects" className="section project-section">
        <Reveal className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>From healthcare AI to product prototypes.</h2>
        </Reveal>
        <div className="project-layout">
          <div className="project-tabs">
            {projects.map((project, index) => (
              <button
                key={project.title}
                className={activeProject === index ? 'active' : ''}
                onClick={() => setActiveProject(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {project.title}
              </button>
            ))}
          </div>
          <Reveal className="project-card tilt-card" key={activeProject}>
            <p className="card-kicker">{projects[activeProject].tag}</p>
            <h3>{projects[activeProject].title}</h3>
            <p>{projects[activeProject].text}</p>
            <div className="stack-row">
              {projects[activeProject].stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

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

      <section id="contact" className="contact-section">
        <Reveal className="contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build insight-led programs.</h2>
            <p>Available for analytics, program operations, reporting, and startup ecosystem coordination roles.</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              <Phone size={18} />
              {profile.phone}
            </a>
            <span>
              <MapPin size={18} />
              {profile.location}
            </span>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
