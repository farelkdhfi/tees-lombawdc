import React, { useEffect, useState } from 'react';
import Logo from '../assets/tees.png';

const GetStartedModal = ({ isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 sm:px-6 md:px-8">
      <div className="bg-white py-10 p-5 md:p-8 rounded-lg shadow-xl max-w-md sm:max-w-lg w-full flex flex-col items-center max-h-[90vh] overflow-y-auto">
        <img src={Logo} alt="" className='w-25 mb-4' />
        <p className="text-gray-600 leading-relaxed text-start mb-4 text-xs md:text-sm">
          In this modern era, awareness of sustainable fashion is increasing. The second-hand clothing industry has now become a solution for those who want to look stylish without compromising the environment.
        </p>
        <p className="text-gray-600 leading-relaxed text-start mb-4 text-xs md:text-sm">
          This platform is not just a place to buy and sell second-hand clothes, but also an educational hub about the importance of sustainable fashion. With the concept of circular fashion, every user can give new life to their clothes.
        </p>
        <p className="text-gray-600 leading-relaxed text-start mb-6 text-xs md:text-sm">
          In addition to environmental benefits, this platform also opens up business opportunities for individuals and small businesses with a transparent transaction system and an enjoyable shopping experience.
        </p>
        <div className="flex flex-wrap self-start gap-2 mb-4">
          <input
            type="checkbox"
            id="agreement"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
          />
          <label htmlFor="agreement" className="text-gray-700 text-xs flex gap-x-2">
            I agree to the 
          </label>
          <p className="text-blue-500 underline text-xs">terms & conditions</p>
        </div>
        <button
          onClick={onClose}
          disabled={!isChecked}
          className={`px-4 py-2 text-sm sm:px-6 sm:py-3 cursor-pointer duration-300 text-white font-semibold rounded-lg w-full transition-all ${isChecked ? 'bg-[#3D9970] hover:bg-green-800/80' : 'bg-black/30 cursor-not-allowed'}`}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default GetStartedModal;