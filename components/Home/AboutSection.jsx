import { CheckCircle2, Award, Wrench, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: Award, title: "10+ Years Experience", desc: "A decade of delivering trusted gate automation solutions across Karachi." },
  { icon: Wrench, title: "Certified Technicians", desc: "Our engineers are factory-trained and follow strict installation standards." },
  { icon: CheckCircle2, title: "Quality Materials", desc: "We use only premium motors and materials for maximum longevity." },
  { icon: HeadphonesIcon, title: "After-Sales Support", desc: "Dedicated maintenance and repair services to keep your systems running." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Safety Links team at work"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold font-playfair">10+</div>
              <div className="text-sm opacity-80 mt-1">Years of Excellence</div>
            </div>
            {/* Accent block */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Content side */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mt-2 mb-5">
              Karachi's Leading Gate Automation Specialists
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Safety Links Automatic Gates Solution offers complete residential and commercial security and surveillance solutions. We specialize in installing and servicing automatic swing and sliding gates, with a strong reputation built on quality workmanship and customer satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Serving homes and businesses across Karachi, we combine advanced technology with professional service to deliver maximum safety, reliability, and convenience for every client.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2.5 rounded-lg shrink-0">
                    <r.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{r.title}</div>
                    <div className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}