import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import IndiaExplorer from './pages/IndiaExplorer';
import WorldExplorer from './pages/WorldExplorer';
import MyJourney from './pages/MyJourney';
import MyWishlist from './pages/MyWishlist';
import FindDestination from './pages/FindDestination';
import TravelGallery from './pages/TravelGallery';
import TravelBlogs from './pages/TravelBlogs';
import AboutMe from './pages/AboutMe';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import DestinationDetail from './pages/DestinationDetail';

function NotFound() {
  return (
    <div style={{
      background: 'var(--navy)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 24,
    }}>
      <div style={{ fontSize: '5rem', marginBottom: 16 }}>🗺️</div>
      <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>Page Not Found</h1>
      <p style={{ color: '#64748b', marginBottom: 28 }}>This destination doesn't exist on our map yet.</p>
      <a href="/" style={{ textDecoration: 'none' }}>
        <button className="btn-orange">Back to Home</button>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/india" element={<IndiaExplorer />} />
          <Route path="/india/:stateId" element={<IndiaExplorer />} />
          <Route path="/world" element={<WorldExplorer />} />
          <Route path="/world/:continent" element={<WorldExplorer />} />
          <Route path="/journey" element={<MyJourney />} />
          <Route path="/wishlist" element={<MyWishlist />} />
          <Route path="/find" element={<FindDestination />} />
          <Route path="/gallery" element={<TravelGallery />} />
          <Route path="/blogs" element={<TravelBlogs />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/destinations/*" element={<DestinationDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
