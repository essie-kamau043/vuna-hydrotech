// src/components/HdpeBand.jsx
import React from 'react';

export default function HdpeBand() {
  return (
    <div className="vn-hdpe">
      <div className="vn-hdpe-in">
        <span className="vn-lbl" style={{color:"#66bb6a"}}>Our Speciality</span>
        <h2>Professional Construction of<br/><em>HDPE Lined Water Pans</em> in Kenya</h2>
        <p>We design, excavate, and install heavy-duty HDPE liners in water pans across Kenya — ensuring zero seepage, maximum water retention, and long-term durability for your farm, ranch, or community project.</p>
        <div className="vn-hdpe-feats">
          {["💧 Leak-Proof Lining","🏗️ Expert Installation","⏳ Long-Term Durability","📐 Engineered Design","🐄 Livestock Safe","🚧 Full Fencing"].map(f => (
            <div className="vn-hdpe-f" key={f}>{f}</div>
          ))}
        </div>
        <a href="#contact" className="vn-btn-p" style={{display:"inline-block"}}>Build Your Water Pan →</a>
      </div>
    </div>
  );
}