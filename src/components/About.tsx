import React, { useState } from 'react';
import { CheckCircle, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import SafeImage from '../components/SafeImage';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const tabsContent = {
    mission: {
      title: 'Our Mission',
      content: 'To empower individuals in Sri Lanka and globally by providing industry-aligned, highly practical training that bridges the gap between traditional academic theory and the fast-paced demands of the global workspace.',
      highlights: ['Skills-first curriculum design', 'Direct laboratory execution', 'Inclusive hybrid training models']
    },
    vision: {
      title: 'Our Vision',
      content: 'To be the ultimate benchmark of educational excellence and professional talent supply in South Asia, enabling career transformations that impact generations and foster robust digital ecosystems.',
      highlights: ['Pioneering AI & Web laboratories', '100% placement alignment', 'World-class academic standards']
    },
    values: {
      title: 'Our Core Values',
      content: 'At ceetec, we believe in radical transparency, uncompromising instructional quality, and client-centric learning paths. We hold ourselves to absolute integrity in academic metrics and post-graduate support.',
      highlights: ['Integrity & Authenticity', 'Student-First Commitment', 'Continuous Innovation']
    }
  };

  const stats = [
    { value: '7+', label: 'Years Excellence', icon: Trophy, color: 'text-brand-orange' },
    { value: '4.5k+', label: 'Alumni Graduated', icon: Trophy, color: 'text-brand-gold' },
    { value: '40+', label: 'Certified Mentors', icon: Trophy, color: 'text-brand-orange' },
    { value: '98%', label: 'Placement Success', icon: ShieldCheck, color: 'text-emerald-500' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative z-20 overflow-hidden">
      {/* Decorative vector assets */}
      <div className="absolute top-12 left-6 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-24 right-12 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image Collage & Active Numbers */}
          <div className="lg:col-span-5 relative" id="about-image-collage">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-[90%] md:max-w-md mx-auto">
                <SafeImage
                  src="images/about_students_collaborating.jpg"
                  alt="Students Collaborating at ceetec"
                  fallbackType="hero"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Small Card */}
              <div className="absolute -bottom-8 -right-4 bg-brand-blue text-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-white/10 hidden md:block">
                <Sparkles className="w-8 h-8 text-brand-gold mb-3 animate-pulse" />
                <h4 className="font-display font-bold text-lg text-white">Registered</h4>
                <p className="text-xs text-slate-300 mt-1">Under Sri Lanka Tertiary Education Council regulations.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Interactive Tabs */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 px-3 py-1 rounded">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue mt-3 tracking-tight leading-tight">
              Shaping Tech & Corporate Excellence Since 2019
            </h2>
            <div className="w-12 h-1 bg-brand-gold mt-4 mb-6 rounded"></div>

            <p className="text-slate-600 leading-relaxed font-light mb-8">
              Under the visionary directorship of our executive panel, <strong>ceetec</strong> was founded to bridge the gap between academic theory and real-world execution. Our ultimate mission is to empower, elevate, and launch our students into the competitive global market with high-fidelity, industry-proven practical expertise.
            </p>

            {/* Interactive Tab Headers */}
            <div className="flex border-b border-slate-200 mb-6" id="about-tabs">
              {(['mission', 'vision', 'values'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer capitalize ${
                    activeTab === tab
                      ? 'border-brand-orange text-brand-orange'
                      : 'border-transparent text-slate-400 hover:text-brand-blue'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm min-h-[180px] flex flex-col justify-between mb-8">
              <div>
                <h3 className="font-display font-bold text-lg text-brand-blue mb-2">
                  {tabsContent[activeTab].title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  {tabsContent[activeTab].content}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 border-t border-slate-100 pt-4">
                {tabsContent[activeTab].highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Counter Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="about-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm text-center">
                  <div className={`font-display text-2xl md:text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
