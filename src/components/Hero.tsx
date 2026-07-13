import React from 'react';
import { ArrowRight, BookOpen, Star, ShieldCheck } from 'lucide-react';
import SafeImage from './SafeImage';

interface HeroProps {
  onDiscoverCourses: () => void;
  onOpenEnquiry: () => void;
}

export default function Hero({ onDiscoverCourses, onOpenEnquiry }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="images/ceetec_hero_banner_1782582678938.jpg"
          alt="CEETEC University Hero"
          fallbackType="hero"
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        {/* Multilayer gradient overlay for perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/95 via-transparent to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 text-white text-center lg:text-left">
          {/* Tagline */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider animate-fade-in">
              <Star className="w-3.5 h-3.5 fill-brand-gold" />
              <span>Sri Lanka’s Premier Skills Academy</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-slate-200 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide animate-fade-in">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-slate-300 mr-1">Global Presence:</span>
              <span className="font-semibold text-white flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full overflow-hidden border border-white/20 shrink-0 flex-none select-none shadow-sm" title="Sri Lanka">
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
                <span className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full overflow-hidden border border-white/20 shrink-0 flex-none select-none shadow-sm" title="Dubai (UAE)">
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
                <span className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full overflow-hidden border border-white/20 shrink-0 flex-none select-none shadow-sm" title="Japan">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <rect x="0" y="0" width="100" height="100" fill="#FFFFFF" />
                      <circle cx="50" cy="50" r="28" fill="#BC002D" />
                    </svg>
                  </div>
                  <span>Japan</span>
                </span>
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Empowering <span className="text-brand-gold">Futures</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-200/90 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Shaping tomorrow’s leaders with hands-on, career-focused training. Achieve your dreams with <strong className="font-semibold text-white">CEETEC</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onDiscoverCourses}
              id="hero-explore-btn"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Courses</span>
              <BookOpen className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenEnquiry}
              id="hero-enquiry-btn"
              className="bg-white/10 hover:bg-white/15 border border-white/25 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Micro Trust badges */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="font-display font-bold text-2xl text-brand-gold">98%</div>
              <div className="text-xs text-slate-300">Success Rate</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-brand-gold">100%</div>
              <div className="text-xs text-slate-300">Hands-on Lab</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-brand-gold">Global</div>
              <div className="text-xs text-slate-300">Certification</div>
            </div>
          </div>
        </div>

        {/* Floating Highlight Card / Quick Benefits Container */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/40 max-w-sm ml-auto relative overflow-hidden group">
            {/* Corner styling block */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-orange/10 rounded-bl-full group-hover:bg-brand-orange/20 transition-all"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-blue text-white p-3 rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-brand-blue">Why Study At ceetec?</h3>
                <p className="text-xs text-brand-orange font-medium">Licensed University</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 text-emerald-800 rounded-full p-1 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-800">Global Certification Mastery</h4>
                  <p className="text-xs text-slate-500">Lead the way in IT, Cloud, AI, and Automation with world-class training.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 text-emerald-800 rounded-full p-1 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-800">Nationally Recognized</h4>
                  <p className="text-xs text-slate-500">We deliver TVEC-registered programs, including NVQ Levels 4 and 5.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 text-emerald-800 rounded-full p-1 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-800">Direct Career Pathways</h4>
                  <p className="text-xs text-slate-500">Benefit from industry MOUs that bridge the gap to internships.</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Next intakes: July 15</span>
              <a href="#courses" className="text-brand-orange hover:underline font-semibold">View Dates</a>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Custom Zoom Animation Keyframe Style injected into page */}
      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.02); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
