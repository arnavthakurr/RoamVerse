import { Link } from 'react-router-dom';
import { ChevronRight, Upload, Play } from 'lucide-react';
import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { loadStoredGallery, travelVideos, type GalleryItem } from '../data/travelData';

const categories = ['All', 'Mountains', 'Religious', 'Historical', 'Adventure', 'Nature', 'City', 'Beaches'];

export default function TravelGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'videos' | 'photos'>('videos');
  const [galleryItems] = useState<GalleryItem[]>(() => loadStoredGallery());

  const customVideoEntries = galleryItems.filter(item => item.type === 'video');
  const allVideos = [...customVideoEntries.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    thumbnail: item.url,
    videoUrl: item.url,
    destination: item.destination,
    duration: '15s',
    date: item.date,
    views: 'New',
    category: item.category,
    placeholder: true,
  })), ...travelVideos];

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
            <span style={{ color: '#f97316' }}>Travel Gallery</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
            <div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12 }}>
                My <span style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Travel Gallery</span>
              </h1>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 540 }}>
                Travel videos and photographs from my journeys. Placeholder content is included below — upload your own from the admin panel.
              </p>
            </div>
            <Link to="/admin" style={{ textDecoration: 'none' }}>
              <button className="btn-orange">
                <Upload size={15} /> Upload Media
              </button>
            </Link>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {(['videos', 'photos'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 50,
                  border: '1.5px solid',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  background: activeTab === tab ? 'linear-gradient(135deg, #f97316, #ea580c)' : 'transparent',
                  borderColor: activeTab === tab ? 'transparent' : 'rgba(255,255,255,0.15)',
                  color: activeTab === tab ? 'white' : 'rgba(255,255,255,0.6)',
                  textTransform: 'capitalize',
                }}
              >
                {tab === 'videos' ? <><Play size={14} style={{ display: 'inline', marginRight: 6 }} />Videos</> : '📷 Photos'}
              </button>
            ))}
          </div>

          {/* Category filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="tab-btn"
                style={{
                  background: activeCategory === cat ? 'linear-gradient(135deg, #f97316, #ea580c)' : 'transparent',
                  borderColor: activeCategory === cat ? 'transparent' : 'rgba(255,255,255,0.15)',
                  color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.6)',
                  padding: '7px 16px',
                  fontSize: '0.82rem',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {activeTab === 'videos' ? (
          <>
            {/* Placeholder notice */}
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
              📹 These are <strong style={{ color: '#f97316' }}>sample placeholder videos</strong>. Upload your own real travel videos from the admin panel to replace them.
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {(activeCategory === 'All' ? allVideos : allVideos.filter(video => video.category === activeCategory)).map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </>
        ) : (
          /* Photo Gallery */
          <div>
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
              📷 Destination photos are shown below as a preview gallery. Upload your own photos from the admin panel.
            </div>

            {/* Masonry-style photo grid */}
            <div style={{
              columns: '3 280px',
              gap: 16,
            }}>
              {[
                ...galleryItems.filter(item => item.type === 'photo').map(item => ({ src: item.url, label: item.destination })),
                { src: '/varanasi.png', label: 'Varanasi' },
                { src: '/manali.png', label: 'Manali' },
                { src: '/jaipur.png', label: 'Jaipur' },
                { src: '/rishikesh.png', label: 'Rishikesh' },
                { src: '/kerala.png', label: 'Kerala' },
                { src: '/agra.png', label: 'Agra' },
                { src: '/bali.png', label: 'Bali' },
                { src: '/paris.png', label: 'Paris' },
                { src: '/tokyo.png', label: 'Tokyo' },
              ].map(photo => (
                <div
                  key={photo.src}
                  style={{
                    position: 'relative',
                    borderRadius: 14,
                    overflow: 'hidden',
                    marginBottom: 16,
                    breakInside: 'avoid',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    const overlay = (e.currentTarget as HTMLDivElement).querySelector('.photo-overlay') as HTMLDivElement;
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={e => {
                    const overlay = (e.currentTarget as HTMLDivElement).querySelector('.photo-overlay') as HTMLDivElement;
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }}
                    loading="lazy"
                    onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                  <div
                    className="photo-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '14px',
                    }}
                  >
                    <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>{photo.label}</span>
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: 50,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    Sample
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
