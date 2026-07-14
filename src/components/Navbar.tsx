import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Facebook, Linkedin, Twitter, GraduationCap, Menu, X, ArrowRight } from 'lucide-react';
import SafeImage from './SafeImage';

interface NavbarProps {
  onOpenEnquiry: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenEnquiry, activeSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'About Us', href: '/about', id: 'about' },
    { label: 'Features', href: '/features', id: 'features' },
    { label: 'Courses', href: '/courses', id: 'courses' },
    { label: 'Facilities', href: '/facilities', id: 'facilities' },
    { label: 'FAQ', href: '/faq', id: 'faq' },
    { label: 'Contact', href: '/contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Contact Bar (collapses smoothly when scrolled, keeping nav always pinned) */}
      <div
        id="top-bar"
        className={`bg-brand-blue text-white/90 text-xs px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center border-b border-white/10 gap-2 overflow-hidden transition-all duration-300 ${
          isScrolled ? 'max-h-0 py-0 opacity-0 pointer-events-none' : 'max-h-20 py-2 opacity-100'
        }`}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-1.5" id="topbar-phone">
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span className="font-mono text-[11px] text-white/90">
              <a href="tel:+94706156075" className="hover:text-brand-gold transition-colors">+94 70 615 6075</a>
              {" / "}
              <a href="tel:+94706156076" className="hover:text-brand-gold transition-colors">+94 70 615 6076</a>
            </span>
          </div>
          <a href="mailto:info@ceetec.lk" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors" id="topbar-email">
            <Mail className="w-3.5 h-3.5 text-brand-gold" />
            <span className="font-mono text-[11px]">info@ceetec.lk</span>
          </a>
          <div className="hidden md:flex items-center gap-1.5 text-white/70" id="topbar-hours">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            <span>Mon - Sun: 8:30 AM - 6:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 border-r border-white/10 pr-4">
            <a href="https://web.facebook.com/people/CEETEC/61559671979602/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.linkedin.com/company/ceetec-university" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
          <span className="text-[10px] bg-brand-orange text-white font-medium px-2 py-0.5 rounded-sm tracking-wide">
            Sri Lanka Center
          </span>
        </div>
      </div>

      {/* Main Navigation Bar (always visible — header itself is now sticky) */}
      <nav
        id="main-nav"
        className={`w-full transition-all duration-300 py-4 px-4 md:px-8 flex justify-between items-center ${
          isScrolled
            ? 'bg-white shadow-md border-b border-gray-100 backdrop-blur-md'
            : 'bg-white/95 md:bg-white'
        }`}
      >
{/* Logo */}
<Link 
  to="/" 
  className="flex items-center gap-3 group" 
  id="nav-logo"
>

  <SafeImage
    src="/images/ceetec_logo.png"
    alt="CEETEC University Logo"
    fallbackType="logo"
    className="
      w-16 
      h-16 
      object-contain
      transition-all 
      duration-300
      group-hover:scale-105
    "
  />


  <div className="flex flex-col">

    <span className="
      font-display 
      font-bold 
      text-2xl 
      tracking-tight 
      text-brand-blue 
      leading-none 
      uppercase
    ">
      CEETEC
    </span>


    <span className="
      text-[10px]
      font-mono
      tracking-widest
      text-brand-orange
      font-bold
      uppercase
      mt-1
    ">
      University
    </span>

  </div>


</Link>
        <div className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`font-medium text-sm tracking-wide transition-all hover:text-brand-orange relative py-1 ${
                activeSection === item.id
                  ? 'text-brand-orange font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-orange'
                  : 'text-brand-blue/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center" id="nav-cta-container">
          <button
            onClick={onOpenEnquiry}
            id="nav-enquiry-btn"
            className="bg-brand-blue hover:bg-brand-orange text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm shadow-brand-blue/10 flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Quick Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          id="mobile-menu-toggle"
          className="lg:hidden text-brand-blue hover:text-brand-orange p-1.5 transition-colors focus:outline-none"
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 bg-brand-blue/50 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          id="mobile-drawer-content"
          className={`absolute top-0 right-0 w-[280px] h-full bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <SafeImage
                  src="ceetec_logo.png"
                  alt="CEETEC Logo"
                  fallbackType="logo"
                  className="w-9 h-9 rounded-full object-cover border border-slate-100 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-brand-blue leading-none uppercase">CEETEC</span>
                  <span className="text-[8px] font-mono tracking-wider text-brand-orange font-bold uppercase mt-0.5">University</span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-1 border-b border-slate-50 transition-colors ${
                    activeSection === item.id
                      ? 'text-brand-orange font-semibold pl-2 border-l-2 border-l-brand-orange'
                      : 'text-brand-blue/90 hover:text-brand-orange'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-brand-blue hover:bg-brand-orange text-white text-center font-semibold py-3 rounded-lg transition-all duration-300 flex justify-center items-center gap-2"
            >
              <span>Quick Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-4 text-center text-xs text-gray-400 font-mono">
              info@ceetec.lk
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}