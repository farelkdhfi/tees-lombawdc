import React, { useState } from 'react';
import { User, ShoppingCart, Heart, MapPin, Lock, LogOut, Store } from 'lucide-react';
import Address from './Address';
import WishList from './WishList';
import products from '../utils/products';
import Order from './Order';
import PasswordChange from './PasswordChange';
import Account from './Account';
import { Link } from 'react-router-dom';
import MyProduct from './MyProduct';
import Barter from './Barter';
import { FaTradeFederation } from 'react-icons/fa';

const MainLayoutAcc = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showAll, setShowAll] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const allProducts = products.flatMap(category => category.items);
  const displayedProducts = showAll ? allProducts : allProducts.slice(0, 5);

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return <Account />;
      case 'myproduct':
        return <MyProduct displayedProducts={displayedProducts} />;
      case 'order':
        return <Order displayedProducts={displayedProducts} />;
      case 'wishlist':
        return <WishList displayedProducts={displayedProducts} />;
      case 'barter':
        return <Barter displayedProducts={displayedProducts} />;
      case 'address':
        return <Address />;
      case 'password':
        return <PasswordChange />;
      default:
        return <Account />;
    }
  };

  return (
    <section className="pt-20 md:pt-30 px-3 lg:px-15 bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8">
        <div className='flex gap-x-3 items-center mb-8'>
          <Link to="/" className='text-base md:text-lg cursor-pointer text-black/70 hover:text-black'>
            Home
          </Link>
          <p>›</p>
          <h2 className="text-base md:text-lg font-semibold">My Account</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Hamburger Button */}
          <button
            className="md:hidden shadow-lg justify-end w-full flex font-semibold py-3 pr-3 bg-gray-100 rounded-lg"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            Show Menu ☰
          </button>

          {/* Sidebar */}
          <div
            className={`fixed md:relative pt-5 inset-y-0 left-0 w-64 bg-white rounded-lg shadow-md p-6 min-h-screen overflow-y-auto transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 transition-transform duration-200 ease-in-out z-50 md:z-0`}
          >
            <p className='text-base font-semibold mb-5'>Profile Menu</p>
            <ul className="space-y-4">
              <li
                className={`flex text-xs md:text-base items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'account' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                }`}
                onClick={() => [setIsSidebarOpen(false), setActiveTab('account')]}
              >
                <User size={20} />
                <span>Account</span>
              </li>
              <li
                className={`flex text-xs md:text-base items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'myproduct' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                }`}
                onClick={() => [setIsSidebarOpen(false), setActiveTab('myproduct')]}
              >
                <Store size={20} />
                <span>My Store</span>
              </li>
              <li
                className={`flex text-xs md:text-base items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'order' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                }`}
                onClick={() => [setIsSidebarOpen(false), setActiveTab('order')]}
              >
                <ShoppingCart size={20} />
                <span>Orders</span>
              </li>
              <li
                className={`flex text-xs md:text-base items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'barter' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                }`}
                onClick={() => [setIsSidebarOpen(false), setActiveTab('barter')]}
              >
                <FaTradeFederation size={20} />
                <span>Barter</span>
              </li>
              <li
                className={`flex text-xs md:text-base items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'address' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                }`}
                onClick={() => [setIsSidebarOpen(false), setActiveTab('address')]}
              >
                <MapPin size={20} />
                <span>Address</span>
              </li>
              <li
                className={`flex text-xs md:text-base items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'wishlist' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                }`}
                onClick={() => [setIsSidebarOpen(false), setActiveTab('wishlist')]}
              >
                <Heart size={20} />
                <span>Wishlist</span>
              </li>
              <li
                className={`flex text-xs md:text-base items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'password' ? 'bg-green-50 text-green-600' : 'text-black/70 hover:bg-gray-50'
                }`}
                onClick={() => [setIsSidebarOpen(false), setActiveTab('password')]}
              >
                <Lock size={20} />
                <span>Password</span>
              </li>
              <li className="flex text-xs md:text-base items-center space-x-3 p-3 rounded-lg cursor-pointer text-black/70 hover:bg-gray-50">
                <LogOut size={20} />
                <span>Logout</span>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/4">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainLayoutAcc;