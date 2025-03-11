import React, { useState, useEffect, useRef } from 'react';
import { MdDiscount } from 'react-icons/md'; // Pastikan Anda sudah menginstall react-icons
import { gsap } from 'gsap'; // Import GSAP

const DiscountButton = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState('discount');
  const contentRef = useRef(null); // Ref untuk konten di dalam button

  // Fungsi untuk mengubah konten secara otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      // Animasi saat konten berubah
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentContent((prevContent) =>
            prevContent === 'discount' ? 'specialOffer' : 'discount'
          );
          gsap.to(contentRef.current, { opacity: 1, duration: 0.3 }); // Fade in konten baru
        },
      });
    }, 3000); // Ubah konten setiap 3 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, []);

  // Fungsi untuk toggle tampilan konten di dalam button saat diklik
  const handleClick = () => {
    if (isContentVisible) {
      // Animasi fade out saat konten menghilang
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => setIsContentVisible(false),
      });
    } else {
      // Animasi fade in saat konten muncul kembali
      setIsContentVisible(true);
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    }
  };

  return (
    <button
      className="fixed lg:bottom-15 lg:left-15 z-40 bottom-25 left-3 flex items-center justify-center"
      onClick={handleClick}
    >
      {/* Bagian ikon dan animasi tetap ada */}
      <div className='relative flex justify-center items-center w-18 h-18'>
        <div className='h-16 w-16 border-t-4 z-20 animate-spin rounded-full border-t-green absolute'></div>
        <p className='bg-black/70 w-15 text-white h-15 flex justify-center items-center rounded-full backdrop-blur-lg'>
          <MdDiscount className='w-8 h-8' />
        </p>
      </div>

      {/* Konten yang bisa disembunyikan dan ditampilkan kembali */}
      {isContentVisible && (
        <div ref={contentRef}>
          {currentContent === 'discount' ? (
            <p className='bg-black/70 backdrop-blur-lg text-white p-2 px-4 rounded-lg text-xs'>← Tap to close</p>
          ) : (
            <div className='bg-black/70 backdrop-blur-lg text-white p-2 px-4 rounded-lg text-xs'>
              <p>Special Discount!</p>
              <button className='mt-2 bg-green text-white p-2 px-4 rounded-lg'>Click me</button>
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default DiscountButton;