import React, { useState, useMemo } from 'react'
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
import { useContext } from 'react';
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

  const {setIsFormActive} = useContext(FormContext);

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
    <li className='relative w-[387px] bg-white rounded-2xl'>
      <img className='w-[387px] rounded-2xl' src={property.image} alt={property.name} />
      <button className='absolute top-[15px] left-[15px] px-[12px] py-[8px] rounded-2xl bg-white text-[14px] font-medium'>
        Застройщик
      </button>
      <span className='absolute top-[15px] right-[15px]'>
        <RedHeartIcon />
      </span>
      <div className='pt-[16px] pb-[20px] px-[20px]'>
        <h3 className='font-semibold text-[24px]'>{property.name}</h3>
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
        <h3 className='text-[#228BE6] font-semibold text-[30px] my-[16px]'>
          {property.priceText}
        </h3>
        <button onClick={() => setIsFormActive(true)} className='w-[347px] text-sky-600 bg-sky-100 px-[20px] py-[10px] rounded-lg'>
          Показать телефон
        </button>
      </div>
    </li>
  );

  return (
    <div className='w-[1241px] px-[20px] mx-auto pt-[80px]'>
      <h2 className='font-semibold text-[40px] mb-[40px]'>
        Популярные объекты
        {filteredProperties.length !== properties.length && (
          <span className='text-[#228BE6] text-[24px] ml-4'>
            ({filteredProperties.length} из {properties.length})
          </span>
        )}
      </h2>
      
      {filteredProperties.length === 0 ? (
        <div className='text-center py-[40px]'>
          <p className='text-gray-500 text-[20px]'>Не найдено объектов по выбранным фильтрам</p>
          <p className='text-gray-400 text-[16px] mt-2'>Попробуйте изменить параметры поиска</p>
        </div>
      ) : (
        <>
          <ul className='flex flex-wrap gap-[20px]'>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </ul>
          
          {filteredProperties.length > 6 && (
            <button className='w-[168px] text-white bg-sky-600 px-[20px] py-[10px] rounded-xl mx-auto block my-[40px]'>
              Показать еще
            </button>
          )}
        </>
      )}
    </div>
  )
}