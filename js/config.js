/**
 * KONFIGURASI GLOBAL WEBSITE
 * Gunakan file ini untuk mengatur semua kontent yang bisa diubah tanpa edit HTML
 */

const CONFIG = {
  // Brand & Company Info
  brand: {
    name: "Nattya Shield Yazzura",
    logo: "/img/Logo only.png",
    tagline: "Empowering Your Business with Secure IT Infrastructure",
    description: "End-to-end solutions for networking, security, and server management tailored for the modern enterprise.",
  },

  // Warna & Theme
  theme: {
    primary: "#135bec",
    bgLight: "#f6f6f8",
    bgDark: "#101622",
  },

  // Hero Section
  hero: {
    title: "Empowering Your Business with <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary'>Secure IT Infrastructure</span>",
    subtitle: "End-to-end solutions for networking, security, and server management tailored for the modern enterprise. We build the backbone of your digital success.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWN59AYJfrh6f3onKnpcH8tp7h2uOYIc1-mdwapb0O3m7wueU65WIYpQi1XwXrZxKcXxi1ADvrS6OTDu_lxhJQyNJEcWMr2NLJf9PsGD2hhYMtATnkK_F8oneSrySBTcQWgDluIeq3SMQl4P4cBUti4ZcnpRQHTOiIp_Ugxh3VFzq3fStD2aPoEsOVPOLmoD-s-18yyq4BLSRqelykPw54XA5_8R97uQXi_zi5bbVZ4-bBo7b3XkFV9aatjZDCPC1gX1Nbb1CZROz7",
  },

  // Stats
  stats: [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "15+", label: "Enterprise Clients" },
    { value: "10+", label: "Certified Experts" },
    { value: "5+", label: "Years Experience" },
  ],

  // Services
  services: [
    {
      icon: "videocam",
      title: "CCTV & Surveillance",
      description: "Advanced monitoring systems for complete physical security. HD cameras, remote access, and AI-driven motion detection.",
      link: "#",
    },
    {
      icon: "router",
      title: "Enterprise Networking",
      description: "Robust network architecture designed for high speed and reliability. Fiber optics, switching, and routing solutions.",
      link: "#",
    },
    {
      icon: "cloud_upload",
      title: "Server & Cloud Solutions",
      description: "Scalable server management and secure cloud migrations. Hybrid environments tailored to your workflow.",
      link: "#",
    },
    {
      icon: "verified_user",
      title: "Smart Home Security",
      description: "Home security system with remote access, motion detection, and AI-driven alerts.",
      link: "#",
    },
    {
      icon: "support_agent",
      title: "IT Consulting & Support",
      description: "Strategic planning and 24/7 helpdesk support to keep your operations running smoothly without interruption.",
      link: "#",
    },
    {
      icon: "settings_ethernet",
      title: "Cabling & Infrastructure",
      description: "Structured cabling solutions (Cat6, Fiber) ensuring organized and efficient physical data transmission paths.",
      link: "#",
    },
  ],

  // Portfolio Projects
  portfolio: [
    {
      id: 1,
      title: "Global Financial Services Network",
      category: "Enterprise Networking",
      description: "Designed and deployed a multi-site WAN infrastructure for a Fortune 500 bank, supporting 50+ branch locations with redundancy and 99.99% uptime.",
      icon: "router",
      image: "img/Portof-1.png",
      metrics: "50+ Sites | 99.99% Uptime | $2.5M",
    },
    {
      id: 2,
      title: "Hospital Security Overhaul",
      category: "CCTV & Surveillance",
      description: "Installed 200+ HD security cameras with AI motion detection across 5 hospital buildings, integrating with existing access control systems.",
      icon: "videocam",
      image: "img/Portof-2.png",
      metrics: "200+ Cameras | 5 Buildings | AI Detection",
    },
    {
      id: 3,
      title: "Retail Chain Cloud Migration",
      category: "Server & Cloud Solutions",
      description: "Migrated 150+ retail locations from on-premise servers to hybrid cloud, reducing IT costs by 40% while improving performance.",
      icon: "cloud_upload",
      image: "img/Portof-3.png",
      metrics: "150 Locations | 40% Cost Reduction | Zero Downtime",
    },
    {
      id: 4,
      title: "Government Cybersecurity Audit",
      category: "Cybersecurity Audits",
      description: "Conducted comprehensive penetration testing and vulnerability assessment for a federal agency, achieving full NIST compliance.",
      icon: "verified_user",
      image: "img/Portof-4.png",
      metrics: "NIST Compliant | 200+ Hours Testing | 40+ Vulnerabilities Fixed",
    },
    {
      id: 5,
      title: "Manufacturing Plant Infrastructure",
      category: "Cabling & Infrastructure",
      description: "Installed structured Cat6A cabling in a 50,000 sq ft facility, providing 10Gbps network speeds to support industrial automation.",
      icon: "settings_ethernet",
      image: "img/Portof-5.png",
      metrics: "50,000 sqft | 10Gbps Speed | 500+ Cable Runs",
    },
    {
      id: 6,
      title: "E-commerce 24/7 Support",
      category: "IT Consulting & Support",
      description: "Providing managed IT services and 24/7 helpdesk support for a high-traffic e-commerce platform handling 1M+ daily transactions.",
      icon: "support_agent",
      image: "img/Portof-6.png",
      metrics: "1M+ Daily Txns | 24/7 Support | 99.95% Uptime",
    },
  ],

  // Contact Info
  contact: {
    address: {
      label: "Visit Us",
      text: "123 Tech Park Boulevard,<br>Silicon Valley, CA 94025",
    },
    phone: {
      label: "Call Us",
      number: "+1 (555) 123-4567",
      hours: "Mon-Fri from 8am to 5pm",
    },
    email: {
      label: "Email Us",
      address: "support@modernitsolutions.com",
      hours: "We'll reply within 24 hours",
    },
  },

  // Footer Links
  footer: {
    company: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Partners", href: "#" },
      { text: "News & Blog", href: "#" },
    ],
    services: [
      { text: "CCTV Installation", href: "#" },
      { text: "Cloud Migration", href: "#" },
      { text: "Network Security", href: "#" },
      { text: "IT Consulting", href: "#" },
    ],
    social: [
      { icon: "public", href: "#" },
      { icon: "alternate_email", href: "#" },
      { icon: "rss_feed", href: "#" },
    ],
  },

  // Lokalisasi / Bahasa
  lang: {
    buttons: {
      getSupport: "Get Support",
      getQuote: "Request a Quote",
      ourServices: "Our Services",
      getStarted: "Get Started Now",
      contactSales: "Contact Sales",
      learnMore: "Learn More",
    },
    sections: {
      ourExpertise: "Our Expertise",
      servicesTitle: "Comprehensive IT strategies designed for scale",
      whyChoose: "Why Choose Us",
      readyToUpgrade: "Ready to upgrade your infrastructure?",
      auditText: "Get a comprehensive audit of your current IT setup and see how we can optimize your performance and security.",
    },
  },
};

// Pastikan CONFIG dapat diakses global
if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}
