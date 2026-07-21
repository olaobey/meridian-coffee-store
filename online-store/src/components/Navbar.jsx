import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'Brewers', href: '#featured' },
  { label: 'Grinders', href: '#featured' },
  { label: 'Scales & Timers', href: '#featured' },
  { label: 'Journal', href: '#newsletter' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__row">
        <a className="nav__mark" href="#top">
          <span className="nav__mark-dot" aria-hidden="true" />
          Meridian
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__cart" href="#featured" aria-label="View cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h2l1.6 9.6a2 2 0 0 0 2 1.7h7.1a2 2 0 0 0 2-1.6L20 9H7"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="20" r="1.4" fill="currentColor" />
              <circle cx="17" cy="20" r="1.4" fill="currentColor" />
            </svg>
            <span className="nav__cart-count">0</span>
          </a>
          <a className="btn btn-primary" href="#featured">Shop brewers</a>
        </div>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#featured" onClick={() => setOpen(false)}>
            Shop brewers
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
