"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const categories = ["All", "Swing Gates", "Sliding Gates", "Roller Shutters", "Glass Doors"];

const projects = [
  {
    id: 1,
    category: "Swing Gates",
    title: "DHA Residence, Phase V",
    location: "Karachi",
    image: "/images/home/Swing_Gates_DHA.jpeg",
    number: "01",
  },
  {
    id: 2,
    category: "Sliding Gates",
    title: "Commercial Complex",
    location: "Clifton, Karachi",
    image: "/images/home/Sliding_door_1.jpeg",
    number: "02",
  },
  {
    id: 3,
    category: "Glass Doors",
    title: "Corporate Office Entrance",
    location: "PECHS, Karachi",
    image: "/images/home/sensor_glass_door.jpg",
    number: "03",
  },
  {
    id: 4,
    category: "Roller Shutters",
    title: "Industrial Warehouse",
    location: "Korangi Industrial Area",
    image: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg",
    number: "04",
  },
  {
    id: 5,
    category: "Swing Gates",
    title: "Gated Community",
    location: "Bahria Town, Karachi",
    image: "/images/home/Swing_Gates_Bahria.jpeg",
    number: "05",
  },
  {
    id: 6,
    category: "Sliding Gates",
    title: "Pharmaceutical Factory",
    location: "SITE Area, Karachi",
    image: "/images/home/sliding_door_2.jpeg",
    number: "06",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((/** @type {{ category: string }} */ p) => p.category === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .pj-font { font-family: 'DM Sans', sans-serif; }
        .pj-serif { font-family: 'Cormorant Garamond', serif; }
        .pj-eyebrow {
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
        .pj-eyebrow::before, .pj-eyebrow::after {
          content: '';
          width: 28px;
          height: 1px;
          background: #279B51;
          opacity: 0.6;
        }
        .pj-filter-btn {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 2px;
          border: 1px solid rgba(39,155,81,0.25);
          background: transparent;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pj-filter-btn:hover { border-color: #279B51; color: #279B51; }
        .pj-filter-active {
          background: #279B51 !important;
          color: #fff !important;
          border-color: #279B51 !important;
        }
        .pj-card {
          position: relative;
          overflow: hidden;
          border-radius: 3px;
          aspect-ratio: 4/3;
          background: #e0dcd4;
          cursor: pointer;
        }
        .pj-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease, filter 0.4s ease;
        }
        .pj-card:hover .pj-card-img {
          transform: scale(1.07);
          filter: brightness(0.82);
        }
        .pj-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.2) 50%, transparent 100%);
        }
        .pj-deco-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 0;
          background: #279B51;
          transition: height 0.4s ease;
          z-index: 2;
        }
        .pj-card:hover .pj-deco-line { height: 100%; }
        .pj-card-num {
          position: absolute;
          top: 14px;
          right: 16px;
          font-size: 32px;
          font-weight: 600;
          color: rgba(255,255,255,0.12);
          line-height: 1;
          transition: color 0.3s;
          z-index: 2;
        }
        .pj-card:hover .pj-card-num { color: rgba(255,255,255,0.22); }
        .pj-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 18px;
          z-index: 2;
          transform: translateY(4px);
          transition: transform 0.3s ease;
        }
        .pj-card:hover .pj-card-body { transform: translateY(0); }
        .pj-cat-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #fff;
          background: rgba(39,155,81,0.85);
          padding: 3px 9px;
          border-radius: 2px;
          margin-bottom: 8px;
        }
        .pj-cat-badge::before {
          content: '';
          width: 5px;
          height: 5px;
          background: #fff;
          border-radius: 50%;
          opacity: 0.7;
          flex-shrink: 0;
        }
      `}</style>

      <section id="projects" className="pj-font py-24" style={{ background: "#f7f5f0" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="pj-eyebrow">Our Portfolio</div>
            <h2
              className="pj-serif"
              style={{ fontSize: "clamp(30px, 4vw, 40px)", fontWeight: 600, color: "#0f2d4a", lineHeight: 1.1, marginBottom: 14 }}
            >
              Featured <em style={{ fontStyle: "italic", color: "#279B51" }}>Projects</em>
            </h2>
            <p style={{ fontSize: 14, color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
              A showcase of completed installations across residential, commercial, and industrial properties in Karachi.
            </p>
            <div style={{ width: 48, height: 2, background: "linear-gradient(to right, #279B51, #123A65)", margin: "20px auto 0", borderRadius: 1 }} />
          </div>

          {/* Filter buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 36 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`pj-filter-btn ${active === cat ? "pj-filter-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <div key={project.id} className="pj-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="pj-card-img"
                  onError={(e) => {
                    /** @type {HTMLImageElement} */ (e.target).src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80";
                  }}
                />
                <div className="pj-card-overlay" />
                <div className="pj-deco-line" />
                <div className="pj-card-num pj-serif">{project.number}</div>
                <div className="pj-card-body">
                  <div className="pj-cat-badge">{project.category}</div>
                  <h3
                    className="pj-serif"
                    style={{ fontSize: 19, fontWeight: 600, color: "#fff", lineHeight: 1.2, marginBottom: 5 }}
                  >
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, color: "rgba(255,255,255,0.6)" }}>
                    <MapPin size={11} style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}