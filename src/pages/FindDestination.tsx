import { useState } from 'react';

import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, ArrowRight, Shuffle } from 'lucide-react';
import { destinations } from '../data/travelData';
import DestinationCard from '../components/DestinationCard';

const questions = [
  {
    id: 'region',
    question: 'Where would you like to travel?',
    options: ['India', 'International', 'Anywhere'],
  },
  {
    id: 'experience',
    question: 'What kind of experience are you looking for?',
    options: ['Mountains', 'Beaches', 'Adventure', 'Nature', 'Historical Places', 'Spiritual', 'Food & Culture', 'City Life', 'Romantic', 'Road Trips'],
    multi: true,
  },
  {
    id: 'budget',
    question: 'What is your budget?',
    options: ['Budget-Friendly', 'Moderate', 'Premium', 'Luxury', 'Flexible'],
  },
  {
    id: 'duration',
    question: 'How long is your trip?',
    options: ['One Day', 'Weekend', '3–5 Days', 'One Week', 'More Than One Week'],
  },
  {
    id: 'group',
    question: 'Who are you travelling with?',
    options: ['Solo', 'Friends', 'Family', 'Partner'],
  },
];

export default function FindDestination() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQ = questions[step];

  const handleSelect = (option: string) => {
    if (currentQ.multi) {
      const current = (answers[currentQ.id] as string[]) || [];
      const updated = current.includes(option)
        ? current.filter(o => o !== option)
        : [...current, option];
      setAnswers(prev => ({ ...prev, [currentQ.id]: updated }));
    } else {
      setAnswers(prev => ({ ...prev, [currentQ.id]: option }));
      if (step < questions.length - 1) {
        setTimeout(() => setStep(s => s + 1), 300);
      } else {
        setTimeout(() => setShowResults(true), 300);
      }
    }
  };

  const isSelected = (option: string) => {
    const val = answers[currentQ?.id];
    if (Array.isArray(val)) return val.includes(option);
    return val === option;
  };

  const getRecommendations = () => {
    const region = answers.region as string;
    let filtered = [...destinations];

    if (region === 'India') filtered = filtered.filter(d => d.country === 'India');
    if (region === 'International') filtered = filtered.filter(d => d.country !== 'India');

    const experience = answers.experience as string[];
    if (experience && experience.length > 0) {
      const categoryMap: Record<string, string> = {
        'Mountains': 'Mountains',
        'Beaches': 'Beaches',
        'Adventure': 'Adventure',
        'Nature': 'Nature',
        'Historical Places': 'Historical',
        'Spiritual': 'Religious',
        'City Life': 'City',
      };
      const mapped = experience.map(e => categoryMap[e]).filter(Boolean);
      if (mapped.length > 0) {
        filtered = filtered.filter(d => mapped.includes(d.category));
      }
    }

    return filtered.length > 0 ? filtered : destinations;
  };

  const handleSurprise = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  };

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
            <span style={{ color: '#f97316' }}>Find Your Adventure</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12 }}>
            Find Your <span style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Next Adventure</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 540 }}>
            Answer a few quick questions and discover destinations perfectly matched to your travel style.
          </p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {!showResults ? (
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {/* Progress */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ color: '#64748b', fontSize: '0.82rem' }}>Question {step + 1} of {questions.length}</span>
                <span style={{ color: '#f97316', fontSize: '0.82rem', fontWeight: 600 }}>
                  {Math.round(((step) / questions.length) * 100)}% complete
                </span>
              </div>
              <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
                <div style={{
                  height: '100%',
                  width: `${((step) / questions.length) * 100}%`,
                  background: 'linear-gradient(90deg, #f97316, #fbbf24)',
                  borderRadius: 2,
                  transition: 'width 0.4s ease',
                }} />
              </div>
            </div>

            {/* Question */}
            <h2 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 800, marginBottom: 28 }}>
              {currentQ.question}
            </h2>

            {/* Options */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, marginBottom: 28 }}>
              {currentQ.options.map(option => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  style={{
                    padding: '14px 18px',
                    borderRadius: 14,
                    border: '1.5px solid',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                    background: isSelected(option) ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.03)',
                    borderColor: isSelected(option) ? '#f97316' : 'rgba(255,255,255,0.1)',
                    color: isSelected(option) ? '#f97316' : 'rgba(255,255,255,0.8)',
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Multi-select next button */}
            {currentQ.multi && (
              <button
                className="btn-orange"
                onClick={() => {
                  if (step < questions.length - 1) setStep(s => s + 1);
                  else setShowResults(true);
                }}
              >
                Next <ArrowRight size={15} />
              </button>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', gap: 12, marginTop: 20, alignItems: 'center' }}>
              {step > 0 && (
                <button
                  className="btn-outline"
                  style={{ padding: '9px 20px', fontSize: '0.85rem' }}
                  onClick={() => setStep(s => s - 1)}
                >
                  Back
                </button>
              )}
              <button
                onClick={handleSurprise}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginLeft: 'auto',
                }}
              >
                <Shuffle size={14} /> Surprise Me!
              </button>
            </div>
          </div>
        ) : (
          /* Results */
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 32 }}>
              <div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)',
                  borderRadius: 50, padding: '4px 14px', color: '#f97316', fontSize: '0.8rem', fontWeight: 700, marginBottom: 12,
                }}>
                  <Sparkles size={13} /> Personalized Recommendations
                </div>
                <h2 style={{ color: 'white', fontWeight: 800, fontSize: '1.6rem' }}>
                  Your Perfect Destinations
                </h2>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: 6 }}>
                  Based on your preferences — {getRecommendations().length} destinations found
                </p>
              </div>
              <button
                className="btn-outline"
                style={{ padding: '9px 20px', fontSize: '0.85rem' }}
                onClick={handleReset}
              >
                Refine Preferences
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
              {getRecommendations().map(dest => (
                <DestinationCard key={dest.id} destination={dest} size="md" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
