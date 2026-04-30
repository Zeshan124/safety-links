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

  const goTo = useCallback((/** @type {number} */ idx) => {
    setCurrent((idx + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const handleScroll = (/** @type {string} */ href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden h-screen min-h-[600px] bg-[#0a1628]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
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
        className="absolute left-0 top-0 z-10 w-1 bottom-20 opacity-50"
        style={{ background: "linear-gradient(to bottom, transparent, #279B51 30%, #279B51 70%, transparent)" }}
      />

      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0"
          style={{ opacity: idx === current ? 1 : 0, transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-cover"
            style={{ transform: idx === current ? "scale(1)" : "scale(1.05)", transition: "transform 7s ease-out" }}
          />
          {/* Overlays — complex gradients kept as inline */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(8,18,40,0.92) 0%, rgba(8,18,40,0.65) 55%, rgba(8,18,40,0.2) 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(8,18,40,0.85) 0%, transparent 40%)" }}
          />
        </div>
      ))}

      {/* Slide counter — hidden on small screens to avoid crowding */}
      <div
        className="absolute right-8 md:right-12 top-9 z-20 hidden sm:block text-[14px] text-[rgba(240,236,228,0.5)]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        <span className="text-[#279B51] text-[22px] font-semibold">
          {String(current + 1).padStart(2, "0")}
        </span>{" "}
        / 03
      </div>

      {/* Main content
          pt-16 = 64px on mobile (matches mobile navbar height)
          md:pt-[100px] = 100px on desktop (36px info bar + 64px main nav)
          This prevents content from hiding behind the fixed navbar */}
      <div
        key={animKey}
        className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 pt-16 md:pt-[100px] pb-20"
      >
        <div className="max-w-[560px] w-full">
          {/* Tag */}
          <div className="anim-tag inline-flex items-center gap-1.5 bg-[rgba(39,155,81,0.15)] border border-[rgba(39,155,81,0.4)] text-[#279B51] text-[11px] font-medium tracking-[2px] uppercase px-3.5 py-1.5 rounded-sm mb-5">
            <span className="inline-block w-[18px] h-px bg-[#279B51]" />
            {slides[current].tag}
          </div>

          {/* Title — clamp() kept as inline since Tailwind can't express it natively */}
          <h1
            className="hero-title-el anim-title font-bold text-[#f0ece4] leading-[1.05] tracking-[-1px] mb-[18px]"
            style={{ fontSize: "clamp(32px, 6vw, 64px)" }}
          >
            {slides[current].title}
          </h1>

          {/* Description */}
          <p className="anim-desc text-[15px] text-[rgba(240,236,228,0.65)] leading-[1.75] max-w-[420px] mb-8 font-light">
            {slides[current].description}
          </p>

          {/* Buttons */}
          <div className="anim-btns flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleScroll(slides[current].href)}
              className="w-full sm:w-auto bg-[#279B51] text-white text-[13px] font-medium tracking-[1px] uppercase py-[13px] px-7 border-0 rounded-sm cursor-pointer"
            >
              {slides[current].cta}
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="w-full sm:w-auto bg-transparent text-[#f0ece4] text-[13px] font-normal tracking-[1px] uppercase py-[13px] px-7 border border-[rgba(240,236,228,0.3)] rounded-sm cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Vertical nav arrows — hidden on mobile to avoid layout conflict */}
      <div className="absolute z-20 right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2">
        {[
          { Icon: ChevronUp, action: () => goTo(current - 1) },
          { Icon: ChevronDown, action: () => goTo(current + 1) },
        ].map(({ Icon, action }, i) => (
          <button
            key={i}
            onClick={action}
            className="w-11 h-11 bg-[rgba(240,236,228,0.08)] border border-[rgba(240,236,228,0.18)] text-[#f0ece4] flex items-center justify-center cursor-pointer rounded-sm"
          >
            <Icon size={16} />
          </button>
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute z-20 bottom-[88px] left-4 sm:left-8 md:left-12 flex gap-1.5 items-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="h-[2px] border-none cursor-pointer p-0 rounded-sm transition-all duration-300"
            style={{
              width: idx === current ? 48 : 24,
              background: idx === current ? "#279B51" : "rgba(240,236,228,0.25)",
            }}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-[rgba(196,158,68,0.2)] bg-[rgba(8,18,40,0.85)]">
        <div className="grid grid-cols-3 h-[78px]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-2 md:gap-3.5 px-2 sm:px-5 md:px-8 ${
                i < 2 ? "border-r border-[rgba(196,158,68,0.15)]" : ""
              }`}
            >
              <div className="w-7 h-7 md:w-9 md:h-9 border border-[rgba(196,158,68,0.35)] rounded-sm flex items-center justify-center text-[#279B51] shrink-0">
                <stat.icon size={14} />
              </div>
              <div>
                <div
                  className="text-xl md:text-[26px] font-bold text-[#f0ece4] leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[11px] text-[rgba(240,236,228,0.45)] tracking-[0.5px] mt-0.5">
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
