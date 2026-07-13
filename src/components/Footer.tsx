import React, { useState } from 'react';
import { GraduationCap, ArrowUp, Send, CheckCircle } from 'lucide-react';
import SafeImage from './SafeImage';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail) {
      setSubSuccess(true);
      setTimeout(() => {
        setSubSuccess(false);
        setNewsEmail('');
      }, 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-blue text-slate-300 relative z-20 pt-20 border-t border-white/10" id="footer">
      
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
        
        {/* Brand Block */}
        <div className="lg:col-span-4">
          <a href="#home" className="flex items-center gap-2.5 mb-6 group" id="footer-logo">
            <SafeImage
              src="ceetec_logo.png"
              alt="CEETEC Logo"
              fallbackType="logo"
              className="w-11 h-11 rounded-full object-cover border border-white/10 group-hover:border-brand-orange/30 transition-all duration-300 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight text-white leading-none uppercase">
                CEETEC
              </span>
              <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase mt-0.5">
                University
              </span>
            </div>
          </a>
          <p className="text-xs text-slate-400 leading-relaxed font-light mb-6 max-w-sm">
            ceetec is a leading modern university dedicated to empowering and launching students into the competitive global market. We provide high-fidelity, globally recognized professional programs, academic qualifications, and industry-compliant certifications in advanced technologies, executive management, and modern language studies.
          </p>
          <div className="text-[11px] text-slate-500 font-mono mb-4">
            Lic. TVEC/SL/008126
          </div>
          <div className="border-t border-white/5 pt-4">
            <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-2">Global Presence</span>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="hover:text-brand-gold transition-colors font-medium flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full overflow-hidden border border-white/10 shrink-0 flex-none select-none" title="Sri Lanka">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="0" y="0" width="100" height="100" fill="#FFBE29" />
                    <rect x="6" y="6" width="18" height="88" fill="#005F56" />
                    <rect x="28" y="6" width="18" height="88" fill="#FF7900" />
                    <rect x="50" y="6" width="44" height="88" fill="#8A1538" />
                    <path d="M72,38 L78,50 L66,50 Z" fill="#FFBE29" />
                  </svg>
                </div>
                <span>Sri Lanka</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="hover:text-brand-gold transition-colors font-medium flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full overflow-hidden border border-white/10 shrink-0 flex-none select-none" title="Dubai (UAE)">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="0" y="0" width="28" height="100" fill="#FF0000" />
                    <rect x="28" y="0" width="72" height="33.3" fill="#00732F" />
                    <rect x="28" y="33.3" width="72" height="33.4" fill="#FFFFFF" />
                    <rect x="28" y="66.7" width="72" height="33.3" fill="#000000" />
                  </svg>
                </div>
                <span>Dubai</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="hover:text-brand-gold transition-colors font-medium flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full overflow-hidden border border-white/10 shrink-0 flex-none select-none" title="Japan">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="0" y="0" width="100" height="100" fill="#FFFFFF" />
                    <circle cx="50" cy="50" r="28" fill="#BC002D" />
                  </svg>
                </div>
                <span>Japan</span>
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6">
            Academy
          </h4>
          <ul className="space-y-3.5 text-xs">
            <li>
              <a href="#home" className="hover:text-brand-orange transition-colors">Home Page</a>
            </li>
            <li>
              <a href="#about" className="hover:text-brand-orange transition-colors">About Us</a>
            </li>
            <li>
              <a href="#features" className="hover:text-brand-orange transition-colors">Why Choose Us</a>
            </li>
            <li>
              <a href="#courses" className="hover:text-brand-orange transition-colors">Our Courses</a>
            </li>
            <li>
              <a href="#facilities" className="hover:text-brand-orange transition-colors">Academic Facilities</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-brand-orange transition-colors">FAQ & Support</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-3">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6">
            Contact Info
          </h4>
          <ul className="space-y-4 text-xs font-light">
            <li className="leading-relaxed">
              <strong className="block text-slate-400 font-medium font-mono text-[10px] uppercase mb-1">Head Office</strong>
              Level 26, Echelon Square,<br />World Trade Center, Colombo 01,<br />Western 00100, Sri Lanka.
            </li>
            <li className="leading-relaxed">
              <strong className="block text-slate-400 font-medium font-mono text-[10px] uppercase mb-1">Branch Office</strong>
              No.41 Bandaranayake Mawatha,<br />Katubedda, Moratuwa 10400,<br />Colombo, Western 10400, Sri Lanka.
            </li>
            <li>
              <strong className="block text-slate-400 font-medium font-mono text-[10px] uppercase mb-1">Call Centre</strong>
              <a href="tel:+94706156075" className="hover:text-brand-orange transition-colors">+94 70 615 6075</a><br />
              <a href="tel:+94706156076" className="hover:text-brand-orange transition-colors">+94 70 615 6076</a>
            </li>
            <li>
              <strong className="block text-slate-400 font-medium font-mono text-[10px] uppercase mb-1">Email Support</strong>
              info@ceetec.lk
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="lg:col-span-3">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6">
            Newsletter
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
            Subscribe to our weekly intake circulars, tech workshops, and scholarship notices.
          </p>

          {subSuccess ? (
            <div className="bg-emerald-950/40 border border-emerald-900 text-emerald-400 p-4 rounded-xl flex items-center gap-2.5 animate-fade-in text-xs">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Subscribed successfully! Check your inbox soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="relative mt-2" id="footer-newsletter">
              <input
                type="email"
                required
                placeholder="info@ceetec.lk"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-orange focus:bg-white/10"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bg-brand-orange hover:bg-brand-orange/90 text-white p-2 rounded-lg transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="mt-6 flex gap-3 text-slate-500 text-[10px] font-mono leading-relaxed">
            <span>* No spam. Unsubscribe anytime.</span>
          </div>
        </div>

      </div>

      {/* Footer Bottom / Copyright */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4" id="footer-bottom">
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} ceetec (Pvt) Ltd. All Rights Reserved.
          <span className="block mt-1 sm:inline sm:mt-0 sm:ml-2 pl-2 sm:border-l border-slate-800">
            Sri Lanka Vocational Registry Registration No: TVEC/SL/008126.
          </span>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-white/5 hover:bg-brand-orange text-slate-400 hover:text-white p-2.5 rounded-full border border-white/10 transition-colors shadow-lg cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </footer>
  );
}
