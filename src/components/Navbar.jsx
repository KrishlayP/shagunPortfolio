import { Menu, Sparkles, X } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export function Navbar({ open, onOpen, onClose }) {
  return (
    <>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Shagun Bajpai home">
          <Sparkles size={18} />
          <span>Shagun</span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`}>
              {link}
            </a>
          ))}
        </div>
        <button className="icon-button menu-button" onClick={onOpen} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <button className="icon-button close-button" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`} onClick={onClose}>
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
