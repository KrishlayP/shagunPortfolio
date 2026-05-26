import { Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Reveal className="contact-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build insight-led programs.</h2>
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
  );
}
