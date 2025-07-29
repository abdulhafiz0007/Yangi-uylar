import React from 'react'
import HeroImg from '../../assets/images/Main Banner.png';
import HeroImg2 from '../../assets/images/Object.png';

export const Hero = () => {
  return (
    <div className='w-full max-w-[1240px] px-[20px] m-auto flex lg:flex-row flex-col gap-[20px] items-center pt-[24px] lg:pb-[40px] pb-[120px]'>
        <img className='rounded-[20px]' src={HeroImg} alt="this is first hero img" />
        <img className='rounded-[20px]' src={HeroImg2} alt="this is second hero img" />
    </div>
  )
}
