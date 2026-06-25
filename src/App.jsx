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
  Award
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

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#1D2A44] relative selection:bg-[#FFC83D] selection:text-[#1D2A44]">
      
      {/* GLASS NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F0] border-b border-[#1D2A44]/5 md:bg-[#FFF9F0]/75 md:backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex justify-between items-center">
          
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Launching Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFC83D]/15 text-[#FF7A00] font-bold px-4 py-2 rounded-full border border-[#FFC83D]/25 shadow-soft-sm">
              <span className="animate-bounce">🚀</span> Launching Soon
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#1D2A44]">
              AI Powered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FFC83D]">
                Pet Care Ecosystem
              </span>
            </h1>

            <p className="font-display font-medium text-2xl md:text-3xl text-[#2E3F5F]">
              Everything your pet needs, <strong className="text-[#1D2A44] font-semibold">all in one place.</strong>
            </p>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-[#5C6B89] max-w-2xl">
                Finding trusted vets, groomers, trainers, boarding services, pet supplies, and other care providers shouldn't require juggling multiple apps, websites, and phone calls.
              </p>
              
              <p className="text-lg leading-relaxed text-[#5C6B89] max-w-2xl">
                Tails 'n' Smiles brings the entire pet care ecosystem together into a single intelligent platform, making it easier for pet parents to discover, book, manage, and track everything their pets need.
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
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-bold text-[#FF7A00] tracking-wider uppercase text-sm">Features</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#1D2A44]">
              Intelligent Pet Care, Simplified
            </h2>
            <p className="text-[#5C6B89] text-lg">
              Everything your pet needs — health, grooming, supplies, and expert care — all in one place.
            </p>
          </div>

          {/* 6-card simple grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Stethoscope size={24} />,
                bg: "bg-red-50 text-red-500",
                title: "AI Vet Consultation",
                desc: "Get instant expert advice from certified vets via chat or video call, 24/7 from anywhere."
              },
              {
                icon: <Activity size={24} />,
                bg: "bg-orange-50 text-orange-500",
                title: "Smart Health Monitoring",
                desc: "Track activity, heart rate, sleep, and vitals in real-time using the smart collar and app dashboard."
              },
              {
                icon: <Scissors size={24} />,
                bg: "bg-blue-50 text-blue-500",
                title: "Grooming Made Easy",
                desc: "Book verified groomers for baths, haircuts, nail trims and spa treatments â€” at home or nearby."
              },
              {
                icon: <ShoppingBag size={24} />,
                bg: "bg-green-50 text-green-500",
                title: "Pet Supplies Delivered",
                desc: "Shop curated food, toys, accessories and medicines with fast doorstep delivery."
              },
              {
                icon: <Home size={24} />,
                bg: "bg-purple-50 text-purple-500",
                title: "Boarding & Daycare",
                desc: "Find trusted boarding homes and daycare centers with live updates while you're away."
              },
              {
                icon: <Brain size={24} />,
                bg: "bg-[#FFC83D]/20 text-[#FF7A00]",
                title: "AI Pet Assistant",
                desc: "Get smart reminders, personalized care tips, and proactive health recommendations powered by AI."
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
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-bold text-[#FF7A00] tracking-wider uppercase text-sm">Why Tails 'n' Smiles</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#1D2A44]">
              Built with Love & Powered by Intelligence
            </h2>
            <p className="text-[#5C6B89] text-lg">
              Here is why pet parents are switching to Tails 'n' Smiles.
            </p>
          </div>

          {/* 4 Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Trusted Experts */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-orange-100 text-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">Trusted Experts</h3>
              <p className="text-base text-[#5C6B89] leading-relaxed">
                Every veterinarian, groomer, and dog trainer on our ecosystem undergoes screening and credential verification.
              </p>
            </div>

            {/* Card 2: AI Powered Insights */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-red-100 text-red-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <Brain size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">AI Powered Insights</h3>
              <p className="text-base text-[#5C6B89] leading-relaxed">
                Smart recommendations tailored specifically to your pet's breed characteristics, age, wellness trends, and history.
              </p>
            </div>

            {/* Card 3: Complete Ecosystem */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-green-100 text-green-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">Complete Ecosystem</h3>
              <p className="text-base text-[#5C6B89] leading-relaxed">
                Everything under one umbrellaâ€”from urgent medical support to custom treats, and styling services.
              </p>
            </div>

            {/* Card 4: Convenience */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-blue-100 text-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <Clock size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">Convenience</h3>
              <p className="text-base text-[#5C6B89] leading-relaxed">
                One platform, one login, and one card on file to replace a dozen apps, bookmarks, and phone contacts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PET PARENT BENEFITS SECTION */}
      <section id="benefits" className="py-14 md:py-16 px-6 bg-[#FFF9F0] border-t border-[#1D2A44]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and checklist */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-bold text-[#FF7A00] tracking-wider uppercase text-sm">Parent Benefits</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#1D2A44]">
                Built for Modern Pet Parents
              </h2>
              <p className="text-[#5C6B89] text-lg">
                Gain tools designed to make pet health proactive rather than reactive, while saving you time.
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Save Time",
                "Trusted Providers",
                "Centralized Pet Records",
                "Smart Health Tracking",
                "Instant Bookings",
                "Personalized Care",
                "Automated Reminders",
                "Better Pet Wellbeing"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#1D2A44]/5 shadow-soft-sm">
                  <div className="bg-teal-500 text-white p-1 rounded-full flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-sm text-[#1D2A44]">{benefit}</span>
                </div>
              ))}
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
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          
          <div className="space-y-4">
            <span className="font-bold text-[#FFC83D] tracking-wider uppercase text-sm">Join the ecosystem</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#FFF9F0]">
              Be Among the First Pet Parents
            </h2>
            <p className="text-[#E5DEC9] text-lg max-w-xl mx-auto">
              Join our community of pet parents and get early access to the future of pet care. Special launch benefits inside.
            </p>
          </div>

          {/* Join CTA & QR Code Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg">
            
            {/* Left: Button */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <h3 className="font-display font-bold text-xl text-[#FFF9F0]">Access the Community Portal</h3>
              <p className="text-sm text-[#E5DEC9] max-w-xs leading-relaxed">
                Click the button below to join the community space immediately on your desktop or browser.
              </p>
              <a 
                href="https://join.tailsnsmiles.com/pet-parent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFC83D] text-[#1D2A44] px-8 py-4 rounded-full font-bold text-base hover:bg-[#FFF9F0] hover:scale-105 shadow-soft transition-all duration-300 whitespace-nowrap"
              >
                Join Community <ArrowRight size={18} />
              </a>
            </div>

            {/* Right: QR Code */}
            <div className="flex flex-col items-center gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <div className="bg-white p-4 rounded-3xl shadow-soft">
                <img 
                  src={qrCodeSvg} 
                  alt="QR Code to Join Community" 
                  className="w-38 h-38 object-contain"
                />
              </div>
              <span className="text-xs font-bold text-[#E5DEC9] tracking-wide uppercase">Scan to join on mobile</span>
            </div>

          </div>

          {/* Included Features */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-4">
            {[
              "Early Access",
              "Exclusive Updates",
              "Product Launch Notifications"
            ].map(inc => (
              <div key={inc} className="flex items-center gap-2 font-semibold text-sm text-[#E5DEC9]">
                <div className="bg-[#FFC83D] text-[#1D2A44] p-0.5 rounded-full flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </div>
                {inc}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FFF9F0] text-[#1D2A44] pt-10 pb-6 px-6 border-t border-[#1D2A44]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-32 border-b border-[#1D2A44]/10 pb-10 mb-4">
          
          {/* Logo and Tagline */}
          <div className="md:col-span-4 space-y-4">
            <a href="#hero" className="inline-block group">
              <Logo className="h-20 w-auto hover:scale-105 transition-transform duration-300" />
            </a>
            <p className="text-[#5C6B89] leading-relaxed max-w-sm">
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
                <li><a href="#" className="hover:text-[#1D2A44] transition-colors whitespace-nowrap">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#1D2A44] transition-colors whitespace-nowrap">Terms and Conditions</a></li>
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
                  <path d="M12.923 15.62c-.443.03-.84-.06-1.18-.28A2.298 2.298 0 0 1 10.8 14.37a2.69 2.69 0 0 1-.274-1.2c0-.49.09-.9.25-1.26a2.03 2.03 0 0 1 .715-.86c.315-.22.682-.32 1.1-.32c.367 0 .692.08.973.24a1.8 1.8 0 0 1 .665.66c.153.26.23.56.23.91 0 .42-.1.82-.3 1.16a2.86 2.86 0 0 1-.84 1.02c-.303.22-.622.3-.96.26zm.102-3.12c-.173 0-.323.05-.45.14a.8.8 0 0 0-.295.37c-.063.15-.095.34-.095.56 0 .25.04.45.115.6a.7.7 0 0 0 .295.33c.123.07.25.1.383.09.13-.01.26-.06.39-.16c.142-.1.242-.25.3-.44a1.8 1.8 0 0 0 .08-.51c0-.26-.046-.48-.138-.66a.8.8 0 0 0-.34-.36.78.78 0 0 0-.332-.09zm7.842 1.57c-.07 1.12-.4 2.14-1.004 3.06a6.83 6.83 0 0 1-2.52 2.37c-1.2.7-2.5 1.07-3.9 1.11-1.3-.01-2.57-.26-3.82-.76a7.6 7.6 0 0 1-3.085-2.01A6.87 6.87 0 0 1 4.5 13.56a9.23 9.23 0 0 1-.525-2.91A10.82 10.82 0 0 1 4.6 6.6c.46-.86 1.07-1.57 1.83-2.14a7.8 7.8 0 0 1 3.08-1.51c1.3-.34 2.6-.37 3.9-.1 1.3.27 2.5.83 3.57 1.67a7.1 7.1 0 0 1 2.37 3.32c.4 1.03.54 2.11.41 3.25-.08 1.11-.47 2.05-1.16 2.82a3.83 3.83 0 0 1-2.73 1.34c-1.02.04-1.92-.26-2.7-.91A4.54 4.54 0 0 1 12 13.25c0-.98.24-1.84.73-2.58a4.42 4.42 0 0 1 2.08-1.7 6.7 6.7 0 0 1 2.97-.6c.86.01 1.66.2 2.39.57v.93c-.6-.4-1.28-.62-2.03-.66a5.5 5.5 0 0 0-2.45.41c-.74.34-1.32.86-1.74 1.56a4.2 4.2 0 0 0-.63 2.3c0 1.05.23 1.93.7 2.64a4.04 4.04 0 0 0 1.83 1.56c.74.33 1.53.46 2.36.38a3.1 3.1 0 0 0 2.22-1.08 4.7 4.7 0 0 0 1.1-2.76 12.33 12.33 0 0 0-.08-2.31c-.027-1.34-.41-2.56-1.15-3.64a5.5 5.5 0 0 0-2.03-1.84A6.42 6.42 0 0 0 13 4.24a6.6 6.6 0 0 0-3.25.76A5.34 5.34 0 0 0 7.65 7.06a7.6 7.6 0 0 0-.99 4.04c.07 1.3.41 2.51 1.025 3.61a7.73 7.73 0 0 0 3.635 3.24c.73.3 1.48.43 2.25.38a6.02 6.02 0 0 0 4.02-1.85 7.6 7.6 0 0 0 1.56-2.67 9.87 9.87 0 0 0 .62-2.69z"/>
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
        <div className="max-w-7xl mx-auto flex justify-center items-center text-xs font-semibold text-[#5C6B89] gap-4 text-center">
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

    </div>
  );
}

export default App;
