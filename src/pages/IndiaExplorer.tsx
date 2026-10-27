import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Search } from 'lucide-react';
import { indiaStates, destinations } from '../data/travelData';
import DestinationCard from '../components/DestinationCard';

export default function IndiaExplorer() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const currentState = indiaStates.find(s => s.id === selectedState);

  const filteredStates = indiaStates.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.region.toLowerCase().includes(search.toLowerCase())
  );

  const indiaDestinations = destinations.filter(d => d.country === 'India');

  const regions = ['All', 'North India', 'South India', 'West India', 'East India', 'Central India', 'Northeast India'];
  const [activeRegion, setActiveRegion] = useState('All');

  const regionFilteredStates = filteredStates.filter(s =>
    activeRegion === 'All' || s.region === activeRegion
  );

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh', paddingTop: 80 }}>

      {/* Hero */}
      <section style={{
        padding: '60px 24px 48px',
        background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 60%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, color: '#64748b', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#f97316' }}>India Explorer</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(249,115,22,0.12)',
                border: '1px solid rgba(249,115,22,0.2)',
                borderRadius: 50,
                padding: '4px 14px',
                color: '#f97316',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: 16,
              }}>
                🇮🇳 India Explorer
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12 }}>
                Discover <span style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Incredible India</span>
              </h1>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: 540, lineHeight: 1.7 }}>
                Explore destinations across all Indian states and union territories — from Himalayan peaks to southern shores.
              </p>
            </div>

            {/* Search */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 12,
              padding: '12px 18px',
              width: '100%',
              maxWidth: 300,
            }}>
              <Search size={16} style={{ color: '#64748b' }} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search states, cities..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'white',
                  fontSize: '0.9rem',
                  flex: 1,
                }}
              />
            </div>
          </div>

          {/* Region filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                className="tab-btn"
                style={{
                  background: activeRegion === r ? 'linear-gradient(135deg, #f97316, #ea580c)' : 'transparent',
                  borderColor: activeRegion === r ? 'transparent' : 'rgba(255,255,255,0.15)',
                  color: activeRegion === r ? 'white' : 'rgba(255,255,255,0.6)',
                  padding: '7px 16px',
                  fontSize: '0.82rem',
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div style={{ display: 'grid', gridTemplateColumns: selectedState ? '280px 1fr' : '1fr', gap: 28, alignItems: 'start' }}>

          {/* State List */}
          <div>
            <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: 16 }}>
              States & Union Territories
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {regionFilteredStates.map(state => (
                <button
                  key={state.id}
                  onClick={() => setSelectedState(selectedState === state.id ? null : state.id)}
                  style={{
                    background: selectedState === state.id ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${selectedState === state.id ? 'rgba(249,115,22,0.4)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 12,
                    padding: '14px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                    width: '100%',
                  }}
                  onMouseEnter={e => {
                    if (selectedState !== state.id) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(249,115,22,0.3)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (selectedState !== state.id) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ color: selectedState === state.id ? '#f97316' : 'white', fontWeight: 600, fontSize: '0.92rem', marginBottom: 2 }}>
                        {state.name}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{state.region}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>{state.cities.length} cities</span>
                      <ChevronRight size={14} style={{ color: selectedState === state.id ? '#f97316' : '#475569' }} />
                    </div>
                  </div>
                </button>
              ))}

              {/* Placeholder for remaining states */}
              {activeRegion === 'All' && !search && (
                <div style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px dashed rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: '14px 16px',
                  textAlign: 'center',
                  color: '#475569',
                  fontSize: '0.82rem',
                }}>
                  + 22 more states available in full version
                </div>
              )}
            </div>
          </div>

          {/* State Detail */}
          {selectedState && currentState ? (
            <div>
              <div style={{
                background: 'rgba(249,115,22,0.06)',
                border: '1px solid rgba(249,115,22,0.15)',
                borderRadius: 20,
                padding: 28,
                marginBottom: 24,
              }}>
                <h2 style={{ color: 'white', fontWeight: 800, fontSize: '1.6rem', marginBottom: 8 }}>
                  {currentState.name}
                </h2>
                <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 20 }}>
                  {currentState.description}
                </p>

                {/* Cities grid */}
                <h3 style={{ color: 'white', fontWeight: 700, marginBottom: 14, fontSize: '0.95rem' }}>
                  Top Cities & Destinations
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
                  {currentState.cities.map(city => (
                    <Link
                      key={city.slug}
                      to={`/destinations/india/${currentState.id}/${city.slug}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="state-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                          <MapPin size={14} style={{ color: '#f97316', flexShrink: 0 }} />
                          <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>{city.name}</span>
                        </div>
                        <div style={{ color: '#64748b', fontSize: '0.78rem', marginBottom: 8 }}>{city.description}</div>
                        <span className="category-pill" style={{ fontSize: '0.7rem' }}>{city.type}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Destinations for this state */}
              <div>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: 16 }}>
                  Featured Destinations in {currentState.name}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
                  {destinations.filter(d => d.state === currentState.name).map(dest => (
                    <DestinationCard key={dest.id} destination={dest} size="md" />
                  ))}
                  {destinations.filter(d => d.state === currentState.name).length === 0 && (
                    <div style={{
                      gridColumn: '1 / -1',
                      textAlign: 'center',
                      padding: '40px 20px',
                      color: '#475569',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px dashed rgba(255,255,255,0.08)',
                      borderRadius: 16,
                    }}>
                      <MapPin size={32} style={{ color: '#374151', margin: '0 auto 12px' }} />
                      <p>No featured destinations yet for {currentState.name}.</p>
                      <p style={{ fontSize: '0.82rem', marginTop: 6 }}>Add destinations from the admin panel.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* India overview when no state selected */
            <div>
              {/* All India Destinations */}
              <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', marginBottom: 20 }}>
                All Featured India Destinations
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
                {indiaDestinations.map(dest => (
                  <DestinationCard key={dest.id} destination={dest} size="md" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
