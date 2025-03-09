import React, { useEffect, useState } from 'react';
import Logo from '../assets/tees.png'

const ModalOffer = ({ isOffering, offeringClose }) => {

  useEffect(() => {
    if (isOffering) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOffering]);

  if (!isOffering) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 text-black/70 z-50 px-4 sm:px-6 md:px-8">
      <div className="bg-white py-10 p-5 md:p-8 rounded-lg shadow-xl w-fit flex flex-col items-center max-h-[90vh] overflow-y-auto space-y-2 text-sm">
       <p>You are offering a discount of</p>
       <p className='text-3xl font-black'>50%</p>
       <button onClick={offeringClose} className='bg-green cursor-pointer font-semibold text-white py-2 px-3 rounded-lg'>Continue</button>
      </div>
    </div>
  );
};

export default ModalOffer;
