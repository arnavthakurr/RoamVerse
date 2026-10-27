import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Globe, Lock, ArrowRight } from 'lucide-react';
import { loadAdminSession, saveAdminSession } from '../data/travelData';

const DEMO_EMAIL = 'roamverse@admin.com';
const DEMO_PASSWORD = 'roamverse123';

export default function AdminLogin() {
  const navigate = useNavigate();
  const session = loadAdminSession();

  if (session) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [error, setError] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setError('Invalid credentials. Use the demo admin login below.');
      return;
    }

    saveAdminSession({
      email: DEMO_EMAIL,
      name: 'RoamVerse Admin',
      loggedInAt: new Date().toISOString(),
      isAdmin: true,
    });

    navigate('/admin/dashboard');
  };

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 24,
        padding: '48px 40px',
        width: '100%',
        maxWidth: 420,
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div style={{
            width: 60,
            height: 60,
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(249,115,22,0.4)',
          }}>
            <Globe size={28} color="white" />
          </div>
        </div>

        <h1 style={{ color: 'white', fontWeight: 800, fontSize: '1.6rem', marginBottom: 6, textAlign: 'center' }}>
          Admin Login
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: 24, textAlign: 'center' }}>
          Sign in to manage your RoamVerse content
        </p>

        <form onSubmit={handleLogin} style={{ display: 'grid', gap: 12 }}>
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.78rem', marginBottom: 8 }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={fieldStyle}
              placeholder="roamverse@admin.com"
            />
          </div>

          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.78rem', marginBottom: 8 }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={fieldStyle}
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#fecaca', borderRadius: 12, padding: '10px 12px', fontSize: '0.8rem' }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn-orange" style={{ justifyContent: 'center', width: '100%' }}>
            <Lock size={14} /> Sign in with Admin Access
          </button>
        </form>

        <div style={{
          background: 'rgba(249,115,22,0.08)',
          border: '1px solid rgba(249,115,22,0.2)',
          borderRadius: 16,
          padding: '16px 18px',
          marginTop: 20,
          marginBottom: 16,
          textAlign: 'left',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 700, marginBottom: 6 }}>Demo credentials</p>
          <p style={{ color: '#cbd5e1', fontSize: '0.8rem', margin: 0 }}>Email: {DEMO_EMAIL}</p>
          <p style={{ color: '#cbd5e1', fontSize: '0.8rem', margin: '4px 0 0' }}>Password: {DEMO_PASSWORD}</p>
        </div>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
            Back to Home <ArrowRight size={14} />
          </button>
        </Link>
      </div>
    </div>
  );
}

const fieldStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: 12,
  background: 'rgba(15,23,42,0.7)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: 'white',
  padding: '12px 14px',
  fontSize: '0.88rem',
  outline: 'none',
  boxSizing: 'border-box',
};
