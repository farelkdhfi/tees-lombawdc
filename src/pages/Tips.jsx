import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import ecoFashionAnimation from './animations/testimonials.json'; // Animasi Lottie 1
import timelineAnimation from './animations/eco-fashion.json'; // Animasi Lottie 4
import testimonialAnimation from './animations/timeline.json'; // Animasi Lottie 5
import quizAnimation from './animations/education-animation.json'; // Animasi Lottie 6
import statsAnimation from './animations/earth.json'; // Animasi Lottie 7
import successAnimation from './animations/success.json'; // Animasi Lottie 7
import failAnimation from './animations/fail.json'; // Animasi Lottie 7
import { Link } from 'react-router-dom';
import EduShop from '../shoppages/EduShop';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Tips = () => {
    const tipsRef = useRef([]);
    const headerRef = useRef();
    const timelineRef = useRef();
    const testimonialRef = useRef();
    const quizRef = useRef();
    const statsRef = useRef();
    const ctaRef = useRef();

    const [quizAnswer, setQuizAnswer] = useState(null);
    const [quizResult, setQuizResult] = useState('');

    useEffect(() => {
        // Animasi untuk header
        gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animasi untuk timeline
        gsap.fromTo(
            timelineRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animasi untuk testimonial
        gsap.fromTo(
            testimonialRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: testimonialRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animasi untuk quiz
        gsap.fromTo(
            quizRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: quizRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animasi untuk stats
        gsap.fromTo(
            statsRef.current,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animasi untuk call-to-action
        gsap.fromTo(
            ctaRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animasi untuk setiap card tips
        tipsRef.current.forEach((tip, index) => {
            gsap.fromTo(
                tip,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: tip,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    const handleQuizSubmit = (e) => {
        e.preventDefault();
        if (quizAnswer === 'organic') { // Jawaban benar
            setQuizResult('Correct!');
        } else { // Jawaban salah
            setQuizResult('Wrong! Try again.');
        }
    };

    return (
        <>
            {/* Header Section dengan Animasi Lottie */}
            <section className="pt-20 px-3 lg:px-15 pb-20 overflow-x-hidden bg-green-50 min-h-screen flex items-center justify-center">
                <div ref={headerRef} className="text-center">
                    <Lottie animationData={ecoFashionAnimation} loop={true} style={{ width: '100%', height: 300 }} />
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Sustainable Fashion</h1>
                    <p className="text-xl text-gray-600">Learn how to make a positive impact on the environment through your fashion choices.</p>
                </div>
            </section>

            {/* Tips Section */}
            <section className="px-3 lg:px-15 py-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Tips & Tricks</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Buy Secondhand Clothing',
                                fact: 'The fashion industry contributes to 10% of global carbon emissions. Buying secondhand clothing can reduce textile waste!',
                                icon: '🛍️',
                            },
                            {
                                title: 'Choose Eco-Friendly Materials',
                                fact: 'Organic cotton uses 91% less water compared to conventional cotton.',
                                icon: '🌿',
                            },
                            {
                                title: 'Reduce Fast Fashion',
                                fact: 'On average, a person throws away around 30 kg of clothing per year. Reduce consumption by buying less but higher quality items.',
                                icon: '⏳',
                            },
                            {
                                title: 'Recycle or Upcycle',
                                fact: 'Only 15% of discarded clothing is recycled. Use your creativity to turn old clothes into something new!',
                                icon: '♻️',
                            },
                            {
                                title: 'Wash Wisely',
                                fact: 'Washing clothes in cold water and air-drying can reduce your carbon footprint by up to 50%!',
                                icon: '🧺',
                            },
                        ].map((tip, index) => (
                            <div
                                key={index}
                                ref={el => tipsRef.current[index] = el}
                                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                onMouseEnter={() => {
                                    gsap.to(tipsRef.current[index], { scale: 1.05, duration: 0.3 });
                                }}
                                onMouseLeave={() => {
                                    gsap.to(tipsRef.current[index], { scale: 1, duration: 0.3 });
                                }}
                            >
                                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 text-2xl">
                                    {tip.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tip.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{tip.fact}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section ref={timelineRef} className="px-3 lg:px-15 py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">The Evolution of Sustainable Fashion</h2>
                    <Lottie animationData={timelineAnimation} loop={true} style={{ width: '100%', height: 300 }} />
                    <div className="mt-8 text-center">
                        <p className="text-gray-600">The evolution of sustainable fashion has transformed the way the industry approaches design, production, and consumption. In the past, fashion was largely driven by fast-changing trends, often leading to excessive waste and environmental damage. However, growing awareness of ecological and ethical issues has encouraged brands to adopt more responsible practices. Innovations such as eco-friendly fabrics, ethical sourcing, and circular fashion models have reshaped the industry, promoting durability and minimal environmental impact. As consumers become more conscious of their purchasing choices, sustainable fashion continues to evolve, balancing style with responsibility and paving the way for a greener future.</p>
                    </div>
                </div>
            </section>

            {/* Quiz Section */}
<section ref={quizRef} className="px-3 lg:px-15 py-20 bg-white">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Test Your Knowledge</h2>
        <Lottie animationData={quizAnimation} loop={true} style={{ width: '100%', height: 200 }} />
        <div className="mt-8 text-center">
            <form onSubmit={handleQuizSubmit}>
                <p className="text-gray-600 mb-4">Which type of cotton uses 91% less water?</p>
                <div className="flex justify-center gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="quiz"
                            value="organic"
                            onChange={(e) => setQuizAnswer(e.target.value)}
                            className="form-radio h-5 w-5 text-green-500 border-2 border-gray-300 focus:ring-green-500"
                        />
                        <span className="text-gray-700">Organic Cotton</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="quiz"
                            value="conventional"
                            onChange={(e) => setQuizAnswer(e.target.value)}
                            className="form-radio h-5 w-5 text-green-500 border-2 border-gray-300 focus:ring-green-500"
                        />
                        <span className="text-gray-700">Conventional Cotton</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                    Submit
                </button>
            </form>
            {quizResult && (
                <div className="mt-4">
                    {/* Tampilkan teks hasil dengan warna dan animasi sesuai kondisi */}
                    <p className={`text-lg font-semibold ${quizResult === 'Correct!' ? 'text-green-500' : 'text-red-500'}`}>
                        {quizResult}
                    </p>
                    {/* Tampilkan animasi sesuai hasil */}
                    {quizResult === 'Correct!' ? (
                        <Lottie 
                            animationData={successAnimation} 
                            loop={false} // Hanya putar sekali
                            style={{ width: '100%', height: 150 }} 
                        />
                    ) : (
                        <Lottie 
                            animationData={failAnimation} 
                            loop={false} // Hanya putar sekali
                            style={{ width: '100%', height: 150 }} 
                        />
                    )}
                </div>
            )}
        </div>
    </div>
</section>

            {/* Stats Section */}
            <section ref={statsRef} className="px-6 lg:px-20 py-24 overflow-x-hidden bg-gradient-to-b from-green-100 to-green-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-10">Did You Know?</h2>
                    <Lottie animationData={statsAnimation} loop={true} style={{ width: '100%', height: 250 }} />
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">The fashion industry is responsible for 20% of global wastewater and 10% of carbon emissions.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">Every second, a truckload of clothing is either burned or dumped into landfills.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">It takes 2,700 liters of water to produce a single cotton T-shirt—enough drinking water for one person for over 2.5 years.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">The fashion industry emits more carbon than the aviation and shipping industries combined.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">Synthetic fabrics like polyester release over 700,000 microplastics into the ocean with every wash.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">Fast fashion garments are worn less than 7 times on average before being discarded.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">Brands are now creating leather alternatives from mushrooms (Mylo) and pineapple leaves (Piñatex).</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">Sustainable fashion practices can reduce waste production by up to 75%.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">Eco-friendly jeans now use less water and even adopt waterless dyeing techniques.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <p className="text-gray-700 font-medium">Recycled plastic bottles are being transformed into fabrics for sustainable fashion brands.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section ref={ctaRef} className="px-3 lg:px-15 py-20 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Join the Movement</h2>
                    <Lottie animationData={testimonialAnimation} loop={true} style={{ width: '100%', height: 200 }} />
                    <p className="text-xl text-gray-600 mb-8">Start making a difference today by choosing sustainable fashion.</p>
                    <Link to="/" className="px-8 py-3 bg-green text-white rounded-lg hover:bg-green-800/80 transition-colors duration-300">
                        Get Started
                    </Link>
                </div>
            </section>

            <EduShop />

        </>
    );
};

export default Tips;