"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle, Shield } from "lucide-react";
import Link from "next/link";

const services = [
  { label: "Swing Gates", href: "/services#swing-gates" },
  { label: "Sliding Gates", href: "/services#sliding-gates" },
  { label: "Glass Door Automation", href: "/services#automatic-glass-door" },
  { label: "Roller Shutter Systems", href: "/services#roller-shutter-motorize-shutter" },
  { label: "High Speed PVC Doors", href: "/services#high-speed-pvc-rolling-door" },
  { label: "Barrier Gates", href: "/services#barrier-gates" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Work", href: "/our-work" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    content: "12-C Mezzanine Floor, Street 07 Badar Commercial, DHA Phase V, Karachi",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: [
      { text: "021-35244550", href: "tel:02135244550" },
      { text: "0321-2508451", href: "tel:03212508451" },
      { text: "0321-2508452", href: "tel:03212508452" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [{ text: "info@safetylinks.org", href: "mailto:info@safetylinks.org" }],
  },
  {
    icon: Clock,
    label: "Hours",
    content: "Mon–Sat: 10:00 AM – 6:00 PM",
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .ft-font { font-family: 'DM Sans', sans-serif; }
        .ft-serif { font-family: 'Cormorant Garamond', serif; }
        .ft-nav-link {
          display: block;
          font-size: 12.5px;
          color: rgba(240,236,228,0.5);
          text-decoration: none;
          padding: 5px 0;
          padding-left: 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: all 0.15s ease;
        }
        .ft-nav-link:hover { color: #279B51; padding-left: 6px; }
        .ft-contact-val {
          font-size: 12.5px;
          color: rgba(240,236,228,0.6);
          text-decoration: none;
          display: block;
          line-height: 1.7;
          transition: color 0.15s;
        }
        .ft-contact-val:hover { color: #279B51; }
        .ft-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #279B51;
          color: #fff;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 10px 18px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .ft-wa-btn:hover { background: #1e7a3f; }
        .ft-cta-solid {
          background: #fff;
          color: #279B51;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 11px 22px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
          white-space: nowrap;
        }
        .ft-cta-solid:hover { background: #f0f0f0; }
        .ft-cta-outline {
          background: transparent;
          color: #fff;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 11px 22px;
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          white-space: nowrap;
        }
        .ft-cta-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
        .ft-col-title {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #279B51;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ft-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(39,155,81,0.2);
        }
      `}</style>

      <footer className="ft-font">

        {/* ── CTA Banner ── */}
        <div
          style={{
            background: "#279B51",
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div>
            <h3
              className="ft-serif"
              style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 600, color: "#fff", lineHeight: 1.2, marginBottom: 4 }}
            >
              Ready to <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.75)" }}>Secure</em> Your Property?
            </h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.72)" }}>
              Get a free site survey and customized quote — no obligation.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
            <a href="tel:02135244550" className="ft-cta-solid">Call Now</a>
            <Link href="/contact" className="ft-cta-outline">Free Quote</Link>
          </div>
        </div>

        {/* ── Main Footer ── */}
        <div style={{ background: "#0a1628", padding: "56px 40px 0" }}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            style={{ marginBottom: 48 }}
          >

            {/* Brand column */}
            <div>
              <div style={{
                width: 40, height: 40,
                border: "1px solid rgba(39,155,81,0.4)",
                borderRadius: 2,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(39,155,81,0.08)",
                marginBottom: 14,
              }}>
                <Shield size={18} style={{ color: "#279B51" }} />
              </div>
              <div className="ft-serif" style={{ fontSize: 19, fontWeight: 600, color: "#f0ece4", lineHeight: 1, marginBottom: 3 }}>
                Safety Links
              </div>
              <div style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: "#279B51", marginBottom: 14 }}>
                Automatic Gates Solution
              </div>
              <p style={{ fontSize: 13, color: "rgba(240,236,228,0.5)", lineHeight: 1.75, marginBottom: 20 }}>
                Complete residential and commercial security solutions. Specializing in automatic gate installation and maintenance across Karachi since 2014.
              </p>
              <a
                href="https://web.whatsapp.com/send?phone=923212508452"
                target="_blank"
                rel="noopener noreferrer"
                className="ft-wa-btn"
              >
                <MessageCircle size={14} /> WhatsApp Us
              </a>
            </div>

            {/* Services column */}
            <div>
              <div className="ft-col-title">Our Services</div>
              {services.map((s) => (
                <Link key={s.label} href={s.href} className="ft-nav-link">{s.label}</Link>
              ))}
            </div>

            {/* Quick links column */}
            <div>
              <div className="ft-col-title">Quick Links</div>
              {quickLinks.map((l) => (
                <Link key={l.label} href={l.href} className="ft-nav-link">{l.label}</Link>
              ))}
            </div>

            {/* Contact column */}
            <div>
              <div className="ft-col-title">Contact Info</div>
              {contactItems.map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 30, height: 30,
                    border: "1px solid rgba(39,155,81,0.25)",
                    borderRadius: 2,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "#279B51", marginTop: 1,
                  }}>
                    <item.icon size={13} />
                  </div>
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(240,236,228,0.3)", marginBottom: 3 }}>
                      {item.label}
                    </div>
                    {item.content && (
                      <span style={{ fontSize: 12.5, color: "rgba(240,236,228,0.6)", lineHeight: 1.7 }}>
                        {item.content}
                      </span>
                    )}
                    {item.lines?.map((line) => (
                      <a key={line.text} href={line.href} className="ft-contact-val">{line.text}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative rule */}
          <div style={{
            width: "100%", height: 1,
            background: "linear-gradient(to right, rgba(39,155,81,0.4), rgba(18,58,101,0.4), transparent)",
            marginBottom: 24,
          }} />

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              paddingBottom: 24,
            }}
          >
            <span style={{ fontSize: 11, color: "rgba(240,236,228,0.3)", letterSpacing: "0.3px" }}>
              © 2026 <span style={{ color: "rgba(39,155,81,0.7)" }}>Safety Links</span> Automatic Gates Solution. All Rights Reserved.
            </span>
            <span className="ft-serif" style={{ fontSize: 13, fontStyle: "italic", color: "rgba(240,236,228,0.2)" }}>
              Automatic Gate Solutions in Pakistan
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}