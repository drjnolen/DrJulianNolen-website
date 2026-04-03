/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fragment } from 'react';
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

const appRoutes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutPage },
  { path: '/services', component: ServicesPage },
  { path: '/training', component: TrainingPage },
  { path: '/getting-started', component: GettingStartedPage },
  { path: '/contact', component: ContactPage },
];

function getRouterBasename() {
  if (typeof window === 'undefined') {
    return '/';
  }

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  if (pathname === '/') {
    return '/';
  }

  const nestedRoutePaths = appRoutes
    .map(({ path }) => path)
    .filter((path) => path !== '/');

  for (const routePath of nestedRoutePaths) {
    if (pathname === routePath) {
      return '/';
    }

    if (pathname.endsWith(routePath)) {
      const basename = pathname.slice(0, -routePath.length);
      return basename || '/';
    }
  }

  return pathname;
}

export default function App() {
  return (
    <Router basename={getRouterBasename()}>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-light text-text-main font-sans selection:bg-accent/30 selection:text-primary flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {appRoutes.map(({path, component: Component}) => (
              <Fragment key={path}>
                <Route path={path} element={<Component />} />
              </Fragment>
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
