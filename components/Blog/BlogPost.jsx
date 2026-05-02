"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Phone } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

const allPosts = getAllPosts();

function formatDate(/** @type {string} */ iso) {
  return new Date(iso).toLocaleDateString("en-PK", { day: "numeric", month: "long", year: "numeric" });
}

/** Renders the markdown-like content string into JSX blocks. */
function renderContent(/** @type {string} */ content) {
  const blocks = content.split("\n\n").filter(Boolean);
  return blocks.map((/** @type {string} */ block, i) => {
    // H2
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#0f2d4a", lineHeight: 1.15, margin: "36px 0 14px", paddingBottom: 10, borderBottom: "1px solid rgba(39,155,81,0.15)" }}>
          {block.replace("## ", "")}
        </h2>
      );
    }
    // H3
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 600, color: "#0f2d4a", lineHeight: 1.2, margin: "28px 0 10px" }}>
          {block.replace("### ", "")}
        </h3>
      );
    }
    // Table (lines starting with |)
    if (block.includes("|")) {
      const rows = block.split("\n").filter((r) => r.trim() && !r.match(/^[\|\s\-]+$/));
      return (
        <div key={i} style={{ overflowX: "auto", margin: "20px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split("|").filter((c) => c.trim());
                const Tag = ri === 0 ? "th" : "td";
                return (
                  <tr key={ri} style={{ background: ri % 2 === 0 ? "rgba(39,155,81,0.04)" : "#fff" }}>
                    {cells.map((cell, ci) => (
                      <Tag key={ci} style={{ padding: "10px 14px", textAlign: "left", borderBottom: "1px solid rgba(39,155,81,0.1)", color: ri === 0 ? "#0f2d4a" : "#4b5563", fontWeight: ri === 0 ? 600 : 400 }}>
                        {cell.trim()}
                      </Tag>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    // Ordered list
    if (block.match(/^\d+\./m)) {
      const items = block.split("\n").filter(Boolean);
      return (
        <ol key={i} style={{ paddingLeft: 20, margin: "14px 0" }}>
          {items.map((item, ii) => (
            <li key={ii} style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8, marginBottom: 6 }}>
              {item.replace(/^\d+\.\s*/, "")}
            </li>
          ))}
        </ol>
      );
    }
    // Unordered list
    if (block.match(/^[-*]/m)) {
      const items = block.split("\n").filter(Boolean);
      return (
        <ul key={i} style={{ paddingLeft: 0, margin: "14px 0", listStyle: "none" }}>
          {items.map((item, ii) => (
            <li key={ii} style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8, marginBottom: 6, display: "flex", alignItems: "flex-start", gap: 8 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#279B51", flexShrink: 0, marginTop: 8 }} />
              {item.replace(/^[-*]\s*/, "")}
            </li>
          ))}
        </ul>
      );
    }
    // Bold/strong inline
    const parsedText = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return (
      <p key={i} dangerouslySetInnerHTML={{ __html: parsedText }} style={{ fontSize: 14.5, color: "#4b5563", lineHeight: 1.85, margin: "14px 0" }} />
    );
  });
}

export default function BlogPost(/** @type {{ post: ReturnType<typeof import("@/lib/blog").getAllPosts>[number] }} */ { post }) {
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prev = allPosts[currentIndex + 1] ?? null;
  const next = allPosts[currentIndex - 1] ?? null;

  const related = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        .bp-font  { font-family: 'DM Sans', sans-serif; }
        .bp-serif { font-family: 'Cormorant Garamond', serif; }

        /* Related cards */
        .bp-related-card {
          background: #fff; border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px; overflow: hidden;
          transition: all 0.3s ease; text-decoration: none; display: block;
        }
        .bp-related-card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(18,58,101,0.1); border-color: rgba(39,155,81,0.28); }
        .bp-related-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .bp-related-card:hover .bp-related-img { transform: scale(1.05); }
        .bp-related-line { position: absolute; top: 0; left: 0; width: 3px; height: 0; background: #279B51; transition: height 0.4s ease; z-index: 2; }
        .bp-related-card:hover .bp-related-line { height: 100%; }

        /* Nav buttons */
        .bp-nav-btn {
          display: flex; align-items: flex-start; gap: 12px;
          background: #fff; border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px; padding: 16px 18px; text-decoration: none;
          transition: all 0.25s ease; flex: 1;
        }
        .bp-nav-btn:hover { border-color: rgba(39,155,81,0.3); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(39,155,81,0.08); }

        /* CTA */
        .bp-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #279B51; color: #fff;
          font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 12px 28px;
          border-radius: 2px; text-decoration: none; transition: background 0.2s;
        }
        .bp-cta-btn:hover { background: #1e7a3f; }
      `}</style>

      <div className="bp-font">
        {/* ── Hero ── */}
        <div style={{ position: "relative", overflow: "hidden", height: "clamp(280px, 38vw, 480px)", background: "#0a1628" }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.04)", filter: "brightness(0.95)" }}
          />
          {/* Overlays */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.6) 25%, rgba(10,22,40,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 40%)" }} />
          {/* Left accent */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "linear-gradient(to bottom, transparent, #279B51 25%, #279B51 75%, transparent)", opacity: 0.8 }} />
          {/* Corner bracket */}
          <div style={{ position: "absolute", bottom: 24, right: 40, width: 48, height: 48, borderBottom: "2px solid rgba(39,155,81,0.35)", borderRight: "2px solid rgba(39,155,81,0.35)" }} />

          {/* Content */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 48px 48px", maxWidth: 800 }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "rgba(240,236,228,0.45)", marginBottom: 16, letterSpacing: "0.5px" }}>
              <Link href="/" style={{ color: "rgba(240,236,228,0.45)", textDecoration: "none", transition: "color 0.2s" }}>Home</Link>
              <span style={{ opacity: 0.4 }}>›</span>
              <Link href="/blog" style={{ color: "rgba(240,236,228,0.45)", textDecoration: "none" }}>Blog</Link>
              <span style={{ opacity: 0.4 }}>›</span>
              <span style={{ color: "rgba(240,236,228,0.75)" }}>{post.title}</span>
            </div>
            {/* Category */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(39,155,81,0.15)", border: "1px solid rgba(39,155,81,0.4)", color: "#279B51", fontSize: 10, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", padding: "5px 12px", borderRadius: 2, marginBottom: 14, width: "fit-content" }}>
              <span style={{ width: 14, height: 1, background: "#279B51", display: "inline-block" }} />
              {post.category}
            </div>
            <h1 className="bp-serif" style={{ fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 700, color: "#f0ece4", lineHeight: 1.08, letterSpacing: "-0.5px", marginBottom: 18 }}>
              {post.title}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(240,236,228,0.55)" }}>
                <User size={12} style={{ color: "#279B51" }} /> {post.author}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(240,236,228,0.55)" }}>
                <Calendar size={12} style={{ color: "#279B51" }} /> {formatDate(post.date)}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(240,236,228,0.55)" }}>
                <Clock size={12} style={{ color: "#279B51" }} /> {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <section style={{ background: "#f7f5f0", padding: "60px 0 80px" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Article */}
              <article className="lg:col-span-2">
                {/* Back link */}
                <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase", color: "#279B51", textDecoration: "none", marginBottom: 32 }}>
                  <ArrowLeft size={12} /> Back to Blog
                </Link>

                {/* Content card */}
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, padding: "40px 36px", position: "relative", overflow: "hidden" }}>
                  {/* Top rule */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                  {/* Excerpt lead */}
                  <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.8, fontWeight: 300, borderLeft: "3px solid #279B51", paddingLeft: 16, marginBottom: 28 }}>
                    {post.excerpt}
                  </p>
                  <hr style={{ border: "none", borderTop: "1px solid rgba(39,155,81,0.12)", marginBottom: 28 }} />
                  {renderContent(post.content)}
                </div>

                {/* Prev / Next navigation */}
                {(prev || next) && (
                  <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                    {prev && (
                      <Link href={`/blog/${prev.slug}`} className="bp-nav-btn" style={{ flexDirection: "column" }}>
                        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#279B51", display: "flex", alignItems: "center", gap: 4 }}>
                          <ArrowLeft size={10} /> Previous
                        </span>
                        <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.4, marginTop: 4 }}>{prev.title}</span>
                      </Link>
                    )}
                    {next && (
                      <Link href={`/blog/${next.slug}`} className="bp-nav-btn" style={{ flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
                        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", color: "#279B51", display: "flex", alignItems: "center", gap: 4 }}>
                          Next <ArrowRight size={10} />
                        </span>
                        <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.4, marginTop: 4 }}>{next.title}</span>
                      </Link>
                    )}
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Author card */}
                <div style={{ background: "#0a1628", borderRadius: 3, overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                  <div style={{ padding: "24px 20px", textAlign: "center" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(39,155,81,0.15)", border: "2px solid rgba(39,155,81,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: "#279B51" }}>
                        {post.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: "#f0ece4", marginBottom: 4 }}>{post.author}</div>
                    <div style={{ fontSize: 10, color: "rgba(240,236,228,0.4)", letterSpacing: "1px", textTransform: "uppercase" }}>Safety Links Expert</div>
                  </div>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                  <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(39,155,81,0.1)", background: "#0a1628", position: "relative" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                      <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600, color: "#f0ece4", margin: 0 }}>Related Articles</h4>
                    </div>
                    <div style={{ padding: "12px" }}>
                      {related.map((rp) => (
                        <Link key={rp.slug} href={`/blog/${rp.slug}`} className="bp-related-card" style={{ marginBottom: 10 }}>
                          <div style={{ position: "relative", height: 120, overflow: "hidden" }}>
                            <img src={rp.image} alt={rp.title} className="bp-related-img" onError={(e) => { /** @type {HTMLImageElement} */ (e.target).src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"; }} />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 50%)" }} />
                            <div className="bp-related-line" />
                          </div>
                          <div style={{ padding: "12px 14px" }}>
                            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.4, margin: 0 }}>{rp.title}</p>
                            <span style={{ fontSize: 10, color: "#9ca3af", marginTop: 5, display: "flex", alignItems: "center", gap: 4 }}>
                              <Calendar size={9} style={{ color: "#279B51" }} /> {formatDate(rp.date)}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div style={{ background: "#0a1628", borderRadius: 3, padding: "28px 20px", textAlign: "center", border: "1px solid rgba(39,155,81,0.2)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: "#f0ece4", lineHeight: 1.2, marginBottom: 10 }}>
                    Need a <em style={{ fontStyle: "italic", color: "#6ee7a0" }}>Free Quote?</em>
                  </h4>
                  <p style={{ fontSize: 12, color: "rgba(240,236,228,0.5)", lineHeight: 1.75, marginBottom: 18 }}>
                    Our engineers are ready to visit your site and recommend the perfect solution.
                  </p>
                  <Link href="/contact" className="bp-cta-btn" style={{ width: "100%", justifyContent: "center" }}>
                    <Phone size={12} /> Contact Us
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
