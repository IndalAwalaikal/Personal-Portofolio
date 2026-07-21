import { lazy, Suspense, Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Eager load HomePage for fast LCP & initial render
import HomePage from './pages/HomePage';

// Lazy load secondary pages for smaller initial bundle & speed optimization
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'));

/* ─── Error Boundary Component for App Durability ───────── */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d1116] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#00df8f]/10 border border-[#00df8f]/30 flex items-center justify-center mb-6">
            <span className="text-[#00df8f] text-2xl font-bold">!</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">Something went wrong</h2>
          <p className="text-gray-400 text-sm max-w-sm mb-6">
            An unexpected error occurred. Don't worry, you can easily reload the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#00df8f] text-[#0d1116] font-bold rounded-full text-xs hover:scale-105 transition-all"
          >
            Reload Website
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ─── Page Loading Fallback for Smooth Transitions ───────── */
const LoadingFallback = () => (
  <div className="min-h-screen bg-[#0d1116] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-white/10 border-t-[#00df8f] rounded-full animate-spin" />
      <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-dark-bg text-gray-200 flex flex-col justify-between">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route
                  path="*"
                  element={
                    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
                      <h1 className="text-6xl font-display font-bold text-[#00df8f] mb-4">404</h1>
                      <p className="text-gray-400 text-lg mb-6">Page not found</p>
                      <Link to="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-xs font-bold text-white transition-all">
                        Return Home
                      </Link>
                    </div>
                  }
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
