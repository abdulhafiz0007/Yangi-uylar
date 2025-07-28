import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import sliderImg1 from "../../assets/images/Image (6).png";
import sliderImg2 from "../../assets/images/Image (7).png";
import sliderImg3 from "../../assets/images/Image (8).png";
import sliderImg4 from "../../assets/images/Image (10).png";

const properties = [
   {
      id: 1,
      name: "Golden House",
      objects: "6 объектов",
      image: sliderImg1,
   },
   {
      id: 2,
      name: "Murad Buildings",
      objects: "4 объекта",
      image: sliderImg2,
   },
   {
      id: 3,
      name: "Istanbul City",
      objects: "5 объектов",
      image: sliderImg3,
   },
   {
      id: 4,
      name: "Xon Saroy",
      objects: "7 объектов",
      image: sliderImg4,
   },
];

export const Slider = () => {
   const prevRef = useRef(null);
   const nextRef = useRef(null);

   return (
      <div className="w-full max-w-[1240px] px-4 sm:px-5 lg:px-[20px] mx-auto py-6 lg:p-6 bg-white">
         <div className="flex items-center justify-between mb-4 lg:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800">
               Популярные застройщики
            </h2>
            <div className="flex gap-2">
               <button
                  ref={prevRef}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-600 transition-all duration-200"
               >
                  <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
               </button>
               <button
                  ref={nextRef}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200"
               >
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
               </button>
            </div>
         </div>

         <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            navigation={{
               prevEl: prevRef.current,
               nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
               swiper.params.navigation.prevEl = prevRef.current;
               swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
               640: { 
                 slidesPerView: 2, 
                 spaceBetween: 16 
               },
               1024: { 
                 slidesPerView: 3, 
                 spaceBetween: 20 
               },
            }}
         >
            {properties.map((property) => (
               <SwiperSlide key={property.id}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                     <div className="relative">
                        <img
                           src={property.image}
                           alt={property.name}
                           className="w-full h-[200px] sm:h-[240px] lg:h-[280px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                     </div>
                     <div className="p-4 lg:pl-5 lg:pt-5 flex items-center gap-2">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                           <Building2 className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                           <h3 className="font-bold text-black text-base lg:text-lg truncate">
                              {property.name}
                           </h3>
                           <p className="text-xs lg:text-sm text-gray-500">
                              {property.objects}
                           </p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};