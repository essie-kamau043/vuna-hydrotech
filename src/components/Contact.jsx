// src/components/Contact.jsx
import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({name:"", phone:"", location:"", service:"HDPE Lined Water Pan", message:""});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const ch = e => setForm(f => ({...f, [e.target.name]: e.target.value}));

  const submit = () => {
    if (!form.name || !form.phone) return;
    setLoading(true);
    // Simulate sending (replace with Formspree later)
    setTimeout(() => {
      setSent(true);
      setForm({name:"", phone:"", location:"", service:"HDPE Lined Water Pan", message:""});
      setLoading(false);
      setTimeout(() => setSent(false), 5000);
    }, 800);
  };

  return (
    <section className="vn-sec vn-ctc" id="contact">
      <div className="vn-con">
        <span className="vn-lbl" style={{color:"#66bb6a"}}>Get In Touch</span>
        <h2 className="vn-ttl">Ready to Transform Your Farm?</h2>
        <p className="vn-sub">Contact us today for a free site consultation and quote. We serve all 47 counties across Kenya.</p>

        {sent && <div className="vn-toast">✅ Request sent! Our team will call you shortly.</div>}

        <div className="vn-ctc-grid">
          <div className="vn-fcard">
            <h3>📋 Request a Free Quote</h3>
            <div className="vn-fg"><label>Full Name</label><input name="name" value={form.name} onChange={ch} placeholder="e.g. James Kamau" required /></div>
            <div className="vn-fg"><label>Phone Number</label><input name="phone" value={form.phone} onChange={ch} placeholder="+254 7XX XXX XXX" required /></div>
            <div className="vn-fg"><label>Location / County</label><input name="location" value={form.location} onChange={ch} placeholder="e.g. Kajiado, Nakuru..." /></div>
            <div className="vn-fg">
              <label>Service Needed</label>
              <select name="service" value={form.service} onChange={ch}>
                {["HDPE Lined Water Pan","Rainwater Harvesting System","Borehole Drilling","Farm Irrigation Setup","Maintenance / Repair","Not Sure — Need Advice"].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="vn-fg"><label>Project Details</label><textarea name="message" value={form.message} onChange={ch} placeholder="Land size, number of livestock..." /></div>
            <button className="vn-submit" onClick={submit} disabled={loading}>
              {loading ? "Sending..." : "Send Request 💧"}
            </button>
          </div>

          <div className="vn-icard">
            <h3>📍 Contact Details</h3>
            {/* contact info remains the same */}
            {[
              {icon:"📞",label:"Phone / WhatsApp",val:<a href="tel:0701036336">0701 036 336</a>},
              {icon:"✉️",label:"Email",val:<a href="mailto:info@vunahydrotech.co.ke">info@vunahydrotech.co.ke</a>},
              {icon:"📍",label:"Coverage",val:<span>All 47 Counties — Kenya Wide</span>},
            ].map(i => (
              <div className="vn-ii" key={i.label}>
                <span className="vn-ii-ic">{i.icon}</span>
                <div><strong>{i.label}</strong>{i.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}