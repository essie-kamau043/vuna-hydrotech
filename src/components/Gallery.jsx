import React, { useState, useEffect, useCallback } from "react";
import { GALLERY_ITEMS, GALLERY_TABS } from "../data";

// ─── Thumbnail ────────────────────────────────────────────────────────────────
function Thumb({ item }) {
  const [errored, setErrored] = useState(false);
  
  const hasRealImage = item.img && item.img.trim() !== "";
  const showPlaceholder = !hasRealImage || errored;

  if (showPlaceholder) {
    return (
      <div
        className="vn-gph"
        style={{ 
          background: item.bg,
          minHeight: 200, 
          height: "100%" 
        }}
      >
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
      style={{
        width: "100%",
        height: "100%",
        minHeight: 200,
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}

// ─── LightboxImage ────────────────────────────────────────────────────────────
function LightboxImage({ item }) {
  const [errored, setErrored] = useState(false);
  
  const hasRealImage = item.img && item.img.trim() !== "";
  const showPlaceholder = !hasRealImage || errored;

  if (showPlaceholder) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          minHeight: 300,
          background: item.bg,
          borderRadius: 12,
        }}
      >
        <span style={{ fontSize: "5rem" }}>{item.icon}</span>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
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
      style={{
        width: "100%",
        maxHeight: "70vh",
        objectFit: "contain",
        borderRadius: 12,
        display: "block",
      }}
    />
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lbIdx, setLbIdx] = useState(null);

  const visible = GALLERY_ITEMS.filter(
    (i) => filter === "all" || i.cat === filter
  );

  const close = useCallback(() => setLbIdx(null), []);

  const next = useCallback(() => {
    setLbIdx((i) => (i + 1) % visible.length);
  }, [visible.length]);

  const prev = useCallback(() => {
    setLbIdx((i) => (i - 1 + visible.length) % visible.length);
  }, [visible.length]);

  const onKey = useCallback(
    (e) => {
      if (lbIdx === null) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    },
    [lbIdx, next, prev, close]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lbIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lbIdx]);

  // ─── Scroll Reveal Effect for ALL sections ───────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { 
        threshold: 0.12,     // Trigger when ~12% of the section is visible
        rootMargin: "0px 0px -40px 0px"
      }
    );

    // Observe all main sections
    document.querySelectorAll(".vn-sec").forEach((section) => {
      observer.observe(section);
    });

    // Staggered animation for gallery cards
    const cards = document.querySelectorAll(".vn-gi");
    cards.forEach((card, index) => {
      setTimeout(() => {
        observer.observe(card);
      }, index * 60); // nice stagger delay
    });

    return () => observer.disconnect();
  }, []);

    // Scroll Reveal Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }   // Trigger when 10% of element is visible
    );

    // Observe all sections with class "vn-sec"
    document.querySelectorAll(".vn-sec").forEach((section) => {
      observer.observe(section);
    });

    // Observe gallery cards with stagger
    const cards = document.querySelectorAll(".vn-gi");
    cards.forEach((card, index) => {
      // Small delay for nice stagger effect
      setTimeout(() => {
        observer.observe(card);
      }, index * 80);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vn-sec vn-gal-bg" id="gallery">   {/* ← Added vn-sec here */}
      <div className="vn-con">
        {/* Header */}
        <div className="vn-gal-hd">
          <span className="vn-lbl">Our Work</span>
          <h2 className="vn-ttl">Projects Gallery</h2>
          <p className="vn-sub">
            Completed HDPE water pans, excavations, fencing, and farm water
            projects across Kenya.
          </p>
        </div>

        {/* Tabs */}
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

        {/* Grid - Cards will stagger in */}
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

        {/* Upload prompt */}
        <div className="vn-upbanner">
          <p>
            📸 <strong>Add your project photos!</strong> WhatsApp your images
            to <strong>0701036336</strong> and we'll update the gallery with
            your real installations.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lbIdx !== null && visible[lbIdx] && (
        <div className="vn-lb" onClick={close}>
          <div className="vn-lbi" onClick={(e) => e.stopPropagation()}>
            <button className="vn-lbx" onClick={close} aria-label="Close">
              ✕
            </button>
            <button className="vn-lbnav vn-lbprev" onClick={prev} aria-label="Previous">
              ‹
            </button>
            <button className="vn-lbnav vn-lbnext" onClick={next} aria-label="Next">
              ›
            </button>

            <div className="vn-lbc" style={{ padding: "1rem" }}>
              <LightboxImage item={visible[lbIdx]} />
            </div>

            <div className="vn-lbcap">
              <strong>{visible[lbIdx].caption}</strong> — {visible[lbIdx].sub}
              <br />
              <span style={{ fontSize: "0.72rem", opacity: 0.5 }}>
                {lbIdx + 1} / {visible.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}