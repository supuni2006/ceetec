import React, { useState } from 'react';
import { X, User, Phone, Mail, FileText, CheckCircle, Send } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSubject?: string;
}

export default function EnquiryModal({ isOpen, onClose, prefilledSubject }: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(prefilledSubject || 'General Guidance');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && phone) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setName('');
        setEmail('');
        setPhone('');
        setNotes('');
        onClose();
      }, 4000);
    }
  };

  return (
    <div className="fixed inset-0 bg-brand-blue/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" id="enquiry-modal">
      <div
        className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner header accent */}
        <div className="bg-brand-blue p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          <h3 className="font-display font-bold text-xl text-white">
            Quick Enquiry Desk
          </h3>
          <p className="text-[11px] text-slate-300 mt-1 max-w-xs mx-auto font-light">
            Need urgent guidance? Share your contacts and a certified education counselor will schedule a direct call back.
          </p>
        </div>

        {/* Content Box */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-blue">Callback Scheduled!</h4>
              <p className="text-xs text-slate-500 mt-2 font-light leading-relaxed">
                Thank you, <strong className="font-semibold text-brand-blue">{name}</strong>. We have registered your request for <strong className="font-semibold text-brand-blue">{subject}</strong>. Our desks are preparing call profiles for <span className="font-mono text-brand-orange">{phone}</span>.
              </p>
              <div className="mt-6 text-[10px] text-slate-400 font-mono">
                Booking ID: CEETEC-CALL-{Math.floor(1000 + Math.random() * 9000)}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Student's Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 text-xs text-slate-800 pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="Student's Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 text-xs text-slate-800 pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+94 70 615 6075"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 text-xs text-slate-800 pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white"
                  />
                </div>
              </div>

              {/* Course Category Dropdown */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide mb-1">
                  Preferred Subject
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-50 text-xs text-slate-700 pl-10 pr-8 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="General Guidance">General Guidance</option>
                    <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                    <option value="AI & Machine Learning Foundations">AI & Machine Learning Foundations</option>
                    <option value="IELTS / Language Preparatory">IELTS / Language Preparatory</option>
                    <option value="UI/UX & Product Strategy">UI/UX & Product Strategy</option>
                    <option value="Scholarships / Installments">Scholarships / Installments</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[10px] pointer-events-none">▼</span>
                </div>
              </div>

              {/* Extra notes */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide mb-1">
                  Extra Notes / Timing Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Call me during lunch hours, or prefer weekends..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 text-xs text-slate-800 p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange focus:bg-white resize-none"
                ></textarea>
              </div>

              {/* Submit btn */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-xs py-3 rounded-xl transition-all shadow-md shadow-brand-orange/10 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Callback Appointment</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
