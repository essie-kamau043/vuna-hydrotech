// src/components/TrustBar.jsx
import React from 'react';
import { TRUST_BADGES } from '../data';

export default function TrustBar() {
  return (
    <div className="vn-trust">
      {TRUST_BADGES.map(b => <span key={b}>{b}</span>)}
    </div>
  );
}