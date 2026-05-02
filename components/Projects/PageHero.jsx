"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({ title, subtitle, breadcrumb, image, titleEm }) {
  // titleEm lets you optionally split the title for italic emphasis
  // e.g. title="Featured" titleEm="Projects" renders: Featured <em>Projects</em>
  // Falls back to rendering the full title normally if titleEm is not provided

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .ph-font { font-family: 'DM Sans', sans-serif; }
        .ph-serif { font-family: 'Cormorant Garamond', serif; }
        .ph-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.04);
        }
        .ph-breadcrumb-link {
          color: rgba(240,236,228,0.45);
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .ph-breadcrumb-link:hover { color: #279B51; }
        .ph-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(39,155,81,0.15);
          border: 1px solid rgba(39,155,81,0.4);
          color: #6ee7a0;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 2px;
          margin-bottom: 14px;
          width: fit-content;
        }
        .ph-tag::before {
          content: '';
          width: 14px;
          height: 1px;
          background: #6ee7a0;
          opacity: 0.8;
        }
        .ph-rule {
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #279B51, transparent);
          margin-top: 16px;
          animation: ph-grow 0.8s 0.3s forwards ease-out;
          border-radius: 1px;
        }
        @keyframes ph-grow { to { width: 80px; } }
      `}</style>

      <div className="ph-font relative overflow-hidden" style={{ height: "clamp(240px, 30vw, 360px)" }}>

        {/* Background image */}
        <img
          className="ph-img"
          src={image || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"}
          alt={title}
        />

        {/* Gradient overlays */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.65) 55%, rgba(10,22,40,0.25) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 50%)",
        }} />

        {/* Left green accent line */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 4,
          background: "linear-gradient(to bottom, transparent, #279B51 25%, #279B51 75%, transparent)",
          opacity: 0.7,
        }} />

        {/* Ghost background text */}
        <div
          className="ph-serif hidden md:block"
          style={{
            position: "absolute", right: 48, top: "50%", transform: "translateY(-50%)",
            fontSize: 100, fontWeight: 700, lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            letterSpacing: -4, userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          {(breadcrumb || title || "").toUpperCase()}
        </div>

        {/* Bottom-right corner bracket */}
        <div style={{
          position: "absolute", bottom: 20, right: 40,
          width: 48, height: 48,
          borderBottom: "2px solid rgba(39,155,81,0.3)",
          borderRight: "2px solid rgba(39,155,81,0.3)",
          borderRadius: "0 0 2px 0",
        }} />

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col justify-center"
          style={{ padding: "0 48px", maxWidth: "100%" }}
        >
          {/* Breadcrumb */}
          <div
            className="flex items-center gap-1.5"
            style={{ color: "rgba(240,236,228,0.45)", fontSize: 11, letterSpacing: "0.5px", marginBottom: 16 }}
          >
            <Link href="/" className="ph-breadcrumb-link">Home</Link>
            <ChevronRight size={12} style={{ opacity: 0.5 }} />
            <span style={{ color: "rgba(240,236,228,0.75)" }}>{breadcrumb || title}</span>
          </div>

          {/* Subtitle tag */}
          {subtitle && (
            <div className="ph-tag">{subtitle}</div>
          )}

          {/* Title */}
          <h1
            className="ph-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: 700,
              color: "#f0ece4",
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
            }}
          >
            {titleEm ? (
              <>
                {title} <em style={{ fontStyle: "italic", color: "#6ee7a0" }}>{titleEm}</em>
              </>
            ) : (
              title
            )}
          </h1>

          {/* Animated rule */}
          <div className="ph-rule" />
        </div>
      </div>
    </>
  );
}