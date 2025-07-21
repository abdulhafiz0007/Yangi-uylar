import React from 'react'
import HeroImg from '../../assets/images/Main Banner.png';
import HeroImg2 from '../../assets/images/Object.png';

export const Hero = () => {
  return (
    <div className='w-[1240px] px-[20px] m-auto flex items-center gap-[20px] pt-[24px] pb-[40px]'>
        <img src={HeroImg} alt="this is first hero img" />
        <img src={HeroImg2} alt="this is second hero img" />
    </div>
  )
}
