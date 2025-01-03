import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper';

import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
  {
    title: 'Your Luxury Hotel for Vacation 1',
    bg: Img1,
    btnText: 'See our rooms',
  },
  {
    title: 'Your Luxury Hotel for Vacation 2',
    bg: Img2,
    btnText: 'See our rooms',
  },
  {
    title: 'Your Luxury Hotel for Vacation 3',
    bg: Img3,
    btnText: 'See our rooms',
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="heroSlider h-[600px] lg:h-[860px]">
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide className="h-full  relative flex justify-center items-center" key={index}>
            <div className="text-white z-20 text-center">
              <div className=" uppercase font-tertiary tracking-[6px] mb-5">
                Just Enjoy and relax
              </div>
              <h1 className=" uppercase text-[32px] lg:text-[68px] font-primary tracking-[2px] max-w-[920px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">{btnText}</button>
            </div>
            <div className="w-full h-full top-0 absolute">
              <img className="object-cover w-full h-full" src={bg} alt="hero-slide" />
            </div>
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
