import { Link } from 'react-router-dom';
import Image from '../assets/man-jacket/menjack.png'
export default function DiscountBanner() {
    return (
      <div className="w-full bg-gradient-to-r from-white to-gray-300 text-black/70 p-4 flex flex-col items-center justify-between shadow-lg">
        <div className="flex flex-col text-center">
          <span className="text-lg font-semibold">Ramadhan Deals!</span>
          <span className="text-sm">Up to 50% for today</span>
        </div>
        <div>
            <img src={Image} alt="" />
        </div>
        <Link to="/men">
        <button className="bg-white text-black px-3 mt-3 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-gray-200 transition-all">
          Shop Now
        </button>
        </Link>
        
      </div>
    );
  }
  