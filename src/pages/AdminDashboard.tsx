import { useMemo, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon, LogOut, NotebookPen, Plus, ShieldCheck, Sparkles } from 'lucide-react';
import {
  clearAdminSession,
  loadAdminSession,
  loadStoredBlogs,
  loadStoredGallery,
  loadStoredWishlist,
  saveBlogPost,
  saveGalleryItem,
  saveWishlistItem,
  type BlogPost,
  type GalleryItem,
  type WishlistItem,
} from '../data/travelData';

const defaultWishlist: {
  name: string;
  country: string;
  status: WishlistItem['status'];
  plannedDate: string;
  budget: string;
  notes: string;
  image: string;
  priority: number;
} = {
  name: '',
  country: 'India',
  status: 'Dream Destination',
  plannedDate: '',
  budget: '',
  notes: '',
  image: '',
  priority: 1,
};

const defaultGallery: {
  title: string;
  description: string;
  destination: string;
  date: string;
  category: string;
  type: GalleryItem['type'];
  url: string;
} = {
  title: '',
  description: '',
  destination: 'Varanasi',
  date: new Date().toISOString().slice(0, 10),
  category: 'Travel',
  type: 'photo',
  url: '',
};

const defaultBlog = {
  title: '',
  excerpt: '',
  destination: 'Varanasi',
  category: 'Travel',
  author: 'RoamVerse',
  coverImage: '',
  date: new Date().toISOString().slice(0, 10),
  readTime: '5 min read',
  slug: '',
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const session = useMemo(() => loadAdminSession(), []);

  if (!session) {
    return <Navigate to="/admin" replace />;
  }

  const [wishlistForm, setWishlistForm] = useState(defaultWishlist);
  const [galleryForm, setGalleryForm] = useState(defaultGallery);
  const [blogForm, setBlogForm] = useState(defaultBlog);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => loadStoredWishlist());
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => loadStoredGallery());
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => loadStoredBlogs());

  const handleWishlistSave = (event: React.FormEvent) => {
    event.preventDefault();

    const item: WishlistItem = {
      id: `wishlist-${Date.now()}`,
      name: wishlistForm.name,
      country: wishlistForm.country,
      status: wishlistForm.status,
      plannedDate: wishlistForm.plannedDate || undefined,
      budget: wishlistForm.budget || undefined,
      notes: wishlistForm.notes || undefined,
      image: wishlistForm.image || undefined,
      priority: wishlistForm.priority,
    };

    saveWishlistItem(item);
    setWishlistItems(prev => [item, ...prev]);
    setWishlistForm(defaultWishlist);
  };

  const handleGallerySave = (event: React.FormEvent) => {
    event.preventDefault();

    const item: GalleryItem = {
      id: `gallery-${Date.now()}`,
      title: galleryForm.title,
      description: galleryForm.description,
      destination: galleryForm.destination,
      date: galleryForm.date,
      category: galleryForm.category,
      type: galleryForm.type,
      url: galleryForm.url,
    };

    saveGalleryItem(item);
    setGalleryItems(prev => [item, ...prev]);
    setGalleryForm(defaultGallery);
  };

  const handleBlogSave = (event: React.FormEvent) => {
    event.preventDefault();

    const item: BlogPost = {
      id: `blog-${Date.now()}`,
      title: blogForm.title,
      excerpt: blogForm.excerpt,
      content: blogForm.excerpt,
      coverImage: blogForm.coverImage || '/varanasi.png',
      author: blogForm.author,
      date: blogForm.date,
      readTime: blogForm.readTime,
      destination: blogForm.destination,
      category: blogForm.category,
      tags: [blogForm.category.toLowerCase()],
      slug: blogForm.slug || blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    };

    saveBlogPost(item);
    setBlogPosts(prev => [item, ...prev]);
    setBlogForm(defaultBlog);
  };

  const handleLogout = () => {
    clearAdminSession();
    navigate('/');
  };

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh', padding: '96px 24px 48px' }}>
      <div className="max-w-screen-xl mx-auto">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 28, flexWrap: 'wrap' }}>
          <div>
            <p style={{ color: '#f97316', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Admin Panel</p>
            <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, margin: 0 }}>RoamVerse Content Hub</h1>
          </div>
          <button className="btn-outline" onClick={handleLogout}>
            <LogOut size={14} /> Logout
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginBottom: 32 }}>
          {[
            { label: 'Wishlist items', value: wishlistItems.length, icon: Sparkles },
            { label: 'Gallery media', value: galleryItems.length, icon: ImageIcon },
            { label: 'Blog posts', value: blogPosts.length, icon: NotebookPen },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>{label}</span>
                <Icon size={18} style={{ color: '#f97316' }} />
              </div>
              <div style={{ color: 'white', fontWeight: 800, fontSize: '2rem' }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 22 }}>
          <form onSubmit={handleWishlistSave} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 20 }}>
            <h2 style={{ color: 'white', fontWeight: 800, marginBottom: 18 }}>Add Wishlist Item</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              <input value={wishlistForm.name} onChange={e => setWishlistForm({ ...wishlistForm, name: e.target.value })} placeholder="Destination name" style={fieldStyle} />
              <input value={wishlistForm.country} onChange={e => setWishlistForm({ ...wishlistForm, country: e.target.value })} placeholder="Country" style={fieldStyle} />
              <select value={wishlistForm.status} onChange={e => setWishlistForm({ ...wishlistForm, status: e.target.value as WishlistItem['status'] })} style={fieldStyle}>
                <option>Dream Destination</option>
                <option>Planning</option>
                <option>Booked</option>
                <option>Upcoming</option>
                <option>Completed</option>
              </select>
              <input value={wishlistForm.plannedDate} onChange={e => setWishlistForm({ ...wishlistForm, plannedDate: e.target.value })} type="date" style={fieldStyle} />
              <input value={wishlistForm.budget} onChange={e => setWishlistForm({ ...wishlistForm, budget: e.target.value })} placeholder="Budget" style={fieldStyle} />
              <textarea value={wishlistForm.notes} onChange={e => setWishlistForm({ ...wishlistForm, notes: e.target.value })} placeholder="Notes" style={{ ...fieldStyle, minHeight: 90, resize: 'vertical' }} />
              <input value={wishlistForm.image} onChange={e => setWishlistForm({ ...wishlistForm, image: e.target.value })} placeholder="Image URL" style={fieldStyle} />
            </div>
            <button type="submit" className="btn-orange" style={{ width: '100%', marginTop: 18, justifyContent: 'center' }}>
              <Plus size={14} /> Save Wishlist
            </button>
          </form>

          <form onSubmit={handleGallerySave} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 20 }}>
            <h2 style={{ color: 'white', fontWeight: 800, marginBottom: 18 }}>Add Gallery Media</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              <input value={galleryForm.title} onChange={e => setGalleryForm({ ...galleryForm, title: e.target.value })} placeholder="Media title" style={fieldStyle} />
              <input value={galleryForm.destination} onChange={e => setGalleryForm({ ...galleryForm, destination: e.target.value })} placeholder="Destination" style={fieldStyle} />
              <input value={galleryForm.url} onChange={e => setGalleryForm({ ...galleryForm, url: e.target.value })} placeholder="Image or video URL" style={fieldStyle} />
              <input value={galleryForm.category} onChange={e => setGalleryForm({ ...galleryForm, category: e.target.value })} placeholder="Category" style={fieldStyle} />
              <textarea value={galleryForm.description} onChange={e => setGalleryForm({ ...galleryForm, description: e.target.value })} placeholder="Description" style={{ ...fieldStyle, minHeight: 90, resize: 'vertical' }} />
              <select value={galleryForm.type} onChange={e => setGalleryForm({ ...galleryForm, type: e.target.value as GalleryItem['type'] })} style={fieldStyle}>
                <option value="photo">Photo</option>
                <option value="video">Video</option>
              </select>
              <input value={galleryForm.date} onChange={e => setGalleryForm({ ...galleryForm, date: e.target.value })} type="date" style={fieldStyle} />
            </div>
            <button type="submit" className="btn-orange" style={{ width: '100%', marginTop: 18, justifyContent: 'center' }}>
              <ImageIcon size={14} /> Save Media
            </button>
          </form>

          <form onSubmit={handleBlogSave} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 20 }}>
            <h2 style={{ color: 'white', fontWeight: 800, marginBottom: 18 }}>Publish Blog</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              <input value={blogForm.title} onChange={e => setBlogForm({ ...blogForm, title: e.target.value })} placeholder="Blog title" style={fieldStyle} />
              <input value={blogForm.destination} onChange={e => setBlogForm({ ...blogForm, destination: e.target.value })} placeholder="Destination" style={fieldStyle} />
              <input value={blogForm.category} onChange={e => setBlogForm({ ...blogForm, category: e.target.value })} placeholder="Category" style={fieldStyle} />
              <input value={blogForm.coverImage} onChange={e => setBlogForm({ ...blogForm, coverImage: e.target.value })} placeholder="Cover image URL" style={fieldStyle} />
              <textarea value={blogForm.excerpt} onChange={e => setBlogForm({ ...blogForm, excerpt: e.target.value })} placeholder="Excerpt" style={{ ...fieldStyle, minHeight: 90, resize: 'vertical' }} />
              <input value={blogForm.author} onChange={e => setBlogForm({ ...blogForm, author: e.target.value })} placeholder="Author" style={fieldStyle} />
              <input value={blogForm.readTime} onChange={e => setBlogForm({ ...blogForm, readTime: e.target.value })} placeholder="Read time" style={fieldStyle} />
              <input value={blogForm.date} onChange={e => setBlogForm({ ...blogForm, date: e.target.value })} type="date" style={fieldStyle} />
            </div>
            <button type="submit" className="btn-orange" style={{ width: '100%', marginTop: 18, justifyContent: 'center' }}>
              <ArrowRight size={14} /> Publish Story
            </button>
          </form>
        </div>

        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', fontSize: '0.82rem' }}>
          <ShieldCheck size={14} style={{ color: '#22c55e' }} />
          Local demo auth: roamverse@admin.com / roamverse123
        </div>
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
