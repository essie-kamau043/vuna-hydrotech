// src/data.js

export const SERVICES = [
  { icon: "🏞️", title: "HDPE Lined Water Pans", desc: "Our flagship service — professionally constructed water pans lined with high-quality HDPE membranes. Leak-proof, long-lasting, built to hold maximum water capacity for farms and communities.", featured: true },
  { icon: "🌧️", title: "Rainwater Harvesting Systems", desc: "Complete rooftop rainwater collection systems with gutters, downpipes, first-flush diverters, and storage tanks. Ideal for homes and commercial buildings." },
  { icon: "🚜", title: "Excavation & Earth Works", desc: "Precision excavation using engineered design to shape your water pan or dam for maximum capacity and durability across all terrain types." },
  { icon: "🌊", title: "Borehole Drilling & Pumping", desc: "Ground water exploration, borehole drilling, casing, pump installation, and water testing. Sustainable underground water solutions for large-scale use." },
  { icon: "🌿", title: "Farm & Agricultural Water", desc: "Water harvesting for irrigation, livestock, and farming — increasing productivity and transforming your farm into a reliable, water-secure operation." },
  { icon: "🔧", title: "Maintenance & Repair", desc: "Regular servicing, inspection, and repair of HDPE liners, water pans, and all water harvesting infrastructure. We ensure lasting impact." },
];

export const WHY_POINTS = [
  { icon: "🏆", title: "Experienced Team", desc: "Our engineers and technicians are fully trained with years of hands-on water projects across all 47 counties of Kenya." },
  { icon: "🧱", title: "Quality Materials", desc: "We use only certified, heavy-duty HDPE liners and premium materials that withstand Kenya's harshest conditions." },
  { icon: "✅", title: "Professional Service", desc: "From consultation to handover, we deliver structured, professional service — on time and on budget, every project." },
  { icon: "🌍", title: "Lasting Impact", desc: "Our water solutions don't just hold water — they transform livelihoods, farms, and communities for generations." },
];

export const CYCLE_STEPS = [
  { icon: "🌧️", title: "Rain Falls",   desc: "Rainfall fills your water pan naturally" },
  { icon: "🏞️", title: "Water Pan",    desc: "HDPE-lined pan holds every drop" },
  { icon: "🐄", title: "Livestock",    desc: "Animals get reliable water access" },
  { icon: "💧", title: "Irrigation",   desc: "Pumped to your fields & crops" },
  { icon: "📈", title: "Productivity", desc: "Increased farm yields year-round" },
];

export const PROCESS_STEPS = [
  { n: 1, title: "Client Consultation",     icon: "🤝", desc: "Site assessment, professional advice, and custom design. Every successful water project begins with understanding your needs." },
  { n: 2, title: "Bill of Quantity & Contracting", icon: "📋", desc: "Detailed Bill of Quantities (BoQ) is prepared. Client reviews and signs the formal contract before work begins." },
  { n: 3, title: "Excavation",              icon: "🚜", desc: "Our skilled team excavates and shapes your water pan for maximum capacity and durability using engineered design." },
  { n: 4, title: "HDPE Liner Installation", icon: "🔵", desc: "We install high-quality HDPE liners that prevent seepage — ensuring every drop of water is saved and ready for use." },
  { n: 5, title: "Fencing",                 icon: "🚧", desc: "We secure your water pan with strong fencing — keeping livestock safe and preventing damage to the liner." },
  { n: 6, title: "Water Utilization",       icon: "🌾", desc: "From irrigation to livestock, your water pan becomes a reliable source of life — boosting productivity and transforming your farm." },
];



export const GALLERY_ITEMS = [
  {
    id: 1, cat: "waterpan",
    icon: "🏞️", label: "HDPE Water Pan",
    caption: "Large HDPE Lined Water Pan",
    bg: "linear-gradient(135deg,#0a3d62,#1a6fa8)",
    img: "/images/gallery/water-pan-3.jpeg", 
  },
  {
    id: 2, cat: "excavation",
    icon: "🚜", label: "Excavation",
    caption: "Precision Excavation Works",
    bg: "linear-gradient(135deg,#5d4037,#795548)",
    img: "/images/gallery/excavation.jpeg",
  },
  {
    id: 3, cat: "waterpan",
    icon: "🔵", label: "HDPE Lining",
    caption: "HDPE Dam Liner Installation",
    bg: "linear-gradient(135deg,#1a237e,#283593)",
    img: "/images/gallery/installation.webp",
  },
  {
    id: 4, cat: "fencing",
    icon: "🚧", label: "Fencing",
    caption: "Water Pan Security Fencing",
    bg: "linear-gradient(135deg,#33691e,#558b2f)",
    img: "/images/gallery/fencing.jpg",
  },
  {
    id: 5, cat: "waterpan",
    icon: "🌾", label: "Farm Irrigation",
    caption: "Farm Irrigation from Water Pan",
    bg: "linear-gradient(135deg,#2e7d32,#388e3c)",
    img: "/images/gallery/irrigation.jpg",
  },
  {
    id: 6, cat: "waterpan",
    icon: "💧", label: "Completed Pan",
    caption: "Completed Water Pan — Full Capacity",
    bg: "linear-gradient(135deg,#004d40,#00695c)",
    img: "/images/gallery/water-pan-6.jpeg",
  },
  {
    id: 7, cat: "farm",
    icon: "🐄", label: "Livestock Water",
    caption: "Livestock Watering from Pan",
    bg: "linear-gradient(135deg,#e65100,#f57c00)",
    img: "/images/gallery/livestock.jpg",
  },
  {
    id: 8, cat: "excavation",
    icon: "⛏️", label: "Site Prep",
    caption: "Site Assessment & Preparation",
    bg: "linear-gradient(135deg,#37474f,#546e7a)",
    img: "/images/gallery/excavation-3.jpeg",
  },
];

export const GALLERY_TABS = [
  { key: "all",        label: "All Projects" },
  { key: "waterpan",   label: "Water Pans"   },
  { key: "excavation", label: "Excavation"   },
  { key: "fencing",    label: "Fencing"      },
  { key: "farm",       label: "Farm Use"     },
];

export const TRUST_BADGES = [
  "✅ Experienced Team",
  "🧱 Quality Materials",
  "🎯 Professional Service",
  "🌍 Lasting Impact",
  "🇰🇪 Proudly Kenyan",
];