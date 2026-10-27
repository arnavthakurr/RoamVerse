import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Camera, Play, Send, MapPin, Globe } from 'lucide-react';

export default function AboutMe() {
  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh', paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: 480, overflow: 'hidden' }}>
        <img
          src="/about_traveler.png"
          alt="Travel adventure"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,15,30,0.5) 0%, rgba(10,15,30,0.85) 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '48px 32px',
        }}>
          <div className="max-w-screen-xl mx-auto w-full">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, color: '#64748b', fontSize: '0.85rem' }}>
              <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#f97316' }}>About Me</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 12 }}>
              Not Just Visiting Places.<br />
              <span style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Collecting Stories.
              </span>
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)', gap: 48, alignItems: 'start' }}>

          {/* Main content */}
          <div>
            {/* Introduction */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              padding: 32,
              marginBottom: 28,
            }}>
              <h2 style={{ color: '#f97316', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                Hello, Traveller! 👋
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, fontSize: '1rem', marginBottom: 16 }}>
                I'm a travel enthusiast from India with an unquenchable passion for exploring new places, discovering hidden gems, and experiencing the world through its diverse cultures, cuisines, and landscapes.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.85, marginBottom: 16 }}>
                Travel, for me, isn't just about visiting places — it's about the stories those places tell, the people I meet along the way, and the memories I carry back home. Every destination changes you a little, and I believe that's the most beautiful thing about exploring the world.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.85 }}>
                RoamVerse is my personal space to document every adventure, share my experiences, and hopefully inspire others to step out of their comfort zone and explore this incredible world we live in.
              </p>
            </div>

            {/* Philosophy */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(234,88,12,0.04) 100%)',
              border: '1px solid rgba(249,115,22,0.15)',
              borderRadius: 24,
              padding: 32,
              marginBottom: 28,
            }}>
              <h2 style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', marginBottom: 16 }}>
                My Travel Philosophy
              </h2>
              {[
                { emoji: '🌍', title: 'Travel Slow', desc: 'I prefer spending more time in fewer places rather than rushing through many. Real connection comes with time.' },
                { emoji: '🎒', title: 'Travel Light', desc: 'Pack less, experience more. Minimalism on the road opens doors to spontaneity.' },
                { emoji: '🤝', title: 'Travel with Heart', desc: 'Every local interaction, every shared meal, every exchanged smile — these are the moments that define a trip.' },
                { emoji: '📝', title: 'Document Everything', desc: 'Stories, photos, videos — every adventure deserves to be remembered and shared.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ color: 'white', fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Placeholder bio note */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px dashed rgba(255,255,255,0.15)',
              borderRadius: 16,
              padding: '20px 24px',
              color: '#475569',
              fontSize: '0.85rem',
              lineHeight: 1.6,
            }}>
              ✏️ <strong style={{ color: '#94a3b8' }}>Customize your bio:</strong> Sign in as admin to personalize your About Me page — add your real story, favourite destinations, and travel experiences.
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Quick facts */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: 24,
            }}>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: 20 }}>Quick Facts</h3>
              {[
                { icon: <MapPin size={14} />, label: 'Based In', value: 'India 🇮🇳' },
                { icon: <Globe size={14} />, label: 'Continent', value: 'Asia, exploring more' },
                { icon: <span>✈️</span>, label: 'Travel Style', value: 'Adventure + Culture' },
                { icon: <span>🏔️</span>, label: 'Favourite Type', value: 'Mountains & Heritage' },
                { icon: <span>🍛</span>, label: 'Favourite Food', value: 'Local street food' },
              ].map(fact => (
                <div key={fact.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: '0.85rem' }}>
                    <span style={{ color: '#f97316' }}>{fact.icon}</span>
                    {fact.label}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: 600 }}>{fact.value}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: 24,
            }}>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: 16 }}>Connect with Me</h3>
              {[
                { icon: <Camera size={16} />, label: 'Instagram', value: '@roamverse', color: '#e1306c' },
                { icon: <Play size={16} />, label: 'YouTube', value: 'RoamVerse', color: '#ff0000' },
                { icon: <Send size={16} />, label: 'Twitter/X', value: '@roamverse', color: '#1da1f2' },
                { icon: <Mail size={16} />, label: 'Email', value: 'hello@roamverse.in', color: '#f97316' },
              ].map(social => (
                <div key={social.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                }}>
                  <div style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: `${social.color}20`,
                    border: `1px solid ${social.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: social.color,
                    flexShrink: 0,
                  }}>
                    {social.icon}
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{social.label}</div>
                    <div style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem' }}>{social.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(234,88,12,0.05) 100%)',
              border: '1px solid rgba(249,115,22,0.2)',
              borderRadius: 20,
              padding: 24,
              textAlign: 'center',
            }}>
              <Mail size={28} style={{ color: '#f97316', marginBottom: 12 }} />
              <h3 style={{ color: 'white', fontWeight: 700, marginBottom: 8 }}>Let's Connect!</h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 16 }}>
                Travel collaborations, questions, or just want to talk travel?
              </p>
              <a href="mailto:hello@roamverse.in" style={{ textDecoration: 'none' }}>
                <button className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
                  Send a Message
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
