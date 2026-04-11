// src/components/Navbar.jsx
import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="vn-nav">
      <div className="vn-logo">
        <div className="vn-logo-txt">
          VUNA <span>HYDROTECH</span> (K) LTD
          <span className="vn-logo-sub">Water Solutions That Last Generations</span>
        </div>
      </div>

      <a href="tel:0701036336" className="vn-nav-cta">📞 0701 036 336</a>

      <button className="vn-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`vn-nav-links ${menuOpen ? 'open' : ''}`}>
        {[
          ["#services", "Services"],
          ["#why", "Why Us"],
          ["#process", "Process"],
          ["#gallery", "Gallery"],
          ["#contact", "Contact"]
        ].map(([h, l]) => (
          <li key={h}><a href={h} onClick={() => setMenuOpen(false)}>{l}</a></li>
        ))}
      </ul>
    </nav>
  );
}