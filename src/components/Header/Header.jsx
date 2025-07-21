import React from 'react'
import LogoImg from '../../assets/images/Logo.png'
import { CurrencyIcon, HeartIcon, LogoIconHeader } from '../../assets/icons/Icons'

export const Header = () => {
  return (
    <header className='w-[1240px] px-[20px] m-auto py-[12px]'>
        <div className="flex items-center justify-between">
            <div className='flex items-center gap-2'>
                <LogoIconHeader />
                <h1 className='font-extrabold text-[#228BE6] text-[18px] '>Yangi uylar</h1>
            </div>
            <nav>
                <ul className='flex items-center gap-[20px] '>
                    <li className='text-[#445371] font-normal'>
                        <a href="#">Hавастройки</a>
                    </li>
                    <li className='text-[#445371] font-normal'>
                        <a href="#">Застройщики</a>
                    </li>
                    <li className='text-[#445371] font-normal'>
                        <a href="#">Блог</a>
                    </li>
                </ul>
            </nav>
            <div className='flex items-center gap-[20px]'>
                <CurrencyIcon />
                <h3>USD</h3>
                <HeartIcon />
            </div>
        </div>
    </header>
  )
}
