import React, { useState, useEffect, useCallback } from "react";
import { GALLERY_ITEMS, GALLERY_TABS } from "../data";

function Thumb({ item }) {
  const [errored, setErrored] = useState(false);
  const hasRealImage = item.img && item.img.trim() !== "";
  const showPlaceholder = !hasRealImage || errored;

  if (showPlaceholder) {
    return (
      <div className="vn-gph" style={{ background: item.bg || "#0d2137", minHeight: 220 }}>
        <span style={{ fontSize: "3.2rem" }}>{item.icon}</span>
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
        minHeight: 220,
        objectFit: "cover",
        display: "block",
        transition: "transform 0.4s ease"
      }}
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 280,
        background: item.bg || "#0d1b2a",
        padding: "2rem 1rem",
        textAlign: "center",
        borderRadius: "12px",
      }}>
        <span style={{ fontSize: "4.5rem", marginBottom: "1rem" }}>{item.icon}</span>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", maxWidth: "280px" }}>
          Add your photo URL in <strong>data.js</strong> to display the real image here
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
        maxHeight: "72vh",
        objectFit: "contain",
        borderRadius: "12px",
        display: "block",
      }}
    />
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

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".vn-sec").forEach(s => observer.observe(s));

    const cards = document.querySelectorAll(".vn-gi");
    cards.forEach((card, i) => {
      setTimeout(() => observer.observe(card), i * 80);
    });

    return () => observer.disconnect();
  }, []);

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
              className={`vn-gtab ${filter === t.key ? "active" : ""}`}
              onClick={() => {
                setFilter(t.key);
                setLbIdx(null);
              }}
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
              <div className="vn-gi-inner">
                <Thumb item={item} />
                <div className="vn-gov">
                  <div className="vn-gcap">
                    {item.caption}
                    <span>{item.sub}</span>
                  </div>
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

      {/* ==================== LIGHTBOX ==================== */}
      {lbIdx !== null && visible[lbIdx] && (
        <div className="vn-lb" onClick={close}>
          <div className="vn-lbi" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="vn-lbx" onClick={close} aria-label="Close">
              ✕
            </button>

            {/* Image */}
            <div className="vn-lbc">
              <LightboxImage item={visible[lbIdx]} />
            </div>

            {/* Caption */}
            <div className="vn-lbcap">
              <strong>{visible[lbIdx].caption}</strong> — {visible[lbIdx].sub}
              <br />
              <span style={{ fontSize: "0.78rem", opacity: 0.55 }}>
                {lbIdx + 1} / {visible.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            {visible.length > 1 && (
              <div className="vn-lbnav-row">
                <button className="vn-lbnav vn-lbprev" onClick={prev} aria-label="Previous">
                  ‹
                </button>
                <button className="vn-lbnav vn-lbnext" onClick={next} aria-label="Next">
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}