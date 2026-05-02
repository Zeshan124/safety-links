"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import PageHero from "@/components/Projects/PageHero";
import { getAllServices } from "@/lib/services";

const products = getAllServices();

export default function ServicesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .sv-font  { font-family: 'DM Sans', sans-serif; }
        .sv-serif { font-family: 'Cormorant Garamond', serif; }

        .sv-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          color: #279B51; font-size: 11px; font-weight: 500;
          letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 14px;
        }
        .sv-eyebrow::before, .sv-eyebrow::after {
          content: ''; width: 28px; height: 1px; background: #279B51; opacity: 0.6;
        }

        /* Grid cards */
        .sv-card {
          background: #fff; border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px; overflow: hidden;
          transition: all 0.3s ease; display: flex; flex-direction: column;
          position: relative;
        }
        .sv-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: linear-gradient(to right, #279B51, #123A65);
          transform: scaleX(0); transition: transform 0.3s ease;
        }
        .sv-card:hover { transform: translateY(-4px); box-shadow: 0 14px 40px rgba(18,58,101,0.13); border-color: rgba(39,155,81,0.28); }
        .sv-card:hover::after { transform: scaleX(1); }
        .sv-card-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s ease;
        }
        .sv-card:hover .sv-card-img { transform: scale(1.06); }
        .sv-card-line {
          position: absolute; top: 0; left: 0;
          width: 3px; height: 0; background: #279B51;
          transition: height 0.4s ease; z-index: 2;
        }
        .sv-card:hover .sv-card-line { height: 100%; }
        .sv-read-more {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 500; letter-spacing: 1px;
          text-transform: uppercase; color: #279B51; text-decoration: none;
          transition: gap 0.2s;
        }
        .sv-read-more:hover { gap: 10px; }

        /* Detail rows */
        .sv-detail-img-wrap {
          position: relative; border-radius: 3px; overflow: hidden;
          box-shadow: 0 20px 56px rgba(10,22,40,0.16);
        }
        .sv-detail-img-wrap::before {
          content: ''; position: absolute; top: 0; left: 0; bottom: 0;
          width: 4px; background: linear-gradient(to bottom, transparent, #279B51 25%, #279B51 75%, transparent);
          opacity: 0.8; z-index: 2;
        }
        .sv-feature-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: #374151;
        }
        .sv-use-tag {
          display: inline-block;
          font-size: 10.5px; font-weight: 500; letter-spacing: 0.5px;
          color: #279B51; background: rgba(39,155,81,0.08);
          border: 1px solid rgba(39,155,81,0.2);
          padding: 4px 12px; border-radius: 2px;
        }
        .sv-brand-tag {
          display: inline-block;
          font-size: 10px; font-weight: 500; letter-spacing: 1px;
          text-transform: uppercase; color: #9ca3af;
          border: 1px solid rgba(39,155,81,0.12);
          padding: 4px 10px; border-radius: 2px;
          background: #fff;
          transition: all 0.2s;
        }
        .sv-brand-tag:hover { color: #279B51; border-color: rgba(39,155,81,0.35); }

        /* CTA button */
        .sv-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #279B51; color: #fff;
          font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 12px 28px;
          border-radius: 2px; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .sv-cta-btn:hover { background: #1e7a3f; transform: translateY(-1px); }
        .sv-outline-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #279B51;
          font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 11px 24px;
          border-radius: 2px; text-decoration: none;
          border: 1px solid rgba(39,155,81,0.4);
          transition: all 0.2s;
        }
        .sv-outline-btn:hover { background: rgba(39,155,81,0.06); border-color: #279B51; }

        /* Section divider */
        .sv-divider {
          border: none; border-top: 1px solid rgba(39,155,81,0.12);
          margin: 0;
        }
      `}</style>

      <div className="sv-font">
        <PageHero
          title="Our Products &"
          titleEm="Services"
          subtitle="What We Offer"
          breadcrumb="Services"
          image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
        />

        <section className="py-16" style={{ background: "#f7f5f0" }}>
          <div className="max-w-7xl mx-auto px-6">

            {/* ── Intro ── */}
            <div className="text-center mb-12">
              <div className="sv-eyebrow">Our Full Range</div>
              <h2 className="sv-serif" style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.1 }}>
                Eight Solutions. One <em style={{ fontStyle: "italic", color: "#279B51" }}>Trusted Provider.</em>
              </h2>
              <p style={{ fontSize: 13.5, color: "#6b7280", maxWidth: 560, margin: "12px auto 0", lineHeight: 1.8 }}>
                From residential swing gates to industrial road blockers — every solution is engineered for security, durability, and ease of use.
              </p>
            </div>

            {/* ── Overview grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20">
              {products.map((product) => (
                <div key={product.slug} className="sv-card">
                  {/* Image */}
                  <div style={{ position: "relative", height: 180, overflow: "hidden", background: "#d1cdc5", flexShrink: 0 }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="sv-card-img"
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"; }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.5) 0%, transparent 55%)" }} />
                    <div className="sv-card-line" />
                  </div>

                  {/* Body */}
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 className="sv-serif" style={{ fontSize: 18, fontWeight: 700, color: "#0f2d4a", lineHeight: 1.2, marginBottom: 8 }}>
                      {product.title}
                    </h3>
                    <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.7, marginBottom: 14, flexGrow: 1 }}>
                      {product.description}
                    </p>
                    {/* Top 3 features */}
                    <div style={{ marginBottom: 16 }}>
                      {product.features.slice(0, 3).map((f) => (
                        <div key={f} className="sv-feature-item" style={{ marginBottom: 5 }}>
                          <CheckCircle2 size={12} style={{ color: "#279B51", flexShrink: 0 }} />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link href={`/services#${product.slug}`} className="sv-read-more">
                      Learn More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Detailed rows ── */}
            <div className="text-center mb-12">
              <div className="sv-eyebrow">In Detail</div>
              <h2 className="sv-serif" style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.1 }}>
                Every Product, <em style={{ fontStyle: "italic", color: "#279B51" }}>Up Close</em>
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {products.map((product, idx) => (
                <div key={product.slug}>
                  <div
                    id={product.slug}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center py-16 ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                  >
                    {/* Image */}
                    <div className={`sv-detail-img-wrap ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <img
                        src={product.heroImage || product.image}
                        alt={product.title}
                        className="w-full object-cover"
                        style={{ height: "clamp(260px, 30vw, 380px)", display: "block" }}
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"; }}
                      />
                      {/* Floating number badge */}
                      <div style={{
                        position: "absolute", bottom: -14, right: -10,
                        background: "#0a1628", border: "1px solid rgba(39,155,81,0.3)",
                        borderRadius: 3, padding: "10px 16px",
                        boxShadow: "0 8px 24px rgba(10,22,40,0.2)",
                      }}>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: "rgba(39,155,81,0.3)", lineHeight: 1 }}>
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                      {/* Eyebrow tag */}
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(39,155,81,0.1)", border: "1px solid rgba(39,155,81,0.25)", color: "#279B51", fontSize: 10, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 12px", borderRadius: 2, marginBottom: 14 }}>
                        <span style={{ width: 12, height: 1, background: "#279B51", display: "inline-block" }} />
                        {product.tagline}
                      </div>

                      <h2 className="sv-serif" style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.1, marginBottom: 14 }}>
                        {product.title}
                      </h2>
                      <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, marginBottom: 20 }}>
                        {product.description}
                      </p>

                      {/* Features grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
                        {product.features.map((f) => (
                          <div key={f} className="sv-feature-item">
                            <CheckCircle2 size={13} style={{ color: "#279B51", flexShrink: 0 }} />
                            {f}
                          </div>
                        ))}
                      </div>

                      {/* Use cases */}
                      <div style={{ marginBottom: 18 }}>
                        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>
                          Ideal For
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {product.useCases.map((uc) => (
                            <span key={uc} className="sv-use-tag">{uc}</span>
                          ))}
                        </div>
                      </div>

                      {/* Brands */}
                      <div style={{ marginBottom: 24 }}>
                        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>
                          Supported Brands
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {product.brands.map((b) => (
                            <span key={b} className="sv-brand-tag">{b}</span>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <Link href="/contact" className="sv-cta-btn">
                          <Phone size={13} /> Get a Quote
                        </Link>
                        <Link href={`/services/${product.slug}`} className="sv-outline-btn">
                          Full Details <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {idx < products.length - 1 && <hr className="sv-divider" />}
                </div>
              ))}
            </div>

            {/* ── CTA Banner ── */}
            <div
              style={{
                background: "#0a1628", borderRadius: 3, padding: "52px 40px",
                textAlign: "center", border: "1px solid rgba(39,155,81,0.2)",
                position: "relative", overflow: "hidden", marginTop: 60,
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
              <div className="sv-serif hidden md:block" style={{ position: "absolute", bottom: -20, right: 20, fontSize: 100, fontWeight: 700, lineHeight: 1, color: "rgba(255,255,255,0.03)", letterSpacing: -4, userSelect: "none" }}>
                QUOTE
              </div>
              <h3 className="sv-serif" style={{ fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 600, color: "#f0ece4", lineHeight: 1.1, marginBottom: 10 }}>
                Not Sure Which Solution{" "}
                <em style={{ fontStyle: "italic", color: "#6ee7a0" }}>Is Right for You?</em>
              </h3>
              <p style={{ fontSize: 13.5, color: "rgba(240,236,228,0.5)", maxWidth: 460, margin: "0 auto 24px", lineHeight: 1.75 }}>
                Book a free site survey — our engineers will assess your property and recommend the ideal system.
              </p>
              <Link href="/contact" className="sv-cta-btn">
                <Phone size={13} /> Book a Free Survey
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
