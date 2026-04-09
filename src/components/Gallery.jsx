// src/components/Gallery.jsx
import React, { useState, useEffect, useCallback } from "react";
import { GALLERY_ITEMS, GALLERY_TABS } from "../data";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lbIdx, setLbIdx] = useState(null);

  const visible = GALLERY_ITEMS.filter(i => filter === "all" || i.cat === filter);

  // Memoized handlers so they don't change unnecessarily
  const close = useCallback(() => setLbIdx(null), []);

  const next = useCallback(() => {
    setLbIdx(i => (i + 1) % visible.length);
  }, [visible.length]);

  const prev = useCallback(() => {
    setLbIdx(i => (i - 1 + visible.length) % visible.length);
  }, [visible.length]);

  // onKey now includes all dependencies it actually uses
  const onKey = useCallback((e) => {
    if (lbIdx === null) return;
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "Escape") close();
  }, [lbIdx, next, prev, close]);

  // Add keyboard listener
  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  return (
    <section className="vn-sec vn-gal-bg" id="gallery">
      <div className="vn-con">
        <div className="vn-gal-hd">
          <span className="vn-lbl">Our Work</span>
          <h2 className="vn-ttl">Projects Gallery</h2>
          <p className="vn-sub">Completed HDPE water pans, excavations, fencing, and farm water projects across Kenya.</p>
        </div>

        <div className="vn-gtabs">
          {GALLERY_TABS.map(t => (
            <button 
              key={t.key} 
              className={`vn-gtab${filter === t.key ? " active" : ""}`} 
              onClick={() => setFilter(t.key)}
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
            >
              <div className="vn-gph" style={{ background: item.bg }}>
                <span>{item.icon}</span>
                <p>{item.label}</p>
              </div>
              <div className="vn-gov">
                <div className="vn-gcap">
                  {item.caption}
                  <span>{item.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="vn-upbanner">
          <p>
            📸 <strong>Add your project photos!</strong> WhatsApp your images to{" "}
            <strong>0701036336</strong> and we'll update the gallery with your real installations.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lbIdx !== null && (
        <div className="vn-lb" onClick={close}>
          <div className="vn-lbi" onClick={e => e.stopPropagation()}>
            <button className="vn-lbx" onClick={close}>✕</button>
            <button className="vn-lbnav vn-lbprev" onClick={prev}>‹</button>
            <button className="vn-lbnav vn-lbnext" onClick={next}>›</button>

            <div className="vn-lbc">
              <span style={{ fontSize: "5rem" }}>{visible[lbIdx]?.icon}</span>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>
                Placeholder — replace with real photo
              </p>
            </div>

            <div className="vn-lbcap">
              {visible[lbIdx]?.caption} — {visible[lbIdx]?.sub}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}