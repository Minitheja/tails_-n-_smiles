import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroPetsImg from './assets/hero_pets.png';
import qrCodeSvg from './assets/qr_code.svg';
import {
  Sparkles,
  Activity,
  Scissors,
  ShoppingBag,
  Home,
  Check,
  Star,
  Send,
  X,
  Menu,
  Bell,
  Calendar,
  Heart,
  MapPin,
  Search,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  Stethoscope,
  Brain,
  Clock,
  MessageSquare,
  ShieldCheck,
  User,
  Volume2,
  VolumeX,
  Phone,
  Video,
  Award,
  Globe,
  Zap
} from 'lucide-react';

// Customized inline SVG of a stylized dog and cat for the Hero section
const HeroPetIllustration = () => (
  <svg className="w-full h-full max-w-[420px] mx-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dogGrad" x1="120" y1="120" x2="280" y2="380" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFAE34" />
        <stop offset="100%" stopColor="#FF7A00" />
      </linearGradient>
      <linearGradient id="catGrad" x1="220" y1="200" x2="350" y2="380" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2E3F5F" />
        <stop offset="100%" stopColor="#1D2A44" />
      </linearGradient>
      <linearGradient id="glowGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFC83D" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="2" dy="6" stdDeviation="6" floodColor="#1D2A44" floodOpacity="0.08" />
      </filter>
    </defs>
    
    {/* Background glow ring */}
    <circle cx="200" cy="200" r="150" stroke="url(#glowGrad)" strokeWidth="2" strokeDasharray="8 8" className="animate-pulse-ring" />
    
    {/* Central background blob */}
    <circle cx="200" cy="200" r="130" fill="#FFF2D6" opacity="0.35" />
    
    {/* Stylized Dog (Left) */}
    <g filter="url(#shadow)">
      {/* Dog Body */}
      <path d="M120 220 C120 180, 180 180, 180 220 L180 340 L120 340 Z" fill="url(#dogGrad)" />
      {/* Dog Head */}
      <circle cx="150" cy="180" r="45" fill="url(#dogGrad)" />
      {/* Dog Ears */}
      <path d="M110 155 C100 130, 120 120, 125 150 Z" fill="#FF7A00" />
      <path d="M190 155 C200 130, 180 120, 175 150 Z" fill="#FF7A00" />
      {/* Dog Snout */}
      <path d="M140 190 C140 180, 160 180, 160 190 C160 200, 140 200, 140 190 Z" fill="#FFF" />
      <circle cx="150" cy="188" r="5" fill="#1D2A44" />
      {/* Dog Eyes */}
      <circle cx="138" cy="172" r="4" fill="#1D2A44" />
      <circle cx="162" cy="172" r="4" fill="#1D2A44" />
      {/* Dog Smile */}
      <path d="M146 195 Q150 198 154 195" stroke="#1D2A44" strokeWidth="2" strokeLinecap="round" />
    </g>
    
    {/* Stylized Cat (Right) */}
    <g filter="url(#shadow)">
      {/* Cat Body */}
      <path d="M220 240 C220 200, 280 200, 280 240 L280 340 L220 340 Z" fill="url(#catGrad)" />
      {/* Cat Head */}
      <circle cx="250" cy="205" r="38" fill="url(#catGrad)" />
      {/* Cat Ears */}
      <path d="M218 185 L228 155 L240 180 Z" fill="#2E3F5F" />
      <path d="M282 185 L272 155 L260 180 Z" fill="#2E3F5F" />
      {/* Cat Snout */}
      <ellipse cx="250" cy="215" rx="8" ry="6" fill="#FFF" opacity="0.9" />
      <polygon points="248,212 252,212 250,214" fill="#FFC83D" />
      {/* Cat Eyes */}
      <ellipse cx="238" cy="198" rx="4" ry="6" fill="#FFC83D" />
      <circle cx="238" cy="198" r="2" fill="#1D2A44" />
      <ellipse cx="262" cy="198" rx="4" ry="6" fill="#FFC83D" />
      <circle cx="262" cy="198" r="2" fill="#1D2A44" />
      {/* Whiskers */}
      <line x1="225" y1="214" x2="212" y2="211" stroke="#FFF" strokeWidth="1.5" opacity="0.8" />
      <line x1="225" y1="218" x2="210" y2="219" stroke="#FFF" strokeWidth="1.5" opacity="0.8" />
      <line x1="275" y1="214" x2="288" y2="211" stroke="#FFF" strokeWidth="1.5" opacity="0.8" />
      <line x1="275" y1="218" x2="290" y2="219" stroke="#FFF" strokeWidth="1.5" opacity="0.8" />
    </g>
  </svg>
);

