import { Link } from 'react-router-dom';
import { Heart, Plus, ChevronRight, CalendarDays, MapPin, Tag } from 'lucide-react';
import { useState } from 'react';
import { loadStoredWishlist, type WishlistItem } from '../data/travelData';

export default function MyWishlist() {
  const [wishlist] = useState<WishlistItem[]>(() => loadStoredWishlist());

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh', paddingTop: 80 }}>
      <section style={{
        padding: '60px 24px 48px',
        background: 'linear-gradient(135deg, rgba(139,92,246,0.07) 0%, transparent 60%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, color: '#64748b', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#8b5cf6' }}>My Wishlist</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12 }}>
            Places I Dream of <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Exploring Next</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 540, marginBottom: 24 }}>
            My personal travel wishlist — destinations I'm planning to visit, dream about, or have already booked.
          </p>
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <button className="btn-orange">
              <Plus size={15} /> Add to Wishlist
            </button>
          </Link>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {wishlist.length === 0 ? (
          <div style={{ textAlign: 'center', maxWidth: 440, margin: '0 auto' }}>
            <div style={{
              width: 96,
              height: 96,
              background: 'rgba(139,92,246,0.08)',
              border: '1px solid rgba(139,92,246,0.15)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <Heart size={36} style={{ color: '#8b5cf6' }} />
            </div>
            <h2 style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', marginBottom: 12 }}>
              Your Wishlist is Empty
            </h2>
            <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: 28 }}>
              Start saving destinations you want to visit. Set a status, planned date, and budget for each dream destination.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/india" style={{ textDecoration: 'none' }}>
                <button className="btn-orange">Explore India</button>
              </Link>
              <Link to="/world" style={{ textDecoration: 'none' }}>
                <button className="btn-outline">Explore World</button>
              </Link>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {wishlist.map(item => (
              <div key={item.id} style={{
                background: 'rgba(15,23,42,0.75)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 18,
                overflow: 'hidden',
              }}>
                <div style={{ padding: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                    <span className="category-pill" style={{ display: 'inline-flex', alignItems: 'center' }}>{item.status}</span>
                    {item.priority && <span style={{ color: '#fbbf24', fontSize: '0.72rem', fontWeight: 700 }}>Priority {item.priority}</span>}
                  </div>
                  <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', marginBottom: 10 }}>{item.name}</h3>
                  <div style={{ display: 'grid', gap: 8, color: '#94a3b8', fontSize: '0.82rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><MapPin size={14} style={{ color: '#8b5cf6' }} /> {item.country}</span>
                    {item.plannedDate && <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><CalendarDays size={14} style={{ color: '#8b5cf6' }} /> {item.plannedDate}</span>}
                    {item.budget && <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Tag size={14} style={{ color: '#8b5cf6' }} /> {item.budget}</span>}
                  </div>
                  {item.notes && <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.82rem', marginTop: 14 }}>{item.notes}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
