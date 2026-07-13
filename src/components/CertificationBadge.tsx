import React from 'react';

interface CertificationBadgeProps {
  type: string;
  size?: 'sm' | 'md' | 'lg';
  key?: string;
}

export default function CertificationBadge({ type, size = 'md' }: CertificationBadgeProps) {
  const isCloud = type === 'aws-cloud-practitioner';
  const isAI = type === 'aws-ai-practitioner';
  const isSAA = type === 'aws-solutions-architect-associate';
  const isSecurity = type === 'aws-security-specialty';
  const isAzureCloud = type === 'azure-fundamentals';
  const isAzureAI = type === 'azure-ai-fundamentals';
  const isDCA = type === 'docker-dca';
  const isKCNA = type === 'kubernetes-kcna';
  const isCKA = type === 'kubernetes-cka';
  const isNVQ = type === 'nvq-level-4';
  const isMS900 = type === 'ms-900';
  const isMS102 = type === 'ms-102';
  const isJLPT = type === 'jlpt-n5-n4';
  const isLinuxEssentials = type === 'linux-essentials';
  const isLPIC = type === 'lpic';

  if (!isCloud && !isAI && !isSAA && !isSecurity && !isAzureCloud && !isAzureAI && !isDCA && !isKCNA && !isCKA && !isNVQ && !isMS900 && !isMS102 && !isJLPT && !isLinuxEssentials && !isLPIC) return null;

  const dimensions = {
    sm: 'w-16 h-18',
    md: 'w-20 h-24',
    lg: 'w-28 h-32'
  };

  if (isLinuxEssentials) {
    const badgeTitle = "LPI Certified: Linux Essentials";
    return (
      <div 
        className={`relative group shrink-0 ${dimensions[size]} select-none`} 
        title={badgeTitle}
      >
        {/* Soft Teal/Green Glow */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-teal-500/20 to-emerald-400/10 blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 pointer-events-none"></div>
        
        <svg
          viewBox="0 0 100 115"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105 relative z-10"
        >
          {/* Outer Shield Outline */}
          <polygon
            points="50,2 98,30 98,85 50,113 2,85 2,30"
            fill="#007cc2"
          />
          {/* Inner Badge Hexagon */}
          <polygon
            points="50,5 95,31 95,84 50,109 5,84 5,31"
            fill="#2d3748"
            stroke="#ffffff"
            strokeWidth="1.5"
          />

          {/* Linux prompt icon representation `>_` */}
          <g transform="translate(35, 16)">
            <path d="M 5,8 L 12,14 L 5,20" fill="none" stroke="#48bb78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="15" y1="20" x2="25" y2="20" stroke="#48bb78" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* LPI Essentials Text */}
          <text
            x="50"
            y="65"
            fill="#ffffff"
            fontSize="10"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="monospace"
            letterSpacing="0.2"
          >
            LINUX
          </text>
          
          <text
            x="50"
            y="78"
            fill="#007cc2"
            fontSize="7"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="sans-serif"
            letterSpacing="0.5"
          >
            ESSENTIALS
          </text>

          {/* Divider line */}
          <line x1="28" y1="86" x2="72" y2="86" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />

          {/* CERTIFIED */}
          <text
            x="50"
            y="96"
            fill="#a0aec0"
            fontSize="4.5"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="1.2"
            fontFamily="sans-serif"
            className="uppercase tracking-widest"
          >
            CERTIFIED
          </text>
        </svg>
      </div>
    );
  }

  if (isLPIC) {
    const badgeTitle = "LPI Certified: LPIC-1 & LPIC-2 Engineer";
    return (
      <div 
        className={`relative group shrink-0 ${dimensions[size]} select-none`} 
        title={badgeTitle}
      >
        {/* Soft Gold/Orange Glow */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-amber-500/25 to-yellow-400/10 blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 pointer-events-none"></div>
        
        <svg
          viewBox="0 0 100 115"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105 relative z-10"
        >
          {/* Gold Shield Outline */}
          <polygon
            points="50,2 98,30 98,85 50,113 2,85 2,30"
            fill="#d4af37"
          />
          {/* Inner Badge Hexagon */}
          <polygon
            points="50,5 95,31 95,84 50,109 5,84 5,31"
            fill="#1a202c"
            stroke="#ffffff"
            strokeWidth="1.5"
          />

          {/* Linux penguin emblem / core shape representing a central sphere */}
          <circle cx="50" cy="36" r="14" fill="#d4af37" />
          <path d="M 45,30 C 45,28 55,28 55,30 C 55,32 58,35 50,42 C 42,35 45,32 45,30 Z" fill="#ffffff" />
          {/* Beak/feet color */}
          <circle cx="50" cy="33" r="3" fill="#f59e0b" />

          {/* LPIC Text */}
          <text
            x="50"
            y="67"
            fill="#ffffff"
            fontSize="12"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="sans-serif"
            letterSpacing="0.4"
          >
            LPIC
          </text>
          
          <text
            x="50"
            y="80"
            fill="#d4af37"
            fontSize="8"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            LEVEL 1 & 2
          </text>

          {/* Divider line */}
          <line x1="28" y1="88" x2="72" y2="88" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />

          {/* ENGINEER */}
          <text
            x="50"
            y="98"
            fill="#a0aec0"
            fontSize="4.5"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="1.2"
            fontFamily="sans-serif"
            className="uppercase tracking-widest"
          >
            ENGINEER
          </text>
        </svg>
      </div>
    );
  }

  if (isJLPT) {
    const badgeTitle = "JLPT N5 / N4 Japanese Language Certified";
    return (
      <div 
        className={`relative group shrink-0 ${dimensions[size]} select-none`} 
        title={badgeTitle}
      >
        {/* Soft Crimson/Rose Glow */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-red-500/20 to-rose-400/10 blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 pointer-events-none"></div>
        
        <svg
          viewBox="0 0 100 115"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105 relative z-10"
        >
          {/* Gold Shield Outline */}
          <polygon
            points="50,2 98,30 98,85 50,113 2,85 2,30"
            fill="#d4af37"
          />
          {/* Inner Badge Hexagon (White, representing the Japanese flag) */}
          <polygon
            points="50,5 95,31 95,84 50,109 5,84 5,31"
            fill="#ffffff"
            stroke="#bc002d"
            strokeWidth="1.5"
          />

          {/* Crimson Red Sun (Hinomaru) centered in the upper portion */}
          <circle cx="50" cy="42" r="16" fill="#bc002d" />

          {/* Sunray style circle highlight */}
          <circle cx="50" cy="42" r="19" fill="none" stroke="#bc002d" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

          {/* "JLPT" text in elegant font */}
          <text
            x="50"
            y="76"
            fill="#1a202c"
            fontSize="11"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="sans-serif"
            letterSpacing="0.4"
          >
            JLPT
          </text>
          
          {/* "N5 / N4" Text */}
          <text
            x="50"
            y="89"
            fill="#bc002d"
            fontSize="10"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            N5 / N4
          </text>

          {/* Divider line */}
          <line x1="28" y1="95" x2="72" y2="95" stroke="#1a202c" strokeWidth="0.5" opacity="0.2" />

          {/* CERTIFIED */}
          <text
            x="50"
            y="103"
            fill="#718096"
            fontSize="4.5"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="1"
            fontFamily="sans-serif"
            className="uppercase tracking-widest"
          >
            FOUNDATION
          </text>
        </svg>
      </div>
    );
  }

  if (isNVQ) {
    const badgeTitle = "NVQ Level 4 Certified Solar PV Technician";
    return (
      <div 
        className={`relative group shrink-0 ${dimensions[size]} select-none`} 
        title={badgeTitle}
      >
        {/* Soft Gold Glow */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-amber-500/20 to-yellow-400/10 blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 pointer-events-none"></div>
        
        <svg
          viewBox="0 0 100 115"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105 relative z-10"
        >
          {/* Gold Shield Outline */}
          <polygon
            points="50,2 98,30 98,85 50,113 2,85 2,30"
            fill="#d4af37"
          />
          {/* Inner Badge Hexagon */}
          <polygon
            points="50,5 95,31 95,84 50,109 5,84 5,31"
            fill="#1e3a8a"
            stroke="#ffffff"
            strokeWidth="1.5"
          />

          {/* Sun / Solar Panel symbol centered */}
          <g transform="translate(35, 12)">
            <circle cx="15" cy="15" r="5" fill="#f59e0b" />
            <path d="M 15,3 L 15,7 M 15,23 L 15,27 M 3,15 L 7,15 M 23,15 L 27,15 M 6.5,6.5 L 9.5,9.5 M 20.5,20.5 L 23.5,23.5 M 6.5,23.5 L 9.5,20.5 M 20.5,6.5 L 23.5,9.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* NVQ Level 4 Text */}
          <text
            x="50"
            y="56"
            fill="#ffffff"
            fontSize="10"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="sans-serif"
            letterSpacing="0.2"
          >
            NVQ
          </text>
          
          <text
            x="50"
            y="69"
            fill="#f59e0b"
            fontSize="9"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            LEVEL 4
          </text>

          {/* Divider line */}
          <line x1="28" y1="78" x2="72" y2="78" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />

          {/* CERTIFIED */}
          <text
            x="50"
            y="88"
            fill="#a0aec0"
            fontSize="4.5"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="1.2"
            fontFamily="sans-serif"
            className="uppercase tracking-widest"
          >
            CERTIFIED
          </text>
        </svg>
      </div>
    );
  }

  if (isDCA || isKCNA || isCKA) {
    const badgeTitle = isDCA 
      ? "Docker Certified Associate (DCA)" 
      : isKCNA 
        ? "Kubernetes and Cloud Native Associate (KCNA)" 
        : "Certified Kubernetes Administrator (CKA)";

    const glowClass = isDCA
      ? "from-blue-400/20 to-sky-500/10"
      : isKCNA
        ? "from-teal-400/20 to-emerald-500/10"
        : "from-indigo-500/20 to-blue-600/10";

    return (
      <div 
        className={`relative group shrink-0 ${dimensions[size]} select-none`} 
        title={badgeTitle}
      >
        {/* Soft Glow */}
        <div className={`absolute inset-1 rounded-full bg-gradient-to-tr ${glowClass} blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 pointer-events-none`}></div>
        
        <svg
          viewBox="0 0 100 115"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105 relative z-10"
        >
          {isDCA && (
            <>
              {/* DCA Rounded rectangle card */}
              <rect x="2" y="15" width="96" height="76" rx="10" fill="#0073ec" />
              {/* Divider */}
              <line x1="50" y1="23" x2="50" y2="83" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              
              {/* Docker Logo (Left Side) */}
              <g transform="translate(10, 10)">
                {/* Cargo Boxes stack */}
                <g fill="#ffffff" stroke="#0073ec" strokeWidth="0.5">
                  <rect x="15" y="15" width="4.5" height="3.5" rx="0.5" />
                  
                  <rect x="12" y="19" width="4.5" height="3.5" rx="0.5" />
                  <rect x="17" y="19" width="4.5" height="3.5" rx="0.5" />
                  
                  <rect x="9" y="23" width="4.5" height="3.5" rx="0.5" />
                  <rect x="14" y="23" width="4.5" height="3.5" rx="0.5" />
                  <rect x="19" y="23" width="4.5" height="3.5" rx="0.5" />
                </g>
                {/* Whale Body */}
                <path 
                  d="M 5,27.5 C 4.5,25.5 5.5,25 6,25 C 7,25 8,26.5 9,29 C 11.5,27 15,26.5 18,26.7 C 21,26.5 24.5,27 27,28.5 C 28.5,28 30.5,27.3 32,28 C 32.5,29 C 32.2,30.3 31.5,31 30.8,31.7 C 32.8,31.7 34.3,30.7 35.3,29.7 C 35.8,30.7 35.5,32.2 33.8,33.2 C 32.8,33.7 30.8,33.7 29.3,33.4 C 27.3,36.7 22.3,39.2 15.3,39.2 C 9.3,39.2 5.8,36.7 4.8,33.2 C 4.3,32.2 4.3,30.2 4.8,28.2 M 4.8,28.2 L 4.8,27.5 Z" 
                  fill="#ffffff" 
                />
                {/* Whale tail */}
                <path d="M 4.8,28.2 C 3.2,27.2 1.8,24.8 1.8,23 C 2.6,23 4,24.6 4.8,27.2 Z" fill="#ffffff" />
              </g>

              {/* docker wordmark */}
              <text
                x="26"
                y="66"
                fill="#ffffff"
                fontSize="9.5"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                docker
              </text>

              {/* Certified Associate checkmark (Right Side) */}
              <g transform="translate(50, 10)">
                <circle cx="23" cy="22" r="8" fill="none" stroke="#ffffff" strokeWidth="1.6" />
                <path 
                  d="M 19.5,22 L 22,24.5 L 26.5,19" 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="1.6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                
                <text
                  x="23"
                  y="41"
                  fill="#ffffff"
                  fontSize="6.2"
                  fontWeight="800"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  letterSpacing="0.3"
                >
                  CERTIFIED
                </text>
                <text
                  x="23"
                  y="50"
                  fill="#ffffff"
                  fontSize="6.2"
                  fontWeight="800"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  letterSpacing="0.3"
                >
                  ASSOCIATE
                </text>
              </g>
            </>
          )}

          {isKCNA && (
            <>
              {/* KCNA Heptagonal Badge Background (teal-blue #00a396) */}
              <path 
                d="M 50,8 L 87.5,26.2 L 96.5,67.2 L 70.4,99.2 L 29.6,99.2 L 3.5,67.2 L 12.5,26.2 Z" 
                fill="#00a396" 
              />
              
              {/* Inner Double Heptagonal Outline */}
              <path 
                d="M 50,12.5 L 83.5,28.7 L 91.5,65.2 L 68.3,93.8 L 31.7,93.8 L 8.5,65.2 L 16.5,28.7 Z" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="1.4" 
              />

              {/* Header: kubernetes */}
              <text
                x="50"
                y="31"
                fill="#ffffff"
                fontSize="8.5"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                kubernetes
              </text>

              {/* AND bar */}
              <rect x="16" y="39" width="68" height="9" rx="1.5" fill="#ffffff" />
              <text
                x="50"
                y="46.5"
                fill="#00a396"
                fontSize="7"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                AND
              </text>

              {/* CLOUD NATIVE text */}
              <text
                x="50"
                y="63"
                fill="#ffffff"
                fontSize="8"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="sans-serif"
                letterSpacing="0.2"
              >
                CLOUD NATIVE
              </text>

              {/* ASSOCIATE bar */}
              <rect x="18" y="71" width="64" height="9" rx="1.5" fill="#ffffff" />
              <text
                x="50"
                y="78.5"
                fill="#00a396"
                fontSize="7"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                ASSOCIATE
              </text>
            </>
          )}

          {isCKA && (
            <>
              {/* Steering wheel geometry centered at 50, 56 */}
              {/* Inner hub */}
              <circle cx="50" cy="56" r="7.5" fill="#326ce5" />
              
              {/* Inner rim */}
              <circle cx="50" cy="56" r="18" fill="none" stroke="#326ce5" strokeWidth="4" />
              
              {/* Outer rim */}
              <circle cx="50" cy="56" r="32" fill="none" stroke="#326ce5" strokeWidth="4.5" />
              
              {/* 8 spokes/handles */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + 7 * Math.sin(rad);
                const y1 = 56 - 7 * Math.cos(rad);
                const x2 = 50 + 44 * Math.sin(rad);
                const y2 = 56 - 44 * Math.cos(rad);
                const handleX = 50 + 48 * Math.sin(rad);
                const handleY = 56 - 48 * Math.cos(rad);
                return (
                  <g key={idx}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#326ce5" strokeWidth="3.5" />
                    <circle cx={handleX} cy={handleY} r="3.2" fill="#326ce5" />
                  </g>
                );
              })}

              {/* Three central rectangular banners */}
              {/* Box 1: CERTIFIED */}
              <rect x="22" y="31" width="56" height="11" rx="1" fill="#ffffff" stroke="#326ce5" strokeWidth="1" />
              <text
                x="50"
                y="39.5"
                fill="#326ce5"
                fontSize="7.5"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="sans-serif"
                letterSpacing="0.2"
              >
                CERTIFIED
              </text>

              {/* Box 2: kubernetes */}
              <rect x="17" y="44" width="66" height="13" rx="1" fill="#ffffff" stroke="#326ce5" strokeWidth="1" />
              <text
                x="50"
                y="54"
                fill="#326ce5"
                fontSize="10"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                kubernetes
              </text>

              {/* Box 3: ADMINISTRATOR */}
              <rect x="20" y="59" width="60" height="11" rx="1" fill="#ffffff" stroke="#326ce5" strokeWidth="1" />
              <text
                x="50"
                y="67.5"
                fill="#326ce5"
                fontSize="7"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="sans-serif"
                letterSpacing="0.2"
              >
                ADMINISTRATOR
              </text>
            </>
          )}
        </svg>
      </div>
    );
  }

  if (isAzureCloud || isAzureAI || isMS900 || isMS102) {
    const badgeTitle = isAzureCloud 
      ? "Microsoft Certified: Azure Fundamentals (AZ-900)" 
      : isAzureAI
        ? "Microsoft Certified: Azure AI Fundamentals (AI-900)"
        : isMS900
          ? "Microsoft Certified: Microsoft 365 Fundamentals (MS-900)"
          : "Microsoft 365 Certified: Enterprise Administrator Expert (MS-102)";

    return (
      <div 
        className={`relative group shrink-0 ${dimensions[size]} select-none`} 
        title={badgeTitle}
      >
        {/* Soft Glow */}
        <div className={`absolute inset-1 rounded-full bg-gradient-to-tr ${
          isMS102 
            ? 'from-amber-500/25 to-orange-500/15' 
            : isAzureAI 
              ? 'from-indigo-500/25 to-purple-500/15' 
              : 'from-blue-500/20 to-sky-400/10'
        } blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 pointer-events-none`}></div>
        
        <svg
          viewBox="0 0 100 115"
          className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-105 relative z-10"
        >
          <defs>
            {/* Gradients for Microsoft Badges */}
            <linearGradient id="azureCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#008ad7" />
              <stop offset="100%" stopColor="#005da6" />
            </linearGradient>
            <linearGradient id="azureAIGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7a24b8" />
              <stop offset="100%" stopColor="#4a157d" />
            </linearGradient>
            <linearGradient id="ms900Grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00a2ed" />
              <stop offset="100%" stopColor="#004b87" />
            </linearGradient>
            <linearGradient id="ms102Grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb900" />
              <stop offset="50%" stopColor="#f25f22" />
              <stop offset="100%" stopColor="#aa7c11" />
            </linearGradient>
            {/* Banner Drop Shadow */}
            <filter id="bannerShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Outer Shield Border */}
          <path
            d="M 50,2 C 65,2 82,8 88,12 C 92,18 92,28 92,45 C 92,75 75,95 50,113 C 25,95 8,75 8,45 C 8,28 8,18 12,12 C 18,8 35,2 50,2 Z"
            fill={isMS102 ? "#d4af37" : "#00205b"} // Gold for expert, dark navy Microsoft outline for others
          />

          {/* Inner Shield Body */}
          <path
            d="M 50,5 C 64,5 80,11 85,15 C 89,20 89,29 89,45 C 89,73 73,92 50,108 C 27,92 11,73 11,45 C 11,29 11,20 15,15 C 20,11 36,5 50,5 Z"
            fill="#ffffff"
          />

          {/* Bottom Area */}
          <path
            d="M 11.2,60 C 11.2,74 27,92 50,107.8 C 73,92 88.8,74 88.8,60 L 88.8,55 L 11.2,55 Z"
            fill={
              isAzureCloud 
                ? "url(#azureCloudGrad)" 
                : isAzureAI 
                  ? "url(#azureAIGrad)" 
                  : isMS900 
                    ? "url(#ms900Grad)" 
                    : "url(#ms102Grad)"
            }
          />

          {/* Stars at the bottom */}
          {isMS102 ? (
            <>
              {/* Left Star */}
              <polygon
                points="35,80 37,85 42,85 38,88 39,93 35,90 31,93 32,88 28,85 33,85"
                fill="#ffffff"
              />
              {/* Center Star */}
              <polygon
                points="50,74 53,81 60,81 55,86 57,93 50,89 43,93 45,86 40,81 47,81"
                fill="#ffffff"
              />
              {/* Right Star */}
              <polygon
                points="65,80 67,85 72,85 68,88 69,93 65,90 61,93 62,88 58,85 63,85"
                fill="#ffffff"
              />
            </>
          ) : (
            /* Single Star for Fundamentals */
            <polygon
              points="50,74 53,81 60,81 55,86 57,93 50,89 43,93 45,86 40,81 47,81"
              fill="#ffffff"
            />
          )}

          {/* "Microsoft" branding text */}
          <text
            x="50"
            y="22"
            fill={isMS102 ? "#aa7c11" : "#00205b"}
            fontSize="8.5"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="Segoe UI, sans-serif"
          >
            Microsoft
          </text>

          {/* "CERTIFIED" branding text */}
          <text
            x="50"
            y="31"
            fill="#506070"
            fontSize="5.5"
            fontWeight="600"
            textAnchor="middle"
            letterSpacing="1.2"
            fontFamily="Segoe UI, sans-serif"
            className="uppercase tracking-widest"
          >
            CERTIFIED
          </text>

          {/* Banner underlay for shadow */}
          <path
            d="M 2,46 Q 50,40 98,46 L 95,71 Q 50,65 5,71 Z"
            fill="#000000"
            opacity="0.08"
            filter="url(#bannerShadow)"
          />

          {/* The Arched Banner (White/Grey or Gold/Yellow) */}
          <path
            d="M 2,45 Q 50,39 98,45 L 95,70 Q 50,64 5,70 Z"
            fill="#ffffff"
            stroke={isMS102 ? "#d4af37" : "#7f8c8d"}
            strokeWidth="0.5"
          />

          {/* Banner text */}
          <text
            x="50"
            y="59"
            fill="#2c3e50"
            fontSize="6.5"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="0.4"
            fontFamily="Segoe UI, sans-serif"
            className="uppercase tracking-wider"
          >
            {isMS102 ? "ADMINISTRATOR" : "FUNDAMENTALS"}
          </text>

          {/* Small visual accent label inside bottom area to distinguish exams */}
          <text
            x="50"
            y="101"
            fill="#ffffff"
            fontSize="4.5"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="0.6"
            opacity="0.9"
            fontFamily="sans-serif"
          >
            {isAzureCloud ? "AZ-900" : isAzureAI ? "AI-900" : isMS900 ? "MS-900" : "MS-102"}
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div 
      className={`relative group shrink-0 ${dimensions[size]} select-none`} 
      title={isCloud ? "AWS Certified Cloud Practitioner" : isSAA ? "AWS Certified Solutions Architect – Associate" : isSecurity ? "AWS Certified Security – Specialty" : "AWS Certified AI Practitioner"}
    >
      {/* Soft Glow */}
      <div className={`absolute inset-1 rounded-full bg-gradient-to-tr ${
        isCloud ? 'from-sky-400/20 to-blue-500/10' : isSAA ? 'from-orange-400/20 to-amber-500/10' : isSecurity ? 'from-red-500/25 to-rose-600/15' : 'from-purple-400/20 to-indigo-500/10'
      } blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 pointer-events-none`}></div>
      
      <svg
        viewBox="0 0 100 115"
        className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-105 relative z-10"
      >
        {/* Outer Shadow Hexagon */}
        <polygon
          points="50,2 98,30 98,85 50,113 2,85 2,30"
          fill="#e2e8f0"
        />
        {/* Main Badge Hexagon */}
        <polygon
          points="50,4 96,30 96,84 50,110 4,84 4,30"
          fill="#252f3d" // Dark slate background matching official AWS badges
          stroke="#ffffff"
          strokeWidth="1.5"
        />

        {/* AWS Logo Area */}
        <g transform="translate(31, 12) scale(0.38)">
          {/* AWS Text */}
          <path
            d="M17.4,12.7c-0.2-1.3-1.1-2.1-2.6-2.1c-1.8,0-3,1.4-3,3.8c0,2.1,1.1,3.4,2.9,3.4c1.5,0,2.5-0.9,2.7-2.1H17.4z M20.9,23.3h-3.4V22c-0.6,0.9-1.8,1.6-3.3,1.6c-3.1,0-5.5-2.2-5.5-5.6c0-3.3,2.3-5.7,5.5-5.7c1.6,0,2.8,0.7,3.3,1.5V6.7h3.4V23.3z"
            fill="#ffffff"
          />
          <path
            d="M32.8,15.7c-0.3-2.6-2-4.1-4.7-4.1c-2.4,0-4,1.4-4,3.3c0,1.9,1.4,2.8,3.5,3.1l1.7,0.3c2,0.3,2.6,0.9,2.6,1.8c0,1.1-1.1,1.7-2.7,1.7c-1.8,0-2.8-0.8-3.1-2.2H22.7c0.3,3.1,2.5,4.8,6.4,4.8c3.5,0,6.1-1.8,6.1-4.6c0-2.5-1.7-3.4-4-3.7L29.5,16c-1.5-0.2-2.1-0.6-2.1-1.3c0-0.8,0.9-1.3,2.2-1.3c1.4,0,2.3,0.5,2.5,1.7H32.8z"
            fill="#ffffff"
          />
          <path
            d="M51.9,11.9L49.1,23.3H46L43.4,13.7l-2.6,9.6H37.7l-2.9-11.4h3.1l1.4,7.3l2.6-7.3h2.6l2.6,7.3l1.5-7.3H51.9z"
            fill="#ffffff"
          />
          {/* AWS Arrow / Smile */}
          <path
            d="M6,25.5c11.8,6.2,25.8,6.2,37.6,0c1.2-0.6,0.8-2-0.4-1.6c-11.1,4.1-23.7,4.1-34.8,0C7.2,23.5,6.8,24.9,6,25.5"
            fill="#ff9900"
          />
          {/* Arrowhead */}
          <path
            d="M44.5,23.5c-1-0.3-2.6-0.3-3.3,0.3c-0.4,0.3-0.1,0.8,0.3,0.7c1-0.3,2.2-0.1,2.6,0.6c0.2,0.4,0.6,0.2,0.6-0.2C44.8,24.6,44.8,23.8,44.5,23.5"
            fill="#ff9900"
          />
        </g>

        {/* certified text */}
        <text
          x="50"
          y="42"
          fill="#ffffff"
          fontSize="6"
          fontWeight="bold"
          textAnchor="middle"
          letterSpacing="0.8"
          fontFamily="sans-serif"
          className="uppercase tracking-widest opacity-90"
        >
          certified
        </text>

        {/* Divider line 1 */}
        <line x1="28" y1="46" x2="72" y2="46" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />

        {/* Middle Designation */}
        {isCloud ? (
          <>
            <text
              x="50"
              y="59"
              fill="#ffffff"
              fontSize="9"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Cloud
            </text>
            <text
              x="50"
              y="71"
              fill="#ffffff"
              fontSize="7.5"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Practitioner
            </text>
          </>
        ) : isSAA ? (
          <>
            <text
              x="50"
              y="59"
              fill="#ffffff"
              fontSize="9"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Solutions
            </text>
            <text
              x="50"
              y="71"
              fill="#ffffff"
              fontSize="9"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Architect
            </text>
          </>
        ) : isSecurity ? (
          <>
            <text
              x="50"
              y="59"
              fill="#ffffff"
              fontSize="10"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Security
            </text>
            <text
              x="50"
              y="71"
              fill="#ffffff"
              fontSize="7"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
              className="opacity-75 uppercase tracking-wider"
            >
              Specialty
            </text>
          </>
        ) : (
          <>
            <text
              x="50"
              y="59"
              fill="#ffffff"
              fontSize="10"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              AI
            </text>
            <text
              x="50"
              y="71"
              fill="#ffffff"
              fontSize="7.5"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Practitioner
            </text>
          </>
        )}

        {/* Divider line 2 */}
        <line x1="28" y1="78" x2="72" y2="78" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />

        {/* Foundational / Associate / Specialty */}
        <text
          x="50"
          y="88"
          fill="#a0aec0"
          fontSize="4.5"
          fontWeight="bold"
          textAnchor="middle"
          letterSpacing="1.2"
          fontFamily="sans-serif"
          className="uppercase tracking-widest"
        >
          {isSAA ? "ASSOCIATE" : isSecurity ? "SPECIALTY" : "FOUNDATIONAL"}
        </text>
      </svg>
    </div>
  );
}
