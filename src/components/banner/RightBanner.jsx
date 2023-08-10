import React from 'react';
import { bannerImg } from '../../assets';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex items-center justify-center">
      <img
        className="w-[300px] h-[300px] lgl:w-[450px] lgl:h-[600px] z-10 borderRadius bg-gradient-to-tl from-red-600 to-red-200 transition-all duration-500 transform hover:-rotate-6 hover:scale-105"
        src={bannerImg}
        alt=""
      />
    </div>
  );
};

export default RightBanner;
