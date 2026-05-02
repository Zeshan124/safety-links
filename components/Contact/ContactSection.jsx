"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";
import PageHero from "@/components/Projects/PageHero";

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Office",
    lines: ["12-C Mezzanine Floor, Street 07", "Badar Commercial, DHA Phase V", "Karachi"],
    action: { label: "Get Directions", href: "https://maps.google.com/?q=Badar+Commercial+DHA+Phase+V+Karachi" },
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["021-35244550", "0321-2508452"],
    action: { label: "Call Now", href: "tel:02135244550" },
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: ["0321-2508451"],
    action: { label: "Chat on WhatsApp", href: "https://wa.me/923212508451" },
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@safetylinks.org"],
    action: { label: "Send Email", href: "mailto:info@safetylinks.org" },
  },
];

const hours = [
  { day: "Monday – Saturday", time: "10:00 AM – 6:00 PM" },
  { day: "Sunday",            time: "Closed" },
];

const services = [
  "Automatic Swing Gate",
  "Automatic Sliding Gate",
  "Barrier Gate",
  "Roller Shutter",
  "High-Speed PVC Door",
  "Automatic Glass Door",
  "Road Blocker",
  "Dock Leveler",
  "Maintenance / Repair",
  "Other",
];

const initialForm = { name: "", phone: "", email: "", service: "", message: "" };

