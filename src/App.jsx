import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import StatsBanner from './components/sections/StatsBanner'
import AboutUs from './components/sections/AboutUs'
import Transactions from './components/sections/Transactions'
import EnterpriseScale from './components/sections/EnterpriseScale'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import CyberBackground from './components/ui/CyberBackground'
import CustomCursor from './components/ui/CustomCursor'
import CookieConsent from './components/ui/CookieConsent'
function App() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Base dark ambient light */}
      <div className="fixed inset-0 bg-[#07051a] -z-20"></div>

      {/* Global Custom Glowing Cursor */}
      <CustomCursor />

      {/* Global Cookie Consent Popup */}
      <CookieConsent />

      {/* Global Cyberpunk Circuit Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CyberBackground />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <StatsBanner />
        <AboutUs />
        <Transactions />
        <EnterpriseScale />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
      </div>
    </div>
  )
}

export default App

