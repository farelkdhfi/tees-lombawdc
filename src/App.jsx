import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './utils/ScrollToTop';
import WomenShopPage from './pages/WomenShopPage';
import MenShopPage from './pages/MenShopPage';
import KidsShopPage from './pages/KidsShopPage';
import GetStartedModal from './utils/GetStartedModal';
import DetailPage from './pages/DetailPage';
import About from './pages/About';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1500);

    return () => clearTimeout(timer)
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <main className={`${isModalOpen ? 'pointer-events-none' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenShopPage />} />
          <Route path="/men" element={<MenShopPage />} />
          <Route path="/kid" element={<KidsShopPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
