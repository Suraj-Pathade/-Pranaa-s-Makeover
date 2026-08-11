import React from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';

export const GalleryLightbox = ({ image, onClose }) => {
  if (!image) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Pranaa! I love the look in your portfolio: "${image.title}" (${image.category}). I'd like to check availability and details for my upcoming event.`
  );

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(24, 18, 13, 0.88)',
        backdropFilter: 'blur(12px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div 
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          backgroundColor: 'var(--color-ivory)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          border: '1px solid var(--color-rose-gold)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
          gap: '0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image preview"
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(36, 28, 21, 0.75)',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-smooth)'
          }}
        >
          <X size={20} />
        </button>

        {/* Image Preview */}
        <div style={{ position: 'relative', height: '100%', minHeight: '380px', backgroundColor: '#241C15' }}>
          <img 
            src={image.url} 
            alt={image.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Details Panel */}
        <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-warm-blush-accent)',
                color: 'var(--color-deep-gold)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem'
              }}
            >
              <Sparkles size={13} color="#9C6B2F" />
              {image.category}
            </span>

            <h3 id="lightbox-title" style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: 'var(--color-espresso)' }}>
              {image.title}
            </h3>

            <p style={{ fontSize: '0.98rem', color: 'var(--color-muted-brown)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {image.description || "Crafted with international high-definition techniques and customized skin undertone matching for a luminous, long-lasting wedding glow."}
            </p>
          </div>

          <div>
            <a 
              href={`https://wa.me/917721965849?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              Enquire This Look on WhatsApp
            </a>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '0.75rem', color: 'var(--color-muted-brown)' }}>
              Direct Response from Pranali Doye
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
