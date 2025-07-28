import React from 'react'
import LogoImg from '../../assets/images/Logo.png'
import { CurrencyIcon, HeartIcon, LogoIconHeader } from '../../assets/icons/Icons'

export const Header = () => {
  return (
    <header className='w-full max-w-[1240px] px-4 sm:px-5 lg:px-[20px] m-auto py-3 lg:py-[12px]'>
      <div className="flex items-center justify-between">
        <div className='flex items-center gap-2'>
          <LogoIconHeader />
          <h1 className='font-extrabold text-[#228BE6] text-base sm:text-lg lg:text-[18px]'>
            Yangi uylar
          </h1>
        </div>
        
        {/* Navigation - Hidden on mobile, shown on tablet+ */}
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-4 lg:gap-[20px]'>
            <li className='text-[#445371] font-normal text-sm lg:text-base'>
              <a href="#" className='hover:text-[#228BE6] transition-colors'>Hавастройки</a>
            </li>
            <li className='text-[#445371] font-normal text-sm lg:text-base'>
              <a href="#" className='hover:text-[#228BE6] transition-colors'>Застройщики</a>
            </li>
            <li className='text-[#445371] font-normal text-sm lg:text-base'>
              <a href="#" className='hover:text-[#228BE6] transition-colors'>Блог</a>
            </li>
          </ul>
        </nav>
        
        <div className='flex items-center gap-3 lg:gap-[20px]'>
          <CurrencyIcon />
          <h3 className='text-sm lg:text-base'>USD</h3>
          <HeartIcon />
          
          {/* Mobile menu button */}
          <button className='md:hidden p-1'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}