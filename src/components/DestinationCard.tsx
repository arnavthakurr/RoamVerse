import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import type { Destination } from '../data/travelData';

interface DestinationCardProps {
  destination: Destination;
  size?: 'sm' | 'md' | 'lg';
}

export default function DestinationCard({ destination, size = 'md' }: DestinationCardProps) {
  const heights: Record<string, string> = {
    sm: '220px',
    md: '300px',
    lg: '380px',
  };

  return (
    <Link
      to={`/destinations/${destination.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        className="destination-card"
        style={{ height: heights[size] }}
      >
        {/* Image */}
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            inset: 0,
          }}
        />

        {/* Overlay */}
        <div className="overlay" />

        {/* Badges */}
        <div style={{
          position: 'absolute',
          top: 14,
          left: 14,
          right: 14,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          zIndex: 2,
        }}>
          <span className="category-pill">{destination.category}</span>
          {destination.visited && (
            <span className="badge-visited">✓ Visited</span>
          )}
          {destination.wishlist && !destination.visited && (
            <span className="badge-wishlist">♥ Wishlist</span>
          )}
        </div>

        {/* Content */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px 18px 18px',
          zIndex: 2,
        }}>
          {/* Rating */}
          {destination.rating && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              marginBottom: 8,
            }}>
              <Star size={12} fill="#f59e0b" stroke="none" />
              <span style={{ color: '#fbbf24', fontSize: '0.78rem', fontWeight: 700 }}>
                {destination.rating}
              </span>
            </div>
          )}

          {/* Name */}
          <h3 style={{
            color: 'white',
            fontSize: size === 'lg' ? '1.5rem' : '1.15rem',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 6,
          }}>
            {destination.name}
          </h3>

          {/* Location */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            marginBottom: 10,
          }}>
            <MapPin size={12} style={{ color: '#f97316' }} />
            <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem' }}>
              {destination.state ? `${destination.state}, ` : ''}{destination.country}
            </span>
          </div>

          {/* Description */}
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.82rem',
            lineHeight: 1.5,
            marginBottom: 12,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {destination.description}
          </p>

          {/* Explore button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            color: '#f97316',
            fontSize: '0.82rem',
            fontWeight: 700,
          }}>
            Explore More <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}
