"use client";

import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "https://safetylinks.org/wp-content/uploads/2025/04/swing.jpg",
    number: "01",
    title: "Swing Gates",
    description:
      "Automatic swing gates for residential, commercial, and industrial environments. Engineered for smooth, quiet operation.",
    features: ["Single & Double Leaf", "Remote Control", "Safety Sensors"],
  },
  {
    image: "https://safetylinks.org/wp-content/uploads/2025/04/sliding.jpg",
    number: "02",
    title: "Sliding Gates",
    description:
      "Secure, efficient, modern access solutions for all property types. Space-saving design ideal for narrow driveways.",
    features: ["Heavy-Duty Motors", "Anti-Intrusion Lock", "Auto Reversal"],
  },
  {
    image: "https://safetylinks.org/wp-content/uploads/2014/08/IMG_20240603_171658_399-1-1-scaled.jpg",
    number: "03",
    title: "Glass Door Automation",
    description:
      "Elegant, modern entrance solutions with seamless automation for commercial and residential properties.",
    features: ["Sensor Activation", "Adjustable Speed", "Emergency Manual"],
  },
  {
    image: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg",
    number: "04",
    title: "Roller Shutter Systems",
    description:
      "Motorized shutters in made-to-measure designs for small openings to large French windows.",
    features: ["Custom Sizing", "Wind Resistant", "Insulated Options"],
  },
  {
    image: "/images/home/barrier.jpeg",
    number: "05",
    title: "Barrier Gates",
    description:
      "High-speed barrier gates for parking lots, toll plazas, and controlled access zones built for high traffic.",
    features: ["Fast Opening", "Loop Detection", "LED Arm Available"],
  },
  {
    image: "https://safetylinks.org/wp-content/uploads/2025/07/roll-up-down-2.png",
    number: "06",
    title: "High Speed PVC Doors",
    description:
      "Industrial-grade PVC rolling doors with high-performance automation for continuous smooth operation.",
    features: ["Up to 3m/s Speed", "Self-Repair Curtain", "ATEX Certified"],
  },
];

export default function Services() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .sv-font { font-family: 'DM Sans', sans-serif; }
        .sv-serif { font-family: 'Cormorant Garamond', serif; }
        .sv-card {
          background: #ffffff;
          border: 1px solid rgba(39,155,81,0.12);
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: default;
        }
        .sv-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(18,58,101,0.12);
          border-color: rgba(39,155,81,0.3);
        }
        .sv-card:hover .sv-card-img {
          transform: scale(1.06);
        }
        .sv-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .sv-tag {
          font-size: 10.5px;
          font-weight: 500;
          color: #279B51;
          background: rgba(39,155,81,0.07);
          border: 1px solid rgba(39,155,81,0.2);
          padding: 3px 9px;
          border-radius: 2px;
          letter-spacing: 0.3px;
        }
        .sv-cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #279B51;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: gap 0.2s;
        }
        .sv-cta-btn:hover { gap: 12px; }
        .sv-cta-circle {
          width: 20px;
          height: 20px;
          border: 1px solid #279B51;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, color 0.2s;
        }
        .sv-cta-btn:hover .sv-cta-circle {
          background: #279B51;
          color: #fff;
        }
        .sv-eyebrow {
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
        .sv-eyebrow::before, .sv-eyebrow::after {
          content: '';
          width: 28px;
          height: 1px;
          background: #279B51;
          opacity: 0.6;
        }
      `}</style>

      <section id="services" className="sv-font py-24" style={{ background: "#f7f5f0" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="sv-eyebrow">What We Offer</div>
            <h2
              className="sv-serif"
              style={{ fontSize: "clamp(30px, 4vw, 40px)", fontWeight: 600, color: "#0f2d4a", lineHeight: 1.1, marginBottom: 14 }}
            >
              Our Products &amp; <em style={{ fontStyle: "italic", color: "#279B51" }}>Services</em>
            </h2>
            <p style={{ fontSize: 14, color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
              From residential swing gates to industrial high-speed doors — every solution is engineered
              for security, durability, and ease of use.
            </p>
            <div style={{ width: 48, height: 2, background: "linear-gradient(to right, #279B51, #123A65)", margin: "20px auto 0", borderRadius: 1 }} />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="sv-card">

                {/* Image */}
                <div style={{ position: "relative", height: 200, overflow: "hidden", background: "#e8e4dc" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="sv-card-img"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80";
                    }}
                  />
                  {/* Overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(15,45,74,0.52) 0%, transparent 55%)",
                  }} />
                  {/* Ghost number */}
                  <div
                    className="sv-serif"
                    style={{
                      position: "absolute", top: 10, right: 14,
                      fontSize: 40, fontWeight: 600,
                      color: "rgba(255,255,255,0.18)",
                      lineHeight: 1, userSelect: "none",
                    }}
                  >
                    {service.number}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "20px 22px 22px" }}>
                  <h3
                    className="sv-serif"
                    style={{ fontSize: 20, fontWeight: 600, color: "#0f2d4a", marginBottom: 8, lineHeight: 1.2 }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.75, marginBottom: 14 }}>
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {service.features.map((f) => (
                      <span key={f} className="sv-tag">{f}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="sv-cta-btn" onClick={scrollToContact}>
                    Get a Quote
                    <span className="sv-cta-circle">
                      <ArrowRight size={11} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}