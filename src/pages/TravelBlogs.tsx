import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { loadStoredBlogs } from '../data/travelData';

export default function TravelBlogs() {
  const [posts] = useState(() => loadStoredBlogs());

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh', paddingTop: 80 }}>
      {/* Hero */}
      <section style={{
        padding: '60px 24px 48px',
        background: 'linear-gradient(135deg, rgba(249,115,22,0.07) 0%, transparent 60%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, color: '#64748b', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#f97316' }}>Travel Stories</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12 }}>
            Stories from <span style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>My Journeys</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 540 }}>
            Personal travel stories, road trip diaries, hidden gems, and adventures from across India and the world.
          </p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/* Featured post */}
        {posts.length > 0 && (
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: 20 }}>Featured Story</h2>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            }}
              className="featured-blog-grid"
            >
              <div style={{ height: 320, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={posts[0].coverImage}
                  alt={posts[0].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 70%, rgba(17,24,39,0.8))' }} />
              </div>
              <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="category-pill" style={{ marginBottom: 16, display: 'inline-block' }}>{posts[0].category}</span>
                <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.4rem', lineHeight: 1.3, marginBottom: 16 }}>
                  {posts[0].title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: 20, fontSize: '0.9rem' }}>
                  {posts[0].excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} /> {posts[0].readTime}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={12} style={{ color: '#f97316' }} /> {posts[0].destination}
                  </span>
                </div>
                <Link to={`/blogs/${posts[0].slug}`} style={{ textDecoration: 'none' }}>
                  <button className="btn-orange" style={{ width: 'fit-content' }}>
                    Read Story <ArrowRight size={15} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* All blogs grid */}
        <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: 20 }}>All Stories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {posts.map(post => (
            <Link key={post.id} to={`/blogs/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div className="blog-card">
                <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
                  <span className="category-pill" style={{ position: 'absolute', top: 12, left: 12 }}>{post.category}</span>
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}>{post.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.83rem', lineHeight: 1.6, marginBottom: 16, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#475569', fontSize: '0.78rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={11} /> {post.readTime}
                    </span>
                    <span style={{ color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
