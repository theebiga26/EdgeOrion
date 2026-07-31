import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import CyberBackground from './components/ui/CyberBackground'
import CustomCursor from './components/ui/CustomCursor'
import CookieConsent from './components/ui/CookieConsent'
import LazySection from './components/ui/LazySection'

// Below-the-fold components loaded dynamically on scroll
const StatsBanner = lazy(() => import('./components/sections/StatsBanner'))
const AboutUs = lazy(() => import('./components/sections/AboutUs'))
const EdgeWorkflow = lazy(() => import('./components/sections/EdgeWorkflow'))
const Documentation = lazy(() => import('./components/sections/Documentation'))
const EnterpriseScale = lazy(() => import('./components/sections/EnterpriseScale'))
const Pricing = lazy(() => import('./components/sections/Pricing'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const CTA = lazy(() => import('./components/sections/CTA'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const LegalDocument = lazy(() => import('./components/sections/LegalDocument'))

function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'privacy' | 'terms' | 'cookies'

  const handleOpenPolicy = (viewName) => {
    setActiveView(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Automatically reset to home when navigation links in Navbar change hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Base dark ambient light */}
      <div className="fixed inset-0 bg-[#07051a] -z-20"></div>

      {/* Global Custom Glowing Cursor */}
      <CustomCursor />

      {/* Global Cookie Consent Popup */}
      <CookieConsent onOpenPolicy={handleOpenPolicy} />

      {/* Global Cyberpunk Circuit Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CyberBackground />
      </div>

      <div className="relative z-10">
        <Navbar onGoHome={handleBackToHome} />

        {activeView === 'home' ? (
          <main>
            <Hero />

            <LazySection minHeight="120px">
              <Suspense fallback={<div className="h-[120px]" />}>
                <StatsBanner />
              </Suspense>
            </LazySection>

            <LazySection minHeight="500px">
              <Suspense fallback={<div className="h-[500px]" />}>
                <AboutUs />
              </Suspense>
            </LazySection>

            <LazySection minHeight="800px">
              <Suspense fallback={<div className="h-[800px]" />}>
                <EdgeWorkflow />
              </Suspense>
            </LazySection>

            <LazySection minHeight="600px">
              <Suspense fallback={<div className="h-[600px]" />}>
                <Documentation />
              </Suspense>
            </LazySection>

            <LazySection minHeight="600px">
              <Suspense fallback={<div className="h-[600px]" />}>
                <EnterpriseScale />
              </Suspense>
            </LazySection>

            <LazySection minHeight="700px">
              <Suspense fallback={<div className="h-[700px]" />}>
                <Pricing />
              </Suspense>
            </LazySection>

            <LazySection minHeight="600px">
              <Suspense fallback={<div className="h-[600px]" />}>
                <Testimonials />
              </Suspense>
            </LazySection>

            <LazySection minHeight="600px">
              <Suspense fallback={<div className="h-[600px]" />}>
                <FAQ />
              </Suspense>
            </LazySection>

            <LazySection minHeight="400px">
              <Suspense fallback={<div className="h-[400px]" />}>
                <CTA />
              </Suspense>
            </LazySection>

            <LazySection minHeight="700px">
              <Suspense fallback={<div className="h-[700px]" />}>
                <Contact />
              </Suspense>
            </LazySection>
          </main>
        ) : (
          <main className="pt-32 pb-12 min-h-[60vh] flex flex-col items-center justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <Suspense fallback={
              <div className="relative w-full border border-primary/20 rounded-3xl p-12 backdrop-blur-md bg-[#0a0514]/80 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden moving-border h-[400px] flex items-center justify-center">
                <div className="text-white font-semibold">Loading document...</div>
              </div>
            }>
              <LegalDocument type={activeView} onBack={handleBackToHome} />
            </Suspense>
          </main>
        )}

        <LazySection minHeight="300px">
          <Suspense fallback={<div className="h-[300px]" />}>
            <Footer onOpenPolicy={handleOpenPolicy} onGoHome={handleBackToHome} />
          </Suspense>
        </LazySection>
      </div>
    </div>
  )
}

export default App

