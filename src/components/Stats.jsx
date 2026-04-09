// src/components/Stats.jsx
import React from 'react';

export default function Stats() {
  return (
    <div className="vn-stats">
      {[["500+","Water Projects"],["47","Counties Served"],["5yr","HDPE Warranty"],["24/7","Support"]].map(([n,l])=>(
        <div className="vn-stat" key={l}>
          <span className="vn-sn">{n}</span>
          <span className="vn-sl">{l}</span>
        </div>
      ))}
    </div>
  );
}