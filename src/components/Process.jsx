// src/components/Process.jsx
import React from 'react';
import { PROCESS_STEPS } from '../data';

export default function Process() {
  return (
    <section className="vn-sec vn-proc-bg" id="process">
      <div className="vn-con">
        <div className="vn-proc-hd">
          <span className="vn-lbl">Our 6-Step Process</span>
          <h2 className="vn-ttl">From Consultation to Full Water Utilization</h2>
          <p className="vn-sub">Our clear, professional process ensures transparency, proper documentation, and a successful project from start to finish.</p>
        </div>
        <div className="vn-proc-grid">
          {PROCESS_STEPS.map(s => (
            <div className="vn-ps" key={s.n}>
              <div className="vn-pn">{s.icon}</div>
              <h4>{s.n}. {s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}