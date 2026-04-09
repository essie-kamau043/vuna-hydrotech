// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="vn-hero" id="home">
      <div className="vn-hero-in">
        <div>
          <div className="vn-kicker">🇰🇪 Proudly Kenyan · Serving All 47 Counties</div>
          
          <h1>Built to Hold Water.<br/><em>Built to Transform Lives.</em></h1>
          
          <div className="vn-tagline">Reliable water solutions for farms and communities across Kenya</div>
          
          <p>
            Professional HDPE-lined water pans, rainwater harvesting, 
            and borehole drilling that deliver lasting water security.
          </p>

          <a href="tel:0701036336" className="vn-phone-link">
            📞 Call Us Today: <strong>0701 036 336</strong>
          </a>

          <div className="vn-hero-btns">
            <a href="#contact" className="vn-btn-p">💧 Get a Free Quote</a>
            <a href="#process" className="vn-btn-s">See How It Works</a>
          </div>
        </div>

        <div className="vn-visual">
          <div className="vn-drop">
            <div className="vn-ring" />
            <div className="vn-ring" />
            <div className="vn-ring" />
            
            <svg 
              className="vn-dropsvg" 
              viewBox="0 0 300 360" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M150 10 C150 10 30 150 30 220 C30 290 85 340 150 340 C215 340 270 290 270 220 C270 150 150 10 150 10Z" 
                fill="url(#dg)" 
                opacity="0.95"
              />
              <clipPath id="dc">
                <path d="M150 10 C150 10 30 150 30 220 C30 290 85 340 150 340 C215 340 270 290 270 220 C270 150 150 10 150 10Z"/>
              </clipPath>
              <g clipPath="url(#dc)">
                <ellipse cx="150" cy="260" rx="120" ry="60" fill="#1a6fa8" opacity="0.55"/>
                <path d="M30 240 Q90 210 150 240 Q210 270 270 240 L270 340 L30 340Z" fill="#0d5a8e" opacity="0.85"/>
                <path d="M30 260 Q90 230 150 260 Q210 290 270 260 L270 340 L30 340Z" fill="#0a3d62" opacity="0.95"/>
                <circle cx="120" cy="180" r="8" fill="rgba(255,255,255,0.45)"/>
                <circle cx="155" cy="155" r="5" fill="rgba(255,255,255,0.35)"/>
                <circle cx="180" cy="195" r="10" fill="rgba(255,255,255,0.3)"/>
              </g>
              <path 
                d="M220 280 C260 240 290 200 260 160 C240 200 200 230 220 280Z" 
                fill="url(#lg)" 
                opacity="0.92"
              />
              <path 
                d="M220 280 C230 250 250 220 260 160" 
                stroke="#2e7d32" 
                strokeWidth="2" 
                fill="none"
              />
              <defs>
                <linearGradient id="dg" x1="150" y1="10" x2="150" y2="340" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4fc3f7"/>
                  <stop offset="50%" stopColor="#1a6fa8"/>
                  <stop offset="100%" stopColor="#0a3d62"/>
                </linearGradient>
                <linearGradient id="lg" x1="220" y1="160" x2="260" y2="280" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#66bb6a"/>
                  <stop offset="100%" stopColor="#1b5e20"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}