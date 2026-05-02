"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import PageHero from "@/components/Projects/PageHero";

const categories = ["All", "Swing Gates", "Sliding Gates", "Roller Shutters", "Glass Doors", "Barrier Gates"];

const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Cities Covered",     value: "5+"   },
  { label: "Commercial Clients", value: "200+" },
  { label: "Years Active",       value: "10+"  },
];

const works = [
  {
    id: 1, category: "Swing Gates", year: "2025", tall: true,
    title: "DHA Residence, Phase V",
    location: "DHA Phase V, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2025/04/swing.jpg",
  },
  {
    id: 2, category: "Sliding Gates", year: "2025",
    title: "Commercial Complex",
    location: "Clifton, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2025/04/sliding.jpg",
  },
  {
    id: 3, category: "Glass Doors", year: "2024",
    title: "Corporate Office Entrance",
    location: "PECHS, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2014/08/IMG_20240603_171658_399-1-1-scaled.jpg",
  },
  {
    id: 4, category: "Roller Shutters", year: "2024",
    title: "Industrial Warehouse",
    location: "Korangi Industrial Area",
    image: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg",
  },
  {
    id: 5, category: "Barrier Gates", year: "2023", tall: true,
    title: "Shopping Mall Car Park",
    location: "Dolmen Mall, Karachi",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    id: 6, category: "Swing Gates", year: "2024",
    title: "Gated Community Entrance",
    location: "Bahria Town, Karachi",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 7, category: "Sliding Gates", year: "2023",
    title: "Pharmaceutical Factory",
    location: "SITE Area, Karachi",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    id: 8, category: "Roller Shutters", year: "2023",
    title: "Retail Strip",
    location: "Tariq Road, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg",
  },
  {
    id: 9, category: "Swing Gates", year: "2022",
    title: "School Campus",
    location: "Gulshan-e-Iqbal, Karachi",
    image: "https://safetylinks.org/wp-content/uploads/2025/04/swing.jpg",
  },
];

