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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 sm:px-6 md:px-8">
      <div className="bg-white py-10 p-5 md:p-8 rounded-lg shadow-xl max-w-md sm:max-w-lg w-full flex flex-col items-center max-h-[90vh] overflow-y-auto">
       <p>kkkkkkk</p>
       <p onClick={offeringClose} className='bg-blue-700'>closure</p>
      </div>
    </div>
  );
};

export default ModalOffer;
