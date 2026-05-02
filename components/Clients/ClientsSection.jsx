"use client";

import Link from "next/link";
import { Phone, Home, Building2, Warehouse, Landmark, Heart, BookOpen } from "lucide-react";
import PageHero from "@/components/Projects/PageHero";

const stats = [
  { label: "Happy Clients", value: "300+" },
  { label: "Corporate Partners", value: "50+" },
  { label: "Repeat Business Rate", value: "85%" },
  { label: "Years Trusted", value: "10+" },
];

const sectors = [
  { icon: Home,        label: "Residential",  desc: "Premium villas, apartments and gated communities across Karachi." },
  { icon: Building2,   label: "Commercial",   desc: "Offices, banks, hotels, showrooms and retail centres." },
  { icon: Warehouse,   label: "Industrial",   desc: "Factories, warehouses and large-scale logistics facilities." },
  { icon: Landmark,    label: "Government",   desc: "Public institutions, civic buildings and secure premises." },
  { icon: Heart,       label: "Healthcare",   desc: "Hospitals, clinics and pharmaceutical manufacturing plants." },
  { icon: BookOpen,    label: "Education",    desc: "Schools, colleges and university campus entrances." },
];

// Placeholder partner entries — replace `logo` src with real image paths once available
const partners = [
  { id: 1,  name: "Partner 1", logo: "/images/clients/cpec.png" },
  { id: 2,  name: "Partner 2", logo: "/images/clients/pia.png" },
  { id: 3,  name: "Partner 3", logo: "/images/clients/partner-3.svg" },
  { id: 4,  name: "Partner 4", logo: "/images/clients/partner-4.svg" },
  { id: 5,  name: "Partner 5", logo: "/images/clients/partner-5.svg" },
  { id: 6,  name: "Partner 6", logo: "/images/clients/partner-6.svg" },
  { id: 7,  name: "Partner 7", logo: "/images/clients/partner-7.svg" },
  { id: 8,  name: "Partner 8", logo: "/images/clients/partner-8.svg" },
  { id: 9,  name: "Partner 9", logo: "/images/clients/partner-9.svg" },
  { id: 10, name: "Partner 10", logo: "/images/clients/partner-10.svg" },
  { id: 11, name: "Partner 11", logo: "/images/clients/partner-11.svg" },
  { id: 12, name: "Partner 12", logo: "/images/clients/partner-12.svg" },
];

