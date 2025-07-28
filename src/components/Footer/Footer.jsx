import React from 'react';
import logoImg from '../../assets/images/Logo (5).png';

export const Footer = () => {
  return (
    <footer className='bg-[#228BE6] rounded-t-[30px] md:rounded-t-[50px]'>
      <div className='w-full max-w-[1240px] mx-auto px-4 py-8 md:px-[20px] md:py-[60px] flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between gap-8'>
        {/* Logo Section */}
        <a href="#" className="mb-6 md:mb-0"> {/* Added margin-bottom for mobile */}
          <img src={logoImg} alt="footer logo img" className="h-10 md:h-auto" /> {/* Added height for mobile */}
        </a>

        {/* Navigation Sections */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className='mb-4 font-semibold text-xl md:text-2xl text-white'>Новостройки</h2>
          <ul className='flex flex-col gap-3 md:gap-[20px]'>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Однокомнатная</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Двухкомнатная</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Трехкомнатная</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Четырехкомнатная</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Пятикомнатная</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className='mb-4 font-semibold text-xl md:text-2xl text-white'>Районы</h2>
          <ul className='flex flex-col gap-3 md:gap-[20px]'>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Янгихаётский район</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Учтепинский район</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Чиланзарский</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Мирабадский район</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Яккасарайский район</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Алмазарсктй район</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <ul className='flex flex-col gap-3 md:gap-[20px] mt-0 md:mt-[65px]'> {/* Adjust mt for larger screens */}
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Юнусабадский район</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Яшнабадский район</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Сергелийский район</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Бектемирский район</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Мирзо-Улугбекский район</a>
            </li>
            <li className='text-white text-sm md:text-[14px]'>
              <a href="#">Шайхантахурский район</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};