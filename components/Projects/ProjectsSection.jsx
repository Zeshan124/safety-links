"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import PageHero from "./PageHero";

const categories = ["All", "Swing Gates", "Sliding Gates", "Roller Shutters", "Glass Doors", "Barrier Gates"];

const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Cities Covered", value: "5+" },
  { label: "Commercial Clients", value: "200+" },
  { label: "Years Active", value: "10+" },
];

const projects = [
  {
    id: 1, category: "Swing Gates", year: "2025",
    title: "DHA Residence, Phase V",
    location: "DHA Phase V, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2025/04/swing.jpg",
    desc: "Double-leaf hydraulic swing gate with intercom system and battery backup for a premium villa.",
  },
  {
    id: 2, category: "Sliding Gates", year: "2025",
    title: "Commercial Complex",
    location: "Clifton, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2025/04/sliding.jpg",
    desc: "Heavy-duty sliding gate with loop detector and access card system for a multi-tenant commercial building.",
  },
  {
    id: 3, category: "Glass Doors", year: "2024",
    title: "Corporate Office Entrance",
    location: "PECHS, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2014/08/IMG_20240603_171658_399-1-1-scaled.jpg",
    desc: "Frameless automatic glass door system with motion sensors and emergency break-out feature.",
  },
  {
    id: 4, category: "Roller Shutters", year: "2024",
    title: "Industrial Warehouse",
    location: "Korangi Industrial Area",
    image: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg",
    desc: "Custom 8m wide motorized roller shutter with remote control and manual override for a large warehouse.",
  },
  {
    id: 5, category: "Swing Gates", year: "2024",
    title: "Gated Community Entrance",
    location: "Bahria Town, Karachi",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "Grand double swing gate with guard booth integration, CCTV, and RFID access for a luxury community.",
  },
  {
    id: 6, category: "Sliding Gates", year: "2023",
    title: "Pharmaceutical Factory",
    location: "SITE Area, Karachi",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    desc: "Cantilever sliding gate for a GMP-certified factory requiring dust-free, track-less operation.",
  },
  {
    id: 7, category: "Barrier Gates", year: "2023",
    title: "Shopping Mall Car Park",
    location: "Dolmen Mall, Karachi",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    desc: "12-lane barrier gate system with ANPR cameras, ticketing integration, and LED arms.",
  },
  {
    id: 8, category: "Roller Shutters", year: "2023",
    title: "Retail Strip",
    location: "Tariq Road, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg",
    desc: "Six individual motorized shutters with synchronized timer control for a retail strip.",
  },
  {
    id: 9, category: "Swing Gates", year: "2022",
    title: "School Campus",
    location: "Gulshan-e-Iqbal, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2025/04/swing.jpg",
    desc: "School entrance swing gate with safety stop sensors and bell-schedule-triggered automation.",
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .pgp-font { font-family: 'DM Sans', sans-serif; }
        .pgp-serif { font-family: 'Cormorant Garamond', serif; }
        .pgp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #279B51;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .pgp-eyebrow::before, .pgp-eyebrow::after {
          content: '';
          width: 28px;
          height: 1px;
          background: #279B51;
          opacity: 0.6;
        }
        /* Stat cards */
        .pgp-stat {
          background: #fff;
          border: 1px solid rgba(39,155,81,0.12);
          border-radius: 3px;
          padding: 20px 16px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .pgp-stat::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, #279B51, #123A65);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .pgp-stat:hover { border-color: rgba(39,155,81,0.3); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(39,155,81,0.08); }
        .pgp-stat:hover::after { transform: scaleX(1); }
        /* Filter buttons */
        .pgp-filter {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 2px;
          border: 1px solid rgba(39,155,81,0.25);
          background: transparent;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pgp-filter:hover { border-color: #279B51; color: #279B51; }
        .pgp-filter-active { background: #279B51 !important; color: #fff !important; border-color: #279B51 !important; }
        /* Project cards */
        .pgp-card {
          background: #fff;
          border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .pgp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(18,58,101,0.12);
          border-color: rgba(39,155,81,0.28);
        }
        .pgp-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .pgp-card:hover .pgp-card-img { transform: scale(1.06); }
        .pgp-deco-line {
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 0;
          background: #279B51;
          transition: height 0.4s ease;
          z-index: 2;
        }
        .pgp-card:hover .pgp-deco-line { height: 100%; }
        .pgp-badge-cat {
          position: absolute;
          top: 12px; left: 12px;
          z-index: 2;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #fff;
          background: rgba(39,155,81,0.85);
          padding: 3px 9px;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .pgp-badge-cat::before {
          content: '';
          width: 4px; height: 4px;
          background: #fff;
          border-radius: 50%;
          opacity: 0.7;
        }
        .pgp-badge-year {
          position: absolute;
          top: 12px; right: 12px;
          z-index: 2;
          font-size: 10px;
          color: rgba(255,255,255,0.7);
          background: rgba(10,22,40,0.55);
          padding: 3px 8px;
          border-radius: 2px;
          letter-spacing: 0.5px;
          border: 1px solid rgba(255,255,255,0.15);
        }
        /* CTA */
        .pgp-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #279B51;
          color: #fff;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 12px 28px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .pgp-cta-btn:hover { background: #1e7a3f; }
      `}</style>

      <div className="pgp-font">
        <PageHero
          title="Our"
          titleEm="Projects"
          subtitle="Portfolio"
          breadcrumb="Projects"
          image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
        />

        <section className="py-16" style={{ background: "#f7f5f0" }}>
          <div className="max-w-7xl mx-auto px-6">

            {/* Section eyebrow */}
            <div className="text-center mb-2">
              <div className="pgp-eyebrow">Our Portfolio</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {stats.map((s) => (
                <div key={s.label} className="pgp-stat">
                  <div
                    className="pgp-serif"
                    style={{ fontSize: 38, fontWeight: 700, color: "#0f2d4a", lineHeight: 1 }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 10.5, color: "#9ca3af", letterSpacing: "0.5px", marginTop: 5 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`pgp-filter ${active === cat ? "pgp-filter-active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {filtered.map((project) => (
                <div key={project.id} className="pgp-card">
                  {/* Image */}
                  <div style={{ position: "relative", height: 188, overflow: "hidden", background: "#e0dcd4" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="pgp-card-img"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80";
                      }}
                    />
                    {/* Overlay */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 55%)",
                    }} />
                    <div className="pgp-deco-line" />
                    <div className="pgp-badge-cat">{project.category}</div>
                    <div className="pgp-badge-year">{project.year}</div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: "18px 20px 20px" }}>
                    <h3
                      className="pgp-serif"
                      style={{ fontSize: 19, fontWeight: 600, color: "#0f2d4a", lineHeight: 1.2, marginBottom: 5 }}
                    >
                      {project.title}
                    </h3>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, color: "#9ca3af", marginBottom: 10 }}
                    >
                      <MapPin size={11} style={{ color: "#279B51", flexShrink: 0 }} />
                      {project.location}
                    </div>
                    <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.7 }}>{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div
              style={{
                background: "#0a1628",
                borderRadius: 3,
                padding: "52px 40px",
                textAlign: "center",
                border: "1px solid rgba(39,155,81,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top green rule */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(to right, #279B51, #123A65)",
              }} />
              {/* Ghost text */}
              <div
                className="pgp-serif hidden md:block"
                style={{
                  position: "absolute", bottom: -20, right: 20,
                  fontSize: 100, fontWeight: 700, lineHeight: 1,
                  color: "rgba(255,255,255,0.03)",
                  letterSpacing: -4, userSelect: "none",
                }}
              >
                CTA
              </div>

              <h3
                className="pgp-serif"
                style={{ fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 600, color: "#f0ece4", lineHeight: 1.1, marginBottom: 10 }}
              >
                Have a Project{" "}
                <em style={{ fontStyle: "italic", color: "#6ee7a0" }}>in Mind?</em>
              </h3>
              <p style={{ fontSize: 13.5, color: "rgba(240,236,228,0.5)", maxWidth: 440, margin: "0 auto 24px", lineHeight: 1.75 }}>
                Tell us about your property and requirements — we'll design the ideal automated gate solution for you.
              </p>
              <Link href="/contact" className="pgp-cta-btn">
                <Phone size={13} /> Get a Free Quote
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}