export default function ClientsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .cl-font  { font-family: 'DM Sans', sans-serif; }
        .cl-serif { font-family: 'Cormorant Garamond', serif; }

        .cl-eyebrow {
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
        .cl-eyebrow::before, .cl-eyebrow::after {
          content: '';
          width: 28px;
          height: 1px;
          background: #279B51;
          opacity: 0.6;
        }

        /* Stat cards */
        .cl-stat {
          background: #fff;
          border: 1px solid rgba(39,155,81,0.12);
          border-radius: 3px;
          padding: 20px 16px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .cl-stat::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, #279B51, #123A65);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .cl-stat:hover { border-color: rgba(39,155,81,0.3); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(39,155,81,0.08); }
        .cl-stat:hover::after { transform: scaleX(1); }

        /* Partner logo cards */
        .cl-logo-card {
          background: #fff;
          border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 96px;
          padding: 20px;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .cl-logo-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, #279B51, #123A65);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .cl-logo-card:hover {
          border-color: rgba(39,155,81,0.3);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(39,155,81,0.1);
        }
        .cl-logo-card:hover::after { transform: scaleX(1); }
        .cl-logo-card img {
          max-width: 100%;
          max-height: 56px;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.55;
          transition: filter 0.3s, opacity 0.3s;
        }
        .cl-logo-card:hover img { filter: grayscale(0); opacity: 1; }

        /* Sector cards */
        .cl-sector-card {
          background: #fff;
          border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px;
          padding: 28px 24px;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .cl-sector-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 0;
          background: #279B51;
          transition: height 0.35s ease;
        }
        .cl-sector-card:hover { border-color: rgba(39,155,81,0.28); transform: translateY(-3px); box-shadow: 0 10px 30px rgba(18,58,101,0.1); }
        .cl-sector-card:hover::before { height: 100%; }
        .cl-sector-icon {
          width: 44px; height: 44px;
          border: 1px solid rgba(39,155,81,0.3);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #279B51;
          margin-bottom: 16px;
          background: rgba(39,155,81,0.05);
          transition: background 0.25s, border-color 0.25s;
        }
        .cl-sector-card:hover .cl-sector-icon { background: rgba(39,155,81,0.12); border-color: rgba(39,155,81,0.5); }

        /* CTA button */
        .cl-cta-btn {
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
        .cl-cta-btn:hover { background: #1e7a3f; }
      `}</style>

      <div className="cl-font">
        <PageHero
          title="Our"
          titleEm="Clients"
          subtitle="Trusted Partners"
          breadcrumb="Clients"
          image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
        />

        <section className="py-16" style={{ background: "#f7f5f0" }}>
          <div className="max-w-7xl mx-auto px-6">

            {/* Eyebrow */}
            <div className="text-center mb-2">
              <div className="cl-eyebrow">Who We Work With</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {stats.map((s) => (
                <div key={s.label} className="cl-stat">
                  <div className="cl-serif" style={{ fontSize: 38, fontWeight: 700, color: "#0f2d4a", lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 10.5, color: "#9ca3af", letterSpacing: "0.5px", marginTop: 5 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Partner logos */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="cl-eyebrow">Our Partners</div>
                <h2
                  className="cl-serif"
                  style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.1 }}
                >
                  Brands That <em style={{ fontStyle: "italic", color: "#279B51" }}>Trust Us</em>
                </h2>
                <p style={{ fontSize: 13.5, color: "#6b7280", maxWidth: 480, margin: "10px auto 0", lineHeight: 1.75 }}>
                  We have had the privilege of working with leading organisations across Karachi and Pakistan.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {partners.map((p) => (
                  <div key={p.id} className="cl-logo-card">
                    {/* Replace the div below with an <img> once you have the real logos */}
                    <div style={{
                      width: "100%", height: 44,
                      background: "rgba(39,155,81,0.08)",
                      border: "1px dashed rgba(39,155,81,0.3)",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 9,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "rgba(39,155,81,0.5)",
                    }}>
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries / Sectors */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="cl-eyebrow">Sectors</div>
                <h2
                  className="cl-serif"
                  style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.1 }}
                >
                  Industries <em style={{ fontStyle: "italic", color: "#279B51" }}>We Serve</em>
                </h2>
                <p style={{ fontSize: 13.5, color: "#6b7280", maxWidth: 480, margin: "10px auto 0", lineHeight: 1.75 }}>
                  Our gate automation solutions are trusted across a wide range of industries and property types.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {sectors.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="cl-sector-card">
                    <div className="cl-sector-icon">
                      <Icon size={20} />
                    </div>
                    <h3
                      className="cl-serif"
                      style={{ fontSize: 20, fontWeight: 600, color: "#0f2d4a", marginBottom: 8, lineHeight: 1.2 }}
                    >
                      {label}
                    </h3>
                    <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.75 }}>{desc}</p>
                  </div>
                ))}
              </div>
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
                className="cl-serif hidden md:block"
                style={{
                  position: "absolute", bottom: -20, right: 20,
                  fontSize: 100, fontWeight: 700, lineHeight: 1,
                  color: "rgba(255,255,255,0.03)",
                  letterSpacing: -4, userSelect: "none",
                }}
              >
                JOIN
              </div>

              <h3
                className="cl-serif"
                style={{ fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 600, color: "#f0ece4", lineHeight: 1.1, marginBottom: 10 }}
              >
                Become One of Our{" "}
                <em style={{ fontStyle: "italic", color: "#6ee7a0" }}>Valued Clients</em>
              </h3>
              <p style={{ fontSize: 13.5, color: "rgba(240,236,228,0.5)", maxWidth: 440, margin: "0 auto 24px", lineHeight: 1.75 }}>
                Join hundreds of satisfied clients across Karachi who trust Safety Links for their automation needs.
              </p>
              <Link href="/contact" className="cl-cta-btn">
                <Phone size={13} /> Get a Free Quote
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
