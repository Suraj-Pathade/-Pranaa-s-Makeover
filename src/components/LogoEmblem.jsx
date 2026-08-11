import React from 'react';

export const LogoEmblem = ({ variant = 'full', className = '', size = 'md' }) => {
  // size presets
  const sizes = {
    sm: { icon: 38, text: '1rem', sub: '0.5rem' },
    md: { icon: 48, text: '1.25rem', sub: '0.6rem' },
    lg: { icon: 72, text: '1.75rem', sub: '0.75rem' }
  };
  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
      {/* Rose Gold Circular Emblem SVG Motif */}
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-label="Pranaa's Makeover Logo Emblem"
      >
        <defs>
          <linearGradient id="roseGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3D9BE" />
            <stop offset="40%" stopColor="#C89B6E" />
            <stop offset="80%" stopColor="#A87747" />
            <stop offset="100%" stopColor="#875A22" />
          </linearGradient>
          <linearGradient id="roseGoldShimmer" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C89B6E" />
            <stop offset="50%" stopColor="#FBF6F0" />
            <stop offset="100%" stopColor="#9C6B2F" />
          </linearGradient>
        </defs>

        {/* Outer Circular Ring with Metallic Accent */}
        <circle cx="50" cy="50" r="46" stroke="url(#roseGoldGrad)" strokeWidth="2.5" fill="none" />
        <circle cx="50" cy="50" r="42" stroke="url(#roseGoldGrad)" strokeWidth="0.8" strokeDasharray="3 3" fill="none" />
        
        {/* Decorative Compass Dots */}
        <circle cx="50" cy="5" r="2" fill="url(#roseGoldGrad)" />
        <circle cx="50" cy="95" r="2" fill="url(#roseGoldGrad)" />
        <circle cx="5" cy="50" r="2" fill="url(#roseGoldGrad)" />
        <circle cx="95" cy="50" r="2" fill="url(#roseGoldGrad)" />

        {/* Inner Circle Fill */}
        <circle cx="50" cy="50" r="39" fill="#241C15" opacity="0.95" />

        {/* Woman Profile Silhouette + Makeup Brush */}
        <g transform="translate(18, 16) scale(0.64)">
          {/* Hair & Face Contour */}
          <path 
            d="M50 15 C 32 15, 25 30, 25 45 C 25 55, 30 65, 36 72 C 34 78, 30 84, 22 88 C 34 90, 44 85, 48 78 C 58 78, 70 70, 70 52 C 70 32, 60 15, 50 15 Z" 
            fill="url(#roseGoldGrad)" 
          />
          {/* Eyelash & Lips Detail */}
          <path d="M 45 42 Q 50 40 54 44" stroke="#241C15" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 48 56 Q 52 59 55 56" stroke="#241C15" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Makeup Brush Crossing Silhouette */}
          <path d="M 12 78 L 78 12" stroke="url(#roseGoldShimmer)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 73 17 L 85 5 C 89 2, 94 6, 91 10 L 80 23 Z" fill="url(#roseGoldGrad)" />
        </g>
      </svg>

      {/* Brand Text & Tagline */}
      {variant !== 'icon-only' && (
        <div style={{ textTransform: 'uppercase', textAlign: 'left', lineHeight: 1.1 }}>
          <div 
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontWeight: 700, 
              fontSize: currentSize.text, 
              color: '#241C15', 
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap'
            }}
          >
            PRANAA'S <span style={{ color: '#C89B6E' }}>MAKEOVER</span>
          </div>
          <div 
            style={{ 
              fontFamily: "'Plus Jakarta Sans', sans-serif", 
              fontWeight: 600, 
              fontSize: currentSize.sub, 
              color: '#9C6B2F', 
              letterSpacing: '0.22em',
              marginTop: '2px',
              whiteSpace: 'nowrap'
            }}
          >
            PROFESSIONAL MAKEUP ARTIST
          </div>
        </div>
      )}
    </div>
  );
};
