import React from 'react'
import { useState } from 'react'
import { BottomIcon, MenuIcon, PriceIcon } from '../../assets/icons/Icons'

export const Filter = ({ onFilterChange }) => {
    const [selectedRooms, setSelectedRooms] = useState('');
    const [priceSelect, setPriceSelected] = useState('');
    const [pricesOpen, setPricesOpen] = useState(false);
    
    // Price range options
    const prices = [
        { label: '5 000 000+ сум', value: 5000000 },
        { label: '10 000 000+ сум', value: 10000000 },
        { label: '20 000 000+ сум', value: 20000000 },
        { label: '50 000 000+ сум', value: 50000000 },
        { label: '100 000 000+ сум', value: 100000000 }
    ];

    // Function to handle filter changes
    const handleFilterChange = () => {
        if (onFilterChange) {
            onFilterChange({
                rooms: selectedRooms,
                minPrice: priceSelect?.value || 0
            });
        }
    };

    // Handle room selection
    const handleRoomSelect = (roomCount) => {
        const newRoomSelection = roomCount === selectedRooms ? '' : roomCount;
        setSelectedRooms(newRoomSelection);
        
        // Apply filter immediately with new values
        if (onFilterChange) {
            onFilterChange({
                rooms: newRoomSelection,
                minPrice: priceSelect?.value || 0
            });
        }
    };

    // Handle price selection
    const handlePriceSelect = (price) => {
        setPriceSelected(price);
        setPricesOpen(false);
        
        // Apply filter immediately with new values
        if (onFilterChange) {
            onFilterChange({
                rooms: selectedRooms,
                minPrice: price?.value || 0
            });
        }
    };

    // Reset all filters
    const handleReset = () => {
        setSelectedRooms('');
        setPriceSelected('');
        if (onFilterChange) {
            onFilterChange({
                rooms: '',
                minPrice: 0
            });
        }
    };

    return (
        <div style={{ boxShadow: '0 0px 6px rgba(0,0,0,0.2)' }} className='w-[700px] p-[24px] m-auto rounded-2xl bg-white absolute top-[-90px] right-0 left-0'>
            <div className='relative flex items-center justify-center gap-[20px] mb-[20px]'>
                {/* Rooms Filter */}
                <div className='w-[310px] h-[56px] border-2 rounded-lg flex items-center justify-between p-[16px]'>
                   <div 
                       onClick={() => handleRoomSelect('1')}
                       className={`flex items-center gap-4 border-r-2 pr-4 py-2 cursor-pointer transition-colors rounded-l-md ${selectedRooms === '1' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                   >
                      <MenuIcon />
                      <p className='font-medium'>1</p>
                   </div>
                   <div 
                       onClick={() => handleRoomSelect('2')}
                       className={`px-4 py-2 border-r-2 font-medium cursor-pointer transition-colors ${selectedRooms === '2' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                   >2</div>
                   <div 
                       onClick={() => handleRoomSelect('3')}
                       className={`px-4 py-2 border-r-2 font-medium cursor-pointer transition-colors ${selectedRooms === '3' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                   >3</div>
                   <div 
                       onClick={() => handleRoomSelect('4+')}
                       className={`px-4 py-2 font-medium cursor-pointer transition-colors rounded-r-md ${selectedRooms === '4+' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                   >4+</div>
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