export default function OurWorkSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? works : works.filter((w) => w.category === active);
  // Only apply tall (span-2) when showing All — avoids gaps in filtered views
  const isAll = active === "All";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .ow-font  { font-family: 'DM Sans', sans-serif; }
        .ow-serif { font-family: 'Cormorant Garamond', serif; }

        /* Stats strip */
        .ow-stat-item {
          padding: 16px 20px;
          text-align: center;
          border-right: 1px solid rgba(39,155,81,0.1);
          position: relative;
          overflow: hidden;
          transition: background 0.2s;
        }
        .ow-stat-item:last-child { border-right: none; }
        .ow-stat-item:hover { background: rgba(39,155,81,0.04); }
        .ow-stat-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, #279B51, #123A65);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .ow-stat-item:hover::after { transform: scaleX(1); }

        /* Filter buttons */
        .ow-filter {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 7px 15px;
          border-radius: 2px;
          border: 1px solid rgba(39,155,81,0.22);
          background: transparent;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ow-filter:hover { border-color: #279B51; color: #279B51; }
        .ow-filter-active { background: #279B51 !important; color: #fff !important; border-color: #279B51 !important; }

        /* Gallery cards */
        .ow-card {
          position: relative;
          overflow: hidden;
          border-radius: 3px;
          background: #d1cdc5;
          cursor: default;
        }
        .ow-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease, filter 0.4s ease;
          min-height: 200px;
          display: block;
        }
        .ow-card:hover .ow-card-img { transform: scale(1.07); filter: brightness(0.78); }
        .ow-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,18,40,0.85) 0%, rgba(8,18,40,0.15) 55%, transparent 100%);
        }
        .ow-card-line {
          position: absolute; top: 0; left: 0;
          width: 3px; height: 0;
          background: #279B51;
          transition: height 0.45s ease;
          z-index: 2;
        }
        .ow-card:hover .ow-card-line { height: 100%; }
        .ow-badge-cat {
          position: absolute; top: 12px; left: 12px; z-index: 3;
          font-size: 9.5px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; color: #fff;
          background: rgba(39,155,81,0.88);
          padding: 3px 9px; border-radius: 2px;
          display: inline-flex; align-items: center; gap: 5px;
        }
        .ow-badge-cat::before {
          content: ''; width: 4px; height: 4px;
          background: #fff; border-radius: 50%; opacity: 0.7;
        }
        .ow-badge-year {
          position: absolute; top: 12px; right: 12px; z-index: 3;
          font-size: 10px; color: rgba(255,255,255,0.75);
          background: rgba(10,22,40,0.6);
          padding: 3px 8px; border-radius: 2px;
          border: 1px solid rgba(255,255,255,0.15);
          letter-spacing: 0.5px;
        }
        .ow-card-body {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 18px 16px; z-index: 3;
          transform: translateY(5px);
          transition: transform 0.3s ease;
        }
        .ow-card:hover .ow-card-body { transform: translateY(0); }

        /* CTA */
        .ow-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #279B51; color: #fff;
          font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 12px 28px;
          border-radius: 2px; text-decoration: none;
          transition: background 0.2s;
        }
        .ow-cta-btn:hover { background: #1e7a3f; }
      `}</style>

      <div className="ow-font">
        <PageHero
          title="Our"
          titleEm="Work"
          subtitle="Gallery"
          breadcrumb="Our Work"
          image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        />

        <section className="py-16" style={{ background: "#f7f5f0" }}>
          <div className="max-w-7xl mx-auto px-6">

            {/* ── Split section header ── */}
            <div
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-7"
              style={{ borderBottom: "1px solid rgba(39,155,81,0.15)" }}
            >
              <div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  color: "#279B51", fontSize: 11, fontWeight: 500,
                  letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 12,
                }}>
                  <span style={{ width: 28, height: 1, background: "#279B51", opacity: 0.6, display: "inline-block" }} />
                  Our Portfolio
                </div>
                <h2
                  className="ow-serif"
                  style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.05 }}
                >
                  Featured{" "}
                  <em style={{ fontStyle: "italic", color: "#279B51" }}>Installations</em>
                </h2>
              </div>
              <div className="flex items-end gap-6 shrink-0">
                <div className="text-right">
                  <div
                    className="ow-serif"
                    style={{ fontSize: 64, fontWeight: 700, color: "rgba(39,155,81,0.1)", lineHeight: 1 }}
                  >
                    {filtered.length}
                  </div>
                  <p style={{ fontSize: 12.5, color: "#9ca3af", maxWidth: 260, lineHeight: 1.7, textAlign: "right" }}>
                    Completed projects across residential, commercial &amp; industrial properties in Karachi.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Stats strip ── */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 mb-10"
              style={{
                background: "#fff",
                border: "1px solid rgba(39,155,81,0.12)",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="ow-stat-item">
                  <div className="ow-serif" style={{ fontSize: 32, fontWeight: 700, color: "#0f2d4a", lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: "0.5px", marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Filters ── */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28, alignItems: "center" }}>
              <span style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#9ca3af", marginRight: 4 }}>
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`ow-filter ${active === cat ? "ow-filter-active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* ── Gallery grid (masonry-style with tall cards) ── */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-14"
              style={{ gap: 16 }}
            >
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="ow-card"
                  style={{
                    gridRow: isAll && item.tall ? "span 2" : "span 1",
                    aspectRatio: isAll && item.tall ? "unset" : "4/3",
                    minHeight: isAll && item.tall ? 416 : 200,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="ow-card-img"
                    style={{ minHeight: isAll && item.tall ? 416 : 200 }}
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"; }}
                  />
                  <div className="ow-card-overlay" />
                  <div className="ow-card-line" />
                  <div className="ow-badge-cat">{item.category}</div>
                  <div className="ow-badge-year">{item.year}</div>
                  <div className="ow-card-body">
                    <h3
                      className="ow-serif"
                      style={{
                        fontSize: isAll && item.tall ? 22 : 19,
                        fontWeight: 600, color: "#f0ece4",
                        lineHeight: 1.2, marginBottom: 5,
                      }}
                    >
                      {item.title}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, color: "rgba(240,236,228,0.6)" }}>
                      <MapPin size={11} style={{ color: "#279B51", flexShrink: 0 }} />
                      {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── CTA Banner ── */}
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
              {/* Top rule */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(to right, #279B51, #123A65)",
              }} />
              {/* Ghost text */}
              <div
                className="ow-serif hidden md:block"
                style={{
                  position: "absolute", bottom: -24, right: 16,
                  fontSize: 96, fontWeight: 700, lineHeight: 1,
                  color: "rgba(255,255,255,0.03)",
                  letterSpacing: -4, userSelect: "none",
                }}
              >
                WORK
              </div>

              <h3
                className="ow-serif"
                style={{ fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 600, color: "#f0ece4", lineHeight: 1.1, marginBottom: 10 }}
              >
                Have a Project{" "}
                <em style={{ fontStyle: "italic", color: "#6ee7a0" }}>in Mind?</em>
              </h3>
              <p style={{ fontSize: 13.5, color: "rgba(240,236,228,0.5)", maxWidth: 440, margin: "0 auto 24px", lineHeight: 1.75 }}>
                Tell us about your property and requirements — we'll design the ideal automated gate solution for you.
              </p>
              <Link href="/contact" className="ow-cta-btn">
                <Phone size={13} /> Get a Free Quote
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}