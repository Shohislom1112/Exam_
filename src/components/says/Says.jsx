import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';

import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { says } from "../../helpers/says";
import star from "./img/star.svg"

function Stars() {
  const elements = [];

  for (let i = 0; i < 5; i++) {
    elements.push(<img className="rating__star" key={i} src={star} alt="star"/>);
  }

  return elements;
}

const CreateSlides = ({name, date, text, rating, avatar, active}) => {
  return (
      <div className={active ? 'says-card active' : 'says-card'}>
        <div className='user'>
          <img className="user__avatar" src={avatar} alt='avatar'/>
          <div className='user__info'>
            <p className='user__name'>{name}</p>
            <p className='user__date'>{date}</p>
          </div>
        </div>
        <article className='feedback'>
          <p className='feedback__text'>“ {text} ”</p>
        </article> 
        <div className="rating">
          <Stars />
        </div>
      </div>
  )
}

const Says = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  console.log(activeIndex);

  return (  
    
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={-700}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
      >
        
          {says.map((say, index) => {
            return (
              <SwiperSlide>
                <CreateSlides 
                  key={index} 
                  name={say.name} 
                  date={say.date} 
                  text={say.text} 
                  rating={say.rating} 
                  avatar={say.avatar}
                  active={index === activeIndex ? 1 : 0}
                />
              </SwiperSlide>
              )
            })
          }
      </Swiper>
    
  );
}
 
export default Says;