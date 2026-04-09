// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="vn-nav">
      <button className="vn-logo">
        <div className="vn-logo-txt">
          VUNA <span>HYDROTECH</span> (K) LTD
          <span className="vn-logo-sub">Water Solutions That Last Generations</span>
        </div>
      </button>
      <ul className="vn-nav-links">
        {[["#services","Services"],["#why","Why Us"],["#process","Process"],["#gallery","Gallery"],["#contact","Contact"]].map(([h,l])=>(
          <li key={h}><a href={h}>{l}</a></li>
        ))}
      </ul>
      <a href="tel:0701036336" className="vn-nav-cta">📞 0701036336</a>
    </nav>
  );
}