import React, { useState, useMemo, useContext } from 'react'
import { DotIcon, Location2Icon, MetroIcon, RedHeartIcon } from '../../assets/icons/Icons'
import Img1 from '../../assets/images/Image (9).png';
import Img2 from '../../assets/images/Image (11).png';
import Img3 from '../../assets/images/Image (12).png';
import Img4 from '../../assets/images/Image (13).png';
import Img5 from '../../assets/images/Image (14).png';
import Img6 from '../../assets/images/Image (15).png';
import Img7 from '../../assets/images/Image (16).png';
import Img8 from '../../assets/images/Image (17).png';
import Img9 from '../../assets/images/Image (18).png';
import { FormContext } from '../../context/FormContext';

export const PopularPlaces2 = ({ filters }) => {
  const properties = [
    {
      id: 1,
      name: 'Darhan Avenue',
      image: Img1,
      price: 180500000,
      priceText: '180 500 000 сум'
    },
    {
      id: 2,
      name: 'Yangi Darxon Story',
      image: Img2,
      price: 5500000,
      priceText: '5 500 000 сум'
    },
    {
      id: 3,
      name: "O'rikzor Residence",
      image: Img3,
      price: 9000000,
      priceText: '9 000 000 сум'
    },
    {
      id: 4,
      name: 'Xon Saroy',
      image: Img4,
      price: 12000000,
      priceText: '12 000 000 сум'
    },
    {
      id: 5,
      name: 'Shoshkent',
      image: Img5,
      price: 21700000,
      priceText: '21 700 000 сум'
    },
    {
      id: 6,
      name: 'Yangi Darhon',
      image: Img6,
      price: 11500000,
      priceText: '11 500 000 сум'
    },
    {
      id: 7,
      name: "Yangi O'zbekiston Massivi",
      image: Img7,
      price: 12175000,
      priceText: '12 175 000 сум'
    },
    {
      id: 8,
      name: 'Zangiota City Residence',
      image: Img8,
      price: 17220000,
      priceText: '17 220 000 сум'
    },
    {
      id: 9,
      name: 'Ofiyat Residence',
      image: Img9,
      price: 20500000,
      priceText: '20 500 000 сум'
    }
  ];

  const { setIsFormActive } = useContext(FormContext);

  const filteredProperties = useMemo(() => {
    if (!filters) return properties;

    return properties.filter(property => {
      const locationMatch = !filters.location || 
        property.name.toLowerCase().includes(filters.location.toLowerCase());

      const priceMatch = !filters.minPrice || property.price >= filters.minPrice;

      return locationMatch && priceMatch;
    });
  }, [filters, properties]);

  const PropertyCard = ({ property }) => (
    <li className='relative w-full max-w-[387px] bg-white rounded-2xl shadow-lg'>
      <img 
        className='w-full h-[200px] sm:h-[220px] lg:h-[250px] object-cover rounded-t-2xl' 
        src={property.image} 
        alt={property.name} 
      />
      <button className='absolute top-3 lg:top-[15px] left-3 lg:left-[15px] px-2 lg:px-[12px] py-1 lg:py-[8px] rounded-2xl bg-white text-xs lg:text-[14px] font-medium'>
        Застройщик
      </button>
      <span className='absolute top-3 lg:top-[15px] right-3 lg:right-[15px]'>
        <RedHeartIcon />
      </span>
      <div className='pt-4 lg:pt-[16px] pb-4 lg:pb-[20px] px-4 lg:px-[20px]'>
        <h3 className='font-semibold text-lg sm:text-xl lg:text-[24px] mb-2 line-clamp-2'>
          {property.name}
        </h3>
        <div className='flex items-center gap-2 mt-2 lg:mt-[8px]'>
          <MetroIcon />
          <p className='text-sm lg:text-base'>Metro</p>
        </div>
        <div className='flex items-center gap-2'>
          <Location2Icon />
          <p className='text-sm lg:text-base truncate'>Расположение</p>
        </div>
        <ul className='flex items-center flex-wrap mt-3 lg:mt-[16px]'>
          <li className='w-full sm:w-[calc(50%-8px)] lg:w-[168px] flex items-center gap-2 mb-2'>
            <DotIcon />
            <p className='text-xs lg:text-sm'>2025-2028</p>
          </li>
          <li className='w-full sm:w-[calc(50%-8px)] lg:w-[168px] flex items-center gap-2 mb-2'>
            <DotIcon />
            <p className='text-xs lg:text-sm'>24 месяца рассроч</p>
          </li>
          <li className='w-full sm:w-[calc(50%-8px)] lg:w-[168px] flex items-center gap-2 mb-2'>
            <DotIcon />
            <p className='text-xs lg:text-sm'>Характеристика 2</p>
          </li>
          <li className='w-full sm:w-[calc(50%-8px)] lg:w-[168px] flex items-center gap-2 mb-2'>
            <DotIcon />
            <p className='text-xs lg:text-sm'>Характеристика 2</p>
          </li>
        </ul>
        <h3 className='text-[#228BE6] font-semibold text-xl sm:text-2xl lg:text-[30px] my-3 lg:my-[16px]'>
          {property.priceText}
        </h3>
        <button 
          onClick={() => setIsFormActive(true)} 
          className='w-full text-sky-600 bg-sky-100 px-4 lg:px-[20px] py-2 lg:py-[10px] rounded-lg hover:bg-sky-200 transition-colors text-sm lg:text-base'
        >
          Показать телефон
        </button>
      </div>
    </li>
  );

  return (
    <div className='w-full max-w-[1241px] px-4 sm:px-5 lg:px-[20px] mx-auto pt-12 lg:pt-[80px]'>
      <h2 className='font-semibold text-2xl sm:text-3xl lg:text-[40px] mb-6 lg:mb-[40px] text-center lg:text-left'>
        Популярные объекты
        {filteredProperties.length !== properties.length && (
          <span className='text-[#228BE6] text-lg sm:text-xl lg:text-[24px] ml-2 lg:ml-4 block sm:inline mt-2 sm:mt-0'>
            ({filteredProperties.length} из {properties.length})
          </span>
        )}
      </h2>
      
      {filteredProperties.length === 0 ? (
        <div className='text-center py-8 lg:py-[40px]'>
          <p className='text-gray-500 text-lg lg:text-[20px] mb-2'>
            Не найдено объектов по выбранным фильтрам
          </p>
          <p className='text-gray-400 text-sm lg:text-[16px]'>
            Попробуйте изменить параметры поиска
          </p>
        </div>
      ) : (
        <>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[20px] place-items-center lg:place-items-stretch'>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </ul>
          
          {filteredProperties.length > 6 && (
            <button className='w-full max-w-[168px] text-white bg-sky-600 px-4 lg:px-[20px] py-2 lg:py-[10px] rounded-xl mx-auto block my-8 lg:my-[40px] hover:bg-sky-700 transition-colors'>
              Показать еще
            </button>
          )}
        </>
      )}
    </div>
  )
}