import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Globe2, 
  ArrowRight, 
  Menu, 
  X, 
  Mail, 
  Linkedin, 
  Users2, 
  Trophy, 
  Target 
} from 'lucide-react';

/**
 * AmeriBridge Global Official Website
 * Optimized for React / Vercel Deployment
 * To deploy without a local machine:
 * 1. Create a GitHub Repo
 * 2. Upload this as 'src/App.js'
 * 3. Ensure Tailwind CSS is configured in the environment
 */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Logo path for Vercel/GitHub - Ensure the image is in the /public folder
  const logoUrl = "/AmeriBridgeGlobla.jpg";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "The US Foundation",
      price: "$1,500 - $2,500",
      description: "Essential legal and financial infrastructure for your American entity.",
      features: ["LLC/Corporation Formation", "EIN Tax ID Procurement", "US Business Banking Setup", "Registered Agent Services"],
      button: "Start Foundation",
      highlight: false
    },
    {
      title: "The Launchpad",
      price: "$3,000 - $5,000",
      description: "End-to-end logistics to get your first shipment into US hands.",
      features: ["Customs Clearance", "FDA/FTC Labeling Compliance", "3PL Warehouse Integration", "First Mile Logistics"],
      button: "Scale Now",
      highlight: true
    },
    {
      title: "Strategic Partner",
      price: "Revenue Share",
      description: "We act as your local US branch, managing every daily operation.",
      features: ["Full Operational Management", "Local Customer Support", "Sales Channel Optimization", "Regulatory Maintenance"],
      button: "Apply for Partnership",
      highlight: false
    }
  ];

  const team = [
    {
      name: "Marcus Thorne",
      role: "Managing Director",
      bio: "15+ years in international trade and regulatory compliance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Logistics",
      bio: "Expert in supply chain optimization and US customs brokerage.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "David Chen",
      role: "Operations Lead",
      bio: "Specialist in 3PL integration and stateside warehouse management.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="h-10 w-10 flex items-center justify-center overflow-hidden rounded-md bg-white border border-slate-100 p-1 shadow-sm">
              <img 
                src={logoUrl} 
                alt="AmeriBridge Global" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=AB"; }}
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-blue-900">
              AmeriBridge <span className="text-slate-500 font-light">Global</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-slate-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-900 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-900 transition-colors">Services</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-blue-900 transition-colors">Team</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-8 px-6 flex flex-col gap-6">
            <button onClick={() => scrollToSection('about')} className="text-left font-bold text-lg">About Us</button>
            <button onClick={() => scrollToSection('services')} className="text-left font-bold text-lg">Services</button>
            <button onClick={() => scrollToSection('team')} className="text-left font-bold text-lg">Our Team</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-900 text-white p-4 rounded-xl font-bold text-center">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-32 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest">
              Your US Operational Arm
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
              Your <span className="text-blue-900 underline decoration-blue-200 underline-offset-8">Operational Bridge</span> to the US Market
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              We provide the legal, logistical, and operational infrastructure international manufacturers need to thrive in the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('services')} className="px-8 py-4 bg-blue-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-xl hover:-translate-y-1">
                View Service Menu <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Book a Discovery Call
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200" 
                 alt="US Port Logistics" 
                 className="w-full h-auto"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Simple, Transparent Pathways</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {services.map((service, idx) => (
              <div key={idx} className={`relative flex flex-col p-8 rounded-3xl border-2 transition-all duration-300 ${service.highlight ? 'border-blue-900 shadow-2xl scale-105 bg-white z-10' : 'border-slate-100 bg-slate-50'}`}>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h3>
                <div className="text-blue-900 font-bold text-3xl mb-4">{service.price}</div>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="text-blue-600 shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollToSection('contact')} className={`w-full py-4 rounded-xl font-bold transition-all ${service.highlight ? 'bg-blue-900 text-white hover:bg-blue-800' : 'bg-white border-2 border-slate-200 text-slate-700'}`}>
                  {service.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-50 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Meet Your Stateside Partners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-semibold text-sm mb-4 tracking-wider uppercase">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-900 tracking-tight text-left">AmeriBridge Global</span>
          </div>
          <p className="text-sm text-slate-400">© 2024 AmeriBridge Global Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
