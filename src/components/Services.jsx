// src/components/Services.jsx
import React from 'react';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <section className="vn-sec vn-svc-bg" id="services">
      <div className="vn-con">
        <div className="vn-svc-hd">
          <span className="vn-lbl">What We Do</span>
          <h2 className="vn-ttl">Complete Water Harvesting Solutions</h2>
          <p className="vn-sub">From HDPE lined water pans to boreholes and farm irrigation — we engineer water security that lasts generations.</p>
        </div>
        <div className="vn-svc-grid">
          {SERVICES.map(s => (
            <div className={`vn-card${s.featured ? " feat" : ""}`} key={s.title}>
              {s.featured && <div className="vn-feat-badge">⭐ Flagship Service</div>}
              <div className="vn-svc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}