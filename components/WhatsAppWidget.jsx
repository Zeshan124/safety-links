"use client";

import { useState } from "react";
import { X } from "lucide-react";

function WhatsAppIcon({ size = 26, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 22l4.932-1.372A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 18a7.946 7.946 0 0 1-4.073-1.117l-.292-.173-3.027.842.856-3.124-.19-.302A7.944 7.944 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.588 8-7.999 8zm4.394-5.997c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.014-.373-1.931-1.19-.714-.637-1.197-1.423-1.337-1.663-.14-.24-.015-.37.105-.49.108-.107.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.468-.394-.404-.54-.412l-.46-.008c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.694 2.588 4.106 3.628.574.248 1.021.396 1.37.507.576.183 1.1.157 1.514.095.462-.069 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
    </svg>
  );
}

const WA_NUMBER = "923212508452";
const WA_MESSAGE = "Hello! I'd like to get a free quote for an automatic gate system.";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <>
      <style>{`
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes wa-ping {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes wa-pop {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        .wa-fab {
          width: 56px; height: 56px;
          background: #25D366; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; border: none;
          box-shadow: 0 4px 18px rgba(37,211,102,0.45);
          animation: wa-bounce 2.8s ease-in-out infinite;
          transition: background 0.2s, box-shadow 0.2s;
          position: relative;
        }
        .wa-fab:hover {
          background: #1fba57;
          box-shadow: 0 6px 24px rgba(37,211,102,0.55);
          animation: none;
        }
        .wa-ping {
          position: absolute; inset: 0;
          border-radius: 50%;
          background: rgba(37,211,102,0.4);
          animation: wa-ping 2s ease-out infinite;
          pointer-events: none;
        }
        .wa-bubble {
          animation: wa-pop 0.22s ease both;
          background: #fff;
          border-radius: 12px 12px 0 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.14);
          width: 280px;
          overflow: hidden;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 12,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Chat bubble */}
        {open && (
          <div className="wa-bubble">
            {/* Header */}
            <div style={{ background: "#25D366", padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <WhatsAppIcon size={22} color="#fff" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>Safety Links</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff", display: "inline-block", opacity: 0.9 }} />
                  Typically replies within minutes
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.8)", padding: 4, display: "flex" }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Message preview */}
            <div style={{ padding: "16px 14px" }}>
              <div style={{ background: "#f0f0f0", borderRadius: "8px 8px 8px 0", padding: "10px 13px", fontSize: 13, color: "#374151", lineHeight: 1.55, display: "inline-block", maxWidth: "90%" }}>
                👋 Hi! How can we help you today? Click below to chat with us on WhatsApp.
              </div>
            </div>

            {/* CTA */}
            <div style={{ padding: "0 14px 16px" }}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "#25D366", color: "#fff", borderRadius: 6,
                  padding: "11px 16px", textDecoration: "none",
                  fontSize: 13, fontWeight: 500,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1fba57"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#25D366"; }}
              >
                <WhatsAppIcon size={17} color="#fff" />
                Start Chat on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* FAB button */}
        <button className="wa-fab" onClick={() => setOpen((v) => !v)} aria-label="Chat on WhatsApp">
          <div className="wa-ping" />
          {open ? <X size={22} color="#fff" /> : <WhatsAppIcon size={28} color="#fff" />}
        </button>
      </div>
    </>
  );
}
