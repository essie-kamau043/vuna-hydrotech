import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { GALLERY_ITEMS, GALLERY_TABS } from "../data";

function Thumb({ item, isActive }) {
  const [errored, setErrored] = useState(false);
  const hasRealImage = item.img && item.img.trim() !== "";
  const showPlaceholder = !hasRealImage || errored;

  if (showPlaceholder) {
    return (
      <div
        className="vn-gph"
        style={{ "--ph-bg": item.bg, minHeight: 200, height: "100%" }}
      >
        <span className="vn-gph-icon">{item.icon}</span>
        <p>{item.label}</p>
        <div className="vn-gph-shine" />
      </div>
    );
  }

  return (
    <img
      src={item.img}
      alt={item.caption}
      onError={() => setErrored(true)}
      loading="lazy"
      className={`vn-gi-img${isActive ? " zoomed" : ""}`}
      style={{ width: "100%", height: "100%", minHeight: 200, objectFit: "cover", display: "block" }}
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
      style={{
        width: "100%", maxHeight: "60vh",
        objectFit: "contain", borderRadius: 12, display: "block",
      }}
    />
  );
}

function Lightbox({ item, idx, total, onClose, onNext, onPrev }) {
  return ReactDOM.createPortal(
    <div className="vn-lb" onClick={onClose}>
      <div className="vn-lbi" onClick={(e) => e.stopPropagation()}>
        <button className="vn-lbx" onClick={onClose} aria-label="Close">✕</button>

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
          <button className="vn-lbnav" onClick={onPrev} aria-label="Previous">‹</button>
          <button className="vn-lbnav" onClick={onNext} aria-label="Next">›</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lbIdx, setLbIdx] = useState(null);
  const [tappedId, setTappedId] = useState(null);
  const [animKey, setAnimKey] = useState(0);
  const tapTimerRef = useRef(null);

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

  // Re-trigger stagger animation on filter change
  const handleFilterChange = (key) => {
    setFilter(key);
    setLbIdx(null);
    setTappedId(null);
    setAnimKey((k) => k + 1);
  };

  // Handle mobile tap: first tap shows overlay, second tap opens lightbox
  const handleCardInteraction = (e, itemId, idx) => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) {
      e.preventDefault();
      if (tappedId === itemId) {
        // Second tap → open lightbox
        setLbIdx(idx);
        setTappedId(null);
      } else {
        // First tap → show overlay
        setTappedId(itemId);
        // Auto-dismiss after 3s
        clearTimeout(tapTimerRef.current);
        tapTimerRef.current = setTimeout(() => setTappedId(null), 3000);
      }
    } else {
      setLbIdx(idx);
    }
  };

  // Dismiss tapped overlay when tapping elsewhere
  useEffect(() => {
    const dismiss = () => setTappedId(null);
    document.addEventListener("touchstart", dismiss, { passive: true });
    return () => document.removeEventListener("touchstart", dismiss);
  }, []);

  useEffect(() => {
    return () => clearTimeout(tapTimerRef.current);
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
              className={`vn-gtab${filter === t.key ? " active" : ""}`}
              onClick={() => handleFilterChange(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="vn-ggrid" key={animKey}>
          {visible.map((item, idx) => {
            const isTapped = tappedId === item.id;
            return (
              <div
                className={`vn-gi${isTapped ? " tapped" : ""}`}
                key={item.id}
                style={{ "--stagger": idx }}
                onClick={(e) => {
                  // Stop dismiss handler on the card itself
                  e.stopPropagation();
                  handleCardInteraction(e, item.id, idx);
                }}
                onTouchStart={(e) => e.stopPropagation()}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.caption}`}
                onKeyDown={(e) => e.key === "Enter" && setLbIdx(idx)}
              >
                <div className="vn-gi-inner">
                  <Thumb item={item} isActive={isTapped} />
                </div>

                {/* Category chip */}
                <div className="vn-gchip">{item.cat}</div>

                <div className="vn-gov">
                  {/* Shine sweep */}
                  <div className="vn-gov-shine" />

                  <div className="vn-gcap">
                    <span className="vn-gcap-title">{item.caption}</span>
                    <span className="vn-gcap-sub">{item.sub}</span>
                    <span className="vn-gcap-hint">
                      {window.matchMedia?.("(hover: none)").matches ? "Tap again to view" : "Click to enlarge"}
                    </span>
                  </div>
                </div>

                {/* Mobile tap pulse ring */}
                {isTapped && <div className="vn-tap-ring" />}
              </div>
            );
          })}
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