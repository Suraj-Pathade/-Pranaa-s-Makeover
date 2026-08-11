import React from 'react';

export const LogoEmblem = ({ variant = 'full', className = '', size = 'md' }) => {
  // size presets in pixels
  const sizes = {
    sm: { icon: 46, text: '1.05rem', sub: '0.52rem' },
    md: { icon: 56, text: '1.3rem', sub: '0.62rem' },
    lg: { icon: 84, text: '1.85rem', sub: '0.78rem' }
  };
  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
      {/* Official Uploaded Circular Logo Image */}
      <img 
        src="logo.jpg" 
        alt="Pranaa's Makeover Logo"
        style={{
          width: `${currentSize.icon}px`,
          height: `${currentSize.icon}px`,
          borderRadius: '50%',
          objectFit: 'cover',
          flexShrink: 0,
          boxShadow: '0 4px 14px rgba(200, 155, 110, 0.4)',
          border: '1.5px solid var(--color-rose-gold)'
        }}
      />

      {/* Brand Text & Tagline */}
      {variant !== 'icon-only' && (
        <div style={{ textTransform: 'uppercase', textAlign: 'left', lineHeight: 1.1 }}>
          <div 
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontWeight: 700, 
              fontSize: currentSize.text, 
              color: 'var(--color-espresso)', 
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap'
            }}
          >
            PRANAA'S <span style={{ color: 'var(--color-rose-gold)' }}>MAKEOVER</span>
          </div>
          <div 
            style={{ 
              fontFamily: "'Plus Jakarta Sans', sans-serif", 
              fontWeight: 600, 
              fontSize: currentSize.sub, 
              color: 'var(--color-deep-gold)', 
              letterSpacing: '0.22em',
              marginTop: '3px',
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
