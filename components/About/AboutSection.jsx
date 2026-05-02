"use client";

import Link from "next/link";
import { Award, Wrench, HeadphonesIcon, Users, Shield, Clock, Phone } from "lucide-react";
import PageHero from "@/components/Projects/PageHero";

const miniStats = [
  { value: "500+", label: "Projects Done"    },
  { value: "10+",  label: "Years Experience" },
  { value: "300+", label: "Happy Clients"    },
];

const values = [
  { icon: Shield,         title: "Security First",     desc: "Every solution is designed to provide maximum protection for your property and loved ones." },
  { icon: Wrench,         title: "Quality Materials",   desc: "We source only premium motors, hardware, and components for long-term reliability." },
  { icon: Award,          title: "Certified Expertise", desc: "Our team is factory-trained and certified by leading global automation brands." },
  { icon: HeadphonesIcon, title: "Ongoing Support",     desc: "We stand behind every installation with responsive maintenance and repair services." },
  { icon: Users,          title: "Client-Centered",     desc: "Your satisfaction drives everything — from initial survey to final commissioning." },
  { icon: Clock,          title: "On-Time Delivery",    desc: "We respect your timeline and consistently deliver projects on schedule, every time." },
];

const team = [
  { name: "Engr. Hassan Ali", role: "Founder & CEO",           desc: "10+ years in gate automation and access control. Pioneered Safety Links in 2014." },
  { name: "Usman Khan",       role: "Head of Installation",     desc: "Factory-trained technician with expertise in swing, sliding, and industrial gate systems." },
  { name: "Amna Raza",        role: "Client Relations Manager", desc: "Dedicated to ensuring every client gets the best post-installation support and service." },
  { name: "Tariq Mehmood",    role: "Senior Field Engineer",    desc: "Specialist in commercial projects, barrier systems, and high-speed industrial doors." },
];

function getInitials(/** @type {string} */ name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2);
}

