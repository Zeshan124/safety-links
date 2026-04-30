"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown, Shield, Star, Users } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    tag: "Karachi's Most Trusted",
    title: ["Automatic ", <em key="e">Gate</em>, " Solutions"],
    description:
      "Complete residential and commercial security with premium automatic swing and sliding gate systems built to last.",
    cta: "Explore Services",
    href: "#services",
  },
  {
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    tag: "Expert Engineers",
    title: ["Professional ", <em key="e">Installation</em>],
    description:
      "Our certified technicians handle every project from design through installation and long-term maintenance.",
    cta: "View Projects",
    href: "#projects",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    tag: "Modern Technology",
    title: ["Advanced ", <em key="e">Security</em>, " Systems"],
    description:
      "Remote control access, safety sensors, intercom systems, and high-performance automation motors.",
    cta: "Our Work",
    href: "#our-work",
  },
];

const stats = [
  { icon: Shield, label: "Projects Completed", value: "500+" },
  { icon: Star, label: "Years of Experience", value: "10+" },
  { icon: Users, label: "Happy Clients", value: "300+" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx) => {
    setCurrent((idx + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: 600, background: "#0a1628", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Import fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        .hero-title-el { font-family: 'Cormorant Garamond', serif; }
        .hero-title-el em { font-style: italic; color: #279B51; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-tag   { animation: fadeUp 0.6s 0.10s both ease; }
        .anim-title { animation: fadeUp 0.7s 0.25s both ease; }
        .anim-desc  { animation: fadeUp 0.7s 0.40s both ease; }
        .anim-btns  { animation: fadeUp 0.7s 0.55s both ease; }
      `}</style>

      {/* Decorative left line */}
      <div
        className="absolute left-0 top-0 z-10 w-1"
        style={{
          bottom: 80,
          background: "linear-gradient(to bottom, transparent, #279B51 30%, #279B51 70%, transparent)",
          opacity: 0.5,
        }}
      />

      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-900"
          style={{ opacity: idx === current ? 1 : 0, transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-cover"
            style={{ transform: idx === current ? "scale(1)" : "scale(1.05)", transition: "transform 7s ease-out" }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(8,18,40,0.92) 0%, rgba(8,18,40,0.65) 55%, rgba(8,18,40,0.2) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(8,18,40,0.85) 0%, transparent 40%)" }}
          />
        </div>
      ))}

      {/* Slide counter */}
      <div
        className="absolute right-12 top-9 z-20"
        style={{ color: "rgba(240,236,228,0.5)", fontFamily: "'Cormorant Garamond', serif", fontSize: 14 }}
      >
        <span style={{ color: "#279B51", fontSize: 22, fontWeight: 600 }}>
          {String(current + 1).padStart(2, "0")}
        </span>{" "}
        / 03
      </div>

      {/* Main content */}
      <div
        key={animKey}
        className="relative z-10 h-full flex flex-col justify-center"
        style={{ padding: "0 48px 80px" }}
      >
        <div style={{ maxWidth: 560 }}>
          {/* Tag */}
          <div
            className="anim-tag"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(39, 155, 81, 0.15)",
              border: "1px solid rgba(39, 155, 81, 0.4)",
              color: "#279B51",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: 2,
              marginBottom: 20,
            }}
          >
            <span style={{ width: 18, height: 1, background: "#279B51", display: "inline-block" }} />
            {slides[current].tag}
          </div>

          {/* Title */}
          <h1
            className="hero-title-el anim-title"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 700,
              color: "#f0ece4",
              lineHeight: 1.05,
              letterSpacing: "-1px",
              marginBottom: 18,
            }}
          >
            {slides[current].title}
          </h1>

          {/* Description */}
          <p
            className="anim-desc"
            style={{
              fontSize: 15,
              color: "rgba(240,236,228,0.65)",
              lineHeight: 1.75,
              maxWidth: 420,
              marginBottom: 32,
              fontWeight: 300,
            }}
          >
            {slides[current].description}
          </p>

          {/* Buttons */}
          <div className="anim-btns" style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => handleScroll(slides[current].href)}
              style={{
                background: "#279B51",
                color: "#fff",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "13px 28px",
                border: "none",
                borderRadius: 2,
                cursor: "pointer",
              }}
            >
              {slides[current].cta}
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              style={{
                background: "transparent",
                color: "#f0ece4",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "13px 28px",
                border: "1px solid rgba(240,236,228,0.3)",
                borderRadius: 2,
                cursor: "pointer",
              }}
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Vertical nav arrows */}
      <div
        className="absolute z-20"
        style={{ right: 48, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 8 }}
      >
        {[
          { Icon: ChevronUp, action: () => goTo(current - 1) },
          { Icon: ChevronDown, action: () => goTo(current + 1) },
        ].map(({ Icon, action }, i) => (
          <button
            key={i}
            onClick={action}
            style={{
              width: 44,
              height: 44,
              background: "rgba(240,236,228,0.08)",
              border: "1px solid rgba(240,236,228,0.18)",
              color: "#f0ece4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              borderRadius: 2,
            }}
          >
            <Icon size={16} />
          </button>
        ))}
      </div>

      {/* Progress dots */}
      <div
        className="absolute z-20"
        style={{ bottom: 88, left: 48, display: "flex", gap: 6, alignItems: "center" }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              height: 2,
              width: idx === current ? 48 : 24,
              background: idx === current ? "#279B51" : "rgba(240,236,228,0.25)",
              borderRadius: 1,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{ borderTop: "1px solid rgba(196,158,68,0.2)", background: "rgba(8,18,40,0.85)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            height: 78,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "0 32px",
                borderRight: i < 2 ? "1px solid rgba(196,158,68,0.15)" : "none",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid rgba(196,158,68,0.35)",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#279B51",
                  flexShrink: 0,
                }}
              >
                <stat.icon size={16} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#f0ece4",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 11, color: "rgba(240,236,228,0.45)", letterSpacing: "0.5px", marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}