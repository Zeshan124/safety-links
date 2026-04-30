"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import PageHero from "./PageHero";

const categories = ["All", "Swing Gates", "Sliding Gates", "Roller Shutters", "Glass Doors", "Barrier Gates"];

const projects = [
  { id: 1, category: "Swing Gates", title: "DHA Residence, Phase V", location: "DHA Phase V, Karachi", year: "2025", image: "https://safetylinks.org/wp-content/uploads/2025/04/swing.jpg", desc: "Double-leaf hydraulic swing gate with intercom system and battery backup for a premium villa." },
  { id: 2, category: "Sliding Gates", title: "Commercial Complex", location: "Clifton, Karachi", year: "2025", image: "https://safetylinks.org/wp-content/uploads/2025/04/sliding.jpg", desc: "Heavy-duty sliding gate with loop detector and access card system for a multi-tenant commercial building." },
  { id: 3, category: "Glass Doors", title: "Corporate Office Entrance", location: "PECHS, Karachi", year: "2024", image: "https://safetylinks.org/wp-content/uploads/2014/08/IMG_20240603_171658_399-1-1-scaled.jpg", desc: "Frameless automatic glass door system with motion sensors and emergency break-out feature." },
  { id: 4, category: "Roller Shutters", title: "Industrial Warehouse", location: "Korangi Industrial Area", year: "2024", image: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg", desc: "Custom 8m wide motorized roller shutter with remote control and manual override for a large warehouse." },
  { id: 5, category: "Swing Gates", title: "Gated Community Entrance", location: "Bahria Town, Karachi", year: "2024", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", desc: "Grand double swing gate with guard booth integration, CCTV, and RFID access for a luxury community." },
  { id: 6, category: "Sliding Gates", title: "Pharmaceutical Factory", location: "SITE Area, Karachi", year: "2023", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", desc: "Cantilever sliding gate for a GMP-certified factory requiring dust-free, track-less operation." },
  { id: 7, category: "Barrier Gates", title: "Shopping Mall Car Park", location: "Dolmen Mall, Karachi", year: "2023", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", desc: "12-lane barrier gate system with ANPR cameras, ticketing integration, and LED arms." },
  { id: 8, category: "Roller Shutters", title: "Retail Strip", location: "Tariq Road, Karachi", year: "2023", image: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg", desc: "Six individual motorized shutters with synchronized timer control for a retail strip." },
  { id: 9, category: "Swing Gates", title: "School Campus", location: "Gulshan-e-Iqbal, Karachi", year: "2022", image: "https://safetylinks.org/wp-content/uploads/2025/04/swing.jpg", desc: "School entrance swing gate with safety stop sensors and bell-schedule-triggered automation." },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <PageHero
        title="Our Projects"
        subtitle="Portfolio"
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Cities Covered", value: "5+" },
              { label: "Commercial Clients", value: "200+" },
              { label: "Years Active", value: "10+" },
            ].map((s) => (
              <div key={s.label} className="bg-secondary/60 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold font-playfair text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden bg-muted">
                  <img
                    src={project.image} alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"; }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{project.category}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">{project.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-base mb-1">{project.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <MapPin size={11} /> {project.location}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center bg-primary rounded-2xl p-10 text-primary-foreground">
            <h3 className="text-2xl font-playfair font-bold mb-3">Have a Project in Mind?</h3>
            <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">Tell us about your property and requirements — we'll design the ideal automated gate solution for you.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}