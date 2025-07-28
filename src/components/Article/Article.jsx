import React from 'react';
import BannerImg from '../../assets/images/Banner.png';

export const Article = () => {
  return (
    <div className='w-full max-w-[1240px] px-4 md:px-[20px] mx-auto pt-[20px] md:pt-[40px]'>
      <img 
        src={BannerImg} 
        alt="This is a banner img" 
        className="w-full h-auto object-cover rounded-lg" 
      />
    </div>
  );
};