import React, { useState } from 'react';
import { 
  MessageCircle, Phone, Mail, MapPin, Calendar, Clock, Sparkles, 
  ChevronRight, Star, Heart, CheckCircle2, Menu, X, Award, ShieldCheck, Filter
} from 'lucide-react';
import { LogoEmblem } from './components/LogoEmblem';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { GalleryLightbox } from './components/GalleryLightbox';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Bridal Makeup',
    date: '',
    location: '',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your Name and Phone Number.');
      return;
    }

    const text = `Hi Pranaa! I would like to book a consultation.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Event Date:* ${formData.date || 'TBD'}\n` +
      `*Location/Venue:* ${formData.location || 'Sahu Nagar'}\n` +
      `*Details:* ${formData.message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/917721965849?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  // 11 Services Data
  const servicesList = [
    {
      id: 'bridal',
      title: 'Bridal Makeup',
      tag: 'HD / Airbrush',
      desc: 'Bespoke HD or Airbrush bridal transformation for your D-Day, Engagement, Reception, or Sangeet. Includes hair styling, saree/lehenga draping & eyelashes.',
      img: '/hero_bridal.jpg',
      icon: Sparkles
    },
    {
      id: 'party',
      title: 'Party & Cocktail Makeup',
      tag: 'Evening Glam',
      desc: 'Chic, radiant makeup with sleek eye glam and glowing skin finish tailored for wedding guests, cocktail parties, and formal galas.',
      img: '/party_glam.jpg',
      icon: Heart
    },
    {
      id: 'editorial',
      title: 'Editorial & Photoshoot Makeup',
      tag: 'Fashion & High Concept',
      desc: 'Camera-optimized precision artistry designed for magazine editorials, fashion campaigns, and creative concept photoshoots.',
      img: '/bridal_glam.jpg',
      icon: Award
    },
    {
      id: 'prewedding',
      title: 'Pre-Wedding Shoot Makeup',
      tag: 'Outdoor & Studio',
      desc: 'Long-lasting, sweat-proof glam crafted specifically to look breathtaking under natural outdoor lighting and professional camera lenses.',
      img: '/hero_bridal.jpg',
      icon: CameraIcon
    },
    {
      id: 'groom',
      title: 'Groom Makeup & Grooming',
      tag: 'Subtle & Camera-Ready',
      desc: 'Subtle skin evening, dark-circle correction, anti-shine finish, and beard grooming so the groom looks impeccably handsome next to his bride.',
      img: '/artist_portrait.jpg',
      icon: ShieldCheck
    },
    {
      id: 'family',
      title: 'Family & Guest Makeup',
      tag: 'Group Packages',
      desc: 'Coordinated glam for mothers, sisters, and bridesmaids, ensuring every family member looks radiant and harmonized in photos.',
      img: '/party_glam.jpg',
      icon: Sparkles
    },
    {
      id: 'babyshower',
      title: 'Baby Shower Makeup',
      tag: 'Traditional & Modern',
      desc: 'Soft, luminous beauty styling to celebrate your maternal milestone with comfort and elegance during traditional ceremony rituals.',
      img: '/hero_bridal.jpg',
      icon: Heart
    },
    {
      id: 'maternity',
      title: 'Maternity Shoot Makeup',
      tag: 'Soft & Ethereal',
      desc: 'Gentle peach and rose tones highlighting your natural pregnancy glow for dreamy, timeless portrait memories.',
      img: '/bridal_glam.jpg',
      icon: Sparkles
    },
    {
      id: 'hairstyling',
      title: 'Hairstyling',
      tag: 'Custom Buns & Waves',
      desc: 'Intricate bridal braids, hollywood glam waves, floral jasmine buns, and contemporary hair accessory installations.',
      img: '/artist_portrait.jpg',
      icon: Sparkles
    },
    {
      id: 'draping',
      title: 'Saree Draping',
      tag: 'All Regional Styles',
      desc: 'Precision traditional & designer draping (Nauvari, Can-Can, Pleated, Gujrati) secured to remain comfortable and flawless all day.',
      img: '/hero_bridal.jpg',
      icon: CheckCircle2
    },
    {
      id: 'nailart',
      title: 'Nail Art & Extensions',
      tag: 'Bridal Extensions',
      desc: 'Luxury gel overlays, rose-gold accents, crystal embellishments, and classic French tips to complement your bridal henna.',
      img: '/party_glam.jpg',
      icon: Sparkles
    }
  ];

  // Portfolio Gallery Items
  const portfolioItems = [
    { id: 1, title: 'Royal Heritage HD Bridal', category: 'Bridal', url: '/hero_bridal.jpg', desc: 'Custom rose-gold blush skin with traditional Kundan headpiece and soft smoked eyeliner.' },
    { id: 2, title: 'Luminous Reception Glam', category: 'Bridal', url: '/bridal_glam.jpg', desc: 'Airbrush finish with defined gold shimmer lid and nude velvet lips.' },
    { id: 3, title: 'Sangeet Night Cocktail Glam', category: 'Party', url: '/party_glam.jpg', desc: 'Glossy nude skin paired with emerald cocktail gown styling.' },
    { id: 4, title: 'International Editorial Look', category: 'Editorial', url: '/artist_portrait.jpg', desc: 'High fashion portrait look created for luxury bridal campaign.' },
    { id: 5, title: 'Engagement Soft Rose Look', category: 'Bridal', url: '/hero_bridal.jpg', desc: 'Soft pastel pink tones for daytime engagement ceremony.' },
    { id: 6, title: 'Maternity Glow Shoot', category: 'Maternity & Baby Shower', url: '/bridal_glam.jpg', desc: 'Soft ethereal makeup created for maternity portrait session.' }
  ];

  const filteredPortfolio = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-warm-blush)' }}>
      {/* 1. NAVBAR */}
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(251, 246, 240, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border-gold)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.8rem 1.5rem' }}>
          {/* Brand Emblem Logo */}
          <a href="#home" aria-label="Pranaa's Makeover Home">
            <LogoEmblem size="sm" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Pranaa</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Header Action CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href="https://wa.me/917721965849?text=Hi%20Pranaa%2C%20I'd%20like%20to%20enquire%20about%20makeup%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary desktop-only-btn"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}
            >
              <MessageCircle size={16} />
              Book on WhatsApp
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              style={{ color: 'var(--color-espresso)', padding: '6px' }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div 
            style={{
              backgroundColor: 'var(--color-ivory)',
              borderBottom: '1px solid var(--color-border-gold)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Pranaa</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact & Map</a>
            <a 
              href="https://wa.me/917721965849?text=Hi%20Pranaa%2C%20I'd%20like%20to%20enquire%20about%20makeup%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              WhatsApp Consultation
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="section-padding" style={{ position: 'relative', overflow: 'hidden', padding: '4.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          {/* Text Content */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-border-gold)', marginBottom: '1.25rem' }}>
              <Sparkles size={16} color="#9C6B2F" />
              <span style={{ fontSize: '0.82rem', fontWeight: '700', letterSpacing: '0.12em', color: 'var(--color-deep-gold)', textTransform: 'uppercase' }}>
                PROFESSIONAL MAKEUP ARTIST
              </span>
            </div>

            <h1 style={{ marginBottom: '1.25rem' }}>
              Timeless Indian Elegance Meets <span className="text-gold-gradient">Luminous Artistry</span>
            </h1>

            <p style={{ fontSize: '1.12rem', color: 'var(--color-muted-brown)', marginBottom: '2rem', maxWidth: '540px' }}>
              Crafting bespoke bridal, party, and editorial looks for brides and women who demand perfection. Based in Sahu Nagar with international artistry standards.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a 
                href="https://wa.me/917721965849?text=Hi%20Pranaa%2C%20I'd%20like%20to%20enquire%20about%20makeup%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={20} />
                Book on WhatsApp
              </a>
              <a href="#portfolio" className="btn-secondary">
                View Portfolio
              </a>
            </div>

            {/* Micro Highlights */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="#C89B6E" />
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-espresso)' }}>100% International Brands</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="#C89B6E" />
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-espresso)' }}>HD & Airbrush Specialist</span>
              </div>
            </div>
          </div>

          {/* Hero Editorial Photography & Signature Gold Emblem Framing */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div className="gold-circular-frame" style={{ maxWidth: '440px', width: '100%', padding: '12px' }}>
              <div className="gold-circular-frame-inner" style={{ aspectRatio: '4/5', borderRadius: '220px 220px 20px 20px' }}>
                <img 
                  src="/hero_bridal.jpg" 
                  alt="Pranaa's Makeover Bridal Artistry" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PRANAA SECTION */}
      <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="gold-hairline-divider">
            <span className="gold-hairline-circle"></span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Artist Portrait */}
            <div style={{ textAlign: 'center' }}>
              <div className="gold-circular-frame" style={{ width: '280px', height: '280px', padding: '8px' }}>
                <div className="gold-circular-frame-inner" style={{ width: '100%', height: '100%' }}>
                  <img 
                    src="/artist_portrait.jpg" 
                    alt="Pranali Doye - International Makeup Artist" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <h3 style={{ marginTop: '1.25rem', marginBottom: '0.2rem' }}>Pranali Doye</h3>
              <p style={{ color: 'var(--color-deep-gold)', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                International Makeup Artist
              </p>
            </div>

            {/* Bio Text */}
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '1.25rem' }}>
                The Artistry Behind <span className="text-gold-gradient">Your Radiance</span>
              </h2>

              <p style={{ fontSize: '1.08rem', lineHeight: '1.75', color: 'var(--color-espresso-light)', marginBottom: '1.5rem' }}>
                Pranali Doye is an International Makeup Artist based in Sahu Nagar, renowned for her bespoke bridal and editorial artistry. Blending world-class international techniques with rich Indian bridal traditions, she enhances your natural beauty to create a flawless, camera-ready glow. Every look is tailored to your unique skin tone, outfit, and personal aesthetic using 100% genuine luxury products.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--color-warm-blush)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
                  <Award color="#C89B6E" size={24} style={{ marginBottom: '0.4rem' }} />
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Certified Artistry</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-muted-brown)' }}>Global masterclasses & techniques</div>
                </div>

                <div style={{ padding: '1rem', background: 'var(--color-warm-blush)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
                  <ShieldCheck color="#C89B6E" size={24} style={{ marginBottom: '0.4rem' }} />
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Luxury Products Only</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-muted-brown)' }}>MAC, Huda, Dior, NARS, Charlotte Tilbury</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--color-deep-gold)', textTransform: 'uppercase' }}>
              OUR BESPOKE OFFERINGS
            </span>
            <h2 style={{ marginTop: '0.5rem' }}>Exclusive Makeup & Styling Services</h2>
            <div className="gold-hairline-divider">
              <span className="gold-hairline-circle"></span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
            {servicesList.map((service) => {
              const ServiceIcon = service.icon;
              const waMsg = encodeURIComponent(`Hi Pranaa! I'd like to enquire about your "${service.title}" service for my upcoming event.`);

              return (
                <div key={service.id} className="luxury-card" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-warm-blush-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ServiceIcon size={22} color="#9C6B2F" />
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--color-deep-gold)', backgroundColor: 'var(--color-warm-blush)', padding: '4px 10px', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border-subtle)' }}>
                        {service.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-muted-brown)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {service.desc}
                    </p>
                  </div>

                  <a 
                    href={`https://wa.me/917721965849?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ width: '100%', fontSize: '0.8rem', padding: '0.65rem 1rem' }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp Enquiry
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE & AFTER TRANSFORMATION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--color-deep-gold)', textTransform: 'uppercase' }}>
              THE HD GLOW DIFFERENCE
            </span>
            <h2 style={{ marginTop: '0.5rem' }}>Interactive Before & After Experience</h2>
            <div className="gold-hairline-divider">
              <span className="gold-hairline-circle"></span>
            </div>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 6. PORTFOLIO / GALLERY SECTION */}
      <section id="portfolio" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--color-deep-gold)', textTransform: 'uppercase' }}>
              PORTFOLIO GALLERY
            </span>
            <h2 style={{ marginTop: '0.5rem' }}>Real Brides & Signature Looks</h2>
            <div className="gold-hairline-divider">
              <span className="gold-hairline-circle"></span>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
              {['All', 'Bridal', 'Party', 'Editorial', 'Maternity & Baby Shower'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    border: '1px solid var(--color-rose-gold)',
                    backgroundColor: selectedCategory === cat ? 'var(--color-rose-gold)' : 'transparent',
                    color: selectedCategory === cat ? '#FFF' : 'var(--color-espresso)',
                    transition: 'var(--transition-smooth)',
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id}
                onClick={() => setActiveLightboxImg(item)}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--color-border-gold)'
                }}
                className="gallery-item-hover"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(36,28,21,0.85) 0%, transparent 60%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem',
                    color: '#FFF',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#F3D9BE', letterSpacing: '0.08em' }}>
                    {item.category}
                  </span>
                  <h4 style={{ color: '#FFF', fontSize: '1.1rem', margin: '4px 0' }}>{item.title}</h4>
                  <span style={{ fontSize: '0.8rem', opacity: 0.9, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Click to inspect look <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REVIEWS & TESTIMONIALS */}
      <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--color-deep-gold)', textTransform: 'uppercase' }}>
              LOVE FROM OUR BRIDES
            </span>
            <h2 style={{ marginTop: '0.5rem' }}>Client Reviews & Experiences</h2>
            <div className="gold-hairline-divider">
              <span className="gold-hairline-circle"></span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'Ritu Sharma',
                city: 'Nagpur',
                review: "Pranali created the bridal look of my dreams for my wedding day! My HD makeup stayed completely flawless through 8 hours of ceremony rituals and dancing. I received so many compliments!",
                stars: 5,
                event: 'Bridal HD Makeup'
              },
              {
                name: 'Ananya Verma',
                city: 'Mumbai',
                review: "I booked Pranaa's Makeover for my Sangeet and Reception. Her airbrush technique gave me an effortless, luminous glow without looking heavy. Every photo turned out magazine-ready!",
                stars: 5,
                event: 'Airbrush Reception Glam'
              },
              {
                name: 'Pooja & Family',
                city: 'Sahu Nagar',
                review: "Pranali made my entire family look stunning for my sister's wedding. She is incredibly punctual, gentle, professional, and uses genuine high-end products. Highly recommended!",
                stars: 5,
                event: 'Bridal & Family Entourage'
              }
            ].map((review, idx) => (
              <div key={idx} className="luxury-card" style={{ padding: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={18} fill="#C89B6E" color="#C89B6E" />
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', fontSize: '0.98rem', color: 'var(--color-espresso-light)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    "{review.review}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--color-espresso)' }}>{review.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-deep-gold)', fontWeight: '600' }}>{review.city} &bull; {review.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRICING NOTE SECTION */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div 
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              backgroundColor: 'var(--color-ivory)',
              borderRadius: 'var(--radius-lg)',
              border: '2px solid var(--color-rose-gold)',
              padding: '3rem 2rem',
              boxShadow: 'var(--shadow-md)',
              textAlign: 'center'
            }}
          >
            <Sparkles size={36} color="#9C6B2F" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>Pricing on Request</h2>
            <div className="gold-hairline-divider" style={{ margin: '1rem auto' }}>
              <span className="gold-hairline-circle"></span>
            </div>
            <p style={{ fontSize: '1.08rem', color: 'var(--color-muted-brown)', maxWidth: '620px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Every bride and occasion is unique. Our packages are customized based on your chosen makeup technique (HD/Airbrush), event venue, travel requirements, and entourage size. Connect with Pranali directly for a personalized proposal.
            </p>
            <a 
              href="https://wa.me/917721965849?text=Hi%20Pranaa%2C%20I'd%20like%20to%20request%20a%20pricing%20quote%20for%20my%20upcoming%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={20} />
              Enquire Custom Pricing Quote
            </a>
          </div>
        </div>
      </section>

      {/* 9. CONTACT & BOOKING FORM SECTION */}
      <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--color-deep-gold)', textTransform: 'uppercase' }}>
              RESERVE YOUR DATE
            </span>
            <h2 style={{ marginTop: '0.5rem' }}>Book Your Makeup Consultation</h2>
            <div className="gold-hairline-divider">
              <span className="gold-hairline-circle"></span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* Dynamic WhatsApp Booking Form */}
            <div className="luxury-card" style={{ padding: '2.5rem 2rem', textAlign: 'left' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Send Booking Request</h3>
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--color-espresso)' }}>
                    Your Full Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--color-espresso)' }}>
                    WhatsApp Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--color-espresso)' }}>
                    Select Service *
                  </label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', backgroundColor: '#FFF' }}
                  >
                    {servicesList.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--color-espresso)' }}>
                      Event Date
                    </label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--color-espresso)' }}>
                      Location / Venue
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Sahu Nagar / Venue"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--color-espresso)' }}>
                    Special Requirements / Message
                  </label>
                  <textarea 
                    rows="3" 
                    placeholder="Mention outfit colors, number of guest makeups, or specific preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.95rem' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <MessageCircle size={18} />
                  Submit via WhatsApp
                </button>
              </form>
            </div>

            {/* Direct Contact Details & Google Maps Embed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
              <div className="luxury-card" style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '1.25rem' }}>Direct Contact Information</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <a href="https://wa.me/917721965849" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-espresso)' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-warm-blush-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MessageCircle size={20} color="#9C6B2F" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-muted-brown)' }}>WhatsApp / Phone</div>
                      <div style={{ fontWeight: '700' }}>+91 77219 65849</div>
                    </div>
                  </a>

                  <a href="tel:+917721965849" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-espresso)' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-warm-blush-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={20} color="#9C6B2F" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-muted-brown)' }}>Direct Call</div>
                      <div style={{ fontWeight: '700' }}>+91 77219 65849</div>
                    </div>
                  </a>

                  <a href="mailto:pranaadoye@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-espresso)' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-warm-blush-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={20} color="#9C6B2F" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-muted-brown)' }}>Email Inquiry</div>
                      <div style={{ fontWeight: '700' }}>pranaadoye@gmail.com</div>
                    </div>
                  </a>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-espresso)' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-warm-blush-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MapPin size={20} color="#9C6B2F" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-muted-brown)' }}>Studio Location</div>
                      <div style={{ fontWeight: '700' }}>Sahu Nagar, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border-gold)', height: '230px', boxShadow: 'var(--shadow-sm)' }}>
                <iframe 
                  title="Sahu Nagar Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14884.281149495822!2d79.0888603!3d21.1458004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34a74c2e64627d3b%3A0xbfaeaec6628203c9!2sSahu%20Nagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer style={{ backgroundColor: 'var(--color-espresso)', color: 'var(--color-ivory)', padding: '4rem 0 2rem', borderTop: '2px solid var(--color-rose-gold)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', marginBottom: '3rem', textAlign: 'left' }}>
            <div>
              <LogoEmblem variant="full" size="md" />
              <p style={{ color: 'var(--color-rose-gold-light)', fontSize: '0.9rem', marginTop: '1.25rem', lineHeight: 1.7 }}>
                Bespoke HD & Airbrush bridal artistry by Pranali Doye. Crafted to make every bride shine with luminous confidence on her unforgettable day.
              </p>
            </div>

            <div>
              <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem' }}>Quick Navigation</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><a href="#home" style={{ color: 'var(--color-rose-gold-light)' }}>Home</a></li>
                <li><a href="#about" style={{ color: 'var(--color-rose-gold-light)' }}>About Artist</a></li>
                <li><a href="#services" style={{ color: 'var(--color-rose-gold-light)' }}>Makeup Services</a></li>
                <li><a href="#portfolio" style={{ color: 'var(--color-rose-gold-light)' }}>Bridal Gallery</a></li>
                <li><a href="#pricing" style={{ color: 'var(--color-rose-gold-light)' }}>Pricing Info</a></li>
                <li><a href="#contact" style={{ color: 'var(--color-rose-gold-light)' }}>Contact & Map</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem' }}>Studio Contact</h4>
              <p style={{ color: 'var(--color-rose-gold-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📍 Sahu Nagar, India</p>
              <p style={{ color: 'var(--color-rose-gold-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📞 +91 77219 65849</p>
              <p style={{ color: 'var(--color-rose-gold-light)', fontSize: '0.9rem', marginBottom: '1rem' }}>✉️ pranaadoye@gmail.com</p>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-gold-glow)' }}>
                Instagram: <span style={{ opacity: 0.8 }}>(Client to provide handle)</span>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(200, 155, 110, 0.25)', paddingTop: '1.75rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-rose-gold-light)' }}>
            &copy; {new Date().getFullYear()} Pranaa's Makeover &bull; Designed for Pranali Doye. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* 11. FLOATING WHATSAPP BUTTON (Fixed Bottom-Right) */}
      <a 
        href="https://wa.me/917721965849?text=Hi%20Pranaa%2C%20I'd%20like%20to%20enquire%20about%20makeup%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Pranaa's Makeover"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          transition: 'var(--transition-smooth)',
          animation: 'pulse 2s infinite'
        }}
      >
        <MessageCircle size={32} />
      </a>

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <GalleryLightbox 
          image={activeLightboxImg} 
          onClose={() => setActiveLightboxImg(null)} 
        />
      )}
    </div>
  );
}

// Camera Icon helper
function CameraIcon({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  );
}
