"use client"
import Image from 'next/image'
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { NextPage } from 'next';

const Slider: NextPage = () => {
  const images = [
    '/Object_11.svg',
    '/Object_12.svg',
    '/Object_14.svg',
    '/Object_15.svg',
    '/Object_16.svg',
    '/Object_17.svg',
    '/Object_18.svg',
    '/Object_13.svg',
    '/Object_24.svg',
    '/Object_25.svg',
    '/Object_21(2).svg'
  ];

  return (
    <div className='lg:pt-10 flex justify-center'>
      <div className='max-w-md max-h-[1200px] overflow-hidden rounded-lg sm:max-w-sm sm:max-h-[400px]'>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className='flex items-center justify-center'>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={800}
                height={1000}
                loading='lazy'
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;