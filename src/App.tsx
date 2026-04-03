/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TrainingPage from './pages/TrainingPage';
import GettingStartedPage from './pages/GettingStartedPage';
import ContactPage from './pages/ContactPage';

const routeSegments = new Set(['about', 'services', 'training', 'getting-started', 'contact']);

function getRouterBasename() {
  if (typeof window === 'undefined') {
    return '/';
  }

  const segments = window.location.pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return '/';
  }

  const lastSegment = segments[segments.length - 1];
  const baseSegments = routeSegments.has(lastSegment) ? segments.slice(0, -1) : segments;
  return baseSegments.length > 0 ? `/${baseSegments.join('/')}` : '/';
}

export default function App() {
  return (
    <Router basename={getRouterBasename()}>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-light text-text-main font-sans selection:bg-accent/30 selection:text-primary flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/getting-started" element={<GettingStartedPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