export default function AboutSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .ab-font  { font-family: 'DM Sans', sans-serif; }
        .ab-serif { font-family: 'Cormorant Garamond', serif; }

        .ab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #279B51;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .ab-eyebrow::before {
          content: '';
          width: 28px; height: 1px;
          background: #279B51; opacity: 0.6;
        }

        /* Mini stats */
        .ab-mini-stat {
          background: #fff;
          border: 1px solid rgba(39,155,81,0.12);
          border-radius: 3px;
          padding: 14px 10px;
          text-align: center;
          position: relative; overflow: hidden;
          transition: all 0.2s ease;
        }
        .ab-mini-stat::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, #279B51, #123A65);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .ab-mini-stat:hover { border-color: rgba(39,155,81,0.3); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(39,155,81,0.08); }
        .ab-mini-stat:hover::after { transform: scaleX(1); }

        /* Values */
        .ab-val-card {
          background: #fff;
          border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px;
          padding: 26px 22px;
          transition: all 0.25s ease;
          position: relative; overflow: hidden;
        }
        .ab-val-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 3px; height: 0;
          background: #279B51;
          transition: height 0.35s ease;
        }
        .ab-val-card:hover { border-color: rgba(39,155,81,0.28); transform: translateY(-3px); box-shadow: 0 10px 30px rgba(18,58,101,0.1); }
        .ab-val-card:hover::before { height: 100%; }
        .ab-val-icon {
          width: 42px; height: 42px;
          border: 1px solid rgba(39,155,81,0.3);
          border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          color: #279B51; margin-bottom: 14px;
          background: rgba(39,155,81,0.05);
          transition: all 0.25s ease;
        }
        .ab-val-card:hover .ab-val-icon { background: rgba(39,155,81,0.12); border-color: rgba(39,155,81,0.5); }

        /* Team cards — two-tone design */
        .ab-team-card {
          border-radius: 3px;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .ab-team-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(18,58,101,0.14); }
        .ab-team-top {
          background: #0a1628;
          padding: 28px 20px 20px;
          text-align: center;
          position: relative;
          border-bottom: 2px solid #279B51;
        }
        .ab-team-top::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, #279B51, #123A65);
        }
        .ab-avatar {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(39,155,81,0.12);
          border: 2px solid rgba(39,155,81,0.4);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; font-weight: 700; color: #279B51;
          margin: 0 auto 14px;
          transition: all 0.25s ease;
        }
        .ab-team-card:hover .ab-avatar { background: rgba(39,155,81,0.22); border-color: #279B51; }
        .ab-team-bottom {
          background: #fff;
          border: 1px solid rgba(39,155,81,0.1);
          border-top: none;
          padding: 16px 18px;
        }

        /* CTA */
        .ab-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #279B51; color: #fff;
          font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 12px 28px;
          border-radius: 2px; text-decoration: none;
          transition: background 0.2s;
        }
        .ab-cta-btn:hover { background: #1e7a3f; }
      `}</style>

      <div className="ab-font">
        <PageHero
          title="About"
          titleEm="Safety Links"
          subtitle="Who We Are"
          breadcrumb="About"
          image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        />

        <section className="py-16" style={{ background: "#f7f5f0" }}>
          <div className="max-w-7xl mx-auto px-6">

            {/* ── Our Story ── */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center mb-20 pb-20"
              style={{ borderBottom: "1px solid rgba(39,155,81,0.12)" }}
            >
              {/* Text side */}
              <div>
                <div className="ab-eyebrow">Our Story</div>
                <h2
                  className="ab-serif"
                  style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.08, marginBottom: 20 }}
                >
                  Karachi's Trusted Gate Automation{" "}
                  <em style={{ fontStyle: "italic", color: "#279B51" }}>Specialists Since 2014</em>
                </h2>
                <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.82, marginBottom: 14 }}>
                  Safety Links Automatic Gates Solution was founded with a single mission: to bring reliable, modern gate automation to the residential and commercial properties of Karachi. Since 2014, we've grown from a local installer into the city's leading access control solutions provider.
                </p>
                <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.82, marginBottom: 14 }}>
                  We specialize in the full lifecycle — from initial site surveys and custom design through installation, testing, and long-term maintenance. Our certified engineers handle everything in-house, ensuring consistent quality on every project.
                </p>
                <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.82, marginBottom: 28 }}>
                  Today, Safety Links is trusted by over 300 clients including private homeowners, commercial developers, hospitals, schools, and government institutions across Karachi.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {miniStats.map((s) => (
                    <div key={s.label} className="ab-mini-stat">
                      <div className="ab-serif" style={{ fontSize: 30, fontWeight: 700, color: "#0f2d4a", lineHeight: 1 }}>
                        {s.value}
                      </div>
                      <div style={{ fontSize: 9.5, color: "#9ca3af", letterSpacing: "0.5px", marginTop: 3 }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="relative">
                {/* Top-left bracket */}
                <div style={{
                  position: "absolute", top: -14, left: -14,
                  width: 60, height: 60,
                  borderTop: "2px solid rgba(39,155,81,0.4)",
                  borderLeft: "2px solid rgba(39,155,81,0.4)",
                  borderRadius: "2px 0 0 0",
                  zIndex: 0,
                }} />
                <div style={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 20px 60px rgba(10,22,40,0.18)", position: "relative" }}>
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                    alt="Safety Links team at work"
                    style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(10,22,40,0.38) 0%, transparent 50%)",
                  }} />
                </div>
                {/* Floating badge */}
                <div style={{
                  position: "absolute", bottom: -16, right: -12,
                  background: "#0a1628",
                  border: "1px solid rgba(39,155,81,0.35)",
                  borderRadius: 3, padding: "16px 20px",
                  boxShadow: "0 8px 28px rgba(10,22,40,0.25)",
                  zIndex: 10,
                }}>
                  <div className="ab-serif" style={{ fontSize: 32, fontWeight: 700, color: "#f0ece4", lineHeight: 1 }}>10+</div>
                  <div style={{ fontSize: 10, color: "rgba(240,236,228,0.5)", letterSpacing: "0.5px", marginTop: 3 }}>
                    Years of Excellence
                  </div>
                </div>
                {/* Left accent line */}
                <div style={{
                  position: "absolute", top: 0, left: -4, bottom: 0, width: 3,
                  background: "linear-gradient(to bottom, transparent, #279B51 25%, #279B51 75%, transparent)",
                  opacity: 0.7,
                }} />
              </div>
            </div>

            {/* ── Core Values ── */}
            <div
              className="mb-20 pb-20"
              style={{ borderBottom: "1px solid rgba(39,155,81,0.12)" }}
            >
              <div className="text-center mb-10">
                <div className="ab-eyebrow" style={{ justifyContent: "center" }}>What Drives Us</div>
                <h2
                  className="ab-serif"
                  style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.1 }}
                >
                  Our Core <em style={{ fontStyle: "italic", color: "#279B51" }}>Values</em>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {values.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="ab-val-card">
                    <div className="ab-val-icon"><Icon size={18} /></div>
                    <h3 className="ab-serif" style={{ fontSize: 19, fontWeight: 600, color: "#0f2d4a", marginBottom: 7, lineHeight: 1.2 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.75 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Team ── */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <div className="ab-eyebrow" style={{ justifyContent: "center" }}>Meet the Team</div>
                <h2
                  className="ab-serif"
                  style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.1 }}
                >
                  The People Behind{" "}
                  <em style={{ fontStyle: "italic", color: "#279B51" }}>Safety Links</em>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {team.map((member) => (
                  <div key={member.name} className="ab-team-card">
                    {/* Dark top section */}
                    <div className="ab-team-top">
                      <div className="ab-serif ab-avatar">{getInitials(member.name)}</div>
                      <h3
                        className="ab-serif"
                        style={{ fontSize: 18, fontWeight: 600, color: "#f0ece4", lineHeight: 1.2, marginBottom: 4 }}
                      >
                        {member.name}
                      </h3>
                      <div style={{ fontSize: 9.5, color: "#279B51", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>
                        {member.role}
                      </div>
                    </div>
                    {/* Light bottom section */}
                    <div className="ab-team-bottom">
                      <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.75 }}>{member.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(to right, #279B51, #123A65)",
              }} />
              <div
                className="ab-serif hidden md:block"
                style={{
                  position: "absolute", bottom: -20, right: 16,
                  fontSize: 96, fontWeight: 700, lineHeight: 1,
                  color: "rgba(255,255,255,0.03)",
                  letterSpacing: -4, userSelect: "none",
                }}
              >
                ABOUT
              </div>
              <h3
                className="ab-serif"
                style={{ fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 600, color: "#f0ece4", lineHeight: 1.1, marginBottom: 10 }}
              >
                Ready to Work{" "}
                <em style={{ fontStyle: "italic", color: "#6ee7a0" }}>With Us?</em>
              </h3>
              <p style={{ fontSize: 13.5, color: "rgba(240,236,228,0.5)", maxWidth: 440, margin: "0 auto 24px", lineHeight: 1.75 }}>
                Get in touch today for a free site survey and consultation — no commitment required.
              </p>
              <Link href="/contact" className="ab-cta-btn">
                <Phone size={13} /> Contact Us
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}