import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './utils/ScrollToTop';
import WomenShopPage from './pages/WomenShopPage';
import MenShopPage from './pages/MenShopPage';
import KidsShopPage from './pages/KidsShopPage';
import GetStartedModal from './utils/GetStartedModal';
import DetailPage from './pages/DetailPage';
import ChatApp from './pages/ChatPage';

const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation(); // Untuk mendapatkan path saat ini

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
          <Route path="/chat" element={<ChatApp />} />
        </Routes>
      </main>
      {/* Footer hanya ditampilkan jika bukan di halaman /chat */}
      {location.pathname !== "/chat" && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
