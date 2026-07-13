import React, { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedFAQId, setExpandedFAQId] = useState<string | null>('faq1'); // First expanded by default

  const categories = ['All', 'General', 'Admission', 'Career'];

  const filteredFAQS = FAQS.filter(
    (faq) => selectedCategory === 'All' || faq.category === selectedCategory
  );

  const toggleFAQ = (id: string) => {
    setExpandedFAQId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white relative z-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 px-3 py-1 rounded">
            Support Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 rounded"></div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2" id="faq-category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/10'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-brand-blue/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4" id="faq-accordion-list">
          {filteredFAQS.map((faq) => {
            const isExpanded = expandedFAQId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isExpanded
                    ? 'border-brand-orange bg-slate-50/50 shadow-sm'
                    : 'border-slate-100 hover:border-slate-300 bg-white'
                }`}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex gap-4 items-start">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 ${
                      isExpanded ? 'text-brand-orange' : 'text-slate-400'
                    }`} />
                    <span className="font-display font-bold text-slate-800 text-sm md:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-brand-orange shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                    )}
                  </div>
                </button>

                {/* Answer Collapsible Block */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro reassurance statement */}
        <div className="mt-12 text-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <p className="text-xs text-slate-500 font-light">
            Still have queries or need customized roadmap details? Let's connect with us. Our counsellors are available on Skype, Zoom, or WhatsApp!
          </p>
          <a
            href="#contact"
            className="text-xs font-semibold text-brand-orange hover:underline mt-2 inline-block cursor-pointer"
          >
            Go to Contact Form →
          </a>
        </div>

      </div>
    </section>
  );
}
