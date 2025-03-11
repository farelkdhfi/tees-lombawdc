import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom

const MyProduct = ({ displayedProducts }) => {
    const [products, setProducts] = useState(displayedProducts);
    const [orders, setOrders] = useState([
        { id: 1, productName: "Product A", status: "Pending" },
        { id: 2, productName: "Product B", status: "Shipped" },
    ]);

    const handleDelete = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    };

    const handleMarkAsSoldOut = (productId) => {
        const updatedProducts = products.map(product =>
            product.id === productId ? { ...product, status: "Sold Out" } : product
        );
        setProducts(updatedProducts);
    };

    const handleProcessOrder = (orderId, status) => {
        const updatedOrders = orders.map(order =>
            order.id === orderId ? { ...order, status } : order
        );
        setOrders(updatedOrders);
    };

    return (
        <div className='flex w-full p-8 bg-white rounded-lg shadow-lg'>
            <div className='w-full'>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-lg font-bold text-gray-800">My Store Dashboard</h2>
                    <Link
                        to="/sell"
                        className="bg-green flex gap-x-2 text-white px-4 py-2 rounded-md hover:bg-green-800/80 transition-colors duration-300"
                    >
                        <PlusCircle /> Product
                    </Link>
                </div>

                {/* Ringkasan Penjualan */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 rounded-lg border border-black/10">
                        <h3 className="text-base font-semibold text-gray-800">Total Products</h3>
                        <p className="text-2xl text-gray-800">{products.length}</p>
                    </div>
                    <div className="p-6 rounded-lg border border-black/10">
                        <h3 className="text-base font-semibold text-gray-800">Orders Pending</h3>
                        <p className="text-2xl text-gray-800">{orders.filter(order => order.status === "Pending").length}</p>
                    </div>
                    <div className="p-6 rounded-lg border border-black/10">
                        <h3 className="text-base font-semibold text-gray-800">Products Sold Out</h3>
                        <p className="text-2xl text-gray-800">{products.filter(product => product.status === "Sold Out").length}</p>
                    </div>
                </div>

                {/* Daftar Produk */}
                <h3 className="text-base font-bold text-gray-800 mb-3">My Products</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="bg-white p-4 text-sm rounded-lg border border-black/10 transform transition-transform duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto object-cover rounded-md mb-4"
                            />
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                                {product.status === "Sold Out" && (
                                    <span className="text-xs text-gray-800 border border-black/20 px-2 py-1 rounded">Sold Out</span>
                                )}
                            </div>
                            <p className="text-sm text-gray-800/70">{product.brand}</p>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-base text-gray-800 font-semibold">${product.price}</p>
                                <div className="flex items-center">
                                    <span className="text-gray-800">&#9733;</span>
                                    <span className="text-sm text-gray-800/70 ml-1">{product.rating}</span>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 space-x-2">
                                <button className="w-1/2 text-gray-800 border border-black/20 py-2 rounded-md hover:bg-black/10 transition-colors duration-300">
                                    Edit
                                </button>
                                <button
                                    className="w-1/2 text-gray-800 border border-black/20 py-2 rounded-md hover:bg-black/10 transition-colors duration-300"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </div>
                            <button
                                className="w-full mt-2 text-gray-800 border border-black/20 py-2 rounded-md hover:bg-black/10 transition-colors duration-300"
                                onClick={() => handleMarkAsSoldOut(product.id)}
                            >
                                Mark as Sold Out
                            </button>
                        </div>
                    ))}
                </div>

                {/* Daftar Pesanan */}
                <h3 className="text-base font-bold mt-8 mb-6 text-gray-800">Orders</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-black/10">
                        <thead>
                            <tr>
                                <th className="py-3 px-4 border-b text-left text-gray-800">Order ID</th>
                                <th className="py-3 px-4 border-b text-left text-gray-800">Product Name</th>
                                <th className="py-3 px-4 border-b text-left text-gray-800">Status</th>
                                <th className="py-3 px-4 border-b text-left text-gray-800">Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            {orders.map(order => (
                                <tr key={order.id} className='text-sm'>
                                    <td className="py-3 px-4 border-b text-gray-800">{order.id}</td>
                                    <td className="py-3 px-4 border-b text-gray-800">{order.productName}</td>
                                    <td className="py-3 px-4 border-b text-gray-800">{order.status}</td>
                                    <td className="py-3 px-4 border-b">
                                        {order.status === "Pending" && (
                                            <button
                                                className="text-gray-800 border border-black/20 py-1 px-3 rounded-md hover:bg-black/10 transition-colors duration-300"
                                                onClick={() => handleProcessOrder(order.id, "Shipped")}
                                            >
                                                Mark as Shipped
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;