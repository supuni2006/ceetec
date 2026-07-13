import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus('success');
      // Auto reset to idle after 10 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: ''
        });
      }, 10000);
    } else {
      setFormStatus('error');
    }
  };

  const contactDetails = [
    {
      title: 'Head Office',
      desc: 'Level 26, Echelon Square, World Trade Center, Colombo 01, Sri Lanka, Western 00100, Sri Lanka.',
      icon: MapPin,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Branch Office',
      desc: 'No.41 Bandaranayake Mawatha, Katubedda, Moratuwa 10400, Colombo, Western 10400, Sri Lanka',
      icon: MapPin,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Direct Phone Desk',
      desc: '+94 70 615 6075 / +94 70 615 6076',
      icon: Phone,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Official Email Support',
      desc: 'info@ceetec.lk',
      icon: Mail,
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 px-3 py-1 rounded">
            Connect
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue mt-3 tracking-tight">
            Get in Touch With Our team
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-panel">
          
          {/* Left Column: Info Card Desk */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-brand-blue text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Information Desk
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-8 max-w-sm">
                Have specific admission questions, corporate contract queries, or timing constraints? Call our front desk counselors or visit our offices!
              </p>

              {/* Direct Card blocks */}
              <div className="space-y-6">
                {contactDetails.map((det, idx) => {
                  const Icon = det.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="bg-white/10 p-3 rounded-xl text-brand-gold shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-200">{det.title}</h4>
                        <p className="text-xs text-slate-300 mt-1">{det.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick map representation */}
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10 flex items-center gap-3">
              <div className="bg-brand-orange text-white p-2.5 rounded-xl">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-white">Opening Hours</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Monday – Sunday: 8.30 AM – 6.00 PM</p>
              </div>
            </div>

          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl flex flex-col justify-center">
            
            {formStatus === 'success' ? (
              <div className="text-center py-12 animate-fade-in" id="contact-success-state">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-brand-blue">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto font-light">
                  Thank you, <strong className="font-semibold text-brand-blue">{formData.name}</strong>. Your message regarding <strong className="font-semibold">{formData.subject}</strong> has been cataloged. A program coordinator from <strong>ceetec</strong> will connect with you via <span className="font-mono">{formData.email}</span> within the day.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-xs font-semibold text-brand-orange hover:underline cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-inquiry-form">
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-blue mb-1">
                    Send An Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 font-light mb-6">
                    Our educational counsellors respond within 12 hours.
                  </p>
                </div>

                {formStatus === 'error' && (
                  <div className="bg-red-50 text-red-700 text-xs p-4 rounded-xl flex items-center gap-3 border border-red-100 animate-pulse">
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                    <span>Please fill in all required fields (Name, Email, and Message) correctly before submitting.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Student's Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 text-xs text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Student's Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 text-xs text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 70 615 6075"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 text-xs text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 text-xs text-slate-700 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="AI & Machine Learning Foundations">AI & Machine Learning Foundations</option>
                      <option value="IELTS / Language Preparatory">IELTS / Language Preparatory</option>
                      <option value="UI/UX & Product Strategy">UI/UX & Product Strategy</option>
                      <option value="Corporate Partnerships">Corporate Partnerships</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current skill level, goals, and timing preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 text-xs text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-xs px-8 py-3.5 rounded-xl transition-all shadow-md shadow-brand-orange/10 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
