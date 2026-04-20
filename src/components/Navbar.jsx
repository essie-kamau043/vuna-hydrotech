// src/components/Navbar.jsx
import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="vn-nav">
      {/* Logo - Left */}
      <div className="vn-logo">
        <div className="vn-logo-txt">
          VUNA <span>HYDROTECH</span> (K) LTD
          
          <span className="vn-logo-sub">Water Solutions That Last Generations</span>
        </div>
      </div>

      {/* Desktop Links */}
      <ul className="vn-nav-links">
        {[
          ["#services", "Services"],
          ["#why", "Why Us"],
          ["#process", "Process"],
          ["#gallery", "Gallery"],
          ["#contact", "Contact"]
        ].map(([h, l]) => (
          <li key={h}><a href={h}>{l}</a></li>
        ))}
      </ul>

      {/* Phone Button */}
      <a href="tel:0701036336" className="vn-nav-cta">📞 0701 036 336</a>

      {/* Hamburger - Right side */}
      <button 
        className="vn-hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Dropdown */}
      <ul className={`vn-nav-mobile ${menuOpen ? 'open' : ''}`}>
        {[
          ["#services", "Services"],
          ["#why", "Why Us"],
          ["#process", "Process"],
          ["#gallery", "Gallery"],
          ["#contact", "Contact"]
        ].map(([h, l]) => (
          <li key={h}>
            <a href={h} onClick={() => setMenuOpen(false)}>{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}