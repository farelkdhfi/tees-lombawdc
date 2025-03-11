import React, { useState } from 'react';
import ModalDetail from './ModalDetail';

const Order = ({ displayedProducts }) => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleViewDetail = (product) => {
        setSelectedOrder(product);
    };

    const handleCloseModal = () => {
        setSelectedOrder(null);
    };

    return (
        <div className='flex w-full'>
            <div className='bg-white p-4 md:p-8 rounded-lg shadow-lg w-full'>
                <h2 className="text-lg font-bold mb-6 text-gray-800">Order History</h2>
                <div>
                    <div className="grid grid-cols-1 gap-4">
                        {displayedProducts.map((product) => (
                            <div key={product.id} className="bg-white flex flex-col md:flex-row justify-between items-center border p-3 border-black/10 shadow-md rounded-lg">
                                <div className='flex items-center w-full md:w-auto'>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-15 h-15 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col ml-2 text-black/70 text-sm">
                                        <h3 className="font-semibold ">{product.name}</h3>
                                        <p>Merk: {product.brand}</p>
                                        <p className='font-semibold'>${product.price}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-x-3 items-center w-full md:w-auto mt-4 md:mt-0'>
                                    <div className='text-center md:text-left'>
                                        <p className='text-xs text-black/45'>Ordered on: 27 July 2023</p>
                                        <p className='text-black/70 text-xs border-b border-b-green'>Completed</p>
                                    </div>
                                    <button
                                        onClick={() => handleViewDetail(product)}
                                        className='border h-fit w-full md:w-fit py-2 px-3 text-sm hover:border-black hover:text-black transition-all duration-300 cursor-pointer rounded-lg shadow-md border-black/40 mt-4 md:mt-0'
                                    >
                                        View Detail
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedOrder && (
                <ModalDetail
                    selectedOrder={selectedOrder}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Order;