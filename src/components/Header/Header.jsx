import React, { useState } from 'react';
import LogoImg from '../../assets/images/Logo.png'; // Make sure LogoImg is used if intended, otherwise remove
import { CurrencyIcon, HeartIcon, LogoIconHeader } from '../../assets/icons/Icons';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='w-full max-w-[1240px] px-4 sm:px-5 lg:px-[20px] mx-auto py-3 lg:py-[12px] relative z-20'>
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className='flex items-center gap-2'>
          <LogoIconHeader />
          <h1 className='font-extrabold text-[#228BE6] text-base sm:text-lg lg:text-[18px]'>
            Novostroykalar
          </h1>
        </div>

        {/* Desktop Navigation - Hidden on mobile, shown on tablet+ */}
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

        {/* Right Section: Currency, Heart, and Mobile Menu Button */}
        <div className='flex items-center gap-3 lg:gap-[20px]'>
          <CurrencyIcon />
          <h3 className='text-sm lg:text-base'>USD</h3>
          <HeartIcon />

          {/* Mobile menu button (Hamburger icon) */}
          <button onClick={toggleMobileMenu} className='md:hidden p-1 focus:outline-none focus:ring-2 focus:ring-[#228BE6] rounded'>
            <svg className='w-6 h-6 text-[#445371]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Conditionally rendered */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t border-gray-200'>
          <ul className='flex flex-col items-center gap-4'>
            <li className='text-[#445371] font-normal text-base'>
              <a href="#" className='hover:text-[#228BE6] transition-colors' onClick={toggleMobileMenu}>Hавастройки</a>
            </li>
            <li className='text-[#445371] font-normal text-base'>
              <a href="#" className='hover:text-[#228BE6] transition-colors' onClick={toggleMobileMenu}>Застройщики</a>
            </li>
            <li className='text-[#445371] font-normal text-base'>
              <a href="#" className='hover:text-[#228BE6] transition-colors' onClick={toggleMobileMenu}>Блог</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};