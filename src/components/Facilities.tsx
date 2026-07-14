import React, { useState } from 'react';
import { Sparkles, Eye, X, Compass, ChevronRight, Check } from 'lucide-react';
import SafeImage from './SafeImage';

interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'learning' | 'labs' | 'common';
  highlights: string[];
  capacity: string;
}

const FACILITIES: Facility[] = [
  {
    id: 'f-1',
    title: 'Executive Lecture Hall',
    category: 'learning',
    image: 'images/tutor_lecture_hall.jpg',
    description: 'State-of-the-art air-conditioned lecture theater featuring smart interactive screens, dual-projector systems, acoustic panel treatment, and ergonomic hybrid seating designed for interactive coaching and masterclass lectures.',
    highlights: ['Interactive Smart Boards', 'Acoustic Sound Treatment', 'Hybrid Session Webcasting'],
    capacity: '45 Seats'
  },
  {
    id: 'f-2',
    title: 'Cloud & AI Sandbox Lab',
    category: 'labs',
    image: 'images/tutor_sandbox_lab.jpg',
    description: 'A high-performance digital playground equipped with high-spec developer machines, dual-display monitors, and direct high-speed links to AWS and Microsoft Azure sandbox testbeds to build actual Cloud and GenAI projects.',
    highlights: ['High-Performance Core-i7 Rigs', 'Dual-Monitor Developer Setup', 'Dedicated 1Gbps Fiber Link'],
    capacity: '30 Stations'
  },
  {
    id: 'f-3',
    title: 'Student Collaboration Lounge',
    category: 'common',
    image: 'images/tutor_collab_lounge.jpg',
    description: 'A premium, modern open-concept space designed for creative brainstorming, peer-to-peer programming, and group projects. Equipped with modular furniture, high-speed Wi-Fi, and a complimentary coffee bar.',
    highlights: ['Modular Brainstorming Desks', 'Complimentary Espresso Bar', 'Ultra-fast Wireless Mesh'],
    capacity: '25 Spaces'
  },
  {
    id: 'f-4',
    title: 'Academic Counseling & Enrolment Desk',
    category: 'common',
    image: 'images/tutor_counseling_desk.jpg',
    description: 'A quiet, professional and welcoming space where students and corporate trainees can receive one-on-one academic counseling, study pathway mapping, syllabus evaluations, and scholarship assistance.',
    highlights: ['Private Advisor Desks', 'Career Roadmap Consultation', 'Official Courseware Handout Desk'],
    capacity: '1-to-1 Advisory'
  },
  {
    id: 'f-5',
    title: 'Certified Exam Testing Sandbox',
    category: 'labs',
    image: 'images/tutor_exam_testing.jpg',
    description: 'Designed to match strict global proctored standards, this specialized testing sandbox allows students to attempt AWS Certified Practitioner and Microsoft Certified Fundamentals practice simulations in a distraction-free environment.',
    highlights: ['Soundproofed Study Partitions', 'Official Exam Environment Mirroring', 'Active Noise-Cancelling Headphones'],
    capacity: '12 Sandbox Cubicles'
  },
  {
    id: 'f-6',
    title: 'Executive Boardroom',
    category: 'learning',
    image: 'images/tutor_boardroom.jpg',
    description: 'An advanced glassboard boardroom designated for advanced academic project panels, industry advisory board meetups, and mock corporate pitch training for professional scholars.',
    highlights: ['Glass Planning Boards', 'Dual-source Camera Array', '4K UHD Digital Backdrop'],
    capacity: '14 Seats'
  }
];

export default function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'learning' | 'labs' | 'common'>('all');

  const filteredFacilities = activeCategory === 'all' 
    ? FACILITIES 
    : FACILITIES.filter(f => f.category === activeCategory);

  return (
    <section id="facilities" className="py-24 bg-slate-50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 px-3 py-1 rounded inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-brand-orange animate-spin-slow" />
            Academic Facilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue mt-3 tracking-tight">
            Explore CEETEC Premises & Learning Spaces
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded"></div>
          <p className="text-slate-500 mt-4 text-base font-light">
            Our state-of-the-art campus is purpose-engineered to bridge theoretical concepts with deep hands-on labs, collaborative design hackathons, and certified testing sandboxes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10" id="facility-filters">
          {[
            { id: 'all', label: 'All Spaces' },
            { id: 'learning', label: 'Lecture Rooms & Theatres' },
            { id: 'labs', label: 'Cloud Labs & Testing' },
            { id: 'common', label: 'Collaboration & Counseling' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-100 hover:border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="facilities-grid">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(facility)}
              className="bg-white border border-slate-100 hover:border-brand-gold/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl group transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Area with Overlay */}
              <div className="aspect-video relative overflow-hidden bg-slate-100">
                <SafeImage
                  src={facility.image}
                  alt={facility.title}
                  fallbackType="hero"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Visual Eye Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 text-brand-blue flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4 text-brand-orange" />
                    <span>Explore Space</span>
                  </div>
                </div>

                {/* Capacity sticker */}
                <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-sm text-[10px] text-white/90 font-mono py-0.5 px-2 rounded">
                  Max: {facility.capacity}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-display font-bold text-lg text-brand-blue group-hover:text-brand-orange transition-colors duration-300">
                    {facility.title}
                  </h3>
                </div>
                
                <p className="text-xs text-slate-500 font-light mt-2 line-clamp-2 leading-relaxed">
                  {facility.description}
                </p>

                {/* Bullets preview */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {facility.highlights.slice(0, 2).map((h, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded">
                      {h}
                    </span>
                  ))}
                  {facility.highlights.length > 2 && (
                    <span className="bg-slate-50 text-slate-400 text-[9px] font-medium px-1.5 py-0.5 rounded">
                      +{facility.highlights.length - 2} More
                    </span>
                  )}
                </div>
              </div>

              {/* View details footer bar */}
              <div className="bg-slate-50/50 py-3.5 px-6 border-t border-slate-100 text-xs text-slate-500 font-semibold group-hover:bg-brand-blue group-hover:text-white flex items-center justify-between transition-colors">
                <span>View Full Inventory & Specs</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FACILITY LIGHTBOX / DETAILS MODAL */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-brand-blue/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div
            className="bg-white w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-5 right-5 text-white/95 hover:text-white bg-black/40 hover:bg-brand-orange p-1.5 rounded-full transition-colors z-30 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              {/* Photo */}
              <div className="aspect-video relative bg-slate-100 overflow-hidden">
                <SafeImage
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fallbackType="hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
                
                {/* Title inside bottom image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-1 rounded inline-block mb-2">
                    {selectedFacility.category === 'learning' ? 'Lecture Theatres' : selectedFacility.category === 'labs' ? 'Advanced Labs' : 'Common Areas'}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {selectedFacility.title}
                  </h3>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 md:p-8">
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                  {selectedFacility.description}
                </p>

                {/* Capacity Label */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-6 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400 uppercase tracking-wider text-[10px] font-bold">Standard Premises Capacity</span>
                  <span className="font-mono font-bold text-brand-blue">{selectedFacility.capacity}</span>
                </div>

                {/* Highlights List */}
                <h4 className="font-display font-semibold text-xs text-brand-blue mb-3 uppercase tracking-wider">
                  Premium Specifications & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedFacility.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-light">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Footer buttons */}
                <div className="flex justify-end gap-3 border-t border-slate-100 pt-6 mt-6">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
                  >
                    Close Tour
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}