const Logo = ({ className = "h-12" }) => (
  <svg className={className} viewBox="0 0 170 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="170" height="120" rx="28" fill="#FFC83D" />
    <text 
      x="85" 
      y="52" 
      textAnchor="middle" 
      fill="#1D2A44" 
      fontWeight="900" 
      fontSize="25" 
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="-0.03em"
    >
      tails 'n'
    </text>
    <text 
      x="85" 
      y="84" 
      textAnchor="middle" 
      fill="#1D2A44" 
      fontWeight="900" 
      fontSize="25" 
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="-0.03em"
    >
      smiles
    </text>
    <path 
      d="M58 98 Q 85 116 112 98" 
      stroke="#1D2A44" 
      strokeWidth="4.5" 
      strokeLinecap="round" 
      fill="none" 
    />
  </svg>
);

const RobotIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 animate-float" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="robotGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1D2A44" />
        <stop offset="100%" stopColor="#2E3F5F" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#FFC83D" />
        <stop offset="100%" stopColor="#FF7A00" />
      </linearGradient>
    </defs>
    {/* Body */}
    <rect x="25" y="40" width="50" height="40" rx="20" fill="url(#robotGrad)" stroke="#1D2A44" strokeWidth="2" />
    {/* Head */}
    <rect x="30" y="15" width="40" height="30" rx="15" fill="url(#robotGrad)" stroke="#1D2A44" strokeWidth="2" />
    {/* Screen Face */}
    <rect x="36" y="21" width="28" height="16" rx="6" fill="url(#screenGrad)" />
    {/* Glowing Eyes */}
    <circle cx="44" cy="29" r="2.5" fill="#FFC83D" className="animate-pulse" />
    <circle cx="56" cy="29" r="2.5" fill="#FFC83D" className="animate-pulse" />
    {/* Antenna */}
    <line x1="50" y1="15" x2="50" y2="7" stroke="#1D2A44" strokeWidth="2.5" />
    <circle cx="50" cy="5" r="3.5" fill="url(#accentGrad)" className="animate-pulse" />
    {/* Ears/Joints */}
    <rect x="27" y="24" width="3" height="10" rx="1.5" fill="#1D2A44" />
    <rect x="70" y="24" width="3" height="10" rx="1.5" fill="#1D2A44" />
    {/* Belly Screen/Light */}
    <circle cx="50" cy="60" r="8" fill="#FFC83D" opacity="0.15" />
    <circle cx="50" cy="60" r="5" fill="url(#accentGrad)" />
    {/* Arms */}
    <path d="M25 50 C15 50, 15 65, 23 68" stroke="#1D2A44" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M75 50 C85 50, 85 65, 77 68" stroke="#1D2A44" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedServiceTab, setSelectedServiceTab] = useState('Walkers');
  const [currentPage, setCurrentPage] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/terms' || hash === '#terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/privacy' || hash === '#privacy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // States for interactive UI mockups
  const [heartRate, setHeartRate] = useState(78);
  const [steps, setSteps] = useState(4820);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [isVideoConnected, setIsVideoConnected] = useState(true);
  const [selectedSupplyCategory, setSelectedSupplyCategory] = useState('All');
  
  // Newly added states for premium interactive features
  const [cartCount, setCartCount] = useState(0);
  const [activeGroomingServices, setActiveGroomingServices] = useState(['Bath', 'Haircut']);
  const [isScanningSymptoms, setIsScanningSymptoms] = useState(false);
  const [scanStep, setScanStep] = useState('idle'); // 'idle', 'scanning', 'analyzing', 'done'
  const [assistantChecklist, setAssistantChecklist] = useState([
    { id: 1, text: "Rabies booster dose 💉", done: true },
    { id: 2, text: "Afternoon 30-min walk 🐾", done: false },
    { id: 3, text: "Heartworm medicine pill 💊", done: false }
  ]);

  const toggleChecklistItem = (id) => {
    setAssistantChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const toggleGroomingService = (service) => {
    setActiveGroomingServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const startSymptomScan = () => {
    setIsScanningSymptoms(true);
    setScanStep('scanning');
    setTimeout(() => {
      setScanStep('analyzing');
      setTimeout(() => {
        setScanStep('done');
        setIsScanningSymptoms(false);
      }, 1200);
    }, 1000);
  };
  




  // Real-time update simulations
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => Math.max(72, Math.min(94, prev + (Math.random() > 0.5 ? 1 : -1))));
      setSteps(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);





  const supplyProducts = [
    { name: "Organic Puppy Kibble", category: "Food", price: "$24.99", rating: 4.8 },
    { name: "All-Natural Salmon Treats", category: "Treats", price: "$12.99", rating: 4.9 },
    { name: "Eco Interactive Feather Toy", category: "Toys", price: "$18.50", rating: 4.7 },
    { name: "Ergonomic Smart Collar v2", category: "Accessories", price: "$89.99", rating: 4.9 },
    { name: "Hypoallergenic Shampoo", category: "Grooming Products", price: "$15.99", rating: 4.6 },
    { name: "Joint Support Soft Chews", category: "Medicines", price: "$32.90", rating: 4.8 }
  ];

  const filteredSupplies = selectedSupplyCategory === 'All'
    ? supplyProducts
    : supplyProducts.filter(p => p.category === selectedSupplyCategory);

  if (currentPage === 'terms' || currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-[#FFF9F0] text-[#1D2A44] selection:bg-[#FFC83D] selection:text-[#1D2A44] flex flex-col relative">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F0]/75 backdrop-blur-md border-b border-[#1D2A44]/5">
          <div className="max-w-[1360px] mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#/" className="flex items-center group">
              <Logo className="h-16 w-auto hover:scale-105 transition-transform duration-300" />
            </a>
            <a 
              href="#/" 
              className="inline-flex items-center gap-2 bg-[#1D2A44] text-[#FFF9F0] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#FFC83D] hover:text-[#1D2A44] shadow-soft transform hover:-translate-y-0.5 transition-all duration-300 font-sans"
            >
              <ArrowLeft size={16} /> Back to Home
            </a>
          </div>
        </nav>

        {/* Content Container */}
        <main className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#1D2A44]/5 shadow-soft-lg p-8 sm:p-12 rounded-[32px] space-y-8"
          >
            {currentPage === 'terms' ? (
              <>
                <h1 className="font-display font-black text-3xl sm:text-4xl text-[#1D2A44] leading-tight">
                  Terms and Conditions
                </h1>
                <p className="text-xs font-semibold text-[#FF7A00] uppercase tracking-wider">
                  Last Updated: June 2026
                </p>
                <hr className="border-[#1D2A44]/10" />
                <div className="prose max-w-none text-[#5C6B89] space-y-6 leading-relaxed">
                  <p className="font-semibold text-[#1D2A44]">
                    Welcome to Tails 'n' Smiles. By accessing or using our platform as a Pet Parent or Service Provider, you agree to be bound by these Conditions of Use.
                  </p>
                  <p>
                    By registering on Tails 'n' Smiles, you agree to comply with all applicable laws and these terms. If you do not agree with any part of these terms, you may not use our services.
                  </p>
                  <p>
                    Users may not submit false information, impersonate others, or engage in any fraudulent, abusive, or illegal activities on the platform.
                  </p>
                  <p>
                    Tails 'n' Smiles acts solely as a platform to connect pet parents with service providers. We are not directly liable for the quality, safety, or legality of services provided by third-party professionals.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h1 className="font-display font-black text-3xl sm:text-4xl text-[#1D2A44] leading-tight">
                  Privacy Policy
                </h1>
                <p className="text-xs font-semibold text-[#FF7A00] uppercase tracking-wider">
                  Last Updated: June 2026
                </p>
                <hr className="border-[#1D2A44]/10" />
                <div className="prose max-w-none text-[#5C6B89] space-y-6 leading-relaxed">
                  <p className="font-semibold text-[#1D2A44]">
                    Welcome to Tails 'n' Smiles Privacy Notice. This notice explains how we collect, use, and protect your personal information when you use our platform.
                  </p>
                  <p>
                    We collect information you provide directly to us when you register, including your name, email, phone number, and pet or business details. We may also collect technical data about your interaction with our website.
                  </p>
                  <p>
                    We use your information to provide, maintain, and improve our services, communicate with you, process registrations, and personalize your experience on Tails 'n' Smiles. Your email and phone number are used strictly for account updates and related notifications.
                  </p>
                  <p>
                    We do not sell your personal data to third parties. We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p>
                    You have the right to access, update, or delete your personal information at any time by contacting our support team or accessing your account settings.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </main>

        {/* Muted Footer */}
        <footer className="py-8 text-center text-xs font-semibold text-[#5C6B89] border-t border-[#1D2A44]/5 bg-[#FFF9F0]">
          <span>© 2026 Tails 'n' Smiles. All Rights Reserved.</span>
        </footer>

        {/* Back to top floating button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-24 right-6 z-50 bg-[#1D2A44] hover:bg-[#FFC83D] text-[#FFF9F0] hover:text-[#1D2A44] p-3.5 rounded-full shadow-soft-lg border-2 border-white cursor-pointer transition-all duration-300 flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#1D2A44] relative selection:bg-[#FFC83D] selection:text-[#1D2A44]">
      
      {/* GLASS NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F0] border-b border-[#1D2A44]/5 md:bg-[#FFF9F0]/75 md:backdrop-blur-md">
        <div className="max-w-[1360px] mx-auto px-6 py-3 md:py-4 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <Logo className="h-14 md:h-20 w-auto hover:scale-105 transition-transform duration-300" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-[#2E3F5F]">
            <a href="#features" className="hover:text-[#1D2A44] hover:scale-105 transition-all">Features</a>
            <a href="#why-us" className="hover:text-[#1D2A44] hover:scale-105 transition-all">Why Us</a>
            <a href="#benefits" className="hover:text-[#1D2A44] hover:scale-105 transition-all">Benefits</a>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://join.tailsnsmiles.com/pet-parent" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#1D2A44] text-[#FFF9F0] px-5 py-2.5 rounded-full font-semibold hover:bg-[#FFC83D] hover:text-[#1D2A44] shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Join Community
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1D2A44] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#FFF9F0] border-t border-[#1D2A44]/5 px-6 py-6 space-y-4 shadow-lg"
            >
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-lg text-[#2E3F5F] hover:text-[#1D2A44]">Features</a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-lg text-[#2E3F5F] hover:text-[#1D2A44]">Why Us</a>
              <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-lg text-[#2E3F5F] hover:text-[#1D2A44]">Benefits</a>
              <div className="pt-4 border-t border-[#1D2A44]/10">
                <a 
                  href="https://join.tailsnsmiles.com/pet-parent" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block w-full text-center bg-[#1D2A44] text-[#FFF9F0] py-3 rounded-full font-semibold"
                >
                  Join Community
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <header id="hero" className="pt-32 pb-10 md:pt-40 md:pb-12 px-6 overflow-hidden">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Launching Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFC83D]/15 text-[#FF7A00] font-bold text-sm px-4 py-2 rounded-full border border-[#FFC83D]/25 shadow-soft-sm">
              <span className="animate-bounce">🚀</span> Launching Soon
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[56px] xl:text-[68px] leading-[1.1] tracking-tight text-[#1D2A44]">
              Smarter care for <br />
              every pet, AI-powered <br />
              ecosystem
            </h1>
 
            <p className="font-display font-bold text-xl md:text-2xl text-[#1D2A44]">
              From reactive care to proactive pet care
            </p>
 
            <div className="space-y-4 text-base md:text-lg text-[#5C6B89] leading-relaxed max-w-2xl">
              <p>
                Tails 'n' Smiles connects vets, grooming, training, boarding, supplies, and real-time health data into one AI-powered system — so every part of pet care works together, not in isolation.
              </p>
              
              <p>
                Instead of fragmented apps, disconnected providers, and delayed decisions, pet parents get a single intelligent layer that understands their pet over time and helps prevent problems before they happen.
              </p>
              
              <p className="font-bold text-[#1D2A44]">
                One system. Continuous intelligence. Better care for every pet.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://join.tailsnsmiles.com/pet-parent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1D2A44] text-[#FFF9F0] px-8 py-4 rounded-full font-bold text-base hover:bg-[#FFC83D] hover:text-[#1D2A44] shadow-soft transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Join Community <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Visual (Orbiting Ecosystem Nodes) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* The absolute size is 500x500 for our math layouts */}
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Animated Dotted Lines connecting orbits */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
                <line x1="250" y1="250" x2="250" y2="70" stroke="#FFC83D" strokeWidth="2.5" strokeDasharray="5,5" className="animate-dash opacity-60" />
                <line x1="250" y1="250" x2="406" y2="160" stroke="#FFC83D" strokeWidth="2.5" strokeDasharray="5,5" className="animate-dash opacity-60" />
                <line x1="250" y1="250" x2="406" y2="340" stroke="#FFC83D" strokeWidth="2.5" strokeDasharray="5,5" className="animate-dash opacity-60" />
                <line x1="250" y1="250" x2="250" y2="430" stroke="#FFC83D" strokeWidth="2.5" strokeDasharray="5,5" className="animate-dash opacity-60" />
                <line x1="250" y1="250" x2="94" y2="340" stroke="#FFC83D" strokeWidth="2.5" strokeDasharray="5,5" className="animate-dash opacity-60" />
                <line x1="250" y1="250" x2="94" y2="160" stroke="#FFC83D" strokeWidth="2.5" strokeDasharray="5,5" className="animate-dash opacity-60" />
              </svg>

              {/* Central Pet Illustration */}
              <div className="z-10 w-[140px] h-[140px] sm:w-[240px] sm:h-[240px] rounded-full bg-white/45 backdrop-blur-md flex items-center justify-center border border-white/60 shadow-soft overflow-hidden p-2 sm:p-3.5">
                <img 
                  src="/hero_pets.png" 
                  alt="Tails 'n' Smiles Mascot Pets" 
                  className="w-full h-full object-cover rounded-full shadow-inner animate-float"
                />
              </div>

              {/* Node 1: AI Vet Consultation (Top Center) */}
              <div className="absolute left-[50%] top-[14%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float">
                <div className="glass-card shadow-soft p-2 sm:p-3 rounded-xl sm:rounded-2xl flex flex-col items-center gap-1 min-w-[80px] sm:min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-red-100 p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-red-500 shadow-sm">
                    <Stethoscope className="w-4.5 h-4.5 sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-bold text-[#1D2A44] text-center leading-tight">AI Vet<br />Consultation</span>
                </div>
              </div>

              {/* Node 2: Grooming Services (Top Right) */}
              <div className="absolute left-[81%] top-[32%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float-delayed-1">
                <div className="glass-card shadow-soft p-2 sm:p-3 rounded-xl sm:rounded-2xl flex flex-col items-center gap-1 min-w-[80px] sm:min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-blue-500 shadow-sm">
                    <Scissors className="w-4.5 h-4.5 sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Grooming<br />Services</span>
                </div>
              </div>

              {/* Node 3: Pet Supplies Delivery (Bottom Right) */}
              <div className="absolute left-[81%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float-delayed-2">
                <div className="glass-card shadow-soft p-2 sm:p-3 rounded-xl sm:rounded-2xl flex flex-col items-center gap-1 min-w-[80px] sm:min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-green-500 shadow-sm">
                    <ShoppingBag className="w-4.5 h-4.5 sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Supplies<br />Delivery</span>
                </div>
              </div>

              {/* Node 4: Boarding & Daycare (Bottom Center) */}
              <div className="absolute left-[50%] top-[86%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float">
                <div className="glass-card shadow-soft p-2 sm:p-3 rounded-xl sm:rounded-2xl flex flex-col items-center gap-1 min-w-[80px] sm:min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-purple-100 p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-purple-500 shadow-sm">
                    <Home className="w-4.5 h-4.5 sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Boarding &<br />Daycare</span>
                </div>
              </div>

              {/* Node 5: Health Monitoring (Bottom Left) */}
              <div className="absolute left-[19%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float-delayed-1">
                <div className="glass-card shadow-soft p-2 sm:p-3 rounded-xl sm:rounded-2xl flex flex-col items-center gap-1 min-w-[80px] sm:min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-orange-100 p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-orange-500 shadow-sm animate-pulse">
                    <Activity className="w-4.5 h-4.5 sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Health<br />Monitoring</span>
                </div>
              </div>

              {/* Node 6: Pet Training (Top Left) */}
              <div className="absolute left-[19%] top-[32%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float-delayed-2">
                <div className="glass-card shadow-soft p-2 sm:p-3 rounded-xl sm:rounded-2xl flex flex-col items-center gap-1 min-w-[80px] sm:min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-[#FFC83D]/25 p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-[#FF7A00] shadow-sm">
                    <Brain className="w-4.5 h-4.5 sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Pet<br />Training</span>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section id="features" className="py-14 md:py-16 px-6 bg-[#FFF9F0]">
        <div className="max-w-[1360px] mx-auto space-y-16">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-bold text-[#FF7A00] tracking-wider uppercase text-sm">Features</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#1D2A44]">
              Intelligent Pet Care, Unified by AI
            </h2>
            <p className="text-[#5C6B89] text-lg">
              A connected system that learns, predicts, and acts across your pet’s entire care journey.
            </p>
          </div>
 
          {/* 6-card simple grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Stethoscope size={24} />,
                bg: "bg-red-50 text-red-500",
                title: "AI Vet Intelligence",
                desc: "Instantly analyze symptoms and behavior with AI-assisted vet guidance — helping you decide whether to monitor, visit a clinic, or act urgently."
              },
              {
                icon: <Activity size={24} />,
                bg: "bg-orange-50 text-orange-500",
                title: "Continuous Health Understanding",
                desc: "A living health profile built from activity, sleep, vitals, and behavior — detecting early risk patterns before visible symptoms appear."
              },
              {
                icon: <Scissors size={24} />,
                bg: "bg-blue-50 text-blue-500",
                title: "Verified On-Demand Care Network",
                desc: "Book trusted groomers, trainers, and care providers instantly — at home or nearby, with verified quality and transparency."
              },
              {
                icon: <ShoppingBag size={24} />,
                bg: "bg-green-50 text-green-500",
                title: "Smart Supply & Care Delivery",
                desc: "Access curated pet food, medicine, and essentials — matched to your pet’s profile and delivered when needed."
              },
              {
                icon: <Home size={24} />,
                bg: "bg-purple-50 text-purple-500",
                title: "Trusted Boarding Intelligence",
                desc: "Find safe, verified boarding and daycare options with real-time updates and provider transparency."
              },
              {
                icon: <Brain size={24} />,
                bg: "bg-[#FFC83D]/20 text-[#FF7A00]",
                title: "Personal AI Pet Companion",
                desc: "A continuously learning AI system that adapts to your pet’s history and behavior — sending proactive alerts, reminders, and care suggestions."
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(29,42,68,0.08)" }}
                className="bg-white border border-[#1D2A44]/[0.08] rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.bg}`}>
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-[#1D2A44]">{feature.title}</h3>
                  <p className="text-[#5C6B89] text-base leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>



      {/* WHY TAILS 'N' SMILES SECTION */}
      <section id="why-us" className="py-14 md:py-16 px-6 bg-[#FFF9F0] border-t border-[#1D2A44]/5">
        <div className="max-w-[1360px] mx-auto space-y-16">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-bold text-[#FF7A00] tracking-wider uppercase text-sm">Why Tails 'n' Smiles</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#1D2A44] leading-tight">
              We are building the infrastructure <br className="hidden md:inline" /> layer that connects the entire pet <br className="hidden md:inline" /> care ecosystem.
            </h2>
            <p className="text-[#5C6B89] text-lg font-medium">
              Not another marketplace. Not another pet app.
            </p>
          </div>
 
          {/* 4 Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: AI That Learns Every Pet Over Time */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-orange-100 text-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">AI That Learns Every Pet Over Time</h3>
              <p className="text-base text-[#5C6B89] leading-relaxed">
                We build a continuous behavioral + health intelligence model for each pet, enabling predictive care instead of reactive treatment.
              </p>
            </div>
 
            {/* Card 2: Trust-First Verified Network */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-red-100 text-red-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <Brain size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">Trust-First Verified Network</h3>
              <p className="text-base text-[#5C6B89] leading-relaxed">
                Every provider is verified to ensure safety, consistency, and quality across all services.
              </p>
            </div>
 
            {/* Card 3: Unified Care Infrastructure */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-green-100 text-green-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">Unified Care Infrastructure</h3>
              <p className="text-base text-[#5C6B89] leading-relaxed">
                Health data, services, and providers are not separate systems — they are connected into one intelligent network.
              </p>
            </div>
 
            {/* Card 4: Zero-Friction Experience Layer */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-blue-100 text-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <Clock size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">Zero-Friction Experience Layer</h3>
              <p className="text-base text-[#5C6B89] leading-relaxed">
                One account, one system, one payment flow — removing fragmentation across pet care services.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-14 md:py-16 px-6 bg-[#FFF9F0] border-t border-[#1D2A44]/5">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and checklist */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-bold text-[#FF7A00] tracking-wider uppercase text-sm">PARENT BENEFITS</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-[#1D2A44]">
                Built for the Entire Pet Care Ecosystem
              </h2>
              <p className="text-[#5C6B89] text-lg leading-relaxed">
                From pet parents to service providers — shifting the industry from fragmented to connected intelligence.
              </p>
            </div>

            {/* Benefits Checklist in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Left Column (Parent Benefits) */}
              <div className="space-y-3.5">
                {[
                  "Manage all pet care in one system",
                  "Get AI insights and early health alerts",
                  "Book verified vets and services instantly",
                  "Keep a lifelong pet health record"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white p-4 px-6 rounded-full border border-[#1D2A44]/5 shadow-soft-sm hover:scale-[1.02] hover:shadow-soft transition-all duration-300">
                    <div className="bg-[#00B686] text-white p-1 rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-sm text-[#1D2A44] leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
              {/* Right Column (Provider Benefits) */}
              <div className="space-y-3.5">
                {[
                  "Get discovered by local pet parents",
                  "Increase bookings through one platform",
                  "Manage clients and schedules easily",
                  "Build trust with verified profiles"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white p-4 px-6 rounded-full border border-[#1D2A44]/5 shadow-soft-sm hover:scale-[1.02] hover:shadow-soft transition-all duration-300">
                    <div className="bg-[#00B686] text-white p-1 rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-sm text-[#1D2A44] leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard Mockup Preview */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-[#1D2A44]/10 p-6 md:p-8 shadow-soft-lg space-y-6">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-[#1D2A44]/5 pb-4">
                <div>
                  <h4 className="font-display font-extrabold text-lg text-[#1D2A44]">Pet Care Dashboard</h4>
                  <span className="text-xs text-[#5C6B89]">Manage Max & Bella</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#FFC83D]/15 text-[#FF7A00] text-xs font-bold px-3 py-1 rounded-full border border-[#FFC83D]/25">
                    Premium Active
                  </span>
                </div>
              </div>

              {/* Vaccine Timeline / Alerts Mockup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-[#5C6B89]">
                  <span>UPCOMING ACTIONS</span>
                  <span>SYNCED ALERTS</span>
                </div>

                <div className="space-y-3">
                  {/* Alert 1 */}
                  <div className="bg-[#FFF9F0] p-4 rounded-2xl border border-[#1D2A44]/5 flex items-start gap-4 hover:border-[#1D2A44]/20 transition-colors">
                    <div className="bg-blue-100 text-blue-500 p-2.5 rounded-xl flex items-center justify-center shadow-sm">
                      <Calendar size={18} />
                    </div>
                    <div className="flex-grow space-y-1">
                      <div className="flex justify-between items-center">
                        <h5 className="font-bold text-sm text-[#1D2A44]">Rabies Booster Vaccine</h5>
                        <span className="text-[10px] text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded-full">Due in 5 days</span>
                      </div>
                      <p className="text-xs text-[#5C6B89]">Green Valley Vet Clinic • Dr. Sarah Miller</p>
                      <button className="bg-[#1D2A44] hover:bg-[#FFC83D] hover:text-[#1D2A44] text-[#FFF9F0] font-bold text-[10px] px-3.5 py-1.5 rounded-lg mt-2 transition-colors">
                        Confirm Appointment
                      </button>
                    </div>
                  </div>

                  {/* Alert 2 */}
                  <div className="bg-[#FFF9F0] p-4 rounded-2xl border border-[#1D2A44]/5 flex items-start gap-4 hover:border-[#1D2A44]/20 transition-colors">
                    <div className="bg-[#FFC83D]/15 text-[#FF7A00] p-2.5 rounded-xl flex items-center justify-center shadow-sm">
                      <Bell size={18} />
                    </div>
                    <div className="flex-grow space-y-1">
                      <div className="flex justify-between items-center">
                        <h5 className="font-bold text-sm text-[#1D2A44]">Morning Heartworm Pill</h5>
                        <span className="text-[10px] text-teal-600 font-bold bg-teal-50 px-2 py-0.5 rounded-full">Completed 8:00 AM</span>
                      </div>
                      <p className="text-xs text-[#5C6B89]">Monthly dose recorded by Smart Collar tracker</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>



      {/* WAITLIST SECTION */}
      <section id="waitlist" className="py-14 md:py-16 px-6 bg-[#1D2A44] text-[#FFF9F0] relative overflow-hidden">
        
        {/* Background visual circles */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-400/5 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="max-w-[1360px] xl:max-w-[1420px] 2xl:max-w-[1550px] mx-auto text-center space-y-8 relative z-10">
          
          <div className="space-y-4">
            <span className="font-bold text-[#FFC83D] tracking-wider uppercase text-xs sm:text-sm">JOIN THE FUTURE OF PET CARE INTELLIGENCE</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-[50px] 2xl:text-[58px] leading-tight tracking-tighter text-[#FFF9F0] max-w-[1300px] xl:max-w-[1380px] 2xl:max-w-[1500px] mx-auto">
              Be among the first pet parents and service providers shaping the <br className="hidden lg:inline" /> first AI-powered pet care system.
            </h2>
            <p className="text-[#E5DEC9] text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed opacity-95">
              This is not just early access — it’s participation in building the future of connected pet care.
            </p>
          </div>
 
          {/* Join CTA & QR Code Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg">
            
            {/* Left: Button & Description */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 flex-1">
              <h3 className="font-display font-bold text-xl text-[#FFF9F0]">Early Access Community</h3>
              <p className="text-sm text-[#E5DEC9] max-w-xs leading-relaxed">
                Join the private ecosystem and get direct access to product evolution.
              </p>
              <a 
                href="https://join.tailsnsmiles.com/pet-parent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFC83D] text-[#1D2A44] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#FFF9F0] hover:scale-105 shadow-soft transition-all duration-300 whitespace-nowrap"
              >
                Join Community <ArrowRight size={16} />
              </a>
            </div>
 
            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-36 bg-white/10"></div>
 
            {/* Right: QR Code */}
            <div className="flex flex-col items-center gap-3 pt-6 md:pt-0">
              <div className="bg-white p-2 rounded-none shadow-soft">
                <img 
                  src={qrCodeSvg} 
                  alt="QR Code to Join Community" 
                  className="w-44 h-44 object-contain rounded-none"
                />
              </div>
              <span className="text-[11px] font-bold text-[#E5DEC9] tracking-wider uppercase">SCAN TO JOIN ON MOBILE</span>
            </div>
 
          </div>
 
          {/* Included Features / Bullet Points */}
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-4 lg:gap-x-8 gap-y-4 pt-6 text-left border-t border-white/5">
            {[
              "Early feature releases before public launch",
              "Founding community access",
              "Priority onboarding during rollout",
              "Direct feedback loop with the team"
            ].map(inc => (
              <div key={inc} className="flex items-center gap-2 font-semibold text-[11px] sm:text-xs lg:text-sm text-[#E5DEC9] whitespace-nowrap">
                <div className="bg-[#FFC83D] text-[#1D2A44] p-0.5 rounded-full flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{inc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FFF9F0] text-[#1D2A44] pt-10 pb-6 px-6 border-t border-[#1D2A44]/5">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-32 border-b border-[#1D2A44]/10 pb-10 mb-4">
          
          {/* Logo and Tagline */}
          <div className="md:col-span-4 space-y-4">
            <a href="#hero" className="inline-block group">
              <Logo className="h-20 w-auto hover:scale-105 transition-transform duration-300" />
            </a>
            <p className="text-base text-[#5C6B89] leading-relaxed max-w-sm">
              Everything your pet needs, all in one place. Bringing veterinary guidance, supplies, styling, and monitoring together.
            </p>
          </div>

          {/* Site Links */}
          <div className="md:col-span-3 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#1D2A44]">Navigation</h4>
              <ul className="space-y-2.5 text-sm font-semibold text-[#5C6B89]">
                <li><a href="#features" className="hover:text-[#1D2A44] transition-colors">Features</a></li>
                <li><a href="#why-us" className="hover:text-[#1D2A44] transition-colors">Why Us</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#1D2A44]">Company</h4>
              <ul className="space-y-2.5 text-sm font-semibold text-[#5C6B89]">
                <li><a href="#/privacy" className="hover:text-[#1D2A44] transition-colors whitespace-nowrap">Privacy Policy</a></li>
                <li><a href="#/terms" className="hover:text-[#1D2A44] transition-colors whitespace-nowrap">Terms and Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#1D2A44]">Follow Us</h4>
            <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/tailsnsmiles" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-3 rounded-2xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-12 h-12"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/tailsnsmilesofficial" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-3 rounded-2xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-12 h-12"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@tailsnsmiles" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-3 rounded-2xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-12 h-12"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Threads */}
              <a 
                href="https://www.threads.net/@tailsnsmilesofficial" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-3 rounded-2xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-12 h-12"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a 
                href="https://www.pinterest.com/tailsnsmiles" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-3 rounded-2xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-12 h-12"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.958 1.406-5.958s-.359-.72-.359-1.781c0-1.663.967-2.906 2.17-2.906 1.023 0 1.517.769 1.517 1.689 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.169 1.775 2.169 2.128 0 3.768-2.245 3.768-5.487 0-2.868-2.061-4.869-5.00-4.869-3.41 0-5.413 2.561-5.413 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.211-.174.263-.403.156-1.493-.699-2.427-2.905-2.427-4.662 0-3.796 2.758-7.285 7.954-7.285 4.175 0 7.419 2.974 7.419 6.956 0 4.148-2.611 7.487-6.242 7.487-1.218 0-2.363-.633-2.756-1.379l-.752 2.863c-.272 1.036-.997 2.337-1.487 3.137A12.015 12.015 0 0012.017 24c6.62 0 11.986-5.367 11.986-11.987C24.003 5.367 18.637 0 12.017 0z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/134824027" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-3 rounded-2xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-12 h-12"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-[1360px] mx-auto flex justify-center items-center text-xs font-semibold text-[#5C6B89] gap-4 text-center">
          <span>© 2026 Tails 'n' Smiles. All Rights Reserved.</span>
        </div>
      </footer>

      {/* FLOATING AI PET ASSISTANT INTERACTIVE CHATBOT (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Floating Chat Trigger Link */}
        <a
          href="https://ai.tailsnsmiles.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1D2A44] hover:bg-[#FFC83D] hover:text-[#1D2A44] text-[#FFF9F0] p-4 rounded-full shadow-soft-lg flex items-center justify-center transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group border-2 border-white"
          aria-label="Open AI Assistant Chat"
        >
          <MessageSquare size={24} className="group-hover:rotate-6 transition-transform" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 font-bold text-xs tracking-wider transition-all duration-500 uppercase whitespace-nowrap">
            Tails AI Chat
          </span>
        </a>
      </div>

      {/* Floating Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-50 bg-[#1D2A44] hover:bg-[#FFC83D] text-[#FFF9F0] hover:text-[#1D2A44] p-3.5 rounded-full shadow-soft-lg border-2 border-white cursor-pointer transition-all duration-300 flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
