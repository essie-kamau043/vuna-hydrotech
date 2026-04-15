import React, { useState, useRef} from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    service: "HDPE Lined Water Pan",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // ←←← CHANGE THIS TO YOUR REAL FORMSPREE ENDPOINT ←←←
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkokogyp";

  const successRef = useRef(null);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setError("Full Name and Phone Number are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          location: form.location,
          service: form.service,
          message: form.message || "No additional details provided",
          _subject: `New Quote Request from ${form.name}`,
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({
          name: "",
          phone: "",
          location: "",
          service: "HDPE Lined Water Pan",
          message: ""
        });

        // Auto-scroll to success message
        setTimeout(() => {
          successRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 100);

        // Hide success message after 8 seconds and show form again
        setTimeout(() => setSent(false), 8000);
      } else {
        setError("Failed to send. Please try again or WhatsApp us.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please check your connection or WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="vn-sec vn-ctc" id="contact">
      <div className="vn-con">
        <span className="vn-lbl" style={{ color: "#66bb6a" }}>Get In Touch</span>
        <h2 className="vn-ttl">Ready to Transform Your Farm?</h2>
        <p className="vn-sub">
          Contact us today for a free site consultation and quote. We serve all 47 counties across Kenya.
        </p>

        {/* ==================== SUCCESS SCREEN ==================== */}
        {sent && (
          <div ref={successRef} className="vn-toast" style={{
            background: "rgba(76,175,80,0.15)",
            border: "1px solid #4caf50",
            color: "#2e7d32",
            padding: "2rem 1.5rem",
            margin: "2rem 0",
            borderRadius: "16px",
            textAlign: "center",
            fontSize: "1.1rem",
            lineHeight: "1.6"
          }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
            <h3 style={{ margin: "0 0 0.8rem 0", color: "#2e7d32" }}>
              Thank You, {form.name ? form.name.split(" ")[0] : "Customer"}!
            </h3>
            <p style={{ margin: 0, fontSize: "1.05rem" }}>
              Your request has been received successfully.<br />
              Our team will call you shortly (usually within 1–2 hours during business hours).
            </p>
            <p style={{ marginTop: "1.2rem", fontSize: "0.95rem", opacity: 0.8 }}>
              You can also reach us directly on <strong>0701 036 336</strong> via WhatsApp or Call.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && !sent && (
          <div className="vn-toast" style={{
            background: "rgba(244,67,54,0.2)",
            color: "#ff8a80",
            borderColor: "#ff8a80"
          }}>
            {error}
          </div>
        )}

        {/* Show form only when not sent */}
        {!sent && (
          <div className="vn-ctc-grid">
            <div className="vn-fcard">
              <h3>📋 Request a Free Quote</h3>

              <form onSubmit={handleSubmit}>
                <div className="vn-fg">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. James Kamau"
                    required
                  />
                </div>

                <div className="vn-fg">
                  <label>Phone Number * (WhatsApp preferred)</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    required
                  />
                </div>

                <div className="vn-fg">
                  <label>Location / County</label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g. Kajiado, Nakuru..."
                  />
                </div>

                <div className="vn-fg">
                  <label>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    {[
                      "HDPE Lined Water Pan",
                      "Rainwater Harvesting System",
                      "Borehole Drilling",
                      "Farm Irrigation Setup",
                      "Maintenance / Repair",
                      "Not Sure — Need Advice"
                    ].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="vn-fg">
                  <label>Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Land size, number of livestock, any other info..."
                    rows={4}
                  />
                </div>

                <button type="submit" className="vn-submit" disabled={loading}>
                  {loading ? "Sending your request..." : "Send Request 💧"}
                </button>
              </form>
            </div>

            <div className="vn-icard">
              <h3>📍 Contact Details</h3>
              {[
                { icon: "📞", label: "Phone / WhatsApp", val: <a href="tel:0701036336">0701 036 336</a> },
                { icon: "✉️", label: "Email", val: <a href="mailto:info@vunahydrotech.co.ke">info@vunahydrotech.co.ke</a> },
                { icon: "📍", label: "Coverage", val: <span>All 47 Counties — Kenya Wide</span> },
              ].map(i => (
                <div className="vn-ii" key={i.label}>
                  <span className="vn-ii-ic">{i.icon}</span>
                  <div><strong>{i.label}</strong>{i.val}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}