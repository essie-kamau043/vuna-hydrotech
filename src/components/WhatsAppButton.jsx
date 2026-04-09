// src/components/WhatsAppButton.jsx
import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      className="vn-wa"
      href="https://wa.me/254701036336?text=Hello%20Vuna%20Hydrotech!%20I%27d%20like%20to%20enquire%20about%20your%20HDPE%20water%20pans%20and%20harvesting%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="vn-wa-label">Chat on WhatsApp 💧</span>
      <div className="vn-wa-btn">
        <div className="vn-wa-pulse" />
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.67 4.8 1.84 6.8L2 30l7.4-1.8A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25d366"/>
          <path d="M22.5 19.4c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-1 1.2-.18.2-.37.22-.67.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.7.3 1.26.48 1.68.62.7.22 1.35.19 1.85.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34z" fill="white"/>
        </svg>
      </div>
    </a>
  );
}