// src/components/Gallery.jsx
import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { GALLERY_ITEMS, GALLERY_TABS } from "../data";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lbIdx, setLbIdx] = useState(null);

  const visible = GALLERY_ITEMS.filter(item => 
    filter === "all" || item.cat === filter
  );

  const close = () => setLbIdx(null);
  const next = useCallback(() => setLbIdx(i => (i + 1) % visible.length), [visible.length]);
  const prev = useCallback(() => setLbIdx(i => (i - 1 + visible.length) % visible.length), [visible.length]);

  const onKey = useCallback((e) => {
    if (lbIdx === null) return;
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "Escape") close();
  }, [lbIdx, next, prev, close]);

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  return (
    <section className="vn-sec vn-gal-bg" id="gallery">
      <div className="vn-con">
        <span className="vn-lbl">Our Projects</span>
        <h2 className="vn-ttl">Real Work. Real Results.</h2>

        <div className="vn-gtabs">
          {GALLERY_TABS.map((t) => (
            <button
              key={t.key}
              className={`vn-gtab ${filter === t.key ? "active" : ""}`}
              onClick={() => { setFilter(t.key); setLbIdx(null); }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="vn-ggrid">
          {visible.map((item, idx) => (
            <div
              className="vn-gi"
              key={item.id}
              onClick={() => setLbIdx(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLbIdx(idx)}
            >
              <img
                src={item.img}
                alt={item.caption}
                loading="lazy"
                className="vn-gimg"
                onError={(e) => {
                  e.target.style.display = "none";
                  const parent = e.target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="vn-gph" style="background:${item.bg || '#0a3d62'}">
                        <span>${item.icon}</span>
                        <p>${item.label}</p>
                      </div>
                    `;
                  }
                }}
              />
              <div className="vn-gov">
                <div className="vn-gcap">
                  {item.caption}
                  <span>{item.sub || ""}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lbIdx !== null && visible[lbIdx] && (
        <Lightbox 
          item={visible[lbIdx]} 
          onClose={close} 
          onNext={next} 
          onPrev={prev} 
        />
      )}
    </section>
  );
}

// Simple Lightbox
function Lightbox({ item, onClose, onNext, onPrev }) {
  return ReactDOM.createPortal(
    <div className="vn-lb" onClick={onClose}>
      <div className="vn-lbi" onClick={e => e.stopPropagation()}>
        <button className="vn-lbx" onClick={onClose}>×</button>
        <img src={item.img} alt={item.caption} className="vn-lbi-img" />
        <div className="vn-lbcap">{item.caption}</div>
        <button className="vn-lbnav vn-lbprev" onClick={onPrev}>←</button>
        <button className="vn-lbnav vn-lbnext" onClick={onNext}>→</button>
      </div>
    </div>,
    document.body
  );
}