export default function ContactSection() {
  const [form, setForm]       = useState(initialForm);
  const [errors, setErrors]   = useState(/** @type {Record<string, string>} */ ({}));
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = /** @type {Record<string, string>} */ ({});
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.phone.trim())   e.phone   = "Phone number is required";
    if (!form.service)        e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (/** @type {React.FormEvent<HTMLFormElement>} */ ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSending(true);
    // Replace with your real form submission logic (e.g. API route, EmailJS, Formspree)
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1200);
  };

  const handleChange = (/** @type {React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} */ ev) => {
    const { name, value } = ev.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => { const n = { ...e }; delete n[name]; return n; });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .ct-font  { font-family: 'DM Sans', sans-serif; }
        .ct-serif { font-family: 'Cormorant Garamond', serif; }

        .ct-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          color: #279B51; font-size: 11px; font-weight: 500;
          letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 14px;
        }
        .ct-eyebrow::before, .ct-eyebrow::after {
          content: ''; width: 28px; height: 1px; background: #279B51; opacity: 0.6;
        }

        /* Info cards */
        .ct-info-card {
          background: #fff; border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px; padding: 24px 20px;
          transition: all 0.25s ease; position: relative; overflow: hidden;
        }
        .ct-info-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 3px; height: 0; background: #279B51;
          transition: height 0.35s ease;
        }
        .ct-info-card:hover { border-color: rgba(39,155,81,0.28); transform: translateY(-3px); box-shadow: 0 10px 30px rgba(18,58,101,0.1); }
        .ct-info-card:hover::before { height: 100%; }
        .ct-info-icon {
          width: 44px; height: 44px; border-radius: 2px;
          border: 1px solid rgba(39,155,81,0.3);
          background: rgba(39,155,81,0.06);
          display: flex; align-items: center; justify-content: center;
          color: #279B51; margin-bottom: 14px;
          transition: all 0.25s;
        }
        .ct-info-card:hover .ct-info-icon { background: rgba(39,155,81,0.14); border-color: rgba(39,155,81,0.55); }
        .ct-info-link {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10.5px; font-weight: 500; letter-spacing: 1px;
          text-transform: uppercase; color: #279B51; text-decoration: none;
          margin-top: 12px; transition: gap 0.2s;
        }
        .ct-info-link:hover { gap: 9px; }

        /* Form inputs */
        .ct-input, .ct-select, .ct-textarea {
          width: 100%; background: rgba(39,155,81,0.03);
          border: 1px solid rgba(39,155,81,0.18); border-radius: 2px;
          padding: 11px 14px; font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; color: #374151;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none; appearance: none;
        }
        .ct-input:focus, .ct-select:focus, .ct-textarea:focus {
          border-color: #279B51;
          box-shadow: 0 0 0 3px rgba(39,155,81,0.08);
        }
        .ct-input-error { border-color: #ef4444 !important; }
        .ct-label {
          display: block; font-size: 11px; font-weight: 500;
          letter-spacing: 0.5px; color: #374151; margin-bottom: 6px;
          text-transform: uppercase;
        }
        .ct-error-msg { font-size: 11px; color: #ef4444; margin-top: 4px; }
        .ct-textarea { resize: vertical; min-height: 120px; }
        .ct-select { cursor: pointer; }

        /* Submit button */
        .ct-submit-btn {
          width: 100%; background: #279B51; color: #fff; border: none;
          font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 14px 28px; border-radius: 2px; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.2s, transform 0.15s;
        }
        .ct-submit-btn:hover:not(:disabled) { background: #1e7a3f; transform: translateY(-1px); }
        .ct-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        /* WhatsApp quick btn */
        .ct-wa-btn {
          display: flex; align-items: center; gap: 10px;
          background: #25D366; color: #fff; border-radius: 2px;
          padding: 13px 20px; text-decoration: none;
          font-size: 12px; font-weight: 500; letter-spacing: 0.5px;
          transition: background 0.2s, transform 0.15s;
          border: none; cursor: pointer;
        }
        .ct-wa-btn:hover { background: #1fba57; transform: translateY(-1px); }

        /* Hours row */
        .ct-hours-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 0; border-bottom: 1px solid rgba(39,155,81,0.08);
        }
        .ct-hours-row:last-child { border-bottom: none; }

        /* Map placeholder */
        .ct-map {
          width: 100%; border-radius: 3px; overflow: hidden;
          border: 1px solid rgba(39,155,81,0.15);
          position: relative;
        }

        /* Spinner */
        @keyframes ct-spin { to { transform: rotate(360deg); } }
        .ct-spinner {
          width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: ct-spin 0.7s linear infinite;
        }
      `}</style>

      <div className="ct-font" id="contact">
        <PageHero
          title="Get in"
          titleEm="Touch"
          subtitle="Contact Us"
          breadcrumb="Contact"
          image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        />

        <section className="py-16" style={{ background: "#f7f5f0" }}>
          <div className="max-w-7xl mx-auto px-6">

            {/* ── Info cards ── */}
            <div className="text-center mb-10">
              <div className="ct-eyebrow">Reach Us</div>
              <h2 className="ct-serif" style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.1 }}>
                We're Here to <em style={{ fontStyle: "italic", color: "#279B51" }}>Help</em>
              </h2>
              <p style={{ fontSize: 13.5, color: "#6b7280", maxWidth: 480, margin: "10px auto 0", lineHeight: 1.75 }}>
                Whether you need a free quote, have a service question, or want to book a site visit — our team is ready.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
              {contactInfo.map(({ icon: Icon, label, lines, action }) => (
                <div key={label} className="ct-info-card">
                  <div className="ct-info-icon"><Icon size={20} /></div>
                  <div style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>
                    {label}
                  </div>
                  {lines.map((line, i) => (
                    <div key={i} style={{ fontSize: 14, color: "#374151", lineHeight: 1.6, fontWeight: i === 0 ? 500 : 400 }}>
                      {line}
                    </div>
                  ))}
                  <a href={action.href} target="_blank" rel="noopener noreferrer" className="ct-info-link">
                    {action.label} →
                  </a>
                </div>
              ))}
            </div>

            {/* ── Main section: form + sidebar ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Form */}
              <div className="lg:col-span-2">
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, overflow: "hidden", position: "relative" }}>
                  {/* Top rule */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />

                  {/* Form header */}
                  <div style={{ padding: "28px 32px 0" }}>
                    <h3 className="ct-serif" style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#0f2d4a", marginBottom: 6 }}>
                      Send Us a <em style={{ fontStyle: "italic", color: "#279B51" }}>Message</em>
                    </h3>
                    <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 28 }}>
                      Fill in the form and our team will get back to you within a few hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div style={{ padding: "48px 32px 40px", textAlign: "center" }}>
                      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(39,155,81,0.1)", border: "2px solid rgba(39,155,81,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                        <CheckCircle size={28} style={{ color: "#279B51" }} />
                      </div>
                      <h4 className="ct-serif" style={{ fontSize: 24, fontWeight: 700, color: "#0f2d4a", marginBottom: 10 }}>
                        Message Received!
                      </h4>
                      <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.75, maxWidth: 360, margin: "0 auto 24px" }}>
                        Thank you for reaching out. One of our team members will contact you shortly.
                      </p>
                      <button
                        onClick={() => { setForm(initialForm); setSubmitted(false); }}
                        style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase", color: "#279B51", background: "none", border: "1px solid rgba(39,155,81,0.3)", borderRadius: 2, padding: "8px 20px", cursor: "pointer" }}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate style={{ padding: "0 32px 32px" }}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="ct-label">Full Name *</label>
                          <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Ahmed Khan" className={`ct-input ${errors.name ? "ct-input-error" : ""}`} />
                          {errors.name && <p className="ct-error-msg">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="ct-label">Phone Number *</label>
                          <input name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 0321-2508451" className={`ct-input ${errors.phone ? "ct-input-error" : ""}`} />
                          {errors.phone && <p className="ct-error-msg">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="ct-label">Email Address</label>
                          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="e.g. you@example.com" className="ct-input" />
                        </div>
                        <div>
                          <label className="ct-label">Service Required *</label>
                          <select name="service" value={form.service} onChange={handleChange} className={`ct-select ${errors.service ? "ct-input-error" : ""}`}>
                            <option value="">Select a service…</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                          {errors.service && <p className="ct-error-msg">{errors.service}</p>}
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="ct-label">Your Message *</label>
                        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your property, gate type, or any specific requirements…" className={`ct-textarea ${errors.message ? "ct-input-error" : ""}`} />
                        {errors.message && <p className="ct-error-msg">{errors.message}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button type="submit" className="ct-submit-btn" disabled={sending}>
                          {sending ? <span className="ct-spinner" /> : <Send size={14} />}
                          {sending ? "Sending…" : "Send Message"}
                        </button>
                        <a href="https://wa.me/923212508451" target="_blank" rel="noopener noreferrer" className="ct-wa-btn">
                          <MessageCircle size={16} />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Opening hours */}
                <div style={{ background: "#0a1628", borderRadius: 3, overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                  <div style={{ padding: "20px 20px 8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                      <Clock size={15} style={{ color: "#279B51" }} />
                      <h4 className="ct-serif" style={{ fontSize: 17, fontWeight: 600, color: "#f0ece4", margin: 0 }}>Business Hours</h4>
                    </div>
                    {hours.map(({ day, time }) => (
                      <div key={day} className="ct-hours-row">
                        <span style={{ fontSize: 12.5, color: "rgba(240,236,228,0.6)" }}>{day}</span>
                        <span style={{ fontSize: 12.5, color: time === "Closed" ? "#ef4444" : "#279B51", fontWeight: 500 }}>{time}</span>
                      </div>
                    ))}
                    <p style={{ fontSize: 11, color: "rgba(240,236,228,0.3)", marginTop: 12, marginBottom: 16, lineHeight: 1.6 }}>
                      Emergency service calls are handled on a case-by-case basis outside working hours.
                    </p>
                  </div>
                </div>

                {/* Quick contact */}
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                  <div style={{ padding: "20px" }}>
                    <h4 className="ct-serif" style={{ fontSize: 17, fontWeight: 600, color: "#0f2d4a", marginBottom: 16 }}>Quick Contact</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <a href="tel:02135244550" style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: "rgba(39,155,81,0.05)", border: "1px solid rgba(39,155,81,0.15)", borderRadius: 2, textDecoration: "none", transition: "all 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#279B51"; e.currentTarget.style.background = "rgba(39,155,81,0.1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(39,155,81,0.15)"; e.currentTarget.style.background = "rgba(39,155,81,0.05)"; }}
                      >
                        <Phone size={14} style={{ color: "#279B51", flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: "0.5px", textTransform: "uppercase" }}>Call</div>
                          <div style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>021-35244550</div>
                        </div>
                      </a>
                      <a href="https://wa.me/923212508451" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: "rgba(37,211,102,0.06)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: 2, textDecoration: "none", transition: "all 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#25D366"; e.currentTarget.style.background = "rgba(37,211,102,0.12)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(37,211,102,0.2)"; e.currentTarget.style.background = "rgba(37,211,102,0.06)"; }}
                      >
                        <MessageCircle size={14} style={{ color: "#25D366", flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: "0.5px", textTransform: "uppercase" }}>WhatsApp</div>
                          <div style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>0321-2508451</div>
                        </div>
                      </a>
                      <a href="mailto:info@safetylinks.org" style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: "rgba(39,155,81,0.05)", border: "1px solid rgba(39,155,81,0.15)", borderRadius: 2, textDecoration: "none", transition: "all 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#279B51"; e.currentTarget.style.background = "rgba(39,155,81,0.1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(39,155,81,0.15)"; e.currentTarget.style.background = "rgba(39,155,81,0.05)"; }}
                      >
                        <Mail size={14} style={{ color: "#279B51", flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: "0.5px", textTransform: "uppercase" }}>Email</div>
                          <div style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>info@safetylinks.org</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

              </aside>
            </div>

            {/* ── Google Map ── */}
            <div className="ct-map mt-10" style={{ height: 380 }}>
              <iframe
                title="Safety Links Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.9!2d67.0833!3d24.8138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzQ5LjciTiA2N8KwMDUnMDAuMCJF!5e0!3m2!1sen!2spk!4v1234567890"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
