import { useState } from 'react';
import { Achievements } from './components/Achievements';
import { BlossomPetals } from './components/BlossomPetals';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Stats } from './components/Stats';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <BlossomPetals />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Navbar open={menuOpen} onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)} />
      <Hero />
      <Stats />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
