import React from 'react'
import { useState } from 'react'
import { BottomIcon, LocationIcon, MenuIcon, PriceIcon } from '../../assets/icons/Icons'

export const Filter = ({ onFilterChange }) => {
    const [selected, setSelected] = useState('');
    const [open, setOpen] = useState(false);
    
    // Popular places options based on your data
    const options = [
        'Darhan Avenue',
        'Yangi Darxon Story',
        "O'rikzor Residence",
        'Xon Saroy',
        'Shoshkent',
        'Yangi Darhon',
        "Yangi O'zbekiston Massivi",
        'Zangiota City Residence',
        'Ofiyat Residence'
    ];

    const [priceSelect, setPriceSelected] = useState('');
    const [pricesOpen, setPricesOpen] = useState(false);
    
    // Price range options
    const prices = [
        { label: '10 000 000+ сум', value: 10000000 },
        { label: '20 000 000+ сум', value: 20000000 },
        { label: '50 000 000+ сум', value: 50000000 },
        { label: '100 000 000+ сум', value: 100000000 },
        { label: '200 000 000+ сум', value: 200000000 }
    ];

    // Function to handle filter changes
    const handleFilterChange = () => {
        if (onFilterChange) {
            onFilterChange({
                location: selected,
                minPrice: priceSelect?.value || 0
            });
        }
    };

    // Handle location selection
    const handleLocationSelect = (option) => {
        setSelected(option);
        setOpen(false);
        // Apply filter immediately after selection
        setTimeout(() => {
            handleFilterChange();
        }, 0);
    };

    // Handle price selection
    const handlePriceSelect = (price) => {
        setPriceSelected(price);
        setPricesOpen(false);
        // Apply filter immediately after selection
        setTimeout(() => {
            handleFilterChange();
        }, 0);
    };

    // Reset all filters
    const handleReset = () => {
        setSelected('');
        setPriceSelected('');
        if (onFilterChange) {
            onFilterChange({
                location: '',
                minPrice: 0
            });
        }
    };

    return (
        <div style={{ boxShadow: '0 0px 6px rgba(0,0,0,0.2)' }} className='w-[1020px] p-[24px] m-auto rounded-2xl bg-white absolute top-[-90px] right-0 left-0'>
            <div className='relative flex items-center justify-between mb-[20px]'>
                {/* Location Filter */}
                <div className='relative'>
                    <button 
                        onClick={() => setOpen(!open)} 
                        className='flex items-center justify-between w-[310px] h-[56px] px-4 py-3 bg-white rounded-xl shadow border text-gray-700 text-base'
                    >
                        <div className='flex items-center gap-3'>
                            <LocationIcon />
                            <span>{selected || 'Выбрать район'}</span>
                        </div>
                        <BottomIcon />
                    </button>
                    {open && (
                        <ul className='absolute top-[60px] z-10 mt-2 w-[310px] bg-white rounded-xl shadow border text-gray-700 max-h-60 overflow-y-auto'>
                            <li 
                                onClick={() => handleLocationSelect('')}
                                className='px-4 py-2 hover:bg-blue-100 cursor-pointer border-b'
                            >
                                Все районы
                            </li>
                            {options.map((option) => (
                                <li 
                                    key={option} 
                                    onClick={() => handleLocationSelect(option)}
                                    className='px-4 py-2 hover:bg-blue-100 cursor-pointer'
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Rooms Filter (keeping original) */}
                <div className='w-[310px] h-[56px] border-2 rounded-lg flex items-center justify-between p-[16px]'>
                   <div className='flex items-center gap-4 border-r-2 pr-4'>
                      <MenuIcon />
                      <p className='font-medium'>1</p>
                   </div>
                   <p className='pr-4 border-r-2 font-medium'>2</p>
                   <p className='pr-4 border-r-2 font-medium'>3</p>
                   <p className=' font-medium'>4+</p>
                </div>

                {/* Price Filter */}
                <div className='relative'>
                    <button 
                        onClick={() => setPricesOpen(!pricesOpen)} 
                        className='flex items-center justify-between w-[310px] h-[56px] px-4 py-3 bg-white rounded-xl shadow border text-gray-700 text-base'
                    >
                        <div className='flex items-center gap-3'>
                            <PriceIcon />
                            <span>{priceSelect?.label || 'Стоимость'}</span>
                        </div>
                        <BottomIcon />
                    </button>
                    {pricesOpen && (
                        <ul className='absolute top-[60px] z-10 mt-2 w-[310px] bg-white rounded-xl shadow border text-gray-700'>
                            <li 
                                onClick={() => handlePriceSelect('')}
                                className='px-4 py-2 hover:bg-blue-100 cursor-pointer border-b'
                            >
                                Любая цена
                            </li>
                            {prices.map((price) => (
                                <li 
                                    key={price.value} 
                                    onClick={() => handlePriceSelect(price)}
                                    className='px-4 py-2 hover:bg-blue-100 cursor-pointer'
                                >
                                    {price.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-[10px]'>
                    <button 
                        onClick={handleFilterChange}
                        className='bg-[#343A40] px-[20px] py-[10px] rounded-lg text-white font-semibold'
                    >
                        Фильтр
                    </button>
                    <button 
                        onClick={handleReset}
                        className='bg-red-200 text-[#E62222] px-[20px] py-[10px] rounded-lg font-semibold'
                    >
                        Сбросить все
                    </button>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <button className='text-sky-600 bg-sky-100 px-[20px] py-[10px] rounded-lg font-semibold'>Показать на карте</button>
                    <button className='bg-[#228BE6] text-white px-[20px] py-[10px] rounded-lg font-semibold'>Показать все объекты</button>
                </div>
            </div>
        </div>
    )
}