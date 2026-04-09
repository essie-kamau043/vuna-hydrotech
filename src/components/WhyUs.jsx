// src/components/WhyUs.jsx
import React from 'react';
import { WHY_POINTS, CYCLE_STEPS } from '../data';

export default function WhyUs() {
  return (
    <section className="vn-sec vn-why" id="why">
      <div className="vn-con">
        <div className="vn-why-grid">
          <div>
            <span className="vn-lbl">Why Choose Us</span>
            <h2 className="vn-ttl">Water Solutions That Last Generations</h2>
            <p style={{color:"rgba(255,255,255,0.65)",lineHeight:1.72,marginBottom:"1rem"}}>
              At Vuna Hydrotech, we don't just build water structures — we transform farms, protect livestock, and secure communities. Every project is built with quality materials, professional service, and lasting impact in mind.
            </p>
            <div className="vn-why-pts">
              {WHY_POINTS.map(w => (
                <div className="vn-why-pt" key={w.title}>
                  <div className="vn-wi">{w.icon}</div>
                  <div><h4>{w.title}</h4><p>{w.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="vn-why-vis">
            <div className="vn-ct">🏞️ From Rain to Farm Productivity</div>
            {CYCLE_STEPS.map(s => (
              <div className="vn-cs" key={s.title}>
                <span>{s.icon}</span>
                <div><strong>{s.title}</strong><small>{s.desc}</small></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}