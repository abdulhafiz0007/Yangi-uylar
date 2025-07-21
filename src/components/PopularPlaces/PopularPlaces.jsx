import React from 'react'
import { DotIcon, Location2Icon, MetroIcon, RedHeartIcon } from '../../assets/icons/Icons'
import HomeImg1 from '../../assets/images/2599a4cb6a30a04d8552b6c12482a4f9f08660b8 2.png';
import HomeImg2 from '../../assets/images/Image (1).png';
import HomeImg3 from '../../assets/images/Image (2).png';
import HomeImg4 from '../../assets/images/Image (3).png';
import HomeImg5 from '../../assets/images/Image (4).png';
import HomeImg6 from '../../assets/images/Image (5).png';



export const PopularPlaces = () => {
  return (
    <div className='w-[1241px] px-[20px] mx-auto pt-[80px]'>
      <h2 className='font-semibold text-[40px] mb-[40px]'>Популярные объекты</h2>
      <ul className='flex flex-wrap gap-[20px]'>
        <li className='relative w-[387px] bg-white rounded-2xl'>
          <img className='w-[387px] rounded-2xl' src={HomeImg1} alt="" />
          <button className='absolute top-[15px] left-[15px] px-[12px] py-[8px] rounded-2xl bg-white text-[14px] font-medium'>Застройщик</button>
          <span className='absolute top-[15px] right-[15px]'>
            <RedHeartIcon />
          </span>
          <div className='pt-[16px] pb-[20px] px-[20px]'>
            <h3 className='font-semibold text-[24px]'>Название объекта</h3>
            <div className='flex items-center gap-2 mt-[8px]'>
              <MetroIcon />
              <p>Metro</p>
            </div>
            <div className='flex items-center gap-2 '>
              <Location2Icon />
              <p>Расположение</p>
            </div>
            <ul className='flex items-center flex-wrap mt-[16px]'>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>2025-2028</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>24 месяца рассроч</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
            </ul>
            <h3 className='text-[#228BE6] font-semibold text-[30px] my-[16px]'>180 500 000 сум</h3>
            <button className='w-[347px] text-sky-600 bg-sky-100 px-[20px] py-[10px] rounded-lg'>Показать телефон</button>
          </div>
        </li>
        <li className='relative w-[387px] bg-white rounded-2xl'>
          <img className='w-[387px] rounded-2xl' src={HomeImg2} alt="" />
          <button className='absolute top-[15px] left-[15px] px-[12px] py-[8px] rounded-2xl bg-white text-[14px] font-medium'>Застройщик</button>
          <span className='absolute top-[15px] right-[15px]'>
            <RedHeartIcon />
          </span>
          <div className='pt-[16px] pb-[20px] px-[20px]'>
            <h3 className='font-semibold text-[24px]'>Tang Saroy</h3>
            <div className='flex items-center gap-2 mt-[8px]'>
              <MetroIcon />
              <p>Metro</p>
            </div>
            <div className='flex items-center gap-2'>
              <Location2Icon />
              <p>Расположение</p>
            </div>
            <ul className='flex items-center flex-wrap mt-[16px]'>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>2025-2028</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>24 месяца рассроч</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
            </ul>
            <h3 className='text-[#228BE6] font-semibold text-[30px] my-[16px]'>5 148 000 сум</h3>
            <button className='w-[347px] text-sky-600 bg-sky-100 px-[20px] py-[10px] rounded-lg'>Показать телефон</button>
          </div>
        </li>
        <li className='relative w-[387px] bg-white rounded-2xl'>
          <img className='w-[387px] rounded-2xl' src={HomeImg3} alt="" />
          <button className='absolute top-[15px] left-[15px] px-[12px] py-[8px] rounded-2xl bg-white text-[14px] font-medium'>Застройщик</button>
          <span className='absolute top-[15px] right-[15px]'>
            <RedHeartIcon />
          </span>
          <div className='pt-[16px] pb-[20px] px-[20px]'>
            <h3 className='font-semibold text-[24px]'>Yangi Hayot</h3>
            <div className='flex items-center gap-2 mt-[8px]'>
              <MetroIcon />
              <p>Metro</p>
            </div>
            <div className='flex items-center gap-2'>
              <Location2Icon />
              <p>Расположение</p>
            </div>
            <ul className='flex items-center flex-wrap mt-[16px]'>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>2025-2028</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>24 месяца рассроч</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
            </ul>
            <h3 className='text-[#228BE6] font-semibold text-[30px] my-[16px]'>7 200 000 сум</h3>
            <button className='w-[347px] text-sky-600 bg-sky-100 px-[20px] py-[10px] rounded-lg'>Показать телефон</button>
          </div>
        </li>
        <li className='relative w-[387px] bg-white rounded-2xl'>
          <img className='w-[387px] rounded-2xl' src={HomeImg4} alt="" />
          <button className='absolute top-[15px] left-[15px] px-[12px] py-[8px] rounded-2xl bg-white text-[14px] font-medium'>Застройщик</button>
          <span className='absolute top-[15px] right-[15px]'>
            <RedHeartIcon />
          </span>
          <div className='pt-[16px] pb-[20px] px-[20px]'>
            <h3 className='font-semibold text-[24px]'>Koh Ota</h3>
            <div className='flex items-center gap-2 mt-[8px]'>
              <MetroIcon />
              <p>Metro</p>
            </div>
            <div className='flex items-center gap-2'>
              <Location2Icon />
              <p>Расположение</p>
            </div>
            <ul className='flex items-center flex-wrap mt-[16px]'>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>2025-2028</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>24 месяца рассроч</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
            </ul>
            <h3 className='text-[#228BE6] font-semibold text-[30px] my-[16px]'>6 500 000 сум</h3>
            <button className='w-[347px] text-sky-600 bg-sky-100 px-[20px] py-[10px] rounded-lg'>Показать телефон</button>
          </div>
        </li>
        <li className='relative w-[387px] bg-white rounded-2xl'>
          <img className='w-[387px] rounded-2xl' src={HomeImg5} alt="" />
          <button className='absolute top-[15px] left-[15px] px-[12px] py-[8px] rounded-2xl bg-white text-[14px] font-medium'>Застройщик</button>
          <span className='absolute top-[15px] right-[15px]'>
            <RedHeartIcon />
          </span>
          <div className='pt-[16px] pb-[20px] px-[20px]'>
            <h3 className='font-semibold text-[24px]'>Zangiota City Residence</h3>
            <div className='flex items-center gap-2 mt-[8px]'>
              <MetroIcon />
              <p>Metro</p>
            </div>
            <div className='flex items-center gap-2'>
              <Location2Icon />
              <p>Расположение</p>
            </div>
            <ul className='flex items-center flex-wrap mt-[16px]'>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>2025-2028</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>24 месяца рассроч</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
            </ul>
            <h3 className='text-[#228BE6] font-semibold text-[30px] my-[16px]'>7 000 000 сум</h3>
            <button className='w-[347px] text-sky-600 bg-sky-100 px-[20px] py-[10px] rounded-lg'>Показать телефон</button>
          </div>
        </li>
        <li className='relative w-[387px] bg-white rounded-2xl'>
          <img className='w-[387px] rounded-2xl' src={HomeImg6} alt="" />
          <button className='absolute top-[15px] left-[15px] px-[12px] py-[8px] rounded-2xl bg-white text-[14px] font-medium'>Застройщик</button>
          <span className='absolute top-[15px] right-[15px]'>
            <RedHeartIcon />
          </span>
          <div className='pt-[16px] pb-[20px] px-[20px]'>
            <h3 className='font-semibold text-[24px]'>Bahor Residence</h3>
            <div className='flex items-center gap-2 mt-[8px]'>
              <MetroIcon />
              <p>Metro</p>
            </div>
            <div className='flex items-center gap-2'>
              <Location2Icon />
              <p>Расположение</p>
            </div>
            <ul className='flex items-center flex-wrap mt-[16px]'>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>2025-2028</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>24 месяца рассроч</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
              <li className='w-[168px] flex items-center gap-2'>
                <DotIcon />
                <p>Характеристика 2</p>
              </li>
            </ul>
            <h3 className='text-[#228BE6] font-semibold text-[30px] my-[16px]'>180 500 000 сум</h3>
            <button className='w-[347px] text-sky-600 bg-sky-100 px-[20px] py-[10px] rounded-lg'>Показать телефон</button>
          </div>
        </li>
      </ul>
      <button className='w-[168px] text-white bg-sky-600 px-[20px] py-[10px] rounded-xl mx-auto block my-[40px]'>Показать еще</button>
    </div>
  )
}
