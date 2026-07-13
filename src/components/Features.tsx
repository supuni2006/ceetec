import React from 'react';
import { FEATURES } from '../data';
import * as LucideIcons from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white relative z-20 overflow-hidden">
      {/* Decorative top wave/overlap */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-50/50 to-transparent"></div>

      {/* Subtle background gradient accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-brand-orange/[0.02] rounded-full blur-3xl pointer-events-none select-none"></div>
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-[450px] h-[450px] bg-brand-gold/[0.02] rounded-full blur-3xl pointer-events-none select-none"></div>

      {/* Advanced Scattered Floating Constellation System for Background Logos */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* ==================== LEFT COLUMN BADGES ==================== */}

        {/* 1. Azure Fundamentals */}
        <div 
          className="absolute left-[3%] top-[8%] md:left-[5%] md:top-[8%] animate-float-slow pointer-events-auto z-10"
          style={{ animationDelay: "0s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(0,120,212,0.18)] hover:border-[#0078d4]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="Microsoft Azure Fundamentals Certified">
            {/* Soft Ambient Pulse Ring */}
            <div className="absolute inset-0 rounded-2xl border border-[#0078d4]/25 animate-ping opacity-25 pointer-events-none scale-90"></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <path d="M50,5 L90,20 L90,65 L50,95 L10,65 L10,20 Z" fill="#0078d4" stroke="#005a9e" strokeWidth="2" />
              <rect x="20" y="32" width="60" height="20" rx="3" fill="#ffffff" />
              <text x="50" y="23" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Microsoft</text>
              <text x="50" y="44" fill="#0078d4" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FUNDAMENTALS</text>
              <polygon points="50,60 53,68 62,68 55,73 57,81 50,76 43,81 45,73 38,68 47,68" fill="#ffffff" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">Azure Fundamentals</span>
              <span className="text-[8px] font-sans font-semibold text-[#0078d4] uppercase tracking-wider">Certified</span>
            </div>
          </div>
        </div>

        {/* 2. AWS Solutions Architect */}
        <div 
          className="absolute left-[7%] top-[20%] md:left-[10%] md:top-[22%] animate-float-medium pointer-events-auto z-10"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(255,153,0,0.18)] hover:border-[#ff9900]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="AWS Solutions Architect Associate">
            <div className="absolute inset-0 rounded-2xl border border-[#ff9900]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "3s" }}></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="#ffffff" stroke="#232f3e" strokeWidth="3" />
              <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#ff9900" strokeWidth="4" />
              <text x="50" y="35" fill="#232f3e" fontSize="8" fontWeight="bold" textAnchor="middle">AWS</text>
              <text x="50" y="46" fill="#232f3e" fontSize="6" textAnchor="middle">SOLUTIONS</text>
              <text x="50" y="55" fill="#232f3e" fontSize="6" textAnchor="middle">ARCHITECT</text>
              <text x="50" y="72" fill="#ff9900" fontSize="7.5" fontWeight="bold" textAnchor="middle">ASSOCIATE</text>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">AWS Solutions Arch</span>
              <span className="text-[8px] font-sans font-semibold text-[#ff9900] uppercase tracking-wider">Associate</span>
            </div>
          </div>
        </div>

        {/* 3. GCP Cloud Architect */}
        <div 
          className="absolute left-[2%] top-[35%] md:left-[4%] md:top-[36%] animate-float-fast pointer-events-auto z-10"
          style={{ animationDelay: "3s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(66,133,244,0.18)] hover:border-[#4285F4]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="Google Cloud Certified Professional Cloud Architect">
            <div className="absolute inset-0 rounded-2xl border border-[#4285F4]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "2.5s" }}></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <circle cx="50" cy="50" r="45" fill="#5f6368" stroke="#4285F4" strokeWidth="3" />
              <circle cx="50" cy="50" r="38" fill="#ffffff" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="#FBBC05" strokeWidth="4" />
              <g transform="translate(35,35) scale(0.6)">
                <path d="M25,0 L50,14 L50,43 L25,57 L0,43 L0,14 Z" fill="#4285F4" />
                <polygon points="25,6 44,17 44,39 25,50 6,39 6,17" fill="#ffffff" />
              </g>
              <text x="50" y="24" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">GCP</text>
              <text x="50" y="80" fill="#4285F4" fontSize="7" fontWeight="bold" textAnchor="middle">ARCHITECT</text>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">GCP Cloud Architect</span>
              <span className="text-[8px] font-sans font-semibold text-[#34A853] uppercase tracking-wider">Professional</span>
            </div>
          </div>
        </div>

        {/* 4. IBM Cloud Advocate */}
        <div 
          className="absolute left-[6%] top-[48%] md:left-[8%] md:top-[50%] animate-float-slow pointer-events-auto z-10"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(15,98,254,0.18)] hover:border-[#0f62fe]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="IBM Associate Certified Advocate">
            <div className="absolute inset-0 rounded-2xl border border-[#0f62fe]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "4s" }}></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <rect x="10" y="10" width="80" height="80" rx="6" fill="#121212" stroke="#454545" strokeWidth="2" />
              <rect x="15" y="25" width="70" height="25" fill="#0f62fe" />
              <text x="50" y="41" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">IBM</text>
              <text x="50" y="65" fill="#ffffff" fontSize="7" textAnchor="middle">ADVOCATE</text>
              <text x="50" y="78" fill="#0f62fe" fontSize="7.5" fontWeight="bold" textAnchor="middle">CLOUD v1</text>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">IBM Cloud Advocate</span>
              <span className="text-[8px] font-sans font-semibold text-[#0f62fe] uppercase tracking-wider">Certified</span>
            </div>
          </div>
        </div>

        {/* 5. AWS DevOps Pro */}
        <div 
          className="absolute left-[2%] top-[62%] md:left-[4%] md:top-[64%] animate-float-medium pointer-events-auto z-10"
          style={{ animationDelay: "2s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(0,161,201,0.18)] hover:border-[#00a1c9]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="AWS DevOps Engineer Professional">
            <div className="absolute inset-0 rounded-2xl border border-[#00a1c9]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "3.2s" }}></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="#ffffff" stroke="#232f3e" strokeWidth="3" />
              <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#00a1c9" strokeWidth="4" />
              <text x="50" y="32" fill="#232f3e" fontSize="8" fontWeight="bold" textAnchor="middle">AWS</text>
              <text x="50" y="44" fill="#232f3e" fontSize="6" textAnchor="middle">DEVOPS</text>
              <text x="50" y="53" fill="#232f3e" fontSize="6" textAnchor="middle">ENGINEER</text>
              <text x="50" y="74" fill="#00a1c9" fontSize="8" fontWeight="bold" textAnchor="middle">PROFESSIONAL</text>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">AWS DevOps Pro</span>
              <span className="text-[8px] font-sans font-semibold text-[#00a1c9] uppercase tracking-wider">Expertise</span>
            </div>
          </div>
        </div>

        {/* 6. NVQ Sri Lanka */}
        <div 
          className="absolute left-[7%] top-[75%] md:left-[9%] md:top-[76%] animate-float-fast pointer-events-auto z-10"
          style={{ animationDelay: "4.5s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(240,90,0,0.18)] hover:border-[#f05a00]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="National Vocational Qualification - Sri Lanka">
            <div className="absolute inset-0 rounded-2xl border border-[#f05a00]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "2.8s" }}></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <rect x="5" y="5" width="90" height="90" rx="10" fill="#ffffff" stroke="#0e2246" strokeWidth="3" />
              <text x="50" y="52" fill="#0e2246" fontSize="30" fontWeight="bold" textAnchor="middle" letterSpacing="-1">NVQ</text>
              <text x="50" y="78" fill="#f05a00" fontSize="11" fontWeight="bold" textAnchor="middle">SRI LANKA</text>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">NVQ Sri Lanka</span>
              <span className="text-[8px] font-sans font-semibold text-[#0e2246] uppercase tracking-wider">Government Approved</span>
            </div>
          </div>
        </div>


        {/* ==================== RIGHT COLUMN BADGES ==================== */}

        {/* 7. Kubernetes CKA */}
        <div 
          className="absolute right-[3%] top-[10%] md:right-[5%] md:top-[10%] animate-float-medium pointer-events-auto z-10"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(50,108,229,0.18)] hover:border-[#326ce5]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="Certified Kubernetes Administrator CKA">
            <div className="absolute inset-0 rounded-2xl border border-[#326ce5]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "3s" }}></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <circle cx="50" cy="50" r="45" fill="#326ce5" />
              <circle cx="50" cy="50" r="38" fill="#ffffff" />
              <text x="50" y="28" fill="#326ce5" fontSize="7" fontWeight="bold" textAnchor="middle">CERTIFIED</text>
              <text x="50" y="78" fill="#326ce5" fontSize="7" fontWeight="bold" textAnchor="middle">ADMINISTRATOR</text>
              <g transform="translate(35, 34) scale(0.6)">
                <path d="M24 0L42.4 8.1V31.9L24 40L5.6 31.9V8.1L24 0Z" fill="#326ce5" />
                <path d="M24 4.5L38.4 10.9V29.1L24 35.5L9.6 29.1V10.9L24 4.5Z" fill="#ffffff" />
                <circle cx="24" cy="20" r="4.5" fill="#326ce5" />
                <line x1="24" y1="20" x2="24" y2="5" stroke="#326ce5" strokeWidth="2.5" />
                <line x1="24" y1="20" x2="37" y2="13.5" stroke="#326ce5" strokeWidth="2.5" />
                <line x1="24" y1="20" x2="37" y2="26.5" stroke="#326ce5" strokeWidth="2.5" />
                <line x1="24" y1="20" x2="24" y2="35" stroke="#326ce5" strokeWidth="2.5" />
                <line x1="24" y1="20" x2="11" y2="26.5" stroke="#326ce5" strokeWidth="2.5" />
                <line x1="24" y1="20" x2="11" y2="13.5" stroke="#326ce5" strokeWidth="2.5" />
              </g>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">Kubernetes CKA</span>
              <span className="text-[8px] font-sans font-semibold text-[#326ce5] uppercase tracking-wider">Certified</span>
            </div>
          </div>
        </div>

        {/* 8. Kubernetes CKS */}
        <div 
          className="absolute right-[7%] top-[22%] md:right-[9%] md:top-[24%] animate-float-slow pointer-events-auto z-10"
          style={{ animationDelay: "1s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(27,54,93,0.18)] hover:border-[#1b365d]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="Certified Kubernetes Security Specialist CKS">
            <div className="absolute inset-0 rounded-2xl border border-[#1b365d]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "4s" }}></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <polygon points="50,5 85,20 95,50 85,80 50,95 15,80 5,50 15,20" fill="#1b365d" stroke="#326ce5" strokeWidth="2" />
              <polygon points="50,10 80,24 88,50 80,76 50,88 20,76 12,50 20,24" fill="#ffffff" />
              <text x="50" y="28" fill="#1b365d" fontSize="7" fontWeight="bold" textAnchor="middle">KUBERNETES</text>
              <text x="50" y="80" fill="#326ce5" fontSize="7.5" fontWeight="bold" textAnchor="middle">SECURITY SPECIALIST</text>
              <g transform="translate(37,35) scale(0.55)">
                <path d="M24 0L42.4 8.1V31.9L24 40L5.6 31.9V8.1L24 0Z" fill="#1b365d" />
                <path d="M24 4.5L38.4 10.9V29.1L24 35.5L9.6 29.1V10.9L24 4.5Z" fill="#ffffff" />
              </g>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">Kubernetes CKS</span>
              <span className="text-[8px] font-sans font-semibold text-[#1b365d] uppercase tracking-wider">Specialist</span>
            </div>
          </div>
        </div>

        {/* 9. CNCF KCSA */}
        <div 
          className="absolute right-[2%] top-[36%] md:right-[4%] md:top-[38%] animate-float-fast pointer-events-auto z-10"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(50,108,229,0.18)] hover:border-[#326ce5]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="Kubernetes and Cloud Native Security Associate">
            <div className="absolute inset-0 rounded-2xl border border-[#326ce5]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "2.4s" }}></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <path d="M50,5 L90,20 L90,65 L50,95 L10,65 L10,20 Z" fill="#326ce5" />
              <path d="M50,10 L84,23 L84,61 L50,87 L16,61 L16,23 Z" fill="#ffffff" />
              <text x="50" y="28" fill="#326ce5" fontSize="8" fontWeight="bold" textAnchor="middle">KCSA</text>
              <text x="50" y="75" fill="#326ce5" fontSize="7.5" fontWeight="bold" textAnchor="middle">SECURITY ASSOC</text>
              <circle cx="50" cy="48" r="12" fill="#326ce5" />
              <polygon points="50,42 53,48 59,48 54,52 56,58 50,54 44,58 46,52 41,48 47,48" fill="#ffffff" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">CNCF KCSA Sec</span>
              <span className="text-[8px] font-sans font-semibold text-[#326ce5] uppercase tracking-wider">Associate</span>
            </div>
          </div>
        </div>

        {/* 10. Prometheus PCA */}
        <div 
          className="absolute right-[6%] top-[49%] md:right-[8%] md:top-[51%] animate-float-slow pointer-events-auto z-10"
          style={{ animationDelay: "3.5s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(230,82,44,0.18)] hover:border-[#e6522c]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="Prometheus Certified Associate PCA">
            <div className="absolute inset-0 rounded-2xl border border-[#e6522c]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "3.6s" }}></div>
            
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow">
              <path d="M50,5 C75,5 90,20 90,50 C90,80 75,95 50,95 C25,95 10,80 10,50 C10,20 25,5 50,5 Z" fill="#24292e" stroke="#e6522c" strokeWidth="3" />
              <path d="M50,10 C70,10 84,22 84,50 C84,78 70,90 50,90 C30,90 16,78 16,50 C16,22 30,10 50,10 Z" fill="#ffffff" />
              <text x="50" y="28" fill="#24292e" fontSize="8" fontWeight="bold" textAnchor="middle">PROMETHEUS</text>
              <text x="50" y="80" fill="#e6522c" fontSize="8" fontWeight="bold" textAnchor="middle">CERTIFIED</text>
              <path d="M50,38 C42,46 42,54 50,62 C58,54 58,46 50,38 Z" fill="#e6522c" />
              <circle cx="50" cy="50" r="3" fill="#ffffff" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">Prometheus PCA</span>
              <span className="text-[8px] font-sans font-semibold text-[#e6522c] uppercase tracking-wider">Monitoring</span>
            </div>
          </div>
        </div>

        {/* 11. Terraform */}
        <div 
          className="absolute right-[2%] top-[63%] md:right-[4%] md:top-[65%] animate-float-medium pointer-events-auto z-10"
          style={{ animationDelay: "1.8s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(132,79,186,0.18)] hover:border-[#844FBA]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="HashiCorp Terraform">
            <div className="absolute inset-0 rounded-2xl border border-[#844FBA]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "3.2s" }}></div>
            
            <svg viewBox="0 0 24 24" fill="#844fba" className="w-5 h-5 drop-shadow">
              <path d="M1.44 0v7.68h7.68V0H1.44zm13.44 0v7.68h7.68V0H14.88zM8.16 8.16v7.68H.48V8.16h7.68zm7.68 0v7.68H8.16V8.16h7.68zm7.68 0v7.68h-7.68V8.16h7.68zm-7.68 8.16v7.68H8.16v-7.68h7.68z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">Terraform</span>
              <span className="text-[8px] font-sans font-semibold text-[#844FBA] uppercase tracking-wider">IaC Standard</span>
            </div>
          </div>
        </div>

        {/* 12. Docker */}
        <div 
          className="absolute right-[7%] top-[76%] md:right-[9%] md:top-[78%] animate-float-fast pointer-events-auto z-10"
          style={{ animationDelay: "5s" }}
        >
          <div className="relative group flex items-center gap-3 backdrop-blur-md bg-white/70 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-2.5 hover:scale-110 hover:shadow-[0_15px_40px_rgba(36,150,237,0.18)] hover:border-[#2496ED]/40 hover:bg-white/95 transition-all duration-500 cursor-help" title="Docker Containers Standard">
            <div className="absolute inset-0 rounded-2xl border border-[#2496ED]/25 animate-ping opacity-25 pointer-events-none scale-90" style={{ animationDuration: "2.5s" }}></div>
            
            <svg viewBox="0 0 24 24" fill="#2496ed" className="w-5 h-5 drop-shadow">
              <path d="M13.983 11.078h2.119v-2.001h-2.119zm-2.817 0h2.119v-2.001h-2.119zm-2.758 0h2.119v-2.001H8.408zm-2.758 0h2.119v-2.001H5.65zm2.758-2.663h2.119V6.414H8.408zm2.758 0h2.119V6.414h-2.119zm-2.758-2.663h2.119V3.75H8.408zm5.575 5.326h2.119v-2.001h-2.119zm1.8 5.626c-.352 1.6-1.596 2.97-3.268 3.63-1.53.6-3.27.46-4.66-.41-.49-.3-.91-.68-1.25-1.12l-.27-.37c-.71.12-1.42.06-2.11-.16l-.53-.17-.18-.54c-.16-.48-.2-.99-.11-1.48l.06-.3.24-.18c1.02-.79 2.27-1.15 3.54-.99.07-.37.21-.72.41-1.04l.19-.3.33.12c1.74.65 3.7.35 5.17-.79l.34-.26.17.34c.48.97 1.3 1.69 2.3 2.01l.48.15-.17.48c-.14.4-.19.82-.11 1.24z"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700">Docker</span>
              <span className="text-[8px] font-sans font-semibold text-[#2496ED] uppercase tracking-wider">Containerization</span>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 px-3 py-1 rounded">
            Our Edge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue mt-3 tracking-tight">
            Why Study At CEETEC University?
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded"></div>
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-light leading-relaxed">
            At CEETEC University, we recognize that the future global economy is anchored in technology, sustainability, and seamless communication. To meet these evolving demands, our curriculum integrates advanced digital infrastructure—including cutting-edge AI, Cloud Computing (AWS, Azure, GCP), and DevSecOps—with specialized training in Renewable Energy and Solar Power. Furthermore, our professional Language Academy provides the linguistic mastery necessary to excel in today’s multinational workforce.
          </p>
        </div>

        {/* Dynamic technology and renewable energy integrated logos showcase ribbon */}
        <div className="mb-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-4xl mx-auto px-6 py-4 bg-slate-50/70 rounded-2xl border border-slate-100/95 shadow-sm text-slate-400 select-none">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase mr-1 text-slate-500">Core Labs & Standards:</span>
          
          {/* AWS Logo item */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-brand-orange transition-all duration-300" title="Amazon Web Services">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M15.4 12.85c-.88-.41-2.14-.68-3.32-.68-2.32 0-3.75 1.14-3.75 3.03 0 1.78 1.17 2.76 2.97 2.76 1.44 0 2.58-.69 3.12-1.68V17.9h1.97v-6.94c0-2.31-1.34-3.43-3.95-3.43-1.89 0-3.51.52-4.52 1.2l.62 1.37c.81-.51 1.99-.9 3.3-.9 1.67 0 2.56.63 2.56 1.95v1.8zm-1.98 1.54v1.54c-.38.72-1.16 1.14-2.02 1.14-1.07 0-1.73-.55-1.73-1.44 0-.91.73-1.4 2.13-1.4h1.62zM21.57 9.87h-2.18l-1.39 4.67-1.35-4.67h-2.12l2.31 6.91h2.42l2.31-6.91zM5.33 13.91c-.49-.24-.9-.55-1.16-.92h-.05l-.12.75h-1.74V7.59h2.01v2.17c.28-.41.67-.74(1.11-.97.45-.23.95-.35 1.5-.35 1.1 0 1.95.42 2.52 1.26.57.84.85 2.01.85 3.52 0 1.5-.28 2.67-.84 3.52-.56.85-1.41 1.27-2.53 1.27-.55 0-1.05-.12-1.5-.35zm.74-2.85c-.32-.47-.76-.7-1.31-.7-.47 0-.86.2-1.17.61v4c.3.4.69.61 1.17.61.54 0 .98-.24 1.31-.71.33-.47.5-1.15.5-2.04 0-.91-.17-1.59-.5-2.06zM20.07 19.34c-2.32 1.41-5.59 2.16-8.91 2.16-5.01 0-9.28-1.69-11.13-4.22.18-.12.43-.11.62.03 1.76 1.27 4.62 2.04 7.69 2.04 3.59 0 7.37-1.07 9.73-2.61.26-.17.61-.01.62.29.02.13.01.21-.02.31zM21.22 17.62c-.22-.26-.85-.12-1.62.15l-.83.29c-.27.09-.32-.15-.11-.32l1.52-1.2c.56-.44.75-.32.42.27l-.46.8c-.16.28-.41.22-.32-.14z" />
            </svg>
            <span className="text-xs font-semibold tracking-wide text-slate-500">AWS</span>
          </div>

          {/* Microsoft Azure */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-brand-blue transition-all duration-300" title="Microsoft Azure">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M1.4 14.2l9.8-12.1h4.4L5.4 19.5 1.4 14.2zm10.8-12.2l7.8 11.2 2.6-4.6L16.2 2h-4zm10.4 13.8H6.6l5.6-7.8 10 7.8z"/>
            </svg>
            <span className="text-xs font-semibold tracking-wide text-slate-500">Azure</span>
          </div>

          {/* GCP */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-sky-500 transition-all duration-300" title="Google Cloud Platform">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
              <path d="M12.02 2.05c-.32 0-.64.08-.92.24L3.62 6.57c-.56.32-.9.92-.9 1.57v8.52c0 .65.34 1.25.9 1.57l7.48 4.28c.56.32 1.24.32 1.8 0l7.48-4.28c.56-.32.9-.92.9-1.57V8.14c0-.65-.34-1.25-.9-1.57l-7.48-4.28c-.28-.16-.6-.24-.9-.24zM12 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5L12 4.5z"/>
            </svg>
            <span className="text-xs font-semibold tracking-wide text-slate-500">Google Cloud</span>
          </div>

          {/* Docker */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-sky-600 transition-all duration-300" title="Docker Containers">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
              <path d="M13.983 11.078h2.119v-2.001h-2.119zm-2.817 0h2.119v-2.001h-2.119zm-2.758 0h2.119v-2.001H8.408zm-2.758 0h2.119v-2.001H5.65zm2.758-2.663h2.119V6.414H8.408zm2.758 0h2.119V6.414h-2.119zm-2.758-2.663h2.119V3.75H8.408zm5.575 5.326h2.119v-2.001h-2.119zm1.8 5.626c-.352 1.6-1.596 2.97-3.268 3.63-1.53.6-3.27.46-4.66-.41-.49-.3-.91-.68-1.25-1.12l-.27-.37c-.71.12-1.42.06-2.11-.16l-.53-.17-.18-.54c-.16-.48-.2-.99-.11-1.48l.06-.3.24-.18c1.02-.79 2.27-1.15 3.54-.99.07-.37.21-.72.41-1.04l.19-.3.33.12c1.74.65 3.7.35 5.17-.79l.34-.26.17.34c.48.97 1.3 1.69 2.3 2.01l.48.15-.17.48c-.14.4-.19.82-.11 1.24z"/>
            </svg>
            <span className="text-xs font-semibold tracking-wide text-slate-500">Docker</span>
          </div>

          {/* Kubernetes */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-blue-600 transition-all duration-300" title="Kubernetes">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
              <path d="M12 .132a1.07 1.07 0 00-.518.156L1.87 5.751a1.045 1.045 0 00-.532.887l-.004 10.74a1.045 1.045 0 00.528.887l9.613 5.463c.16.095.342.14.525.14.183 0 .365-.045.525-.14l9.613-5.463a1.045 1.045 0 00.528-.887l-.004-10.74a1.045 1.045 0 00-.532-.887L12.518.288A1.07 1.07 0 0012 .132zm0 2.27l7.742 4.402-2.19 2.502-5.552-3.156V2.402zm-1.042.156v3.754L5.406 9.468l-2.19-2.502L10.958 2.558zm8.688 6.55l1.042 3.754-5.406 3.158-1.042-3.754 5.406-3.158zm-15.292 0l5.406 3.158-1.042 3.754-5.406-3.158 1.042-3.754zm7.646 2.358l4.334 2.464-4.334 4.954-4.334-4.954 4.334-2.464zm6.55 3.754l2.19 2.502-7.742 4.402v-3.754l5.552-3.15zM4.354 15.22l5.552 3.15v3.754l-7.742-4.402 2.19-2.502z"/>
            </svg>
            <span className="text-xs font-semibold tracking-wide text-slate-500">Kubernetes</span>
          </div>

          {/* Solar Power Icon */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-brand-orange transition-all duration-300" title="Solar Energy Systems">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93V16h3.5l1.05 3.5c-1.35.28-2.74.43-4.55.43zm-2 0c-1.81 0-3.2-.15-4.55-.43L7.5 16H11v3.93zM4.18 14l.9-3H9v3H4.18zm6.82 0H7.07l.6-2H11v2zm2 0V12h3.33l.6 2H13zm2 0V11h3.92l.9 3H15zm-4-4H5.68l.6-2H11v2zm2 0V8h4.72l.6 2H13z"/>
            </svg>
            <span className="text-xs font-semibold tracking-wide text-slate-500">Solar Power</span>
          </div>

          {/* Renewable Wind Power Icon */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-emerald-500 transition-all duration-300" title="Renewable Energy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M12 7c2-1 3-3 2-5s-3-2-5 0 0 4 3 5zm0 0c1 2 3 3 5 2s2-3 0-5-4 0-5 3zm0 0c-2 1-3 3-2 5s3 2 5 0 0-4-3-5zm0 0c-1-2-3-3-5-2s-2 3 0 5 4 0 5-3z" />
            </svg>
            <span className="text-xs font-semibold tracking-wide text-slate-500">Renewable Energy</span>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            // Dynamically resolve the lucide icon component
            const IconComponent = (LucideIcons as any)[feature.iconName] || LucideIcons.HelpCircle;

            return (
              <div
                key={feature.id}
                className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand-gold/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Container with glowing background */}
                  <div className="w-12 h-12 bg-brand-blue group-hover:bg-brand-orange text-white flex items-center justify-center rounded-xl transition-colors duration-300 shadow-md shadow-brand-blue/10 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-brand-blue mb-3 group-hover:text-brand-blue-light transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                {/* Micro accent lines */}
                <div className="w-0 group-hover:w-full h-0.5 bg-brand-orange mt-6 transition-all duration-300 rounded"></div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner overlap */}
        <div className="mt-16 bg-brand-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-brand-blue/20">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl -ml-16 -mb-16"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <span className="text-xs font-mono text-brand-gold uppercase tracking-wider font-bold">Admissions are Open</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mt-1 text-white">
                Transform Your Profile. Elevate Your Income.
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl font-light">
                Secure your seat in our upcoming cohort. Gain access to private workspace templates, individual laboratory environments, and alumni support nets.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="#contact"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-center text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-brand-orange/20 hover:scale-[1.02] cursor-pointer"
              >
                Apply Online
              </a>
              <a
                href="#courses"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white text-center font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 cursor-pointer"
              >
                Browse Curriculums
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
