import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ArrowRight, MapPin, Globe, Compass,
  ChevronRight, Star,
  Play, TrendingUp, Map, BookOpen
} from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import VideoCard from '../components/VideoCard';
import { destinations, travelVideos, blogPosts, continents, indiaStates } from '../data/travelData';

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ end, suffix = '', label, icon }: {
  end: number; suffix?: string; label: string; icon: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + increment, end);
          setCount(Math.round(current));
          if (current >= end) clearInterval(timer);
        }, duration / steps);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="stat-card">
      <div style={{
        width: 52,
        height: 52,
        background: 'rgba(249,115,22,0.12)',
        border: '1px solid rgba(249,115,22,0.2)',
        borderRadius: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px',
        color: '#f97316',
      }}>
        {icon}
      </div>
      <div style={{
        fontSize: '2.5rem',
        fontWeight: 900,
        color: 'white',
        lineHeight: 1,
        marginBottom: 6,
      }}>
        {end === 0 ? (
          <span style={{ fontSize: '1.4rem', color: '#64748b' }}>—</span>
        ) : (
          <>{count}{suffix}</>
        )}
      </div>
      <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>{label}</div>
      {end === 0 && (
        <div style={{ color: '#475569', fontSize: '0.72rem', marginTop: 4 }}>Updates when you add visits</div>
      )}
    </div>
  );
}

// ─── Blog Card ────────────────────────────────────────────────────────────────
function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div className="blog-card">
      <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
        <img
          src={post.coverImage}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
        }} />
        <span className="category-pill" style={{ position: 'absolute', top: 10, left: 10 }}>
          {post.category}
        </span>
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{
          color: 'white',
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1.4,
          marginBottom: 8,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.title}
        </h3>
        <p style={{
          color: '#64748b',
          fontSize: '0.83rem',
          lineHeight: 1.6,
          marginBottom: 14,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.excerpt}
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#475569',
          fontSize: '0.78rem',
        }}>
          <span>{post.date}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#f97316', fontWeight: 600 }}>
            Read <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Homepage ────────────────────────────────────────────────────────────
