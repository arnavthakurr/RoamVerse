import { Link } from 'react-router-dom';
import { Globe, Camera, Video, MessageCircle, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a0f1e 0%, #060b18 100%)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '64px 0 32px',
    }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div style={{
                width: 36,
                height: 36,
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                borderRadius: 9,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Globe size={18} color="white" />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
                Roam<span style={{ color: '#f97316' }}>Verse</span>
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20 }}>
              A personal travel universe — exploring India and the world, one destination at a time. Collect moments, not just miles.
            </p>
            <div className="flex gap-3">
              {[Camera, Video, MessageCircle, Mail].map((Icon, i) => (
                <button
                  key={i}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#f97316';
                    (e.currentTarget as HTMLButtonElement).style.color = '#f97316';
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(249,115,22,0.1)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8';
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)';
                  }}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem' }}>
              Explore
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'India Explorer', to: '/india' },
                { label: 'World Explorer', to: '/world' },
                { label: 'My Journey', to: '/journey' },
                { label: 'Travel Gallery', to: '/gallery' },
                { label: 'Travel Blogs', to: '/blogs' },
                { label: 'Find a Destination', to: '/find' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="footer-link">{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem' }}>
              Top Destinations
            </h4>
            <div className="flex flex-col gap-2">
              {['Varanasi', 'Manali', 'Jaipur', 'Rishikesh', 'Kerala', 'Bali', 'Paris', 'Tokyo'].map(dest => (
                <span key={dest} className="footer-link" style={{ cursor: 'pointer' }}>{dest}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem' }}>
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                <Mail size={14} style={{ color: '#f97316', flexShrink: 0 }} />
                hello@roamverse.in
              </div>
              <div className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                <MapPin size={14} style={{ color: '#f97316', flexShrink: 0 }} />
                Based in India 🇮🇳
              </div>
              <div style={{ marginTop: 12 }}>
                <p style={{ color: '#64748b', fontSize: '0.82rem', marginBottom: 8 }}>Subscribe for travel stories</p>
                <div style={{
                  display: 'flex',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 50,
                  overflow: 'hidden',
                  padding: '4px 4px 4px 14px',
                }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: 'white',
                      fontSize: '0.85rem',
                      flex: 1,
                    }}
                  />
                  <button style={{
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    border: 'none',
                    borderRadius: 50,
                    padding: '6px 14px',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>
          <p style={{ color: '#475569', fontSize: '0.85rem' }}>
            © 2024 RoamVerse. All rights reserved.
          </p>
          <p style={{ color: '#475569', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 4 }}>
            Made with <Heart size={12} style={{ color: '#f97316' }} /> for explorers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
