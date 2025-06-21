import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Careers } from './pages/Careers';
import { Blog } from './pages/Blog';
import { RequestQuote } from './pages/RequestQuote';
import { Testimonials } from './pages/Testimonials';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { ClientPortal } from './pages/ClientPortal';
import { ThankYou } from './pages/ThankYou';
import { ConsultationForm } from './pages/ConsultationForm';
import { SubscriptionForm } from './pages/SubscriptionForm';
import { ServiceRequestForm } from './pages/ServiceRequestForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/consultation" element={<ConsultationForm />} />
            <Route path="/subscription" element={<SubscriptionForm />} />
            <Route path="/service-request" element={<ServiceRequestForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;