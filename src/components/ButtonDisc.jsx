import React, { useState, useEffect, useRef } from 'react';
import { MdDiscount, MdArrowBack, MdArrowForward, MdCheckCircle } from 'react-icons/md'; // Pastikan Anda sudah menginstall react-icons
import { gsap } from 'gsap'; // Import GSAP
import Lottie from 'lottie-react';
import animationData from '../pages/animations/discount.json';
import failPplAnimation from '../pages/animations/failppl.json';
import successAnimation from '../pages/animations/success.json'; // Animasi untuk congratulation

const DiscountButton = () => {
    const [isContentVisible, setIsContentVisible] = useState(true);
    const [currentContent, setCurrentContent] = useState('discount');
    const contentRef = useRef(null); // Ref untuk konten di dalam button
    const [isOpenModal, setOpenModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1); // State untuk mengontrol slide modal
    const [quizAnswers, setQuizAnswers] = useState([]); // State untuk menyimpan jawaban kuis
    const [quizCompleted, setQuizCompleted] = useState(false); // State untuk menandai kuis selesai
    const [showCongratsModal, setShowCongratsModal] = useState(false); // State untuk menampilkan modal congratulation

    // Pertanyaan kuis
    const quizQuestions = [
        {
            question: "What is the main benefit of sustainable fashion?",
            options: ["Reducing waste", "Increasing production", "Reducing costs", "Boosting sales"],
            correctAnswer: "Reducing waste"
        },
        {
            question: "What does 'fast fashion' mean?",
            options: [
                "Fashion produced ethically",
                "Fashion produced in mass with low costs",
                "Fashion using recycled materials",
                "Fashion produced locally"
            ],
            correctAnswer: "Fashion produced in mass with low costs"
        },
        {
            question: "What can you do to support sustainable fashion?",
            options: [
                "Buy more new clothes",
                "Buy second-hand clothes",
                "Throw away unused clothes",
                "Use disposable clothing"
            ],
            correctAnswer: "Buy second-hand clothes"
        }
    ];
    

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
        if (isOpenModal || showCongratsModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpenModal, showCongratsModal]);

    // Fungsi untuk menangani jawaban kuis
    const handleQuizAnswer = (questionIndex, answer) => {
        const newAnswers = [...quizAnswers];
        newAnswers[questionIndex] = answer;
        setQuizAnswers(newAnswers);
    };

    // Fungsi untuk mengecek jawaban kuis
    const checkQuizAnswers = () => {
        const allCorrect = quizQuestions.every((question, index) => quizAnswers[index] === question.correctAnswer);
        if (allCorrect) {
            setQuizCompleted(true);
            setShowCongratsModal(true); // Tampilkan modal congratulation
        } else {
            alert("Maaf, jawaban Anda belum benar semua. Silakan coba lagi!");
        }
    };

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
                            <div className='bg-black/70 absolute bottom-0 ml-2 backdrop-blur-lg w-[200px] text-white p-6 px-4 rounded-lg text-sm'>
                                <p className='text-sm text-start'>Complete sustainable fashion challenges and get discounts!
                                </p>
                                <button onClick={() => setOpenModal(true)} className='mt-4 bg-green hover:bg-green-400/80 text-white p-2 px-4 rounded-lg items-start mx-auto w-full cursor-pointer'>Click me</button>
                            </div>
                        ) : (
                            <p className='bg-black/70 absolute bottom-5 ml-2 w-[130px] backdrop-blur-lg text-white p-2 px-4 rounded-lg text-xs'>← Tap to close</p>
                        )}
                    </div>
                )}
            </button>

            {/* Modal dengan empat slide */}
            {isOpenModal && (
                <div className='fixed inset-0 flex justify-center z-[9999999] items-center bg-black/40'>
                    <div className='bg-white p-5 rounded-lg text-black/70 w-[90%] max-w-md'>
                        {/* Slide 1: Opsi untuk memilih riwayat pembelian atau kuis */}
                        <div className={`${currentSlide === 1 ? 'block' : 'hidden'}`}>
                            <div className="">
                                <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: 200 }} />

                                <h2 className='text-lg text-center font-bold text-green'>Sustainable Fashion Challenge</h2>
                                <p className='mt-4 text-gray-600 text-start text-sm'>
                                    Choose how you want to earn your discount:
                                </p>
                                <div className="mt-6 flex flex-col gap-4">
                                    <button
                                        onClick={() => setCurrentSlide(2)}
                                        className='bg-green text-white px-4 py-2 rounded-lg hover:bg-green-800/80 cursor-pointer'
                                    >
                                        Exchange with Purchase History
                                    </button>
                                    <button
                                        onClick={() => setCurrentSlide(3)}
                                        className='bg-gray-100 text-black/70 border-black/30 hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer'
                                    >
                                        Take a Quiz
                                    </button>
                                </div>
                            </div>
                            <div className='mt-6 flex justify-end'>
                                <button
                                    onClick={() => setOpenModal(false)}
                                    className='bg-gray-50 text-black px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer'
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        {/* Slide 2: Riwayat Pembelian */}
                        <div className={`${currentSlide === 2 ? 'block' : 'hidden'}`}>
                            <div className="">
                                <Lottie animationData={failPplAnimation} loop={true} style={{ width: '100%', height: 200 }} />
                                <h2 className='text-lg font-bold text-center text-red-800/80'>Insufficient Purchases!?</h2>
                                <div className="mt-6 p-4 text-sm bg-red-50 rounded-lg">
                                    <p className=' text-red-800/80 font-semibold text-sm'>
                                        Your total used clothing purchases: <span className='font-semibold text-green-600'>0</span> time.
                                    </p>
                                    <p className="text-red-800/80 font-semibold">
                                        You need to buy <span className="text-sm">0</span> more used clothes to get the discount.
                                    </p>
                                </div>
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

                        {/* Slide 3-5: Kuis Fashion Berkelanjutan (Satu Pertanyaan per Slide) */}
                        {[3, 4, 5].map((slideNumber) => (
                            <div key={slideNumber} className={`${currentSlide === slideNumber ? 'block' : 'hidden'}`}>
                                <div className="">
                                    <h2 className='text-lg text-center font-bold text-green'>Question {slideNumber - 2}</h2>
                                    <p className="text-gray-600 text-sm mt-4">{quizQuestions[slideNumber - 3].question}</p>
                                    {quizQuestions[slideNumber - 3].options.map((option, optionIndex) => (
                                        <label key={optionIndex} className="block mt-2">
                                            <input
                                                type="radio"
                                                name={`question-${slideNumber - 3}`}
                                                value={option}
                                                onChange={() => handleQuizAnswer(slideNumber - 3, option)}
                                                className="mr-2"
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                                <div className='mt-6 flex justify-between'>
                                    <button
                                        onClick={() => setCurrentSlide(slideNumber - 1)}
                                        className='bg-gray-59 text-black px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center cursor-pointer'
                                    >
                                        <MdArrowBack className="mr-2" /> Back
                                    </button>
                                    {slideNumber < 5 ? (
                                        <button
                                            onClick={() => setCurrentSlide(slideNumber + 1)}
                                            className='bg-green text-white px-4 py-2 rounded-lg hover:bg-green-800/80 flex items-center cursor-pointer'
                                        >
                                            Next <MdArrowForward className="ml-2" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={checkQuizAnswers}
                                            className='bg-green text-white px-4 py-2 rounded-lg hover:bg-green-800/80 flex items-center cursor-pointer'
                                        >
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Modal Congratulations */}
            {showCongratsModal && (
                <div className='fixed inset-0 flex justify-center z-[9999999] items-center bg-black/40'>
                    <div className='bg-white p-5 rounded-lg text-black/70 w-[90%] max-w-md'>
                        <div className="">
                            <Lottie animationData={successAnimation} loop={true} style={{ width: '100%', height: 200 }} />
                            <h2 className='text-lg text-center font-bold text-green'>Congratulations!</h2>
                            <p className='mt-4 text-gray-600 text-center text-sm'>
                                You have answered all questions correctly. Here's your 20% discount voucher!
                            </p>
                            <div className="mt-6 p-4 bg-green-50 rounded-lg">
                                <p className="text-green font-semibold text-center">
                                    Use code: <span className="text-xl">SUSTAIN20</span>
                                </p>
                            </div>
                        </div>
                        <div className='mt-6 flex justify-end'>
                            <button
                                onClick={() => {
                                    setShowCongratsModal(false);
                                    setOpenModal(false);
                                }}
                                className='bg-green text-white px-4 py-2 rounded-lg hover:bg-green-800/80 cursor-pointer'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DiscountButton;