/**
 * Services data store.
 * Add or edit services here — they automatically appear on /services and /services/[slug].
 */

export const servicesList = [
  {
    slug: "automatic-sliding-gates",
    title: "Automatic Sliding Gates",
    tagline: "Space-Saving. High-Security. Built to Last.",
    image: "https://safetylinks.org/wp-content/uploads/2025/04/sliding.jpg",
    heroImage: "/images/home/Sliding_door_1.jpeg",
    description:
      "Space-saving sliding gates ideal for properties with limited driveway space. Engineered for smooth, reliable performance in residential and commercial settings.",
    body: `Automatic sliding gates are the go-to solution when driveway depth is limited. Unlike swing gates that need clearance in front of or behind the boundary, a sliding gate travels along your perimeter wall — making it ideal for tight urban plots.

Our sliding gate systems are built on heavy-duty rack-and-pinion or V-groove track drives, paired with Italian-engineered motors from FAAC, BFT, and CAME. Every system includes photo-electric safety beams, an anti-intrusion electromagnetic lock, and a GSM or remote control module as standard.

We offer systems from single residential driveways up to 12-metre industrial openings with three-phase industrial motors rated for 200+ cycles per day.`,
    features: [
      "Heavy-Duty Rack & Pinion Drive",
      "Anti-Intrusion Electromagnetic Lock",
      "Auto Reversal Safety Beams",
      "Remote, Card & GSM Access",
      "Loop Detector Compatible",
      "Custom Gate Widths Available",
      "Battery Backup Option",
      "Soft-Start / Soft-Stop Motor",
    ],
    useCases: ["Residential Driveways", "Commercial Compounds", "Industrial Facilities", "Gated Communities"],
    brands: ["FAAC", "BFT", "CAME", "Roger Technology"],
  },
  {
    slug: "automatic-swing-gates",
    title: "Automatic Swing Gates",
    tagline: "Elegant Automation for Every Property.",
    image: "https://safetylinks.org/wp-content/uploads/2025/04/swing.jpg",
    heroImage: "/images/home/Swing_Gates_Bahria.jpeg",
    description:
      "Classic swing gates with modern automation. Available in single and double leaf configurations, offering elegant and reliable access control for all property types.",
    body: `Swing gates remain the most popular automated gate type in Karachi's residential market — and for good reason. They're elegant, robust, and straightforward to maintain. We offer both electromechanical and hydraulic actuator systems depending on gate weight and usage frequency.

For lighter residential gates (up to 250kg per leaf), electromechanical arms from FAAC 391 or BFT Phobos are ideal. For heavier ornamental iron gates or high-cycle commercial entrances, hydraulic actuators such as the FAAC 760 provide superior torque and longevity.

Every installation includes obstacle detection, an emergency manual release, intercom pre-wiring, and battery backup as standard — ensuring safe operation even during Karachi's frequent load-shedding.`,
    features: [
      "Single & Double Leaf Options",
      "Hydraulic or Electromechanical",
      "Safety Obstacle Detection",
      "Remote Control Included",
      "Intercom Integration Ready",
      "Battery Backup Standard",
      "Up to 3,500 kg Leaf Weight",
      "Anti-Crush Force Limiter",
    ],
    useCases: ["Villas & Residences", "Office Entrances", "Hotels & Resorts", "Schools & Hospitals"],
    brands: ["FAAC", "BFT", "CAME", "Nice"],
  },
  {
    slug: "automatic-glass-door",
    title: "Automatic Glass Door",
    tagline: "Touchless Entry. Sleek Design. Hygienic Access.",
    image: "https://safetylinks.org/wp-content/uploads/2014/08/IMG_20240603_171658_399-1-1-scaled.jpg",
    heroImage: "/images/home/sensor_glass_door.jpg",
    description:
      "Sleek, touchless automatic glass doors for modern commercial and residential properties. Motion sensor-activated for hands-free, hygienic entry.",
    body: `Automatic sliding glass doors have become the standard entrance solution for commercial buildings across Karachi — from corporate lobbies to hospital entrances to hotel receptions. Their clean, frameless appearance projects professionalism while the hands-free operation reduces germ transmission.

Our glass door systems use microwave or presence sensors for activation and can be configured for single or bi-parting leaf layouts. Opening speed, hold-open time, and safety break-out force are all adjustable from the control unit.

We supply and install systems from GEZE, DORMA, and Record — all compliant with EN 16005 automatic door safety standards. Stainless steel hardware, tempered safety glass, and concealed floor springs are available across our range.`,
    features: [
      "Microwave / PIR Sensor Activation",
      "Adjustable Opening Speed",
      "Emergency Break-Out Safety",
      "Soft-Start & Soft-Stop",
      "Energy-Saving Hold-Open Timer",
      "Stainless Steel Track Hardware",
      "Single & Bi-Parting Layouts",
      "ADA / DDA Compliant Options",
    ],
    useCases: ["Shopping Malls", "Corporate Offices", "Hospitals & Clinics", "Hotels & Lobbies"],
    brands: ["GEZE", "DORMA", "Record", "Stanley Access"],
  },
  {
    slug: "barrier-gates",
    title: "Barrier Gates",
    tagline: "Fast. Reliable. High-Traffic Ready.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    description:
      "Fast and durable barrier gates for high-traffic parking and access control areas. Ideal for toll plazas, car parks, and secure premises.",
    body: `Barrier gates (boom gates) are the most efficient solution for controlling vehicle flow in high-traffic locations. With opening cycles as fast as 0.9 seconds, they can handle hundreds of vehicles per hour without creating queues.

Our barrier gate systems are built around FAAC and BFT motors with aluminium or PVC boom arms in lengths from 2.5m to 6m. Illuminated arms with LED lighting improve visibility in multi-storey car parks and night-time environments. All systems support loop detectors, ticket machines, ANPR cameras, and access card readers.

For large-scale deployments (10+ lanes), we offer centralised management software, real-time occupancy monitoring, and remote diagnostics — as we delivered for Dolmen Mall's 12-lane system in 2023.`,
    features: [
      "Fast Opening (0.9 – 3 seconds)",
      "Loop Detector Input Standard",
      "LED-Illuminated Boom Arm",
      "Crash-Proof Safety Limiter",
      "Counterbalance Spring System",
      "ANPR & Ticketing Compatible",
      "Arms up to 6 Metres",
      "Centralised Multi-Lane Control",
    ],
    useCases: ["Parking Lots", "Toll Plazas", "Petrol Stations", "Airports & Seaports"],
    brands: ["FAAC", "BFT", "CAME", "Magnetic Access"],
  },
  {
    slug: "high-speed-pvc-rolling-door",
    title: "High Speed PVC Rolling Door",
    tagline: "Maximum Throughput. Minimum Heat Loss.",
    image: "https://safetylinks.org/wp-content/uploads/2025/07/roll-up-down-2.png",
    heroImage: "https://safetylinks.org/wp-content/uploads/2025/07/roll-up-down-2.png",
    description:
      "Industrial-grade high-speed PVC doors delivering up to 3 m/s operation. Designed for facilities requiring rapid, energy-efficient access cycles.",
    body: `High-speed PVC rolling doors are essential in any facility where temperature separation, hygiene control, or cycle speed is critical. They open at 1–3 m/s (versus 0.1–0.2 m/s for a standard roller shutter), dramatically reducing heat exchange per cycle in cold stores, food factories, and clean rooms.

The self-repair curtain system is our most-requested feature: if a forklift strikes the door, the PVC panel automatically re-threads itself into the side guides when the next open command is issued — eliminating costly downtime.

We supply systems from EFAFLEX, Hormann, and Dynaco in widths up to 10m and heights up to 7m. Activation can be via radar sensor, push button, remote, or loop detector.`,
    features: [
      "Up to 3 m/s Opening Speed",
      "Self-Repair Curtain System",
      "Thermal Insulated PVC Options",
      "Radar & Motion Sensor Ready",
      "Frequency Inverter Drive",
      "ATEX Certified Versions",
      "Widths up to 10 m",
      "Wind-Bar Reinforced Panels",
    ],
    useCases: ["Cold Storage Facilities", "Food & Pharma Plants", "Logistics Warehouses", "Clean Rooms"],
    brands: ["EFAFLEX", "Hormann", "Dynaco", "Assa Abloy"],
  },
  {
    slug: "roller-shutter-motorize-shutter",
    title: "Roller Shutter & Motorized Shutter",
    tagline: "Made-to-Measure Security for Every Opening.",
    image: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg",
    heroImage: "https://safetylinks.org/wp-content/uploads/2019/11/roller-shutter@2x.jpg",
    description:
      "Made-to-measure motorized roller shutters for security, insulation, and noise reduction. Suitable for all opening sizes from shop fronts to large industrial bays.",
    body: `Motorized roller shutters are one of our most versatile product lines. We manufacture and install shutters for shop fronts, garage doors, French windows, factory bays, and warehouse openings — made to your exact dimensions.

Profile options include galvanised steel (standard security), aluminium (lightweight and corrosion-resistant), and double-wall foam-filled slats (insulated, ideal for temperature-sensitive environments). All shutters are fitted with tubular motors from Somfy, FAAC, or Simu and can be controlled by remote, timer, or smartphone app.

Manual override via detachable crank handle is standard on all installations — ensuring access during power failures, which are common in Karachi's industrial areas.`,
    features: [
      "Custom Width & Height",
      "Wind-Resistant Profiles",
      "Double-Wall Insulated Slats",
      "Manual Override Crank",
      "Tubular Motor — Whisper Quiet",
      "Remote & Timer Control",
      "Galvanised, Aluminium, or PVC",
      "Anti-Lift Security Locks",
    ],
    useCases: ["Retail Shop Fronts", "Garages & Workshops", "Warehouses", "Large Industrial Bays"],
    brands: ["Somfy", "FAAC", "Simu", "Hormann"],
  },
  {
    slug: "road-blocker",
    title: "Road Blocker",
    tagline: "The Highest Level of Vehicle Perimeter Security.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    description:
      "Heavy-duty hydraulic road blockers for maximum perimeter security. Prevents unauthorized vehicle access to sensitive or high-security zones.",
    body: `Road blockers are the ultimate vehicle access control solution — rated to stop a 7.5-tonne truck travelling at 80 km/h. They're mandatory at government buildings, embassies, banks, and military installations where hostile vehicle intrusion is a credible threat.

Our road blockers are hydraulic-powered with a fail-safe configuration selectable as fail-up (secure by default) or fail-down (passage by default in power failure). Response time from flat to raised is typically 2–4 seconds.

We work with PAS 68 / IWA 14 certified systems and supply test certification documentation for clients that require compliance proof for insurers or government tenders. Surface-mounted options are available for sites where underground installation is not feasible.`,
    features: [
      "Crash-Rated K4 / K8 / K12",
      "Hydraulic Actuation",
      "Fail-Safe Up or Down",
      "CCTV & Access System Integration",
      "Stainless Steel Finish",
      "Surface or Recessed Mount",
      "PAS 68 / IWA 14 Certified",
      "Remote & Card Control",
    ],
    useCases: ["Government Buildings", "Embassies", "Banks & Financial Centres", "Military Installations"],
    brands: ["Delta Scientific", "ATG Access", "Pilomat", "Heald"],
  },
  {
    slug: "dock-leveler",
    title: "Dock Leveler",
    tagline: "Safe, Smooth Goods Transfer at Every Loading Bay.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    description:
      "Hydraulic and mechanical dock levelers bridging the gap between loading bays and trucks. Ensures smooth, safe goods transfer in busy logistics environments.",
    body: `Dock levelers bridge the height and gap difference between a fixed loading bay floor and the bed of a delivery truck. Without one, forklifts and pallet trucks cannot safely cross — creating a bottleneck and increasing injury risk.

We supply and install hydraulic and mechanical (spring-assisted) dock levelers in capacities from 6,000 kg to 12,000 kg. The extending lip ramp adjusts to different truck heights while anti-slip diamond-plate surfaces protect workers and equipment.

Hydraulic versions offer push-button operation from inside the building and integrate with dock shelters and leveler pit frames. Mechanical versions are lower in maintenance cost and preferred in high-cycle environments where electrical reliability is critical.`,
    features: [
      "Hydraulic & Mechanical Types",
      "Lip Extension Ramp",
      "Anti-Slip Diamond Plate",
      "Bumper & Pit Frame Protection",
      "Push-Button & Manual Activation",
      "Capacity up to 12 Tonnes",
      "Dock Shelter Compatible",
      "Corrosion-Resistant Finish",
    ],
    useCases: ["Distribution Centres", "Cold Chain Facilities", "Manufacturing Plants", "Retail Warehouses"],
    brands: ["Pentalift", "Assa Abloy", "Hormann", "Blue Giant"],
  },
];

/**
 * Returns all services in order.
 */
export function getAllServices() {
  return servicesList;
}

/**
 * Returns a single service by slug, or undefined if not found.
 * @param {string} slug
 */
export function getServiceBySlug(slug) {
  return servicesList.find((s) => s.slug === slug);
}
