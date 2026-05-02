"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import PageHero from "@/components/Projects/PageHero";
import { getAllPosts, getAllCategories } from "@/lib/blog";

const posts = getAllPosts();
const categories = getAllCategories();

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-PK", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);
  const [featured, ...rest] = posts.filter((p) => p.featured);
  const showFeatured = active === "All";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .bl-font  { font-family: 'DM Sans', sans-serif; }
        .bl-serif { font-family: 'Cormorant Garamond', serif; }

        .bl-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          color: #279B51; font-size: 11px; font-weight: 500;
          letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 14px;
        }
        .bl-eyebrow::before, .bl-eyebrow::after {
          content: ''; width: 28px; height: 1px; background: #279B51; opacity: 0.6;
        }

        /* Filter buttons */
        .bl-filter {
          font-size: 10.5px; font-weight: 500; letter-spacing: 1px;
          text-transform: uppercase; padding: 7px 15px; border-radius: 2px;
          border: 1px solid rgba(39,155,81,0.22); background: transparent;
          color: #6b7280; cursor: pointer; transition: all 0.2s ease;
          white-space: nowrap;
        }
        .bl-filter:hover { border-color: #279B51; color: #279B51; }
        .bl-filter-active { background: #279B51 !important; color: #fff !important; border-color: #279B51 !important; }

        /* Featured card */
        .bl-featured {
          position: relative; overflow: hidden; border-radius: 3px;
          background: #0a1628;
          transition: box-shadow 0.3s ease;
        }
        .bl-featured:hover { box-shadow: 0 20px 60px rgba(10,22,40,0.22); }
        .bl-featured-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.7s ease, filter 0.4s ease;
        }
        .bl-featured:hover .bl-featured-img { transform: scale(1.04); filter: brightness(0.75); }
        .bl-featured-line {
          position: absolute; top: 0; left: 0;
          width: 4px; height: 0; background: #279B51;
          transition: height 0.5s ease; z-index: 3;
        }
        .bl-featured:hover .bl-featured-line { height: 100%; }

        /* Regular cards */
        .bl-card {
          background: #fff; border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px; overflow: hidden;
          transition: all 0.3s ease; display: flex; flex-direction: column;
        }
        .bl-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(18,58,101,0.12); border-color: rgba(39,155,81,0.28); }
        .bl-card-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s ease;
        }
        .bl-card:hover .bl-card-img { transform: scale(1.06); }
        .bl-card-line {
          position: absolute; top: 0; left: 0;
          width: 3px; height: 0; background: #279B51;
          transition: height 0.4s ease; z-index: 2;
        }
        .bl-card:hover .bl-card-line { height: 100%; }

        /* Category badge */
        .bl-cat-badge {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 9.5px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; color: #fff;
          background: rgba(39,155,81,0.88); padding: 3px 9px; border-radius: 2px;
        }
        .bl-cat-badge::before {
          content: ''; width: 4px; height: 4px;
          background: #fff; border-radius: 50%; opacity: 0.7;
        }
        .bl-cat-badge-dark {
          display: inline-block;
          font-size: 9.5px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; color: #279B51;
          background: rgba(39,155,81,0.1); border: 1px solid rgba(39,155,81,0.25);
          padding: 3px 9px; border-radius: 2px;
        }

        /* Read more link */
        .bl-read-more {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 500; letter-spacing: 1px;
          text-transform: uppercase; color: #279B51; text-decoration: none;
          transition: gap 0.2s ease;
        }
        .bl-read-more:hover { gap: 10px; }

        /* Sidebar */
        .bl-sidebar-card {
          background: #fff; border: 1px solid rgba(39,155,81,0.1);
          border-radius: 3px; overflow: hidden;
          transition: all 0.2s ease;
          display: flex; gap: 0; align-items: stretch;
        }
        .bl-sidebar-card:hover { border-color: rgba(39,155,81,0.3); transform: translateX(3px); }
        .bl-sidebar-accent {
          width: 3px; background: rgba(39,155,81,0.15); flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .bl-sidebar-card:hover .bl-sidebar-accent { background: #279B51; }
      `}</style>

      <div className="bl-font">
        <PageHero
          title="Our"
          titleEm="Blog"
          subtitle="Insights"
          breadcrumb="Blog"
          image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
        />

        <section className="py-16" style={{ background: "#f7f5f0" }}>
          <div className="max-w-7xl mx-auto px-6">

            {/* ── Featured post ── */}
            {showFeatured && featured && (
              <div className="mb-14">
                <div className="text-center mb-8">
                  <div className="bl-eyebrow">Featured</div>
                  <h2 className="bl-serif" style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#0f2d4a" }}>
                    Editor's <em style={{ fontStyle: "italic", color: "#279B51" }}>Pick</em>
                  </h2>
                </div>

                <Link href={`/blog/${featured.slug}`} className="bl-featured grid grid-cols-1 lg:grid-cols-2" style={{ textDecoration: "none", minHeight: 400 }}>
                  {/* Image */}
                  <div style={{ position: "relative", overflow: "hidden", minHeight: 280 }}>
                    <img src={featured.image} alt={featured.title} className="bl-featured-img" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,22,40,0.5) 0%, transparent 70%)" }} />
                    <div className="bl-featured-line" />
                    <div style={{ position: "absolute", top: 16, left: 16, zIndex: 3 }}>
                      <span className="bl-cat-badge">{featured.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#0a1628", position: "relative" }}>
                    {/* Top rule */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(240,236,228,0.45)" }}>
                        <Calendar size={11} style={{ color: "#279B51" }} />
                        {formatDate(featured.date)}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(240,236,228,0.45)" }}>
                        <Clock size={11} style={{ color: "#279B51" }} />
                        {featured.readTime}
                      </span>
                    </div>
                    <h3 className="bl-serif" style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f0ece4", lineHeight: 1.15, marginBottom: 16 }}>
                      {featured.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: "rgba(240,236,228,0.55)", lineHeight: 1.8, marginBottom: 24 }}>
                      {featured.excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase", color: "#279B51" }}>
                      Read Article <ArrowRight size={13} />
                    </div>
                    {/* Ghost text */}
                    <div className="bl-serif" style={{ position: "absolute", bottom: -10, right: 16, fontSize: 80, fontWeight: 700, color: "rgba(255,255,255,0.03)", letterSpacing: -3, userSelect: "none", lineHeight: 1 }}>
                      BLOG
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* ── Filters ── */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActive(cat)} className={`bl-filter ${active === cat ? "bl-filter-active" : ""}`}>
                  {cat}
                </button>
              ))}
            </div>

            {/* ── Main grid + sidebar ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Posts grid */}
              <div className="lg:col-span-2">
                {filtered.length === 0 ? (
                  <div style={{ padding: "60px 0", textAlign: "center", color: "#9ca3af" }}>
                    <BookOpen size={32} style={{ margin: "0 auto 12px", opacity: 0.3 }} />
                    <p style={{ fontSize: 14 }}>No posts in this category yet.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {filtered.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="bl-card" style={{ textDecoration: "none" }}>
                        {/* Image */}
                        <div style={{ position: "relative", height: 200, overflow: "hidden", background: "#d1cdc5", flexShrink: 0 }}>
                          <img src={post.image} alt={post.title} className="bl-card-img" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"; }} />
                          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.4) 0%, transparent 50%)" }} />
                          <div className="bl-card-line" />
                          <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
                            <span className="bl-cat-badge">{post.category}</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#9ca3af" }}>
                              <Calendar size={10} style={{ color: "#279B51" }} />
                              {formatDate(post.date)}
                            </span>
                            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#9ca3af" }}>
                              <Clock size={10} style={{ color: "#279B51" }} />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="bl-serif" style={{ fontSize: 19, fontWeight: 600, color: "#0f2d4a", lineHeight: 1.25, marginBottom: 10, flexGrow: 1 }}>
                            {post.title}
                          </h3>
                          <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.75, marginBottom: 16 }}>
                            {post.excerpt}
                          </p>
                          <span className="bl-read-more">
                            Read More <ArrowRight size={12} />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside>
                {/* All posts list */}
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, overflow: "hidden", marginBottom: 20 }}>
                  <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(39,155,81,0.1)", background: "#0a1628", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                    <h4 className="bl-serif" style={{ fontSize: 16, fontWeight: 600, color: "#f0ece4", margin: 0 }}>
                      Latest Articles
                    </h4>
                  </div>
                  <div style={{ padding: "8px 0" }}>
                    {posts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="bl-sidebar-card" style={{ textDecoration: "none", margin: "6px 12px", borderRadius: 3 }}>
                        <div className="bl-sidebar-accent" />
                        <div style={{ padding: "10px 12px" }}>
                          <div style={{ fontSize: 10, color: "#9ca3af", marginBottom: 3, display: "flex", alignItems: "center", gap: 5 }}>
                            <Calendar size={9} style={{ color: "#279B51" }} />
                            {formatDate(post.date)}
                          </div>
                          <p style={{ fontSize: 12.5, color: "#374151", lineHeight: 1.4, margin: 0, fontWeight: 400 }}>
                            {post.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div style={{ background: "#fff", border: "1px solid rgba(39,155,81,0.1)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(39,155,81,0.1)", background: "#0a1628", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #279B51, #123A65)" }} />
                    <h4 className="bl-serif" style={{ fontSize: 16, fontWeight: 600, color: "#f0ece4", margin: 0 }}>
                      Categories
                    </h4>
                  </div>
                  <div style={{ padding: "16px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {categories.filter((c) => c !== "All").map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActive(cat)}
                          className={`bl-filter ${active === cat ? "bl-filter-active" : ""}`}
                          style={{ fontSize: 10 }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
