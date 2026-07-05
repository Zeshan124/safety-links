"use client";

import { useState } from "react";
import { X, Phone } from "lucide-react";

const WA_NUMBER   = "923212508452";
const CALL_NUMBER = "03212508452";
const WA_MESSAGE  = "Hello! I'd like to get a free quote for an automatic gate system.";

function WhatsAppIcon({ size = 24, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 22l4.932-1.372A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 18a7.946 7.946 0 0 1-4.073-1.117l-.292-.173-3.027.842.856-3.124-.19-.302A7.944 7.944 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.588 8-7.999 8zm4.394-5.997c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.014-.373-1.931-1.19-.714-.637-1.197-1.423-1.337-1.663-.14-.24-.015-.37.105-.49.108-.107.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.468-.394-.404-.54-.412l-.46-.008c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.694 2.588 4.106 3.628.574.248 1.021.396 1.37.507.576.183 1.1.157 1.514.095.462-.069 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const waHref   = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
  const callHref = `tel:${CALL_NUMBER}`;

  return (
    <>
      <style>{`
        @keyframes waw-pop {
          from { opacity: 0; transform: translateY(8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes waw-ring {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.45); }
          70%  { box-shadow: 0 0 0 10px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }

        .waw-fab {
          width: 52px; height: 52px;
          background: #25D366;
          border-radius: 50%;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
          animation: waw-ring 2.5s ease-out infinite;
          transition: background 0.2s, transform 0.18s;
          position: relative;
        }
        .waw-fab:hover { background: #20c05a; transform: scale(1.07); animation: none; }

        .waw-card {
          animation: waw-pop 0.2s cubic-bezier(0.22,1,0.36,1) both;
          width: 300px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          overflow: hidden;
        }

        .waw-header {
          background: #075E54;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 11px;
        }
        .waw-avatar {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .waw-close {
          width: 26px; height: 26px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.75);
          transition: background 0.15s, color 0.15s;
          margin-left: auto;
          flex-shrink: 0;
        }
        .waw-close:hover { background: rgba(255,255,255,0.2); color: #fff; }

        .waw-body {
          background: #f0f0f0;
          padding: 16px 14px 12px;
        }
        .waw-bubble {
          background: #fff;
          border-radius: 2px 10px 10px 10px;
          padding: 9px 12px;
          font-size: 13px;
          color: #374151;
          line-height: 1.6;
          display: inline-block;
          box-shadow: 0 1px 2px rgba(0,0,0,0.08);
          max-width: 94%;
        }
        .waw-time {
          font-size: 10px;
          color: #aaa;
          margin-top: 5px;
          text-align: right;
          padding-right: 2px;
        }

        .waw-actions {
          padding: 12px 14px 14px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          background: #fff;
        }
        .waw-btn-wa {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 11px;
          background: #25D366; color: #fff;
          border-radius: 8px;
          text-decoration: none;
          font-size: 13px; font-weight: 600;
          transition: background 0.15s;
        }
        .waw-btn-wa:hover { background: #20c05a; }
        .waw-btn-call {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 10px;
          background: transparent; color: #374151;
          border-radius: 8px;
          text-decoration: none;
          font-size: 13px; font-weight: 500;
          border: 1px solid #e5e7eb;
          transition: border-color 0.15s, background 0.15s;
        }
        .waw-btn-call:hover { border-color: #d1d5db; background: #f9fafb; }
      `}</style>

      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, fontFamily: "'DM Sans', sans-serif" }}>

        {/* Card */}
        {open && (
          <div className="waw-card">
            {/* Header */}
            <div className="waw-header">
              <div className="waw-avatar">
                <WhatsAppIcon size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Safety Links</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
                  Usually replies instantly
                </div>
              </div>
              <button className="waw-close" onClick={() => setOpen(false)} aria-label="Close">
                <X size={13} />
              </button>
            </div>

            {/* Message bubble */}
            <div className="waw-body">
              <div className="waw-bubble">
                👋 Hi! Ask us anything about automatic gates, barriers, or shutters — we're happy to help.
              </div>
              <div className="waw-time">Now</div>
            </div>

            {/* Actions */}
            <div className="waw-actions">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="waw-btn-wa">
                <WhatsAppIcon size={16} color="#fff" />
                Chat on WhatsApp
              </a>
              <a href={callHref} className="waw-btn-call">
                <Phone size={14} color="#6b7280" />
                Call {CALL_NUMBER}
              </a>
            </div>
          </div>
        )}

        {/* FAB */}
        <button className="waw-fab" onClick={() => setOpen((v) => !v)} aria-label="Contact us on WhatsApp">
          {open ? <X size={20} color="#fff" /> : <WhatsAppIcon size={26} color="#fff" />}
        </button>

      </div>
    </>
  );
}
