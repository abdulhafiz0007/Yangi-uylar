import React from 'react'
import logoImg from '../../assets/images/Logo (5).png';

export const Footer = () => {
  return (
    <footer className='bg-[#228BE6] rounded-t-[50px]'>
      <div className='w-[1240px] mx-auto px-[20px] flex items-start justify-between py-[60px]'>
        <a href="">
          <img src={logoImg} alt="footer logo img" />
        </a>
        <div>
          <h2 className='mb-[32px] font-semibold text-[24px] text-white'>Новостройки</h2>
          <ul className='flex flex-col gap-[20px]'>
            <li className='text-white text-[14px]'>
                <a href="#">Однокомнатная</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Двухкомнатная</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Трехкомнатная</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Четырехкомнатная</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Пятикомнатная</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-[32px] font-semibold text-[24px] text-white'>Районы</h2>
          <ul className='flex flex-col gap-[20px]'>
            <li className='text-white text-[14px]'>
                <a href="#">Янгихаётский район</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Учтепинский район</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Чиланзарский</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Мирабадский район</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Яккасарайский район</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Алмазарсктй район</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-[20px]'>
            <li className='text-white mt-[65px] text-[14px]'>
                <a href="#">Юнусабадский район</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Яшнабадский район</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Сергелийский район</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Бектемирский район</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Мирзо-Улугбекский район</a>
            </li>
            <li className='text-white text-[14px]'>
                <a href="#">Шайхантахурский район</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
