import React, { useContext, useEffect, useState } from 'react';
import { DotIcon, Location2Icon, MetroIcon, RedHeartIcon } from '../../assets/icons/Icons';
import { FormContext } from '../../context/FormContext';
import { supabase } from '../../pages/supabaseClient';
import { Filter } from '../Filter/Filter';

export const PopularPlaces = () => {
  const { setIsFormActive } = useContext(FormContext);
  const [popularPlaces, setPopularPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPopularPlaces = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('homes')
        .select('*')
        .eq('is_popular', true)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setPopularPlaces(data || []);
      setFilteredPlaces(data || []); 
    } catch (error) {
      console.error('Ma\'lumotlarni olishda xatolik:', error);
      setError('Ma\'lumotlarni yuklab bo\'lmadi');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularPlaces();
  }, []);

  // Handle filter changes
  const handleFilterChange = (filterData) => {
    console.log('Filter applied:', filterData);
    
    let filtered = [...popularPlaces];

    // Filter by rooms
    if (filterData.rooms) {
      filtered = filtered.filter(place => {
        if (filterData.rooms === '4+') {
          // Extract number from rooms string and check if >= 4
          const roomCount = parseInt(place.rooms) || 0;
          return roomCount >= 4;
        } else {
          // Exact match for 1, 2, 3 rooms
          return place.rooms && place.rooms.includes(filterData.rooms);
        }
      });
    }

    // Filter by minimum price
    if (filterData.minPrice > 0) {
      filtered = filtered.filter(place => {
        if (!place.price) return false;
        
        // Extract numeric value from price string
        const priceString = place.price.replace(/[^\d]/g, ''); // Remove non-digits
        const priceValue = parseInt(priceString) || 0;
        
        return priceValue >= filterData.minPrice;
      });
    }

    setFilteredPlaces(filtered);
  };

  const formatFeatures = (home) => {
    const features = [];
    
    if (home.year_range) features.push(home.year_range);
    if (home.installment) features.push(home.installment);
    if (home.characteristics && home.characteristics.length > 0) {
      features.push(...home.characteristics.slice(0, 2)); // Faqat birinchi 2 ta xususiyat
    }
    
    return features;
  };

  if (loading) {
    return (
      <div className='w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-16 sm:pt-20'>
        <h2 className='font-semibold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-10'>Популярные объекты</h2>
        <div className='mb-8 sm:mb-12'>
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className='flex justify-center items-center h-64'>
          <div className='text-lg sm:text-xl'>Yuklanmoqda...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-16 sm:pt-20'>
        <h2 className='font-semibold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-10'>Популярные объекты</h2>
        <div className='mb-8 sm:mb-12'>
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className='flex justify-center items-center h-64'>
          <div className='text-red-500 text-lg sm:text-xl'>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto lg:pt-[80px] pt-[180px] sm:pt-20'>
      <h2 className='font-semibold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-10'>Популярные объекты</h2>
      
      {/* Filter Component - Always in normal flow */}
      <div className='mb-8 sm:mb-[100px] absolute top-[-150px] right-[20px] left-[20px] lg:top-[-80px] lg:left-[400px] lg:right-[400px]'>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      
      <div>
        {filteredPlaces.length === 0 ? (
          <div className='text-center text-gray-500 text-lg sm:text-xl py-16'>
            {popularPlaces.length === 0 ? 'Hozircha mashhur uylar yo\'q' : 'Filtrlarga mos uylar topilmadi'}
          </div>
        ) : (
          <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
            {filteredPlaces.map((place) => (
              <li key={place.id} className='relative w-full max-w-sm mx-auto md:max-w-none bg-white rounded-2xl shadow-lg overflow-hidden'>
                <div className='relative'>
                  {place.image_url ? (
                    <img 
                      className='w-full h-48 sm:h-56 lg:h-64 object-cover' 
                      src={place.image_url} 
                      alt={place.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x250?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className='w-full h-48 sm:h-56 lg:h-64 bg-gray-200 flex items-center justify-center'>
                      <span className='text-gray-500'>Rasm yo'q</span>
                    </div>
                  )}
                  
                  <button className='absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 sm:py-2 rounded-xl sm:rounded-2xl bg-white text-xs sm:text-sm font-medium'>
                    Застройщик
                  </button>
                  
                  <span className='absolute top-3 sm:top-4 right-3 sm:right-4'>
                    <RedHeartIcon />
                  </span>
                </div>
                
                <div className='p-4 sm:p-5 lg:p-6'>
                  <h3 className='font-semibold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 line-clamp-2'>{place.title}</h3>
                  
                  {place.metro && (
                    <div className='flex items-center gap-2 mt-2'>
                      <MetroIcon />
                      <p className='text-sm sm:text-base truncate'>{place.metro}</p>
                    </div>
                  )}
                  
                  <div className='flex items-center gap-2 mt-2'>
                    <Location2Icon />
                    <p className='text-sm sm:text-base truncate'>{place.location}</p>
                  </div>
                  
                  {place.rooms && (
                    <div className='flex items-center gap-2 mt-2'>
                      <span className='text-sm text-gray-600'>🏠</span>
                      <p className='text-sm text-gray-600'>{place.rooms} xona</p>
                    </div>
                  )}
                  
                  <ul className='flex flex-wrap mt-3 sm:mt-4'>
                    {formatFeatures(place).map((feature, index) => (
                      <li key={index} className='w-full sm:w-1/2 flex items-center gap-2 mb-2'>
                        <DotIcon />
                        <p className='text-xs sm:text-sm truncate'>{feature}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className='text-[#228BE6] font-semibold text-xl sm:text-2xl lg:text-3xl my-3 sm:my-4'>
                    {place.price}
                  </h3>
                  
                  <button 
                    onClick={() => setIsFormActive(true)} 
                    className='w-full text-sky-600 bg-sky-100 px-4 sm:px-5 py-2 sm:py-3 rounded-lg hover:bg-sky-200 transition-colors text-sm sm:text-base'
                  >
                    Показать телефон
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        
        <button className='w-full max-w-xs text-white bg-sky-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl mx-auto block my-8 sm:my-10 lg:my-12 hover:bg-sky-700 transition-colors text-sm sm:text-base'>
          Показать еще
        </button>
      </div>
    </div>
  );
};