export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeContinent, setActiveContinent] = useState('Asia');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Mountains', 'Beaches', 'Historical', 'Adventure', 'Nature', 'Religious', 'City'];

  const filteredDestinations = destinations.filter(d => {
    const matchCat = activeCategory === 'All' || d.category === activeCategory;
    return matchCat;
  });

  const stats = [
    { end: 0, suffix: '', label: 'Cities Explored', icon: <MapPin size={22} /> },
    { end: 0, suffix: '', label: 'States Explored', icon: <Map size={22} /> },
    { end: 0, suffix: '', label: 'Countries Visited', icon: <Globe size={22} /> },
    { end: travelVideos.length, suffix: '', label: 'Travel Videos', icon: <Play size={22} /> },
    { end: blogPosts.length, suffix: '', label: 'Travel Blogs', icon: <BookOpen size={22} /> },
  ];

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* BG Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/hero_background.png"
            alt="Hero background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(10,15,30,0.75) 0%, rgba(10,15,30,0.5) 50%, rgba(10,15,30,0.7) 100%)',
          }} />
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            borderRadius: '50%',
            border: '1px solid rgba(249,115,22,0.15)',
            top: `${10 + i * 12}%`,
            left: `${5 + i * 15}%`,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            zIndex: 1,
          }} />
        ))}

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(249,115,22,0.15)',
            border: '1px solid rgba(249,115,22,0.3)',
            borderRadius: 50,
            padding: '6px 18px',
            marginBottom: 28,
            color: '#fb923c',
            fontSize: '0.85rem',
            fontWeight: 600,
          }}>
            <Star size={14} fill="#f97316" stroke="none" /> Welcome to My Travel Universe
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 24,
          }}>
            Collect Moments.{' '}
            <span className="gradient-text">Explore Places.</span>
            <br />Discover the World.
          </h1>

          {/* Subheading */}
          <p style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 640,
            margin: '0 auto 40px',
          }}>
            Every destination has a story. Explore the places I've visited, discover destinations around the world, and find inspiration for your next adventure.
          </p>

          {/* Search bar */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
            <div className="hero-search" style={{ maxWidth: 560 }}>
              <Search size={18} style={{ color: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search cities, mountains, beaches, countries..."
                onKeyDown={e => {
                  if (e.key === 'Enter' && searchQuery) {
                    window.location.href = `/search?q=${searchQuery}`;
                  }
                }}
              />
              <button
                className="btn-orange"
                style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                onClick={() => searchQuery && (window.location.href = `/search?q=${searchQuery}`)}
              >
                Search
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link to="/india" style={{ textDecoration: 'none' }}>
              <button className="btn-orange">
                <Compass size={16} /> Explore Destinations
              </button>
            </Link>
            <Link to="/journey" style={{ textDecoration: 'none' }}>
              <button className="btn-outline">
                <MapPin size={16} /> My Travel Journey
              </button>
            </Link>
            <Link to="/find" style={{ textDecoration: 'none' }}>
              <button className="btn-outline">
                <Globe size={16} /> Plan Your Next Trip
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.72rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          <span>Scroll to Explore</span>
          <div className="scroll-indicator">
            <div className="scroll-dot" />
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section style={{
        background: 'rgba(249,115,22,0.06)',
        borderTop: '1px solid rgba(249,115,22,0.15)',
        borderBottom: '1px solid rgba(249,115,22,0.15)',
        padding: '28px 24px',
      }}>
        <div className="max-w-screen-xl mx-auto" style={{ textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            🌍 <strong style={{ color: 'white' }}>Welcome to my travel world!</strong> From India's vibrant cities to breathtaking landscapes, this is where I document my adventures, share my experiences, and inspire others to explore.
          </p>
        </div>
      </section>

      {/* ── FEATURED DESTINATIONS ── */}
      <section style={{ padding: '80px 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 40 }}>
            <div>
              <p style={{ color: '#f97316', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                ✦ Featured Destinations
              </p>
              <h2 className="section-heading orange-underline">
                Explore the World's <br />Best Places
              </h2>
            </div>
            <Link to="/india" style={{ textDecoration: 'none' }}>
              <button className="btn-outline" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
                View All <ArrowRight size={15} />
              </button>
            </Link>
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
            {categories.map(cat => (
              <button
                key={cat}
                className="tab-btn"
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? 'linear-gradient(135deg, #f97316, #ea580c)' : 'transparent',
                  borderColor: activeCategory === cat ? 'transparent' : 'rgba(255,255,255,0.15)',
                  color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.6)',
                  padding: '8px 18px',
                  fontSize: '0.83rem',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {filteredDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAVEL STATS ── */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, rgba(249,115,22,0.04) 0%, transparent 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="max-w-screen-xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: '#f97316', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
              ✦ My Travel Story
            </p>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>
              My Journey in <span className="gradient-text">Numbers</span>
            </h2>
            <p className="section-subheading" style={{ margin: '0 auto' }}>
              Stats are dynamically calculated from destinations I mark as visited and content I publish.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 20,
          }}>
            {stats.map(s => (
              <AnimatedCounter
                key={s.label}
                end={s.end}
                suffix={s.suffix}
                label={s.label}
                icon={s.icon}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <p style={{ color: '#475569', fontSize: '0.82rem' }}>
              🔒 Cities & countries explored will auto-update as you mark destinations as visited.
            </p>
          </div>
        </div>
      </section>

      {/* ── LATEST VIDEOS ── */}
      <section style={{ padding: '80px 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 40 }}>
            <div>
              <p style={{ color: '#f97316', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                ✦ Travel Videos
              </p>
              <h2 className="section-heading orange-underline">
                My Latest <br />Adventures
              </h2>
            </div>
            <Link to="/gallery" style={{ textDecoration: 'none' }}>
              <button className="btn-outline" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
                View Gallery <ArrowRight size={15} />
              </button>
            </Link>
          </div>

          {/* Sample notice */}
          <div style={{
            background: 'rgba(249,115,22,0.08)',
            border: '1px solid rgba(249,115,22,0.2)',
            borderRadius: 12,
            padding: '12px 20px',
            marginBottom: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.85rem',
          }}>
            <TrendingUp size={16} style={{ color: '#f97316', flexShrink: 0 }} />
            These are placeholder videos — upload your real travel videos from the Gallery page.
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {travelVideos.slice(0, 6).map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE BY CONTINENT ── */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(249,115,22,0.03) 50%, transparent 100%)',
      }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#f97316', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
              ✦ World Explorer
            </p>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>
              Explore the <span className="gradient-text">Entire World</span>
            </h2>
            <p className="section-subheading" style={{ margin: '0 auto' }}>
              Browse destinations by continent. From Asia to Antarctica — the world is your playground.
            </p>
          </div>

          {/* Continent tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 40 }}>
            {continents.map(c => (
              <button
                key={c.name}
                className="tab-btn"
                onClick={() => setActiveContinent(c.name)}
                style={{
                  background: activeContinent === c.name ? 'linear-gradient(135deg, #f97316, #ea580c)' : 'transparent',
                  borderColor: activeContinent === c.name ? 'transparent' : 'rgba(255,255,255,0.15)',
                  color: activeContinent === c.name ? 'white' : 'rgba(255,255,255,0.6)',
                }}
              >
                {c.emoji} {c.name}
              </button>
            ))}
          </div>

          {/* Continent detail */}
          {continents.filter(c => c.name === activeContinent).map(continent => (
            <div key={continent.name} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              padding: '32px',
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 24 }}>
                <span style={{ fontSize: '2rem' }}>{continent.emoji}</span>
                <div>
                  <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.4rem' }}>{continent.name}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    {continent.destinations} destination{continent.destinations !== 1 ? 's' : ''} featured
                  </p>
                </div>
                <Link to="/world" style={{ textDecoration: 'none', marginLeft: 'auto' }}>
                  <button className="btn-orange" style={{ padding: '9px 20px', fontSize: '0.85rem' }}>
                    Explore {continent.name} <ArrowRight size={14} />
                  </button>
                </Link>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {continent.countries.map(country => (
                  <div
                    key={country}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 50,
                      padding: '6px 16px',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = '#f97316';
                      (e.currentTarget as HTMLDivElement).style.color = '#f97316';
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(249,115,22,0.08)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
                      (e.currentTarget as HTMLDivElement).style.color = 'rgba(255,255,255,0.7)';
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)';
                    }}
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Featured Destinations for continent */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 20,
            marginTop: 24,
          }}>
            {destinations
              .filter(d => d.continent === activeContinent)
              .slice(0, 3)
              .map(dest => (
                <DestinationCard key={dest.id} destination={dest} size="sm" />
              ))}
          </div>
        </div>
      </section>

      {/* ── INDIA EXPLORER TEASER ── */}
      <section style={{ padding: '80px 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(234,88,12,0.05) 100%)',
            border: '1px solid rgba(249,115,22,0.2)',
            borderRadius: 28,
            padding: 'clamp(32px, 5vw, 56px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'center',
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(249,115,22,0.15)',
                borderRadius: 50,
                padding: '4px 14px',
                color: '#f97316',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 20,
              }}>
                🇮🇳 India Explorer
              </div>
              <h2 className="section-heading" style={{ marginBottom: 16 }}>
                Discover Every Corner<br />of <span className="gradient-text">Incredible India</span>
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 28 }}>
                From the snow-capped Himalayas to tropical Kerala beaches, from the Thar Desert to the Northeast's lush forests — explore all Indian states, cities, and hidden gems.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link to="/india" style={{ textDecoration: 'none' }}>
                  <button className="btn-orange">
                    Explore India <ArrowRight size={15} />
                  </button>
                </Link>
                <Link to="/india" style={{ textDecoration: 'none' }}>
                  <button className="btn-outline">
                    View All States
                  </button>
                </Link>
              </div>
            </div>

            {/* State pills */}
            <div style={{ flex: '1 1 280px', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {indiaStates.map(state => (
                <Link key={state.id} to={`/india/${state.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 50,
                    padding: '8px 16px',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(249,115,22,0.15)';
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(249,115,22,0.4)';
                      (e.currentTarget as HTMLDivElement).style.color = '#f97316';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)';
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
                      (e.currentTarget as HTMLDivElement).style.color = 'rgba(255,255,255,0.8)';
                    }}
                  >
                    <MapPin size={12} style={{ color: '#f97316' }} />
                    {state.name}
                    <ChevronRight size={12} style={{ color: '#f97316' }} />
                  </div>
                </Link>
              ))}
              <Link to="/india" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'rgba(249,115,22,0.15)',
                  border: '1px solid rgba(249,115,22,0.3)',
                  borderRadius: 50,
                  padding: '8px 16px',
                  color: '#f97316',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}>
                  +22 more states →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAVEL BLOGS ── */}
      <section style={{ padding: '80px 24px', paddingBottom: 100 }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 40 }}>
            <div>
              <p style={{ color: '#f97316', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                ✦ Travel Stories
              </p>
              <h2 className="section-heading orange-underline">
                From My Travel <br />Journals
              </h2>
            </div>
            <Link to="/blogs" style={{ textDecoration: 'none' }}>
              <button className="btn-outline" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
                All Stories <ArrowRight size={15} />
              </button>
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
