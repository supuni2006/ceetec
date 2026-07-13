import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SafeImage from './SafeImage';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-brand-blue text-white relative z-20 overflow-hidden">
      {/* Background vector design blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -ml-24 -mt-24"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -mr-24 -mb-24"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-gold uppercase bg-white/10 px-3 py-1 rounded">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 tracking-tight">
            Scholars and Parents Testimonials
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 rounded"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl" id="testimonial-carousel">
          
          {/* Quote Icon */}
          <div className="absolute -top-6 left-12 bg-brand-orange text-white p-4 rounded-2xl shadow-lg">
            <Quote className="w-8 h-8" />
          </div>

          {/* Feedback Body */}
          <div className="min-h-[160px] flex flex-col justify-between" id="testimonial-body">
            
            {/* Stars */}
            <div className="flex gap-1 text-brand-gold mb-6 mt-2">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 fill-brand-gold text-brand-gold ${
                    idx >= Math.floor(active.rating) ? 'opacity-30' : ''
                  }`}
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-base sm:text-lg md:text-xl font-light italic leading-relaxed text-slate-100">
              "{active.feedback}"
            </p>

            {/* Student metadata */}
            <div className="flex items-center gap-4 mt-8 border-t border-white/10 pt-6">
              <SafeImage
                src={active.avatar}
                alt={active.name}
                fallbackType="avatar"
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold"
              />
              <div>
                <h4 className="font-display font-bold text-sm text-white">{active.name}</h4>
                <p className="text-xs text-slate-300 mt-0.5">{active.role}</p>
                <p className="text-[10px] text-brand-gold font-mono uppercase mt-1">Course: {active.courseTaken}</p>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 md:right-12 flex gap-2">
            <button
              onClick={handlePrev}
              className="bg-white/10 hover:bg-brand-orange text-white hover:text-white p-2.5 rounded-lg border border-white/15 transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/10 hover:bg-brand-orange text-white hover:text-white p-2.5 rounded-lg border border-white/15 transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center gap-2 mt-8" id="testimonial-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'bg-brand-orange w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
