import React, { useState, useRef, useCallback } from 'react';
import { Sparkles } from 'lucide-react';

export const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  }, []);

  const onTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };

  return (
    <div style={{ margin: '3rem 0' }}>
      <div 
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '850px',
          height: '450px',
          margin: '0 auto',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          border: '2px solid var(--color-border-gold)',
          userSelect: 'none',
          touchAction: 'pan-y'
        }}
      >
        {/* AFTER IMAGE (Background) */}
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <img 
            src="bridal_glam.jpg" 
            alt="After HD Bridal Makeup" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(36, 28, 21, 0.85)',
              color: '#F3D9BE',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: '600',
              backdropFilter: 'blur(8px)',
              letterSpacing: '0.05em',
              border: '1px solid var(--color-rose-gold)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={14} color="#C89B6E" />
            AFTER: HD BRIDAL GLAM
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped on top using width %) */}
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            bottom: 0, 
            width: `${sliderPos}%`, 
            overflow: 'hidden',
            borderRight: '2px solid #FFF'
          }}
        >
          <img 
            src="hero_bridal.jpg" 
            alt="Natural Before Look" 
            style={{ 
              width: '850px',
              maxWidth: 'none',
              height: '100%', 
              objectFit: 'cover',
              filter: 'contrast(0.95) saturate(0.9)'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              backgroundColor: 'rgba(251, 246, 240, 0.9)',
              color: 'var(--color-espresso)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: '600',
              backdropFilter: 'blur(8px)',
              letterSpacing: '0.05em',
              border: '1px solid var(--color-border-gold)',
              whiteSpace: 'nowrap'
            }}
          >
            BEFORE: NATURAL CANVAS
          </div>
        </div>

        {/* SLIDER HANDLE */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '4px',
            backgroundColor: '#FFF',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            cursor: 'ew-resize',
            transform: 'translateX(-50%)'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--grad-rose-gold)',
              border: '3px solid #FFF',
              boxShadow: 'var(--shadow-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            &#10094;&#10095;
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.88rem', marginTop: '0.75rem', color: 'var(--color-muted-brown)' }}>
        👈 Drag slider left or right to experience the flawless HD transformation 👉
      </p>
    </div>
  );
};
