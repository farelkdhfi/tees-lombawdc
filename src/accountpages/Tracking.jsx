import React, { useState } from 'react';
import { FaTruck, FaCheckCircle, FaBoxOpen, FaMapMarkerAlt } from 'react-icons/fa';

const Tracking = ({ displayedProducts }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const TrackOrderDisplay = displayedProducts.slice(0, 2);
    const filteredProducts = displayedProducts.filter(
        (product) => product.id >= 3 && product.id <= 5
    );
    const TrackSellDisplay = filteredProducts.slice(0, 2);

    const generateStatus = (status) => {
        switch (status) {
            case 'processed':
                return <span className="flex items-center text-yellow-600"><FaBoxOpen className="mr-2" /> Being Processed</span>;
            case 'shipped':
                return <span className="flex items-center text-blue-600"><FaTruck className="mr-2" /> On Shipping</span>;
            case 'delivered':
                return <span className="flex items-center text-green-600"><FaCheckCircle className="mr-2" /> Delivered</span>;
            default:
                return <span className="flex items-center text-gray-600">Unknown Status</span>;
        }
    };

    const generateEstimatedDelivery = (days) => {
        const today = new Date();
        const deliveryDate = new Date(today.setDate(today.getDate() + days));
        return deliveryDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handleViewDetail = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className='flex w-full'>
            <style>
                {`
                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }

                @keyframes wave {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .progress-bar {
                    position: relative;
                    overflow: hidden;
                    border-radius: 9999px;
                }

                .progress-bar::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.2) 75%);
                    background-size: 200% 100%;
                    animation: wave 2s linear infinite;
                    border-radius: 9999px;
                }

                .progress-bar.pulse {
                    animation: pulse 1.5s infinite;
                }
                `}
            </style>
            <div className='bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-lg w-full'>
                <h2 className="text-lg font-bold mb-6 text-gray-800">Track Product</h2>
                <div className='flex flex-col space-y-8'>
                    <div>
                        <h2 className="text-base font-semibold mb-3 text-gray-700">Order Tracking:</h2>
                        <div className="grid grid-cols-1  gap-3">
                            {TrackOrderDisplay.map((product) => (
                                <div key={product.id} className="bg-white text-sm flex flex-col md:flex-row gap-4 justify-between items-center border p-4 border-gray-200 rounded-lg">
                                    <div className='flex items-center'>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
                                        />
                                        <div className="flex flex-col ml-4 text-gray-700">
                                            <h3 className="font-semibold">{product.name}</h3>
                                            <p className="text-sm">Brand: {product.brand}</p>
                                            <p className='font-semibold text-gray-900'>${product.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm text-gray-600 mb-2">{generateStatus(product.status2)}</p>
                                        <p className="text-sm text-gray-600">Estimated Delivery: {generateEstimatedDelivery(product.estimatedDeliveryDays)}</p>
                                        <div className="w-48 bg-gray-200 rounded-full h-2.5 mt-2 progress-bar">
                                            <div
                                                className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all duration-500 pulse"
                                                style={{ width: `${product.progress}%` }}
                                            ></div>
                                        </div>
                                        <button
                                            onClick={() => handleViewDetail(product)}
                                            className="mt-3 px-4 py-2 border-black/30 border cursor-pointer text-black/70 rounded-lg hover:border-black transition-colors duration-300"
                                        >
                                            View Detail
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-base font-semibold mb-3 text-gray-700">Track Your Sold Products:</h2>
                        <div className="grid grid-cols-1 gap-3 text-sm">
                            {TrackSellDisplay.map((product) => (
                                <div key={product.id} className="bg-white flex flex-col md:flex-row gap-4 justify-between items-center border p-4 border-gray-200 rounded-lg">
                                    <div className='flex items-center'>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
                                        />
                                        <div className="flex flex-col ml-4 text-gray-700">
                                            <h3 className="font-semibold">{product.name}</h3>
                                            <p className="text-sm">Brand: {product.brand}</p>
                                            <p className='font-semibold text-gray-900'>${product.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm text-gray-600 mb-2">{generateStatus(product.status2)}</p>
                                        <p className="text-sm text-gray-600">Estimated Delivery: {generateEstimatedDelivery(product.estimatedDeliveryDays)}</p>
                                        <div className="w-48 bg-gray-200 rounded-full h-2.5 mt-2 progress-bar">
                                            <div
                                                className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all duration-500 pulse"
                                                style={{ width: `${product.progress}%` }}
                                            ></div>
                                        </div>
                                        <button
                                            onClick={() => handleViewDetail(product)}
                                            className="mt-3 px-4 py-2 border-black/30 border cursor-pointer text-black/70 rounded-lg hover:border-black transition-colors duration-300"
                                        >
                                            View Detail
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Detailed Tracking */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl p-6 overflow-y-auto max-h-screen">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Delivery Details</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 text-3xl cursor-pointer hover:text-gray-700"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">Product Information</h3>
                                <div className="flex items-center">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                    <div className="ml-4">
                                        <p className="font-semibold">{selectedProduct.name}</p>
                                        <p className="text-sm text-gray-600">Brand: {selectedProduct.brand}</p>
                                        <p className="text-sm text-gray-600">Price: ${selectedProduct.price}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">Delivery Progress</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-blue-500 mr-2" />
                                        <div>
                                            <p className="font-semibold">Current Location</p>
                                            <p className="text-sm text-gray-600">Jakarta, Indonesia</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <FaTruck className="text-green-500 mr-2" />
                                        <div>
                                            <p className="font-semibold">Estimated Delivery</p>
                                            <p className="text-sm text-gray-600">{generateEstimatedDelivery(selectedProduct.estimatedDeliveryDays)}</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 progress-bar">
                                        <div
                                            className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all duration-500 pulse"
                                            style={{ width: `${selectedProduct.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-4">Tracking History</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <FaBoxOpen className="text-yellow-500 mr-2" />
                                    <div>
                                        <p className="font-semibold">Order Processed</p>
                                        <p className="text-sm text-gray-600">October 10, 2023</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaTruck className="text-blue-500 mr-2" />
                                    <div>
                                        <p className="font-semibold">Out for Delivery</p>
                                        <p className="text-sm text-gray-600">October 12, 2023</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <div>
                                        <p className="font-semibold">Delivered</p>
                                        <p className="text-sm text-gray-600">October 15, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tracking;