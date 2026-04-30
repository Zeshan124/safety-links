"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Automatic Sliding Gates", href: "/services#automatic-sliding-gates" },
      { label: "Automatic Swing Gates", href: "/services#automatic-swing-gates" },
      { label: "Automatic Glass Door", href: "/services#automatic-glass-door" },
      { label: "Barrier Gates", href: "/services#barrier-gates" },
      { label: "High Speed PVC Rolling Door", href: "/services#high-speed-pvc-rolling-door" },
      { label: "Roller Shutter & Motorize Shutter", href: "/services#roller-shutter-motorize-shutter" },
      { label: "Road Blocker", href: "/services#road-blocker" },
      { label: "Dock Leveler", href: "/services#dock-leveler" },
    ],
  },
  { label: "Projects", href: "#" },
  { label: "Clients", href: "#" },
  { label: "Our Work", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(/** @type {string|null} */ (null));
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdown(null);
    setMobileServices(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (/** @type {string} */ href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .nb-font { font-family: 'DM Sans', sans-serif; }
        .nb-logo-font { font-family: 'Cormorant Garamond', serif; }

        /* Desktop nav links */
        .nb-link-item {
          color: #4a5568;
          font-size: 13px;
          padding: 0 14px;
          height: 68px;
          display: flex;
          align-items: center;
          text-decoration: none;
          position: relative;
          transition: color 0.2s;
          white-space: nowrap;
          gap: 4px;
          cursor: pointer;
        }
        .nb-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 14px;
          right: 14px;
          height: 2px;
          background: #279B51;
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }
        .nb-link-item:hover { color: #279B51; }
        .nb-link-item:hover::after { transform: scaleX(1); }
        .nb-link-active { color: #279B51 !important; }
        .nb-link-active::after { transform: scaleX(1) !important; }

        /* Desktop dropdown */
        .nb-dd-item {
          display: block;
          padding: 10px 18px;
          font-size: 12px;
          color: #4a5568;
          text-decoration: none;
          border-bottom: 1px solid rgba(39,155,81,0.07);
          transition: all 0.15s;
          position: relative;
        }
        .nb-dd-item:last-child { border-bottom: none; }
        .nb-dd-item:hover {
          color: #279B51;
          background: rgba(39,155,81,0.05);
          padding-left: 26px;
        }
        .nb-dd-item::before {
          content: '—';
          position: absolute;
          left: 10px;
          color: #279B51;
          opacity: 0;
          transition: opacity 0.15s;
          font-size: 10px;
        }
        .nb-dd-item:hover::before { opacity: 1; }

        /* CTA button */
        .nb-cta-btn {
          background: #279B51;
          border: none;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 10px 20px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
          text-decoration: none;
        }
        .nb-cta-btn:hover { background: #1e7a3f; transform: translateY(-1px); }

        /* Mobile menu slide animation */
        @keyframes menuSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-mobile-menu { animation: menuSlideDown 0.22s ease both; }

        /* Mobile accordion animation */
        @keyframes subSlideDown {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-sub-open { animation: subSlideDown 0.18s ease both; }

        /* Backdrop */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .nb-backdrop { animation: fadeIn 0.2s ease both; }

        /* Chevron */
        .nb-chevron { transition: transform 0.2s; }
        .nb-chevron-open { transform: rotate(180deg); }
      `}</style>

      {/* Backdrop overlay — closes menu on tap outside */}
      {isOpen && (
        <div
          className="nb-backdrop fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(0,0,0,0.45)", top: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      <header
        className="nb-font fixed top-0 left-0 right-0 z-50 flex flex-col"
        style={{ boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.1)" : "none", transition: "box-shadow 0.3s" }}
      >
        {/* ── Top info bar (desktop only) ── */}
        <div
          className="hidden md:flex items-center justify-between px-8"
          style={{ background: "#123A65", height: 36, borderBottom: "1px solid rgba(39,155,81,0.25)" }}
        >
          <div className="flex items-center gap-1.5" style={{ color: "#F0ECE4", fontSize: 11 }}>
            <MapPin size={11} style={{ color: "#279B51", flexShrink: 0 }} />
            12-C Mezzanine Floor, Street 07 Badar Commercial DHA Phase V, Karachi
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5" style={{ color: "#F0ECE4", fontSize: 11 }}>
              <Clock size={11} style={{ color: "#279B51" }} />
              Mon–Sat: 10:00 AM – 6:00 PM
            </span>
            <span className="flex items-center gap-1.5" style={{ color: "#F0ECE4", fontSize: 11 }}>
              <Phone size={11} style={{ color: "#279B51" }} />
              021-35244550 | 0321-2508451
            </span>
          </div>
        </div>

        {/* ── Main nav ── */}
        <nav style={{ background: "#ffffff", borderBottom: "2px solid rgba(39,155,81,0.2)" }}>
          <div className="flex items-center justify-between px-5 sm:px-6 lg:px-8" style={{ height: 64 }}>

            {/* Logo */}
            <Link href="/" className="shrink-0" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <Image
                src="/images/safety-link.svg"
                alt="Safety Links"
                width={160}
                height={44}
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdown(link.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <Link href={link.href} className={`nb-link-item ${isActive(link.href) ? "nb-link-active" : ""}`}>
                      {link.label}
                      <ChevronDown size={12} className={`nb-chevron ${dropdown === link.label ? "nb-chevron-open" : ""}`} />
                    </Link>
                    {dropdown === link.label && (
                      <div style={{
                        position: "absolute",
                        top: "calc(100% + 1px)",
                        left: 0,
                        width: 262,
                        background: "#ffffff",
                        border: "1px solid rgba(39,155,81,0.2)",
                        borderTop: "2px solid #279B51",
                        zIndex: 50,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      }}>
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href} className="nb-dd-item">{child.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`nb-link-item ${isActive(link.href) ? "nb-link-active" : ""}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a href="tel:02135244550" className="nb-cta-btn hidden md:flex">
                <Phone size={13} /> Call Now
              </a>
              <button
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-center"
                style={{
                  width: 40, height: 40,
                  border: `1.5px solid ${isOpen ? "#279B51" : "rgba(39,155,81,0.4)"}`,
                  borderRadius: 2,
                  background: isOpen ? "rgba(39,155,81,0.08)" : "transparent",
                  color: "#279B51",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* ── Mobile menu ── */}
          {isOpen && (
            <div
              className="nb-mobile-menu lg:hidden"
              style={{
                background: "#ffffff",
                borderTop: "1px solid rgba(39,155,81,0.15)",
                maxHeight: "calc(100svh - 64px)",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {/* Nav links */}
              <div style={{ padding: "8px 0" }}>
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setMobileServices(!mobileServices)}
                          className="w-full flex items-center justify-between"
                          style={{
                            padding: "0 20px",
                            height: 52,
                            color: isActive(link.href) ? "#279B51" : "#374151",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 14,
                            fontWeight: 400,
                            background: mobileServices ? "rgba(39,155,81,0.04)" : "transparent",
                            border: "none",
                            borderLeft: isActive(link.href) ? "3px solid #279B51" : "3px solid transparent",
                            borderBottom: "1px solid rgba(39,155,81,0.08)",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "background 0.2s",
                          }}
                        >
                          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span
                              style={{
                                width: 6, height: 6,
                                borderRadius: "50%",
                                background: isActive(link.href) ? "#279B51" : "rgba(39,155,81,0.3)",
                                flexShrink: 0,
                              }}
                            />
                            {link.label}
                          </span>
                          <ChevronDown
                            size={14}
                            style={{
                              color: "#279B51",
                              transform: mobileServices ? "rotate(180deg)" : "none",
                              transition: "transform 0.2s",
                              flexShrink: 0,
                            }}
                          />
                        </button>

                        {/* Services sub-links */}
                        {mobileServices && (
                          <div className="nb-sub-open" style={{ background: "#fafffe" }}>
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                  padding: "0 20px 0 36px",
                                  height: 46,
                                  fontSize: 13,
                                  color: "#6b7280",
                                  textDecoration: "none",
                                  borderBottom: "1px solid rgba(39,155,81,0.05)",
                                  transition: "color 0.15s, background 0.15s",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = "#279B51"; e.currentTarget.style.background = "rgba(39,155,81,0.04)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.background = "transparent"; }}
                              >
                                <span style={{ width: 14, height: 1, background: "#279B51", opacity: 0.5, flexShrink: 0 }} />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "0 20px",
                          height: 52,
                          fontSize: 14,
                          color: isActive(link.href) ? "#279B51" : "#374151",
                          textDecoration: "none",
                          borderBottom: "1px solid rgba(39,155,81,0.08)",
                          borderLeft: isActive(link.href) ? "3px solid #279B51" : "3px solid transparent",
                          background: isActive(link.href) ? "rgba(39,155,81,0.04)" : "transparent",
                          transition: "all 0.15s",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        <span
                          style={{
                            width: 6, height: 6,
                            borderRadius: "50%",
                            background: isActive(link.href) ? "#279B51" : "rgba(39,155,81,0.3)",
                            flexShrink: 0,
                          }}
                        />
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile footer — contact info + CTA */}
              <div style={{
                padding: "16px 20px 24px",
                borderTop: "2px solid rgba(39,155,81,0.15)",
                background: "#f9fffe",
              }}>
                <a
                  href="tel:02135244550"
                  className="nb-cta-btn flex justify-center items-center w-full text-xs py-3.5 px-5 mb-4"
                >
                  <Phone size={14} /> Call Now — 021-35244550
                </a>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#6b7280", fontSize: 12 }}>
                    <MapPin size={13} style={{ color: "#279B51", flexShrink: 0, marginTop: 1 }} />
                    <span>12-C Mezzanine Floor, Street 07 Badar Commercial DHA Phase V, Karachi</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#6b7280", fontSize: 12 }}>
                    <Phone size={13} style={{ color: "#279B51", flexShrink: 0 }} />
                    021-35244550 | 0321-2508451
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#6b7280", fontSize: 12 }}>
                    <Clock size={13} style={{ color: "#279B51", flexShrink: 0 }} />
                    Mon–Sat: 10:00 AM – 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
