"use client";

import Link from "next/link";
import { CheckCircle2, ArrowLeft, ArrowRight, Phone, ChevronRight } from "lucide-react";
import { getAllServices } from "@/lib/services";

const allServices = getAllServices();

/** Minimal markdown renderer for the body field */
function renderBody(/** @type {string} */ content) {
  const blocks = content.split("\n\n").filter(Boolean);
  return blocks.map((/** @type {string} */ block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px, 2.8vw, 26px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.15, margin: "36px 0 12px", paddingBottom: 10, borderBottom: "1px solid rgba(39,155,81,0.15)" }}>
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 2.2vw, 21px)", fontWeight: 600, color: "#0f2d4a", lineHeight: 1.2, margin: "24px 0 8px" }}>
          {block.replace("### ", "")}
        </h3>
      );
    }
    const html = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return (
      <p key={i} dangerouslySetInnerHTML={{ __html: html }} style={{ fontSize: 14.5, color: "#4b5563", lineHeight: 1.85, margin: "12px 0" }} />
    );
  });
}

export default function ServiceDetail(/** @type {{ service: ReturnType<typeof import("@/lib/services").getAllServices>[number] }} */ { service }) {
  const currentIdx = allServices.findIndex((s) => s.slug === service.slug);
  const prev = allServices[currentIdx - 1] ?? null;
  const next = allServices[currentIdx + 1] ?? null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        .sd-font  { font-family: 'DM Sans', sans-serif; }
        .sd-serif { font-family: 'Cormorant Garamond', serif; }

        /* Sidebar service links */
        .sd-srv-link {
          display: flex; align-items: center; gap: 8px;
          padding: 11px 14px; text-decoration: none;
          font-size: 13px; color: #374151;
          border-bottom: 1px solid rgba(39,155,81,0.07);
          transition: all 0.18s ease;
          position: relative;
        }
        .sd-srv-link:last-child { border-bottom: none; }
        .sd-srv-link:hover { color: #279B51; background: rgba(39,155,81,0.04); padding-left: 20px; }
        .sd-srv-link-active { color: #279B51 !important; background: rgba(39,155,81,0.06) !important; border-left: 3px solid #279B51; }

        /* Feature chips */
        .sd-feature {
          display: flex; align-items: center; gap: 9px;
          background: #fff; border: 1px solid rgba(39,155,81,0.1);
          border-radius: 2px; padding: 10px 14px; font-size: 13px; color: #374151;
          transition: all 0.2s ease;
        }
        .sd-feature:hover { border-color: rgba(39,155,81,0.3); background: rgba(39,155,81,0.03); }

        /* Use-case badge */
        .sd-use-tag {
          display: inline-block; font-size: 10.5px; font-weight: 500;
          letter-spacing: 0.5px; color: #279B51;
          background: rgba(39,155,81,0.08); border: 1px solid rgba(39,155,81,0.2);
          padding: 4px 12px; border-radius: 2px;
        }

        /* Brand badge */
        .sd-brand-tag {
          display: inline-block; font-size: 10px; font-weight: 500;
          letter-spacing: 1px; text-transform: uppercase; color: #9ca3af;
          border: 1px solid rgba(39,155,81,0.12); padding: 5px 12px;
          border-radius: 2px; background: #fff; transition: all 0.2s;
        }
        .sd-brand-tag:hover { color: #279B51; border-color: rgba(39,155,81,0.35); }

        /* Nav buttons */
        .sd-nav-btn {
          display: flex; align-items: flex-start; gap: 10px;
          background: #fff; border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px; padding: 14px 16px; text-decoration: none;
          transition: all 0.25s ease; flex: 1;
        }
        .sd-nav-btn:hover { border-color: rgba(39,155,81,0.3); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(39,155,81,0.08); }

        /* CTA */
        .sd-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #279B51; color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 13px 28px;
          border-radius: 2px; text-decoration: none; transition: background 0.2s;
        }
        .sd-cta-btn:hover { background: #1e7a3f; }
        .sd-outline-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #279B51; font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 12px 24px;
          border-radius: 2px; text-decoration: none;
          border: 1px solid rgba(39,155,81,0.35); transition: all 0.2s;
        }
        .sd-outline-btn:hover { background: rgba(39,155,81,0.06); border-color: #279B51; }
      `}</style>

      <div className="sd-font">

        {/* ── Full-bleed hero ── */}
        <div style={{ position: "relative", overflow: "hidden", height: "clamp(280px, 36vw, 460px)", background: "#0a1628" }}>
          <img
            src={service.heroImage || service.image}
            alt={service.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.04)", filter: "brightness(0.95)" }}
            onError={(e) => { /** @type {HTMLImageElement} */ (e.target).src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"; }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.6) 25%, rgba(10,22,40,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 40%)" }} />
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "linear-gradient(to bottom, transparent, #279B51 25%, #279B51 75%, transparent)", opacity: 0.85 }} />
          <div style={{ position: "absolute", bottom: 24, right: 40, width: 48, height: 48, borderBottom: "2px solid rgba(39,155,81,0.35)", borderRight: "2px solid rgba(39,155,81,0.35)" }} />

          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 clamp(20px,5vw,56px) 48px", maxWidth: 820 }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "rgba(240,236,228,0.4)", marginBottom: 18, flexWrap: "wrap" }}>
              <Link href="/" style={{ color: "rgba(240,236,228,0.4)", textDecoration: "none" }}>Home</Link>
              <ChevronRight size={11} style={{ opacity: 0.4 }} />
              <Link href="/services" style={{ color: "rgba(240,236,228,0.4)", textDecoration: "none" }}>Services</Link>
              <ChevronRight size={11} style={{ opacity: 0.4 }} />
              <span style={{ color: "rgba(240,236,228,0.75)" }}>{service.title}</span>
            </div>
            {/* Tag */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(39,155,81,0.15)", border: "1px solid rgba(39,155,81,0.4)", color: "#279B51", fontSize: 10, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", padding: "5px 12px", borderRadius: 2, marginBottom: 14, width: "fit-content" }}>
              <span style={{ width: 14, height: 1, background: "#279B51", display: "inline-block" }} />
              {service.tagline}
            </div>
            <h1 className="sd-serif" style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 700, color: "#f0ece4", lineHeight: 1.05, letterSpacing: "-0.5px" }}>
              {service.title}
            </h1>
          </div>
        </div>

        {/* ── Body ── */}
        <section style={{ background: "#f7f5f0", padding: "60px 0 80px" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Main content */}
              <div className="lg:col-span-2" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {/* Back link */}
                <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase", color: "#279B51", textDecoration: "none", marginBottom: 28 }}>
                  <ArrowLeft size={12} /> All Services
                </Link>

                {/* Description card */}
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, padding: "36px 32px", marginBottom: 20, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                  <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.8, fontWeight: 300, borderLeft: "3px solid #279B51", paddingLeft: 16, marginBottom: 24 }}>
                    {service.description}
                  </p>
                  <hr style={{ border: "none", borderTop: "1px solid rgba(39,155,81,0.1)", marginBottom: 24 }} />
                  <div>{renderBody(service.body)}</div>
                </div>

                {/* Features grid */}
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, padding: "28px 28px 24px", marginBottom: 20, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                  <h3 className="sd-serif" style={{ fontSize: 22, fontWeight: 700, color: "#0f2d4a", marginBottom: 18 }}>
                    Key <em style={{ fontStyle: "italic", color: "#279B51" }}>Features</em>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((/** @type {string} */ f) => (
                      <div key={f} className="sd-feature">
                        <CheckCircle2 size={14} style={{ color: "#279B51", flexShrink: 0 }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use cases + Brands */}
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, padding: "28px", marginBottom: 24, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#9ca3af", marginBottom: 10 }}>Ideal For</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {service.useCases.map((/** @type {string} */ uc) => <span key={uc} className="sd-use-tag">{uc}</span>)}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#9ca3af", marginBottom: 10 }}>Supported Brands</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {service.brands.map((/** @type {string} */ b) => <span key={b} className="sd-brand-tag">{b}</span>)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prev / Next */}
                {(prev || next) && (
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {prev && (
                      <Link href={`/services/${prev.slug}`} className="sd-nav-btn" style={{ flexDirection: "column" }}>
                        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#279B51", display: "flex", alignItems: "center", gap: 4 }}>
                          <ArrowLeft size={10} /> Previous
                        </span>
                        <span style={{ fontSize: 12.5, color: "#374151", lineHeight: 1.4, marginTop: 3 }}>{prev.title}</span>
                      </Link>
                    )}
                    {next && (
                      <Link href={`/services/${next.slug}`} className="sd-nav-btn" style={{ flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
                        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#279B51", display: "flex", alignItems: "center", gap: 4 }}>
                          Next <ArrowRight size={10} />
                        </span>
                        <span style={{ fontSize: 12.5, color: "#374151", lineHeight: 1.4, marginTop: 3 }}>{next.title}</span>
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* All services list */}
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(39,155,81,0.1)", background: "#0a1628", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                    <h4 className="sd-serif" style={{ fontSize: 16, fontWeight: 600, color: "#f0ece4", margin: 0 }}>All Services</h4>
                  </div>
                  <div>
                    {allServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`sd-srv-link ${s.slug === service.slug ? "sd-srv-link-active" : ""}`}
                      >
                        <ChevronRight size={12} style={{ color: "#279B51", flexShrink: 0, opacity: s.slug === service.slug ? 1 : 0.4 }} />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA card */}
                <div style={{ background: "#0a1628", borderRadius: 3, padding: "28px 22px", border: "1px solid rgba(39,155,81,0.2)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                  <div className="sd-serif hidden md:block" style={{ position: "absolute", bottom: -12, right: 12, fontSize: 70, fontWeight: 700, lineHeight: 1, color: "rgba(255,255,255,0.03)", letterSpacing: -2, userSelect: "none" }}>
                    QUOTE
                  </div>
                  <h4 className="sd-serif" style={{ fontSize: 20, fontWeight: 600, color: "#f0ece4", lineHeight: 1.2, marginBottom: 10 }}>
                    Interested in <em style={{ fontStyle: "italic", color: "#6ee7a0" }}>This Service?</em>
                  </h4>
                  <p style={{ fontSize: 12, color: "rgba(240,236,228,0.5)", lineHeight: 1.75, marginBottom: 18 }}>
                    Get a free site survey and quotation from our certified engineers — no commitment required.
                  </p>
                  <Link href="/contact" className="sd-cta-btn" style={{ width: "100%", justifyContent: "center" }}>
                    <Phone size={13} /> Get a Free Quote
                  </Link>
                </div>

                {/* Quick call */}
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, padding: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#9ca3af", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 8 }}>Or call us directly</div>
                  <a href="tel:02135244550" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: "#0f2d4a", textDecoration: "none", display: "block", marginBottom: 4 }}>
                    021-35244550
                  </a>
                  <a href="tel:03212508452" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}>0321-2508452</a>
                </div>

              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
