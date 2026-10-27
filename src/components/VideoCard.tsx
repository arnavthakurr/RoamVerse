import { useState, useRef } from 'react';
import { Play, Clock, MapPin, Eye } from 'lucide-react';
import type { TravelVideo } from '../data/travelData';

interface VideoCardProps {
  video: TravelVideo;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPlayer(true);
    setPlaying(true);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
    }
  };

  return (
    <div className="video-card">
      {/* Thumbnail / Video */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: '#111827' }}>
        {showPlayer ? (
          <video
            ref={videoRef}
            src={video.videoUrl}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            autoPlay
            controls
            onClick={handleVideoClick}
            onEnded={() => setPlaying(false)}
          />
        ) : (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
            />
            {/* Dark overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
            }} />

            {/* Placeholder badge */}
            {video.placeholder && (
              <div style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'rgba(0,0,0,0.7)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.68rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: 50,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                Sample
              </div>
            )}

            {/* Duration badge */}
            <div style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              background: 'rgba(0,0,0,0.75)',
              color: 'white',
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}>
              <Clock size={10} /> {video.duration}
            </div>

            {/* Play button */}
            <button className="play-btn" onClick={handlePlay}>
              <Play size={20} fill="white" stroke="none" style={{ marginLeft: 3 }} />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '16px 16px 18px' }}>
        <div style={{ marginBottom: 8 }}>
          <span className="category-pill" style={{ fontSize: '0.72rem', marginBottom: 6, display: 'inline-block' }}>
            {video.category}
          </span>
        </div>

        <h3 style={{
          color: 'white',
          fontSize: '0.95rem',
          fontWeight: 700,
          lineHeight: 1.4,
          marginBottom: 8,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {video.title}
        </h3>

        <p style={{
          color: '#64748b',
          fontSize: '0.82rem',
          lineHeight: 1.5,
          marginBottom: 12,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {video.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#64748b', fontSize: '0.78rem' }}>
            <MapPin size={11} style={{ color: '#f97316' }} />
            {video.destination}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#64748b', fontSize: '0.78rem' }}>
            <Eye size={11} />
            {video.views}
          </div>
        </div>
      </div>
    </div>
  );
}
