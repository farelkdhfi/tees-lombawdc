import React, { useState, useEffect, useRef } from 'react';
import { MdDiscount, MdArrowBack, MdArrowForward } from 'react-icons/md'; // Pastikan Anda sudah menginstall react-icons
import { gsap } from 'gsap'; // Import GSAP
import Lottie from 'lottie-react';
import animationData from '../pages/animations/discount.json'
import failPplAnimation from '../pages/animations/failppl.json'

const DiscountButton = () => {
    const [isContentVisible, setIsContentVisible] = useState(true);
    const [currentContent, setCurrentContent] = useState('discount');
    const contentRef = useRef(null); // Ref untuk konten di dalam button
    const [isOpenModal, setOpenModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1); // State untuk mengontrol slide modal
    const [purchaseHistory, setPurchaseHistory] = useState([/* data riwayat pembelian */]); // Contoh data riwayat pembelian

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

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpenModal]);

    return (
        <>
            <button
                className="fixed lg:bottom-15 lg:left-15 z-40 bottom-25 left-3 flex items-center justify-center"
                onClick={handleClick}
            >
                {/* Bagian ikon dan animasi tetap ada */}
                <div className='relative flex justify-center items-center w-full h-18'>
                    <div className='h-16 w-16 border-t-4 z-20 animate-spin rounded-full cursor-pointer border-t-green absolute'></div>
                    <p className='bg-black/70 w-15 text-white h-15 flex justify-center cursor-pointer items-center rounded-full backdrop-blur-lg'>
                        <MdDiscount className='w-8 h-8' />
                    </p>
                </div>

                {/* Konten yang bisa disembunyikan dan ditampilkan kembali */}
                {isContentVisible && (
                    <div ref={contentRef}>
                        {currentContent === 'discount' ? (
                            <div className='bg-black/70 absolute bottom-0 ml-2 backdrop-blur-lg w-[200px] text-white p-8 px-4 rounded-lg text-sm'>
                                <p className='text-lg text-start'>Complete sustainable fashion challenges and get discounts!
                                </p>
                                <button onClick={() => setOpenModal(true)} className='mt-4 bg-green hover:bg-green-400/80 text-white p-2 px-4 rounded-lg items-start mx-auto w-full cursor-pointer'>Click me</button>
                            </div>


                        ) : (

                            <p className='bg-black/70 absolute bottom-5 ml-2 w-[130px] backdrop-blur-lg text-white p-2 px-4 rounded-lg text-xs'>← Tap to close</p>
                        )}
                    </div>
                )}
            </button>

            {/* Modal dengan dua slide */}
            {isOpenModal && (
                <div className='fixed inset-0 flex justify-center z-[9999999] items-center bg-black/40'>
                    <div className='bg-white p-5 rounded-lg text-black/70 w-[90%] max-w-md'>
                        {/* Slide 1: Tentang Reusable Fashion dan Diskon */}
                        <div className={`${currentSlide === 1 ? 'block' : 'hidden'}`}>
                            <div className="">
                                <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: 200 }} />

                                <h2 className='text-lg text-center font-bold text-green'>Sustainable Fashion Challenge</h2>
                                <p className='mt-4 text-gray-600 text-start text-sm'>
                                    By buying secondhand clothes, you have contributed to reducing fashion waste and supporting a more sustainable environment.
                                </p>
                                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                                    <p className="text-green font-semibold">
                                        Get <span className="text-xl">20%</span> discount for next purchase!
                                    </p>
                                    <p className="text-xs text-gray-600 mt-2">
                                        Terms: Buy 10 used clothes and exchange them for a discount voucher.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-6 flex justify-between'>
                                <button
                                    onClick={() => setOpenModal(false)}
                                    className='bg-gray-50 text-black px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer'
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => setCurrentSlide(2)}
                                    className='bg-green text-white px-4 py-2 rounded-lg hover:bg-green-800/80 flex items-center cursor-pointer'
                                >
                                    Next <MdArrowForward className="ml-2" />
                                </button>
                            </div>
                        </div>

                        {/* Slide 2: Riwayat Pembelian */}
                        <div className={`${currentSlide === 2 ? 'block' : 'hidden'}`}>
                            <div className="">
                                <Lottie animationData={failPplAnimation} loop={true} style={{ width: '100%', height: 200 }} />
                                <h2 className='text-lg font-bold text-center text-red-800/80'>insufficient purchases!?</h2>

                                {purchaseHistory.length >= 10 ? (
                                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                                        <p className="text-green-700 font-semibold">
                                            Selamat! Anda telah memenuhi syarat untuk mendapatkan diskon 20%.
                                        </p>
                                        <button
                                            onClick={() => setOpenModal(false)}
                                            className='mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700'
                                        >
                                            Klaim Diskon Sekarang
                                        </button>
                                    </div>
                                ) : (
                                    <div className="mt-6 p-4 text-sm bg-red-50 rounded-lg">
                                        <p className=' text-red-800/80 font-semibold text-sm'>
                                            Your total used clothing purchases: <span className='font-semibold text-green-600'>{purchaseHistory.length}</span> time.
                                        </p>
                                        <p className="text-red-800/80 font-semibold">
                                            You need to buy <span className="text-sm">{10 - purchaseHistory.length}</span> more used clothes to get the discount.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className='mt-6 flex justify-between'>
                                <button
                                    onClick={() => setCurrentSlide(1)}
                                    className='bg-gray-59 text-black px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer'
                                >
                                    <MdArrowBack className="mr-2" /> Back
                                </button>
                                <button
                                    onClick={() => setOpenModal(false)}
                                    className='bg-green cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-800/80'
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DiscountButton;