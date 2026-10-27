import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, ArrowRight, Search } from 'lucide-react';
import { continents, destinations } from '../data/travelData';
import DestinationCard from '../components/DestinationCard';

const worldCountries = [
  { name: 'Japan', continent: 'Asia', flag: '🇯🇵', highlight: 'Tokyo, Kyoto, Osaka' },
  { name: 'Indonesia', continent: 'Asia', flag: '🇮🇩', highlight: 'Bali, Jakarta, Lombok' },
  { name: 'Thailand', continent: 'Asia', flag: '🇹🇭', highlight: 'Bangkok, Chiang Mai, Phuket' },
  { name: 'UAE', continent: 'Asia', flag: '🇦🇪', highlight: 'Dubai, Abu Dhabi' },
  { name: 'Singapore', continent: 'Asia', flag: '🇸🇬', highlight: 'Marina Bay, Sentosa' },
  { name: 'Nepal', continent: 'Asia', flag: '🇳🇵', highlight: 'Kathmandu, Pokhara' },
  { name: 'France', continent: 'Europe', flag: '🇫🇷', highlight: 'Paris, Nice, Lyon' },
  { name: 'Italy', continent: 'Europe', flag: '🇮🇹', highlight: 'Rome, Venice, Florence' },
  { name: 'UK', continent: 'Europe', flag: '🇬🇧', highlight: 'London, Edinburgh' },
  { name: 'Switzerland', continent: 'Europe', flag: '🇨🇭', highlight: 'Zurich, Interlaken' },
  { name: 'Greece', continent: 'Europe', flag: '🇬🇷', highlight: 'Athens, Santorini' },
  { name: 'Spain', continent: 'Europe', flag: '🇪🇸', highlight: 'Barcelona, Madrid' },
  { name: 'USA', continent: 'North America', flag: '🇺🇸', highlight: 'New York, LA, Miami' },
  { name: 'Canada', continent: 'North America', flag: '🇨🇦', highlight: 'Toronto, Vancouver' },
  { name: 'Brazil', continent: 'South America', flag: '🇧🇷', highlight: 'Rio, São Paulo' },
  { name: 'Peru', continent: 'South America', flag: '🇵🇪', highlight: 'Machu Picchu, Lima' },
  { name: 'South Africa', continent: 'Africa', flag: '🇿🇦', highlight: 'Cape Town, Kruger' },
  { name: 'Kenya', continent: 'Africa', flag: '🇰🇪', highlight: 'Nairobi, Maasai Mara' },
  { name: 'Australia', continent: 'Oceania', flag: '🇦🇺', highlight: 'Sydney, Melbourne' },
  { name: 'New Zealand', continent: 'Oceania', flag: '🇳🇿', highlight: 'Auckland, Queenstown' },
];

export default function WorldExplorer() {
  const [activeContinent, setActiveContinent] = useState('Asia');
  const [search, setSearch] = useState('');

  const filteredCountries = worldCountries.filter(c =>
    c.continent === activeContinent &&
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const continentData = continents.find(c => c.name === activeContinent);

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh', paddingTop: 80 }}>

      {/* Hero */}
      <section style={{
        padding: '60px 24px 48px',
        background: 'linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 60%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, color: '#64748b', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#f97316' }}>World Explorer</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36 }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(59,130,246,0.12)',
                border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: 50,
                padding: '4px 14px',
                color: '#60a5fa',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: 16,
              }}>
                <Globe size={13} /> World Explorer
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12 }}>
                Explore Every <span style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Corner of Earth</span>
              </h1>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: 540, lineHeight: 1.7 }}>
                Continent → Country → City → Attraction. Browse destinations worldwide and find your next adventure.
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 12,
              padding: '12px 18px',
              width: '100%',
              maxWidth: 280,
            }}>
              <Search size={16} style={{ color: '#64748b' }} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search countries..."
                style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '0.9rem', flex: 1 }}
              />
            </div>
          </div>

          {/* Continent Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {continents.map(c => (
              <button
                key={c.name}
                onClick={() => setActiveContinent(c.name)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 50,
                  border: '1.5px solid',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: activeContinent === c.name ? 'linear-gradient(135deg, #f97316, #ea580c)' : 'transparent',
                  borderColor: activeContinent === c.name ? 'transparent' : 'rgba(255,255,255,0.15)',
                  color: activeContinent === c.name ? 'white' : 'rgba(255,255,255,0.6)',
                }}
              >
                {c.emoji} {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-6 py-12">

        {/* Continent Overview */}
        {continentData && (
          <div style={{
            background: 'rgba(249,115,22,0.06)',
            border: '1px solid rgba(249,115,22,0.15)',
            borderRadius: 20,
            padding: 28,
            marginBottom: 32,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            alignItems: 'center',
          }}>
            <div>
              <span style={{ fontSize: '3rem' }}>{continentData.emoji}</span>
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ color: 'white', fontWeight: 800, fontSize: '1.6rem', marginBottom: 4 }}>
                {continentData.name}
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
                {continentData.countries.length} countries featured · {continentData.destinations} destination{continentData.destinations !== 1 ? 's' : ''} in gallery
              </p>
            </div>
            <Link to={`/world/${continentData.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <button className="btn-orange" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
                Browse All <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        )}

        {/* Countries Grid */}
        <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: 20 }}>
          Countries in {activeContinent}
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 14,
          marginBottom: 40,
        }}>
          {filteredCountries.map(country => (
            <div
              key={country.name}
              className="glass-card"
              style={{ padding: '18px 20px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: '1.5rem' }}>{country.flag}</span>
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem' }}>{country.name}</div>
                  <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{country.highlight}</div>
                </div>
              </div>
              <button style={{
                background: 'transparent',
                border: 'none',
                color: '#f97316',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: 0,
              }}>
                Explore <ChevronRight size={12} />
              </button>
            </div>
          ))}

          {filteredCountries.length === 0 && (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '48px 20px',
              color: '#475569',
            }}>
              <Globe size={36} style={{ margin: '0 auto 12px', color: '#374151' }} />
              <p>No countries match your search.</p>
            </div>
          )}
        </div>

        {/* Featured Destinations for Continent */}
        <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: 20 }}>
          Featured Destinations in {activeContinent}
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {destinations.filter(d => d.continent === activeContinent).map(dest => (
            <DestinationCard key={dest.id} destination={dest} size="md" />
          ))}
          {destinations.filter(d => d.continent === activeContinent).length === 0 && (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '48px 20px',
              color: '#475569',
              background: 'rgba(255,255,255,0.02)',
              border: '1px dashed rgba(255,255,255,0.08)',
              borderRadius: 16,
            }}>
              <Globe size={36} style={{ margin: '0 auto 12px', color: '#374151' }} />
              <p>No featured destinations yet for {activeContinent}.</p>
              <p style={{ fontSize: '0.82rem', marginTop: 6 }}>Add destinations from the admin panel.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
