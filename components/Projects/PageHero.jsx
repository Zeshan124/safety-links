"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({ title, subtitle, breadcrumb, image }) {
  return (
    <div className="relative h-64 md:h-100 overflow-hidden">
      <img
        src={image || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
      <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-white/60 text-xs mb-3">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-white">{breadcrumb || title}</span>
        </div>
        {subtitle && (
          <span className="inline-block bg-accent/90 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit">
            {subtitle}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white">{title}</h1>
      </div>
    </div>
  );
}