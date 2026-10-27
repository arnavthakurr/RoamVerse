import { Link } from 'react-router-dom';
import { MapPin, Calendar, Image, ChevronRight, Plus } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import { destinations, loadStoredVisitedDestinations } from '../data/travelData';

export default function MyJourney() {
  const visitedIds = loadStoredVisitedDestinations();
  const visitedDestinations = destinations.filter(d => visitedIds.includes(d.id));

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh', paddingTop: 80 }}>
      {/* Hero */}
      <section style={{
        padding: '60px 24px 48px',
        background: 'linear-gradient(135deg, rgba(16,185,129,0.07) 0%, transparent 60%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, color: '#64748b', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#10b981' }}>My Journey</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ maxWidth: 600 }}>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12 }}>
                Places I've <span style={{ background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Personally Explored</span>
              </h1>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 20 }}>
                This page documents places I have <strong style={{ color: 'white' }}>personally visited</strong>. Only destinations I explicitly mark as visited appear here — no auto-generated history.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: 50,
                padding: '6px 16px',
                color: '#10b981',
                fontSize: '0.82rem',
                fontWeight: 600,
              }}>
                ✓ {visitedDestinations.length} Places Visited
              </div>
            </div>

            <Link to="/admin" style={{ textDecoration: 'none' }}>
              <button className="btn-orange">
                <Plus size={16} /> Add Visited Place
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {visitedDestinations.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {visitedDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} size="md" />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div style={{
            textAlign: 'center',
            padding: '80px 24px',
            maxWidth: 480,
            margin: '0 auto',
          }}>
            <div style={{
              width: 96,
              height: 96,
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.15)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <MapPin size={36} style={{ color: '#10b981' }} />
            </div>
            <h2 style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', marginBottom: 12 }}>
              Your Journey Starts Here
            </h2>
            <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: 28 }}>
              You haven't marked any destinations as visited yet. Sign in as admin to start documenting your travel story.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/admin" style={{ textDecoration: 'none' }}>
                <button className="btn-orange">
                  <Plus size={15} /> Add First Visit
                </button>
              </Link>
              <Link to="/india" style={{ textDecoration: 'none' }}>
                <button className="btn-outline">
                  Browse Destinations
                </button>
              </Link>
            </div>

            {/* Info boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 48 }}>
              {[
                { icon: <MapPin size={20} />, label: 'Mark Visited', desc: 'From any destination page' },
                { icon: <Image size={20} />, label: 'Add Photos', desc: 'Upload from your gallery' },
                { icon: <Calendar size={20} />, label: 'Add Date', desc: 'Record when you visited' },
              ].map(item => (
                <div key={item.label} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  padding: '16px 12px',
                  textAlign: 'center',
                }}>
                  <div style={{ color: '#f97316', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '0.82rem', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ color: '#475569', fontSize: '0.72rem' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
