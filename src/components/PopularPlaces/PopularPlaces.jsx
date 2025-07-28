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
      <div className='w-[1241px] px-[20px] mx-auto pt-[80px]'>
        <h2 className='font-semibold text-[40px] mb-[40px]'>Популярные объекты</h2>
        <div className='flex justify-center items-center h-64'>
          <div className='text-xl'>Yuklanmoqda...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-[1241px] px-[20px] mx-auto pt-[80px]'>
        <h2 className='font-semibold text-[40px] mb-[40px]'>Популярные объекты</h2>
        <div className='flex justify-center items-center h-64'>
          <div className='text-red-500 text-xl'>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='w-[1241px] px-[20px] mx-auto pt-[80px] relative'>
      <h2 className='font-semibold text-[40px]'>Популярные объекты</h2>
      
      <div className='absolute top-[-50px] left-[260px]'>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      
      <div className='mt-[40px]'> {/* Add margin top to account for absolute positioned filter */}
        {filteredPlaces.length === 0 ? (
          <div className='text-center text-gray-500 text-xl py-16'>
            {popularPlaces.length === 0 ? 'Hozircha mashhur uylar yo\'q' : 'Filtrlarga mos uylar topilmadi'}
          </div>
        ) : (
          <ul className='flex flex-wrap gap-[20px]'>
            {filteredPlaces.map((place) => (
              <li key={place.id} className='relative w-[387px] bg-white rounded-2xl shadow-lg'>
                <div className='relative'>
                  {place.image_url ? (
                    <img 
                      className='w-[387px] h-[250px] object-cover rounded-t-2xl' 
                      src={place.image_url} 
                      alt={place.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/387x250?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className='w-[387px] h-[250px] bg-gray-200 rounded-t-2xl flex items-center justify-center'>
                      <span className='text-gray-500'>Rasm yo'q</span>
                    </div>
                  )}
                  
                  <button className='absolute top-[15px] left-[15px] px-[12px] py-[8px] rounded-2xl bg-white text-[14px] font-medium'>
                    Застройщик
                  </button>
                  
                  <span className='absolute top-[15px] right-[15px]'>
                    <RedHeartIcon />
                  </span>
                </div>
                
                <div className='pt-[16px] pb-[20px] px-[20px]'>
                  <h3 className='font-semibold text-[24px] mb-2'>{place.title}</h3>
                  
                  {place.metro && (
                    <div className='flex items-center gap-2 mt-[8px]'>
                      <MetroIcon />
                      <p>{place.metro}</p>
                    </div>
                  )}
                  
                  <div className='flex items-center gap-2'>
                    <Location2Icon />
                    <p>{place.location}</p>
                  </div>
                  
                  {place.rooms && (
                    <div className='flex items-center gap-2 mt-1'>
                      <span className='text-sm text-gray-600'>🏠</span>
                      <p className='text-sm text-gray-600'>{place.rooms} xona</p>
                    </div>
                  )}
                  
                  <ul className='flex items-center flex-wrap mt-[16px]'>
                    {formatFeatures(place).map((feature, index) => (
                      <li key={index} className='w-[168px] flex items-center gap-2 mb-2'>
                        <DotIcon />
                        <p className='text-sm'>{feature}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className='text-[#228BE6] font-semibold text-[30px] my-[16px]'>
                    {place.price}
                  </h3>
                  
                  <button 
                    onClick={() => setIsFormActive(true)} 
                    className='w-[347px] text-sky-600 bg-sky-100 px-[20px] py-[10px] rounded-lg hover:bg-sky-200 transition-colors'
                  >
                    Показать телефон
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        
        <button className='w-[168px] text-white bg-sky-600 px-[20px] py-[10px] rounded-xl mx-auto block my-[40px] hover:bg-sky-700 transition-colors'>
          Показать еще
        </button>
      </div>
    </div>
  );
};