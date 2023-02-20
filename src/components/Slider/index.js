import React, { useState } from 'react';

import { useSlider } from '../../helpers/hooks/useSlider';
import { useMediaQuery } from '../../helpers/hooks/useMediaQuery';
import ChevronArrowLeft from '../svgs/ChevronArrowLeft';
import ChevronArrowRight from '../svgs/ChevronArrowRight';
import SliderCard from './SliderCard';
import { ButtonGroup, Dot, SliderControlButton, SliderControls, SliderDots, SliderWrapper } from './styles';

const Slider = () => {
  const data = [
    {
      id: 1,
      title: 'Авто в лизинг для физических лиц',
      slogan: 'Получите машину за 5 дней',
      img: '/car1.jpg',
      imgAlt: 'slider car photo 1',
    },
    {
      id: 2,
      title: 'Авто в лизинг для юридических лиц',
      slogan: 'Получите машину мечты',
      img: '/car2.jpg',
      imgAlt: 'slider car photo 2',
    },
    {
      id: 3,
      title: 'Поможем выбрать машину, на ваш вкус',
      slogan: '5 минутное оформление',
      img: '/car3.jpg',
      imgAlt: 'slider car photo 3',
    },
    {
      id: 4,
      title: 'Авто в лизинг без банков',
      slogan: 'Только паспорт',
      img: '/car4.jpg',
      imgAlt: 'slider car photo 4',
    },
    {
      id: 5,
      title: 'Авто в лизинг без сторонних лизинг',
      slogan: 'И справка о доходах',
      img: '/car5.jpg',
      imgAlt: 'slider car photo 5',
    },
    {
      id: 6,
      title: 'Свяжитесь и получите консультацию',
      slogan: 'Оставьте заявку',
      img: '/car6.jpg',
      imgAlt: 'slider car photo 6',
    },
  ];

  const [activeBtn, setActiveBtn] = useState('right');
  const { slideIndex, prevSlide, nextSlide, moveDot } = useSlider(data);
  const matches = useMediaQuery('(min-width: 992px)');

  const handleNextSlide = () => {
    setActiveBtn('right');
    nextSlide();
  };

  const handlePrevSlide = () => {
    setActiveBtn('left');
    prevSlide();
  };

  return (
    <SliderWrapper>
      {data
        ? data.map((item, index) => (
            <SliderCard key={item.id} item={item} index={index} slideIndex={slideIndex} />
          ))
        : null}
      <SliderControls>
        <SliderDots>
          {Array.from({ length: 6 }).map((_, index) => (
            <Dot key={index} onClick={() => moveDot(index)} active={slideIndex === index} />
          ))}
        </SliderDots>
        {matches && (
          <ButtonGroup>
            <SliderControlButton onClick={handlePrevSlide} active={activeBtn === 'left'}>
              <ChevronArrowLeft />
            </SliderControlButton>
            <SliderControlButton onClick={handleNextSlide} active={activeBtn === 'right'}>
              <ChevronArrowRight />
            </SliderControlButton>
          </ButtonGroup>
        )}
      </SliderControls>
    </SliderWrapper>
  );
};

export default Slider;
