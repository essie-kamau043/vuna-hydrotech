// src/components/Gallery.jsx
import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { GALLERY_ITEMS, GALLERY_TABS } from "../data";

function Thumb({ item }) {
  const [errored, setErrored] = useState(false);
  const hasRealImage = item.img && item.img.trim() !== "";
  const showPlaceholder = !hasRealImage || errored;

  if (showPlaceholder) {
    return (
      <div className="vn-gph" style={{ background: item.bg }}>
        <span>{item.icon}</span>
        <p>{item.label}</p>
      </div>
    );
  }

  return (
    <img
      src={item.img}
      alt={item.caption}
      onError={() => setErrored(true)}
      loading="lazy"
      className="vn-gimg"
    />
  );
}

function LightboxImage({ item }) {
  const [errored, setErrored] = useState(false);
  const hasRealImage = item.img && item.img.trim() !== "";
  const showPlaceholder = !hasRealImage || errored;

  if (showPlaceholder) {
    return (
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: "0.75rem", minHeight: 220,
        background: item.bg, borderRadius: 12,
      }}>
        <span style={{ fontSize: "4rem" }}>{item.icon}</span>
        <p style={{
          color: "rgba(255,255,255,0.5)", fontSize: "0.78rem",
          margin: 0, textAlign: "center", padding: "0 1rem",
        }}>
          Add your photo URL in data.js to display a real image here
        </p>
      </div>
    );
  }

  return (
    <img
      src={item.img}
      alt={item.caption}
      onError={() => setErrored(true)}
      loading="lazy"
      style={{ width: "100%", maxHeight: "75vh", objectFit: "contain", borderRadius: 12 }}
    />
  );
}

function Lightbox({ item, idx, total, onClose, onNext, onPrev }) {
  return ReactDOM.createPortal(
    <div className="vn-lb" onClick={onClose}>
      <div className="vn-lbi" onClick={(e) => e.stopPropagation()}>
        <button className="vn-lbx" onClick={onClose}>✕</button>
        <div className="vn-lbc">
          <LightboxImage item={item} />
        </div>
        <div className="vn-lbcap">
          <strong>{item.caption}</strong> — {item.sub}
          <br />
          <span style={{ fontSize: "0.72rem", opacity: 0.45 }}>
            {idx + 1} / {total}
          </span>
        </div>
        <div className="vn-lbnav-row">
          <button className="vn-lbnav" onClick={onPrev}>‹</button>
          <button className="vn-lbnav" onClick={onNext}>›</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lbIdx, setLbIdx] = useState(null);

  const visible = GALLERY_ITEMS.filter((i) => filter === "all" || i.cat === filter);

  const close = useCallback(() => setLbIdx(null), []);
  const next = useCallback(() => setLbIdx((i) => (i + 1) % visible.length), [visible.length]);
  const prev = useCallback(() => setLbIdx((i) => (i - 1 + visible.length) % visible.length), [visible.length]);

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

  useEffect(() => {
    document.body.style.overflow = lbIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lbIdx]);

  return (
    <section className="vn-sec vn-gal-bg" id="gallery">
      <div className="vn-con">
        <div className="vn-gal-hd">
          <span className="vn-lbl">Our Work</span>
          <h2 className="vn-ttl">Projects Gallery</h2>
          <p className="vn-sub">
            Completed HDPE water pans, excavations, fencing, and farm water projects across Kenya.
          </p>
        </div>

        <div className="vn-gtabs">
          {GALLERY_TABS.map((t) => (
            <button
              key={t.key}
              className={`vn-gtab${filter === t.key ? " active" : ""}`}
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
              aria-label={`View ${item.caption}`}
              onKeyDown={(e) => e.key === "Enter" && setLbIdx(idx)}
            >
              <Thumb item={item} />
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
          <p>📸 <strong>Send us your project photos!</strong> WhatsApp to <strong>0701036336</strong> and we'll feature them here.</p>
        </div>
      </div>

      {lbIdx !== null && visible[lbIdx] && (
        <Lightbox
          item={visible[lbIdx]}
          idx={lbIdx}
          total={visible.length}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
}