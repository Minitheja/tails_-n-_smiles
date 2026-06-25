import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroPetsImg from './assets/hero_pets.png';
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

const Logo = ({ className = "h-10" }) => (
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
  const [emailInput, setEmailInput] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
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
  
  // Waitlist footer section email state
  const [footerEmail, setFooterEmail] = useState('');
  const [footerWaitlistSubmitted, setFooterWaitlistSubmitted] = useState(false);

  // Chatbot states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: "🐾 Woof & Meow! I'm Tails AI, your intelligent pet companion. How can I help you care for your furry friend today?" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Real-time update simulations
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => Math.max(72, Math.min(94, prev + (Math.random() > 0.5 ? 1 : -1))));
      setSteps(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Waitlist submission handler
  const handleWaitlistSubmit = (e, source) => {
    e.preventDefault();
    const email = source === 'hero' ? emailInput : footerEmail;
    if (!email) return;
    
    if (source === 'hero') {
      setWaitlistSubmitted(true);
      setTimeout(() => setEmailInput(''), 2000);
    } else {
      setFooterWaitlistSubmitted(true);
      setTimeout(() => setFooterEmail(''), 2000);
    }
  };

  // Chatbot question handler
  const handleChatQuestion = (question, answer) => {
    setChatMessages(prev => [...prev, { sender: 'user', text: question }]);
    setIsBotTyping(true);
    
    setTimeout(() => {
      setIsBotTyping(false);
      setChatMessages(prev => [...prev, { sender: 'bot', text: answer }]);
    }, 1200);
  };

  // Chatbot manual text submission
  const handleSendChat = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const message = userInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: message }]);
    setUserInput('');
    setIsBotTyping(true);

    // AI dynamic custom responses based on keywords
    setTimeout(() => {
      setIsBotTyping(false);
      let reply = "Woof! That sounds like an important question. When Tails 'n' Smiles launches, our AI assistant will analyze your pet's specific medical records, breed trends, and collar data to give you personalized clinical suggestions. Stay tuned!";
      
      const lowerMessage = message.toLowerCase();
      if (lowerMessage.includes('food') || lowerMessage.includes('diet') || lowerMessage.includes('eat')) {
        reply = "🐾 Nutrition is key! Tails AI can generate custom meal plans depending on your pet's age, weight, and allergy history. For instance, growing puppies need high protein, while senior dogs benefit from joint support formula. What breed do you have?";
      } else if (lowerMessage.includes('vet') || lowerMessage.includes('symptom') || lowerMessage.includes('sick')) {
        reply = "🩺 Standard warning: If this is an emergency, please visit a local vet clinic immediately. In standard health checks, I can scan symptoms like lethargy or scratching and connect you with a 24/7 tele-vet consultation in under 5 minutes!";
      } else if (lowerMessage.includes('groom') || lowerMessage.includes('hair') || lowerMessage.includes('nail')) {
        reply = "✂️ Bathing, haircuts, and nail trims should be stress-free! You can book verified home-groomers who come directly to your driveway, or schedule a spot at nearby premier pet spas. Shall we look up local services?";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 1500);
  };

  const chatbotQuickPrompts = [
    {
      q: "🐾 What is Tails 'n' Smiles?",
      a: "Tails 'n' Smiles is a comprehensive, AI-powered pet care ecosystem bringing together veterinarians, groomers, trainers, boarding services, and supplies into a single unified platform. It uses smart collars and AI analysis to give you peace of mind and simplify pet parenting."
    },
    {
      q: "🩺 Try Symptom Checker",
      a: "Our AI Symptom Checker helps analyze abnormalities (e.g. skin rashes, ear shaking, digestive upsets). Simply describe the issue, and Tails AI evaluates urgency levels and recommends nearby certified vets if needed."
    },
    {
      q: "💊 Medication alerts?",
      a: "Tails AI syncs with your pet's health record. It automatically sends push notifications when it's time for vaccines, heartworm medicine, or daily pills, and tracks completion so you never miss a dose."
    }
  ];

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
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <Logo className="h-11 w-auto hover:scale-105 transition-transform duration-300" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-[#2E3F5F]">
            <a href="#features" className="hover:text-[#1D2A44] hover:scale-105 transition-all">Features</a>
            <a href="#how-it-works" className="hover:text-[#1D2A44] hover:scale-105 transition-all">How It Works</a>
            <a href="#why-us" className="hover:text-[#1D2A44] hover:scale-105 transition-all">Why Us</a>
            <a href="#benefits" className="hover:text-[#1D2A44] hover:scale-105 transition-all">Benefits</a>
            <a href="#testimonials" className="hover:text-[#1D2A44] hover:scale-105 transition-all">Testimonials</a>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#waitlist" className="bg-[#1D2A44] text-[#FFF9F0] px-5 py-2.5 rounded-full font-semibold hover:bg-[#FFC83D] hover:text-[#1D2A44] shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Join Waitlist
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
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-lg text-[#2E3F5F] hover:text-[#1D2A44]">How It Works</a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-lg text-[#2E3F5F] hover:text-[#1D2A44]">Why Us</a>
              <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-lg text-[#2E3F5F] hover:text-[#1D2A44]">Benefits</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-lg text-[#2E3F5F] hover:text-[#1D2A44]">Testimonials</a>
              <div className="pt-4 border-t border-[#1D2A44]/10">
                <a href="#waitlist" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-[#1D2A44] text-[#FFF9F0] py-3 rounded-full font-semibold">
                  Join Waitlist
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <header id="hero" className="pt-20 pb-16 md:pt-28 md:pb-20 px-6 overflow-hidden">
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
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#1D2A44]">
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
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-[#1D2A44] text-[#FFF9F0] px-8 py-4 rounded-full font-bold text-base hover:bg-[#FFC83D] hover:text-[#1D2A44] shadow-soft transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Join Waitlist <ArrowRight size={18} />
              </a>
              <a href="#features" className="flex items-center gap-1.5 text-[#5C6B89] font-medium hover:text-[#1D2A44] transition-colors group">
                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-[#FFF9F0] flex items-center justify-center text-xs font-bold text-white">🐶</div>
                <div className="w-8 h-8 rounded-full bg-[#1D2A44] border-2 border-[#FFF9F0] flex items-center justify-center text-xs font-bold text-white">🐱</div>
                <div className="w-8 h-8 rounded-full bg-[#FFC83D] border-2 border-[#FFF9F0] flex items-center justify-center text-xs font-bold text-[#1D2A44]">🐰</div>
              </div>
              <span className="text-sm font-semibold text-[#1D2A44]">4,200+ Pet parents joined waitlist</span>
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
              <div className="z-10 w-[240px] h-[240px] rounded-full bg-white/45 backdrop-blur-md flex items-center justify-center border border-white/60 shadow-soft overflow-hidden p-3.5">
                <img 
                  src="/hero_pets.png" 
                  alt="Tails 'n' Smiles Mascot Pets" 
                  className="w-full h-full object-cover rounded-full shadow-inner animate-float"
                />
              </div>

              {/* Node 1: AI Vet Consultation (Top Center) */}
              <div className="absolute left-[50%] top-[14%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float">
                <div className="glass-card shadow-soft p-3 rounded-2xl flex flex-col items-center gap-1 min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-red-100 p-2 rounded-xl text-red-500 shadow-sm">
                    <Stethoscope size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-[#1D2A44] text-center leading-tight">AI Vet<br />Consultation</span>
                </div>
              </div>

              {/* Node 2: Grooming Services (Top Right) */}
              <div className="absolute left-[81%] top-[32%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float-delayed-1">
                <div className="glass-card shadow-soft p-3 rounded-2xl flex flex-col items-center gap-1 min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-blue-100 p-2 rounded-xl text-blue-500 shadow-sm">
                    <Scissors size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Grooming<br />Services</span>
                </div>
              </div>

              {/* Node 3: Pet Supplies Delivery (Bottom Right) */}
              <div className="absolute left-[81%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float-delayed-2">
                <div className="glass-card shadow-soft p-3 rounded-2xl flex flex-col items-center gap-1 min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-green-100 p-2 rounded-xl text-green-500 shadow-sm">
                    <ShoppingBag size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Supplies<br />Delivery</span>
                </div>
              </div>

              {/* Node 4: Boarding & Daycare (Bottom Center) */}
              <div className="absolute left-[50%] top-[86%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float">
                <div className="glass-card shadow-soft p-3 rounded-2xl flex flex-col items-center gap-1 min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-purple-100 p-2 rounded-xl text-purple-500 shadow-sm">
                    <Home size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Boarding &<br />Daycare</span>
                </div>
              </div>

              {/* Node 5: Health Monitoring (Bottom Left) */}
              <div className="absolute left-[19%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float-delayed-1">
                <div className="glass-card shadow-soft p-3 rounded-2xl flex flex-col items-center gap-1 min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-orange-100 p-2 rounded-xl text-orange-500 shadow-sm animate-pulse">
                    <Activity size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Health<br />Monitoring</span>
                </div>
              </div>

              {/* Node 6: Pet Training (Top Left) */}
              <div className="absolute left-[19%] top-[32%] -translate-x-1/2 -translate-y-1/2 z-20 animate-float-delayed-2">
                <div className="glass-card shadow-soft p-3 rounded-2xl flex flex-col items-center gap-1 min-w-[100px] border border-white hover:scale-105 hover:bg-white/80 transition-all duration-300">
                  <div className="bg-[#FFC83D]/25 p-2 rounded-xl text-[#FF7A00] shadow-sm">
                    <Brain size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-[#1D2A44] text-center leading-tight">Pet<br />Training</span>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 px-6 bg-[#FFF9F0]">
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
                  <p className="text-[#5C6B89] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section id="how-it-works" className="py-24 px-6 bg-[#FFF9F0] border-t border-[#1D2A44]/5">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-bold text-[#FF7A00] tracking-wider uppercase text-sm">How It Works</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#1D2A44]">
              One App. Complete Peace of Mind.
            </h2>
            <p className="text-[#5C6B89] text-lg">
              Simplifying the complicated world of pet parenting in three simple steps.
            </p>
          </div>

          {/* 3 Step Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Step 1 */}
            <div className="space-y-6 relative flex flex-col items-center md:items-start">
              <div className="w-16 h-16 rounded-3xl bg-[#FFC83D] text-[#1D2A44] font-display font-extrabold text-2xl flex items-center justify-center shadow-soft">
                1
              </div>
              <h3 className="font-display font-extrabold text-2xl text-[#1D2A44] text-center md:text-left">Discover</h3>
              <p className="text-[#5C6B89] leading-relaxed text-center md:text-left">
                Find trusted pet care providers nearby. Screen verified vets, professional dog trainers, local pet groomers, and pet boarding centers with ease.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-6 relative flex flex-col items-center md:items-start">
              <div className="w-16 h-16 rounded-3xl bg-[#1D2A44] text-[#FFF9F0] font-display font-extrabold text-2xl flex items-center justify-center shadow-soft">
                2
              </div>
              <h3 className="font-display font-extrabold text-2xl text-[#1D2A44] text-center md:text-left">Book</h3>
              <p className="text-[#5C6B89] leading-relaxed text-center md:text-left">
                Schedule appointments and services instantly. Skip calls and messy portals by coordinating and locking in times directly through the platform.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-6 relative flex flex-col items-center md:items-start">
              <div className="w-16 h-16 rounded-3xl bg-teal-500 text-white font-display font-extrabold text-2xl flex items-center justify-center shadow-soft">
                3
              </div>
              <h3 className="font-display font-extrabold text-2xl text-[#1D2A44] text-center md:text-left">Manage</h3>
              <p className="text-[#5C6B89] leading-relaxed text-center md:text-left">
                Track health records, medical checklists, vaccination reminders, bookings, and recurring purchases in one central intelligent dashboard.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY TAILS 'N' SMILES SECTION */}
      <section id="why-us" className="py-24 px-6 bg-[#FFF9F0] border-t border-[#1D2A44]/5">
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
              <p className="text-sm text-[#5C6B89] leading-relaxed">
                Every veterinarian, groomer, and dog trainer on our ecosystem undergoes screening and credential verification.
              </p>
            </div>

            {/* Card 2: AI Powered Insights */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-red-100 text-red-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <Brain size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">AI Powered Insights</h3>
              <p className="text-sm text-[#5C6B89] leading-relaxed">
                Smart recommendations tailored specifically to your pet's breed characteristics, age, wellness trends, and history.
              </p>
            </div>

            {/* Card 3: Complete Ecosystem */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-green-100 text-green-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">Complete Ecosystem</h3>
              <p className="text-sm text-[#5C6B89] leading-relaxed">
                Everything under one umbrellaâ€”from urgent medical support to custom treats, and styling services.
              </p>
            </div>

            {/* Card 4: Convenience */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 space-y-5">
              <div className="bg-blue-100 text-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft-sm">
                <Clock size={24} />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1D2A44]">Convenience</h3>
              <p className="text-sm text-[#5C6B89] leading-relaxed">
                One platform, one login, and one card on file to replace a dozen apps, bookmarks, and phone contacts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PET PARENT BENEFITS SECTION */}
      <section id="benefits" className="py-24 px-6 bg-[#FFF9F0] border-t border-[#1D2A44]/5">
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

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 px-6 bg-[#FFF9F0] border-t border-[#1D2A44]/5">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-bold text-[#FF7A00] tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#1D2A44]">
              Loved by Pets, Trusted by Parents
            </h2>
            <p className="text-[#5C6B89] text-lg">
              Here's what our early beta test community has to say about Tails 'n' Smiles.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#FFC83D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#2E3F5F] leading-relaxed italic text-sm">
                  "Tails 'n' Smiles finally brings every pet service into one place. Exactly what pet parents need. I can schedule a vet consult and recurring supplies delivery simultaneously."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#1D2A44]/5">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-600 text-sm">JS</div>
                <div>
                  <h4 className="font-bold text-sm text-[#1D2A44]">Jessica S.</h4>
                  <span className="text-xs text-[#5C6B89]">Owner of Luna (Golden Retriever)</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#FFC83D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#2E3F5F] leading-relaxed italic text-sm">
                  "The AI recommendations and reminders make caring for my dog so much easier. The sync between the smart collar vaccine list and vet booking is absolutely magical."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#1D2A44]/5">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-sm">MH</div>
                <div>
                  <h4 className="font-bold text-sm text-[#1D2A44]">Mark H.</h4>
                  <span className="text-xs text-[#5C6B89]">Owner of Ollie (French Bulldog)</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-3xl border border-[#1D2A44]/5 shadow-soft flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#FFC83D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#2E3F5F] leading-relaxed italic text-sm">
                  "Booking vets and groomers has never been this simple. I love having an intelligent companion in my pocket that tells me when my cat needs her dietary support Soft Chews."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#1D2A44]/5">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600 text-sm">SM</div>
                <div>
                  <h4 className="font-bold text-sm text-[#1D2A44]">Sarah M.</h4>
                  <span className="text-xs text-[#5C6B89]">Owner of Mittens (Tabby Cat)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* WAITLIST SECTION */}
      <section id="waitlist" className="py-24 px-6 bg-[#1D2A44] text-[#FFF9F0] relative overflow-hidden">
        
        {/* Background visual circles */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-400/5 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          
          <div className="space-y-4">
            <span className="font-bold text-[#FFC83D] tracking-wider uppercase text-sm">Join the ecosystem</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[#FFF9F0]">
              Be Among the First Pet Parents
            </h2>
            <p className="text-[#E5DEC9] text-lg max-w-xl mx-auto">
              Join the waitlist and get early access to the future of pet care. Special launch benefits inside.
            </p>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-md p-2 rounded-3xl md:rounded-full border border-white/10 shadow-lg">
            <form onSubmit={(e) => handleWaitlistSubmit(e, 'footer')} className="flex flex-col md:flex-row gap-2">
              <input 
                type="email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-grow bg-transparent px-5 py-3.5 focus:outline-none text-base placeholder:text-[#E5DEC9]/60 text-white font-medium"
                required
              />
              <button 
                type="submit"
                className="bg-[#FFC83D] text-[#1D2A44] px-8 py-3.5 rounded-2xl md:rounded-full font-bold text-base hover:bg-white hover:scale-105 shadow-soft transition-all duration-300 whitespace-nowrap"
              >
                {footerWaitlistSubmitted ? "Registered! 🎉" : "Join Waitlist"}
              </button>
            </form>
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
      <footer className="bg-[#FFF9F0] text-[#1D2A44] py-16 px-6 border-t border-[#1D2A44]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#1D2A44]/10 pb-12 mb-12">
          
          {/* Logo and Tagline */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-block group">
              <Logo className="h-14 w-auto hover:scale-105 transition-transform duration-300" />
            </a>
            <p className="text-[#5C6B89] leading-relaxed max-w-sm">
              Everything your pet needs, all in one place. Bringing veterinary guidance, supplies, styling, and monitoring together.
            </p>
          </div>

          {/* Site Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#1D2A44]">Navigation</h4>
              <ul className="space-y-2.5 text-sm font-semibold text-[#5C6B89]">
                <li><a href="#features" className="hover:text-[#1D2A44] transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-[#1D2A44] transition-colors">How It Works</a></li>
                <li><a href="#why-us" className="hover:text-[#1D2A44] transition-colors">Why Us</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#1D2A44]">Company</h4>
              <ul className="space-y-2.5 text-sm font-semibold text-[#5C6B89]">
                <li><a href="#benefits" className="hover:text-[#1D2A44] transition-colors">About</a></li>
                <li><a href="#testimonials" className="hover:text-[#1D2A44] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#1D2A44] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#1D2A44] transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#1D2A44]">Follow the Pack</h4>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                aria-label="Facebook"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-2.5 rounded-xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft-sm transition-all duration-300 flex items-center justify-center w-10 h-10"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-2.5 rounded-xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft-sm transition-all duration-300 flex items-center justify-center w-10 h-10"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-2.5 rounded-xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft-sm transition-all duration-300 flex items-center justify-center w-10 h-10"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="X"
                className="bg-white hover:bg-[#FFC83D] hover:text-[#1D2A44] p-2.5 rounded-xl border border-[#1D2A44]/5 text-[#5C6B89] shadow-soft-sm transition-all duration-300 flex items-center justify-center w-10 h-10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs font-semibold text-[#5C6B89] gap-4">
          <span>© 2026 Tails 'n' Smiles. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1D2A44]">Privacy Policy</a>
            <a href="#" className="hover:text-[#1D2A44]">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* FLOATING AI PET ASSISTANT INTERACTIVE CHATBOT (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="bg-white w-[360px] max-w-[calc(100vw-32px)] h-[500px] rounded-3xl shadow-soft-lg border border-[#1D2A44]/10 overflow-hidden flex flex-col justify-between mb-4 z-50"
            >
              {/* Chat Header */}
              <div className="bg-[#1D2A44] text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFC83D] flex items-center justify-center text-base shadow-sm">
                    🤖
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5 leading-none">
                      Tails AI Assistant <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    </h4>
                    <span className="text-[10px] text-[#E5DEC9] opacity-80 leading-none">Your intelligent pet companion</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Message Box */}
              <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-[#FFF9F0]/65">
                {chatMessages.map((msg, index) => (
                  <div 
                    key={index}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed shadow-soft-sm ${
                        msg.sender === 'user'
                          ? 'bg-[#1D2A44] text-[#FFF9F0] rounded-tr-none'
                          : 'bg-white text-[#1D2A44] border border-[#1D2A44]/5 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {/* Bot Typing indicator */}
                {isBotTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-[#5C6B89] border border-[#1D2A44]/5 px-4 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-soft-sm">
                      <span className="w-1.5 h-1.5 bg-[#5C6B89] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-[#5C6B89] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-[#5C6B89] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Prompts List */}
              <div className="px-4 py-2 bg-white border-t border-[#1D2A44]/5 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
                {chatbotQuickPrompts.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => handleChatQuestion(p.q, p.a)}
                    className="bg-[#FFF9F0] hover:bg-[#FFC83D]/20 text-[#1D2A44] font-bold text-[10px] px-3 py-1.5 rounded-full border border-[#1D2A44]/5 transition-all inline-block shadow-soft-sm"
                  >
                    {p.q}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSendChat} className="p-3 bg-white border-t border-[#1D2A44]/5 flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask about diet, vets, grooming..."
                  className="flex-grow bg-[#FFF9F0] border border-[#1D2A44]/5 rounded-full px-4 py-2 text-xs focus:outline-none text-[#1D2A44]"
                />
                <button
                  type="submit"
                  className="bg-[#1D2A44] hover:bg-[#FFC83D] hover:text-[#1D2A44] text-white p-2.5 rounded-full transition-colors flex items-center justify-center shadow-soft-sm"
                >
                  <Send size={14} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Chat Trigger Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#1D2A44] hover:bg-[#FFC83D] hover:text-[#1D2A44] text-[#FFF9F0] p-4 rounded-full shadow-soft-lg flex items-center justify-center transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group border-2 border-white"
          aria-label="Open AI Assistant Chatbot"
        >
          <MessageSquare size={24} className="group-hover:rotate-6 transition-transform" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 font-bold text-xs tracking-wider transition-all duration-500 uppercase whitespace-nowrap">
            Tails AI Chat
          </span>
        </button>
      </div>

    </div>
  );
}

export default App;
