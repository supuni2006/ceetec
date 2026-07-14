import React, { useState } from 'react';

export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Remove leading slashes if any
  const cleanPath = path.replace(/^\/+/, '');
  
  // Use import.meta.env.BASE_URL with safe typecasting to resolve
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  
  if (baseUrl.endsWith('/')) {
    return `${baseUrl}${cleanPath}`;
  } else {
    return `${baseUrl}/${cleanPath}`;
  }
}

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackType: 'logo' | 'hero' | 'course-tech' | 'course-business' | 'course-languages' | 'avatar';
  className?: string;
}

export default function SafeImage({ src, alt, fallbackType, className = '', ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  // If the browser triggers an error (e.g. 0-byte file, missing local asset, or offline mode),
  // we render beautiful custom inline vector graphics tailored directly to CEETEC's brand.
  if (hasError || !src) {
    if (fallbackType === 'logo') {
      return (
        <div className={`rounded-full bg-[#0e2246] flex items-center justify-center border border-slate-100 shadow-sm shrink-0 ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 text-[#ff9d00] fill-current">
            <path d="M50 15 L85 30 L50 45 L15 30 Z" />
            <path d="M25 35 L25 65 C25 75, 75 75, 75 65 L75 35" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            <path d="M50 45 L50 85" stroke="currentColor" strokeWidth="6" />
          </svg>
        </div>
      );
    }

    if (fallbackType === 'avatar') {
      const getInitials = (altText: string) => {
        if (!altText) return 'ST';
        const cleanText = altText.replace(/^(Mr\.|Ms\.|Dr\.|Sir|Prof\.)\s+/i, '').trim();
        const parts = cleanText.split(/\s+/);
        if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      };
      const initials = getInitials(alt);

      return (
        <svg viewBox="0 0 100 100" className={`shrink-0 rounded-full border border-slate-100/10 ${className}`} {...(props as unknown as React.SVGProps<SVGSVGElement>)}>
          <defs>
            <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0e2246" />
              <stop offset="100%" stopColor="#1a3670" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#avatarGrad)" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255, 157, 0, 0.15)" strokeWidth="1.5" />
          <text 
            x="50" 
            y="57" 
            fill="#ff9d00" 
            fontSize="32" 
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" 
            fontWeight="bold" 
            textAnchor="middle"
            letterSpacing="0.5"
          >
            {initials}
          </text>
        </svg>
      );
    }

    if (fallbackType === 'course-tech') {
      return (
        <svg viewBox="0 0 400 300" className={`${className}`} {...(props as unknown as React.SVGProps<SVGSVGElement>)}>
          <defs>
            <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0e2246" />
              <stop offset="100%" stopColor="#162e5b" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrad)" />
          
          {/* Circuit grids */}
          <g opacity="0.12" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M20 50 L100 50 L130 80 L250 80" />
            <path d="M380 250 L300 250 L270 220 L150 220" />
            <circle cx="250" cy="80" r="4" fill="#ffffff" />
            <circle cx="150" cy="220" r="4" fill="#ffffff" />
          </g>

          {/* Isometric cloud/server cube */}
          <g transform="translate(200, 140)">
            <g transform="translate(0, -10)">
              <path d="M0 -40 L45 -18 L0 5 L-45 -18 Z" fill="#ff9d00" opacity="0.9" />
              <path d="M-45 -18 L0 5 L0 45 L-45 22 Z" fill="#d97e00" />
              <path d="M45 -18 L0 5 L0 45 L45 22 Z" fill="#f05a00" />
              
              {/* Modern tech layout lines inside cube */}
              <path d="M-20 -5 L-10 -10 M-20 -5 L-20 5 M-20 5 L-10 10" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M20 -5 L10 -10 M20 -5 L20 5 M20 5 L10 10" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
            <path d="M-80 50 C-80 25, -40 20, -30 30 C-15 10, 25 10, 40 30 C50 20, 80 25, 80 50 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" strokeLinecap="round" />
          </g>

          <text x="24" y="265" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">CEETEC ADVANCED LABS</text>
        </svg>
      );
    }

    if (fallbackType === 'course-business') {
      return (
        <svg viewBox="0 0 400 300" className={`${className}`} {...(props as unknown as React.SVGProps<SVGSVGElement>)}>
          <defs>
            <linearGradient id="bizGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0e2246" />
              <stop offset="100%" stopColor="#1a3670" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bizGrad)" />

          {/* Grid lines */}
          <g opacity="0.1" stroke="#ffffff" strokeWidth="1">
            <line x1="40" y1="50" x2="360" y2="50" />
            <line x1="40" y1="100" x2="360" y2="100" />
            <line x1="40" y1="150" x2="360" y2="150" />
            <line x1="40" y1="200" x2="360" y2="200" />
            <line x1="40" y1="250" x2="360" y2="250" />
          </g>

          {/* Isometric bento chart columns */}
          <g transform="translate(110, 150)">
            <g transform="translate(0, 15)">
              <path d="M0 0 L25 -12 L50 0 L50 60 L25 72 L0 60 Z" fill="#ff9d00" opacity="0.85" />
              <path d="M25 -12 L50 0 L25 12 L0 0 Z" fill="#ffb733" />
            </g>
            
            <g transform="translate(60, -15)">
              <path d="M0 0 L25 -12 L50 0 L50 90 L25 102 L0 90 Z" fill="#f05a00" />
              <path d="M25 -12 L50 0 L25 12 L0 0 Z" fill="#ff7c26" />
            </g>

            <g transform="translate(120, -45)">
              <path d="M0 0 L25 -12 L50 0 L50 120 L25 132 L0 120 Z" fill="#ff9d00" />
              <path d="M25 -12 L50 0 L25 12 L0 0 Z" fill="#ffb733" />
            </g>
          </g>

          {/* Dynamic rising line */}
          <path d="M90 200 L170 140 L230 110 L290 60" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="290" cy="60" r="6" fill="#ff9d00" stroke="#ffffff" strokeWidth="2" />

          <text x="24" y="265" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">CEETEC EXECUTIVE STUDIES</text>
        </svg>
      );
    }

    if (fallbackType === 'course-languages') {
      return (
        <svg viewBox="0 0 400 300" className={`${className}`} {...(props as unknown as React.SVGProps<SVGSVGElement>)}>
          <defs>
            <linearGradient id="langGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0e2246" />
              <stop offset="100%" stopColor="#162e5b" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#langGrad)" />

          {/* Globe lines */}
          <circle cx="200" cy="135" r="75" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
          <circle cx="200" cy="135" r="55" fill="none" stroke="rgba(255,157,0,0.12)" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M125 135 Q200 115 275 135 M125 135 Q200 155 275 135" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

          {/* Speech bubbles */}
          <g transform="translate(145, 95)">
            <path d="M0 8 C0 3.6, 3.6 0, 8 0 L72 0 C76.4 0, 80 3.6, 80 8 L80 38 C80 42.4, 76.4 46, 72 46 L25 46 L5 58 L5 46 C2.2 46, 0 43.8, 0 41 Z" fill="#ff9d00" opacity="0.95" />
            <text x="40" y="28" fill="#0e2246" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">IELTS</text>
          </g>

          <g transform="translate(195, 130)">
            <path d="M0 8 C0 3.6, 3.6 0, 8 0 L72 0 C76.4 0, 80 3.6, 80 8 L80 38 C80 42.4, 76.4 46, 72 46 L60 46 L45 58 L45 46 C42.2 46, 40 43.8, 40 41 Z" fill="#f05a00" transform="scale(-1, 1) translate(-80, 0)" />
            <text x="40" y="28" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ENGLISH</text>
          </g>

          <text x="24" y="265" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="2">CEETEC GLOBAL COMMUNICATION</text>
        </svg>
      );
    }

    // Default or 'hero' fallback
    return (
      <svg viewBox="0 0 1200 600" className={`${className}`} {...(props as unknown as React.SVGProps<SVGSVGElement>)} style={{ minHeight: '100%', width: '100%' }}>
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e2246" />
            <stop offset="50%" stopColor="#162e5b" />
            <stop offset="100%" stopColor="#1a3670" />
          </linearGradient>
          <pattern id="grid" width="45" height="45" patternUnits="userSpaceOnUse">
            <path d="M 45 0 L 0 0 0 45" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrad)" />
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Floating tech background nodes */}
        <g opacity="0.18">
          <circle cx="200" cy="150" r="8" fill="#ff9d00" />
          <circle cx="450" cy="220" r="14" fill="#f05a00" />
          <circle cx="300" cy="480" r="6" fill="#ffffff" />
          <circle cx="900" cy="160" r="15" fill="#ff9d00" />
          <circle cx="1020" cy="380" r="10" fill="#f05a00" />
          <circle cx="680" cy="420" r="18" fill="#162e5b" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="3" />
          <path d="M200 150 L450 220 L300 480 M900 160 L1020 380 L680 420 L450 220" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
        </g>

        {/* Central tech academic emblem decoration */}
        <g transform="translate(600, 300)" opacity="0.9">
          <circle r="190" fill="none" stroke="#ff9d00" strokeWidth="2" strokeDasharray="15 30" opacity="0.25" />
          <circle r="140" fill="none" stroke="#f05a00" strokeWidth="3" strokeDasharray="40 12" opacity="0.4" />
          <circle r="100" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
          
          <g transform="scale(1.5) translate(-50, -55)">
            <path d="M50 20 L90 35 L50 50 L10 35 Z" fill="#ff9d00" />
            <path d="M25 40 L25 65 C25 75, 75 75, 75 65 L75 40" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
            <path d="M50 50 L50 80" stroke="#f05a00" strokeWidth="4.5" />
            <circle cx="50" cy="80" r="5" fill="#ff9d00" />
          </g>
        </g>

        <circle cx="150" cy="150" r="320" fill="rgba(255, 157, 0, 0.04)" filter="blur(70px)" />
        <circle cx="1050" cy="450" r="280" fill="rgba(240, 90, 0, 0.04)" filter="blur(60px)" />
      </svg>
    );
  }

  const resolvedSrc = getAssetPath(src);

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}