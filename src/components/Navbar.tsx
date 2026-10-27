import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Globe, MapPin, Compass, Heart, Video, BookOpen, User, Search } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Explore India', to: '/india' },
  { label: 'Explore World', to: '/world' },
  { label: 'My Journey', to: '/journey' },
  { label: 'My Wishlist', to: '/wishlist' },
  { label: 'Find Destination', to: '/find' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Travel Blogs', to: '/blogs' },
  { label: 'About', to: '/about' },
];

const navIcons: Record<string, React.ReactNode> = {
  'Explore India': <MapPin size={14} />,
  'Explore World': <Globe size={14} />,
  'My Journey': <Compass size={14} />,
  'My Wishlist': <Heart size={14} />,
  'Gallery': <Video size={14} />,
  'Travel Blogs': <BookOpen size={14} />,
  'About': <User size={14} />,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10, 15, 30, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
          padding: scrolled ? '12px 0' : '20px 0',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline" style={{ textDecoration: 'none' }}>
            <div
              className="flex items-center justify-center"
              style={{
                width: 38,
                height: 38,
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                borderRadius: 10,
                boxShadow: '0 4px 15px rgba(249,115,22,0.4)',
              }}
            >
              <Globe size={20} color="white" />
            </div>
            <span style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.02em',
            }}>
              Roam<span style={{ color: '#f97316' }}>Verse</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm ${location.pathname === link.to ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                {navIcons[link.label] && <span>{navIcons[link.label]}</span>}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="flex items-center justify-center"
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#f97316';
                (e.currentTarget as HTMLButtonElement).style.color = '#f97316';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLButtonElement).style.color = 'white';
              }}
            >
              <Search size={16} />
            </button>
            <Link to="/admin" style={{ textDecoration: 'none' }}>
              <button className="btn-orange" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                Admin Login
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8,
              padding: '8px',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="lg:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{
          pointerEvents: mobileOpen ? 'auto' : 'none',
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className="absolute top-0 right-0 h-full"
          style={{
            width: 280,
            background: 'linear-gradient(180deg, #0d1530 0%, #0a0f1e 100%)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
            transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
            padding: '80px 24px 24px',
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link flex items-center gap-3 px-4 py-3 rounded-xl ${location.pathname === link.to ? 'active' : ''}`}
                style={{
                  textDecoration: 'none',
                  fontSize: '1rem',
                  background: location.pathname === link.to ? 'rgba(249,115,22,0.1)' : 'transparent',
                }}
              >
                {navIcons[link.label] && <span>{navIcons[link.label]}</span>}
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
              <Link to="/admin" style={{ textDecoration: 'none' }}>
                <button className="btn-orange w-full" style={{ justifyContent: 'center' }}>
                  Admin Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
