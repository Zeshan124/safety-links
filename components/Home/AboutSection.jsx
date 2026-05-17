import { CheckCircle2, Award, Wrench, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "10+ Years Experience",
    desc: "A decade of delivering trusted gate automation solutions across Karachi.",
  },
  {
    icon: Wrench,
    title: "Certified Technicians",
    desc: "Factory-trained engineers following strict installation standards.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Materials",
    desc: "Premium motors and materials engineered for maximum longevity.",
  },
  {
    icon: HeadphonesIcon,
    title: "After-Sales Support",
    desc: "Dedicated maintenance and repair to keep your systems running.",
  },
];

export default function AboutSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .ab-font { font-family: 'DM Sans', sans-serif; }
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
          margin-bottom: 14px;
        }
        .ab-eyebrow::before {
          content: '';
          width: 28px;
          height: 1px;
          background: #279B51;
          opacity: 0.6;
        }
        .ab-reason-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: #fff;
          border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px;
          transition: all 0.2s ease;
        }
        .ab-reason-card:hover {
          border-color: rgba(39,155,81,0.3);
          box-shadow: 0 4px 16px rgba(39,155,81,0.08);
          transform: translateY(-2px);
        }
        .ab-reason-icon {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(39,155,81,0.3);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #279B51;
          background: rgba(39,155,81,0.05);
        }
        .ab-dot-grid {
          display: grid;
          grid-template-columns: repeat(4, 8px);
          gap: 6px;
          position: absolute;
          top: 28px;
          left: -28px;
        }
        .ab-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #279B51;
          opacity: 0.25;
        }
      `}</style>

      <section id="about" className="ab-font py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Image side ── */}
            <div className="relative">

              {/* Top-left corner bracket */}
              <div style={{
                position: "absolute",
                top: -16, left: -16,
                width: 72, height: 72,
                borderTop: "3px solid #279B51",
                borderLeft: "3px solid #279B51",
                borderRadius: "2px 0 0 0",
                zIndex: 0,
              }} />

              {/* Dot grid decoration */}
              <div className="ab-dot-grid hidden lg:grid">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="ab-dot" />
                ))}
              </div>

              {/* Main image */}
              <div style={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(10,22,40,0.18)",
              }}>
                <img
                  src="/images/home/Karachi_Leading.jpeg"
                  alt="Safety Links team at work"
                  style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }}
                />
                {/* Bottom fade */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 50%, rgba(10,22,40,0.35) 100%)",
                }} />
              </div>

              {/* Floating badge */}
              <div style={{
                position: "absolute",
                bottom: -20, right: -16,
                background: "#0a1628",
                padding: "20px 24px",
                borderRadius: 3,
                borderLeft: "3px solid #279B51",
                boxShadow: "0 12px 32px rgba(10,22,40,0.25)",
                zIndex: 10,
              }}>
                <div className="ab-serif" style={{ fontSize: 42, fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                  10+
                </div>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
                  Years of Excellence
                </div>
              </div>

              {/* Bottom-left accent block */}
              <div style={{
                position: "absolute",
                bottom: -16, left: 20,
                width: 48, height: 48,
                background: "rgba(39,155,81,0.08)",
                border: "1px solid rgba(39,155,81,0.2)",
                borderRadius: 2,
              }} />
            </div>

            {/* ── Content side ── */}
            <div>
              <div className="ab-eyebrow">About Us</div>
              <h2
                className="ab-serif"
                style={{ fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 600, color: "#0f2d4a", lineHeight: 1.12, marginBottom: 18 }}
              >
                Karachi's Leading<br />
                <em style={{ fontStyle: "italic", color: "#279B51" }}>Gate Automation</em> Specialists
              </h2>

              <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.8, marginBottom: 12 }}>
                Safety Links Automatic Gates Solution offers complete residential and commercial security and surveillance solutions. We specialize in installing and servicing automatic swing and sliding gates, with a strong reputation built on quality workmanship and customer satisfaction.
              </p>
              <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.8 }}>
                Serving homes and businesses across Karachi, we combine advanced technology with professional service to deliver maximum safety, reliability, and convenience for every client.
              </p>

              {/* Divider */}
              <div style={{
                width: 48, height: 2,
                background: "linear-gradient(to right, #279B51, #123A65)",
                borderRadius: 1,
                margin: "24px 0",
              }} />

              {/* Reasons grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((r) => (
                  <div key={r.title} className="ab-reason-card">
                    <div className="ab-reason-icon">
                      <r.icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 500, color: "#0f2d4a", marginBottom: 3 }}>
                        {r.title}
                      </div>
                      <div style={{ fontSize: 11.5, color: "#9ca3af", lineHeight: 1.6 }}>
                        {r.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}