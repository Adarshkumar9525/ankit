import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesList from './pages/ServicesList';
import ServiceDetail from './pages/ServiceDetail';
import PortfolioList from './pages/PortfolioList';
import ProjectDetail from './pages/ProjectDetail';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import ContactPage from './pages/ContactPage';
import StartProjectPage from './pages/StartProjectPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState(null);

  const handleOpenQuote = (service = null) => {
    setSelectedServiceForQuote(service);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForQuote(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-dark-950 text-white min-h-screen flex flex-col font-sans selection:bg-gold-400 selection:text-dark-950">
        
        {/* Navigation Bar */}
        <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenQuoteModal={() => handleOpenQuote()} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesList />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<PortfolioList />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-a-project" element={<StartProjectPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Contextual WhatsApp Widget */}
        <FloatingWhatsApp />

        {/* Fast Project Quote Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuote}
          preselectedService={selectedServiceForQuote}
        />

      </div>
    </BrowserRouter>
  );
}
