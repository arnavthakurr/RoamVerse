import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CalendarRange, Compass, Heart, MapPin, Star, TimerReset, CheckCircle2 } from 'lucide-react';
import {
  loadStoredDestinations,
  loadStoredVisitedDestinations,
  loadStoredWishlist,
  saveWishlistItem,
  toggleDestinationVisit,
  type Destination,
  travelVideos,
  blogPosts,
  indiaStates,
} from '../data/travelData';

export default function DestinationDetail() {
  const { pathname } = useLocation();
  const allDestinations = useMemo(() => loadStoredDestinations(), []);

  const slugFromPath = decodeURIComponent(pathname.replace(/^\/destinations\/?/, '')).replace(/^\/+|\/+$/g, '');
  const matchedDestination = useMemo<Destination | undefined>(() => {
    if (!slugFromPath) return allDestinations[0];

    return allDestinations.find(destination => (
      destination.slug === slugFromPath ||
      destination.slug.endsWith(`/${slugFromPath.split('/').at(-1) ?? ''}`) ||
      slugFromPath.endsWith(destination.slug)
    ));
  }, [allDestinations, slugFromPath]);

  const [visited, setVisited] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    if (!matchedDestination) return;
    const visitedIds = loadStoredVisitedDestinations();
    const wishlist = loadStoredWishlist();
    setVisited(visitedIds.includes(matchedDestination.id));
    setWishlisted(wishlist.some(item => item.name === matchedDestination.name));
  }, [matchedDestination]);

  if (!matchedDestination) {
    return (
      <div style={{ background: 'var(--navy)', minHeight: '100vh', paddingTop: 80, display: 'grid', placeItems: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 800 }}>Destination not found</h1>
          <p style={{ color: '#94a3b8', marginBottom: 24 }}>This travel story is not on the map yet.</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="btn-orange">Return Home</button>
          </Link>
        </div>
      </div>
    );
  }

  const similarDestinations = allDestinations
    .filter(item => item.country === matchedDestination.country && item.id !== matchedDestination.id)
    .slice(0, 3);

  const destinationVideos = travelVideos.filter(video => video.destination.toLowerCase().includes(matchedDestination.name.toLowerCase()) || video.category === matchedDestination.category).slice(0, 2);
  const relatedBlog = blogPosts.filter(post => post.destination.toLowerCase().includes(matchedDestination.name.toLowerCase()) || post.category === matchedDestination.category).slice(0, 2);
  const stateMeta = indiaStates.find(state => state.name === matchedDestination.state);

  const handleToggleVisit = () => {
    const next = !visited;
    setVisited(next);
    toggleDestinationVisit(matchedDestination.id, next);
  };

  const handleToggleWishlist = () => {
    const next = !wishlisted;
    setWishlisted(next);

    if (next) {
      saveWishlistItem({
        id: `wishlist-${matchedDestination.id}`,
        name: matchedDestination.name,
        country: matchedDestination.country,
        status: 'Dream Destination',
        notes: `Planned for ${matchedDestination.bestTime ?? 'the next trip'}`,
        image: matchedDestination.image,
        priority: 1,
      });
    }
  };

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh', paddingTop: 80 }}>
      <section style={{ padding: '48px 24px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', fontSize: '0.85rem', marginBottom: 18 }}>
            <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link to="/world" style={{ color: '#64748b', textDecoration: 'none' }}>World Explorer</Link>
            <span>/</span>
            <span style={{ color: '#f97316' }}>{matchedDestination.name}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 28, alignItems: 'stretch' }}>
            <div style={{ position: 'relative', borderRadius: 26, overflow: 'hidden', minHeight: 420 }}>
              <img src={matchedDestination.image} alt={matchedDestination.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0.8), rgba(15,23,42,0.1))' }} />
              <div style={{ position: 'absolute', inset: 0, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <span className="category-pill" style={{ width: 'fit-content', marginBottom: 12 }}>{matchedDestination.category}</span>
                <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 900, margin: '0 0 10px' }}>{matchedDestination.name}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#cbd5e1', fontSize: '0.9rem', marginBottom: 8 }}>
                  <MapPin size={16} style={{ color: '#f97316' }} />
                  {matchedDestination.state ? `${matchedDestination.state}, ` : ''}{matchedDestination.country}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fbbf24', fontWeight: 700 }}>
                  <Star size={15} fill="#fbbf24" stroke="none" />
                  {matchedDestination.rating ?? 4.8}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 20 }}>
                <h2 style={{ color: 'white', fontWeight: 800, marginBottom: 16 }}>Travel Snapshot</h2>
                <div style={{ display: 'grid', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#cbd5e1' }}><CalendarRange size={16} style={{ color: '#f97316' }} /> Best time: {matchedDestination.bestTime ?? 'Any time of year'}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#cbd5e1' }}><Compass size={16} style={{ color: '#f97316' }} /> Region: {matchedDestination.continent}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#cbd5e1' }}><TimerReset size={16} style={{ color: '#f97316' }} /> Ideal stay: 2–5 days</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn-orange" onClick={handleToggleVisit}>
                  {visited ? <CheckCircle2 size={14} /> : <MapPin size={14} />} {visited ? 'Marked as Visited' : 'Mark as Visited'}
                </button>
                <button className="btn-outline" onClick={handleToggleWishlist}>
                  <Heart size={14} fill={wishlisted ? '#f472b6' : 'none'} style={{ color: wishlisted ? '#f472b6' : '#fff' }} /> {wishlisted ? 'Saved to Wishlist' : 'Save to Wishlist'}
                </button>
              </div>

              {stateMeta && (
                <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.18)', borderRadius: 18, padding: 18 }}>
                  <div style={{ color: '#34d399', fontWeight: 700, fontSize: '0.8rem', marginBottom: 8 }}>State guide</div>
                  <div style={{ color: 'white', fontWeight: 700, marginBottom: 8 }}>{stateMeta.name}</div>
                  <p style={{ color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>{stateMeta.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div style={{ display: 'grid', gap: 28 }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
            <h2 style={{ color: 'white', fontWeight: 800, marginBottom: 12 }}>Why this place stands out</h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.8, margin: 0 }}>{matchedDestination.description}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {['Local culture', 'Scenic stops', 'Food & cafés', 'Best photo spots'].map((item, index) => (
              <div key={item} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 18 }}>
                <div style={{ color: '#f97316', fontWeight: 800, fontSize: '0.8rem', marginBottom: 8 }}>0{index + 1}</div>
                <div style={{ color: 'white', fontWeight: 700 }}>{item}</div>
              </div>
            ))}
          </div>

          {similarDestinations.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <h2 style={{ color: 'white', fontWeight: 800, margin: 0 }}>Similar in {matchedDestination.country}</h2>
                <Link to="/world" style={{ color: '#f97316', textDecoration: 'none', fontWeight: 700 }}>View all</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                {similarDestinations.map(item => (
                  <Link key={item.id} to={`/destinations/${item.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, overflow: 'hidden' }}>
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                      <div style={{ padding: 16 }}>
                        <div style={{ color: 'white', fontWeight: 700, marginBottom: 6 }}>{item.name}</div>
                        <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>{item.category}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {(destinationVideos.length > 0 || relatedBlog.length > 0) && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {destinationVideos.length > 0 && (
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 20 }}>
                  <h3 style={{ color: 'white', fontWeight: 800, marginBottom: 16 }}>Quick videos</h3>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {destinationVideos.map(video => (
                      <a key={video.id} href={video.videoUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', gap: 12, textDecoration: 'none', color: 'inherit' }}>
                        <img src={video.thumbnail} alt={video.title} style={{ width: 112, height: 76, objectFit: 'cover', borderRadius: 12 }} />
                        <div>
                          <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem', marginBottom: 4 }}>{video.title}</div>
                          <div style={{ color: '#94a3b8', fontSize: '0.76rem' }}>{video.duration}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {relatedBlog.length > 0 && (
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 20 }}>
                  <h3 style={{ color: 'white', fontWeight: 800, marginBottom: 16 }}>Travel stories</h3>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {relatedBlog.map(post => (
                      <Link key={post.id} to={`/blogs/${post.slug}`} style={{ display: 'flex', gap: 12, textDecoration: 'none', color: 'inherit' }}>
                        <img src={post.coverImage} alt={post.title} style={{ width: 112, height: 76, objectFit: 'cover', borderRadius: 12 }} />
                        <div>
                          <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem', marginBottom: 4 }}>{post.title}</div>
                          <div style={{ color: '#94a3b8', fontSize: '0.76rem' }}>{post.readTime}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/find" style={{ textDecoration: 'none' }}>
              <button className="btn-outline">Find another trip</button>
            </Link>
            <Link to="/india" style={{ textDecoration: 'none' }}>
              <button className="btn-orange">Explore more destinations <ArrowRight size={14} /></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
