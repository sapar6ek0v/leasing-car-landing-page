import React, { useState, useEffect } from 'react';

import { useModalContext } from '../../helpers/hooks/useModalContext';
import { useSlider } from '../../helpers/hooks/useSlider';
import ChevronArrowLeft from '../svgs/ChevronArrowLeft';
import ChevronArrowRight from '../svgs/ChevronArrowRight';
import {
  ButtonGroup,
  Dot,
  SliderButton,
  SliderCard,
  SliderControlButton,
  SliderControls,
  SliderDots,
  SliderImage,
  SliderImageWrapper,
  SliderInformTitle,
  SliderTitle,
  SliderTitleStack,
  SliderWrapper,
} from './styles';

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
  const { openModal } = useModalContext();

  const handleNextSlide = () => {
    setActiveBtn('right');
    nextSlide();
  };

  const handlePrevSlide = () => {
    setActiveBtn('left');
    prevSlide();
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNextSlide();
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <SliderWrapper>
      {data
        ? data.map((item, index) => (
            <SliderCard key={item.id}>
              {slideIndex === index && (
                <>
                  <SliderTitleStack>
                    <SliderTitle active={index === slideIndex}>{item.title}</SliderTitle>
                    <SliderInformTitle active={index === slideIndex}>{item.slogan}</SliderInformTitle>
                    <SliderButton onClick={openModal} type="button">
                      Оставить заявку
                    </SliderButton>
                  </SliderTitleStack>

                  <SliderImageWrapper active={index === slideIndex}>
                    <SliderImage src={item.img} alt={item.imgAlt} />
                  </SliderImageWrapper>
                </>
              )}
            </SliderCard>
          ))
        : null}
      <SliderControls>
        <SliderDots>
          {Array.from({ length: 6 }).map((_, index) => (
            <Dot key={index} onClick={() => moveDot(index)} active={slideIndex === index} />
          ))}
        </SliderDots>
        <ButtonGroup>
          <SliderControlButton onClick={handlePrevSlide} active={activeBtn === 'left'}>
            <ChevronArrowLeft />
          </SliderControlButton>
          <SliderControlButton onClick={handleNextSlide} active={activeBtn === 'right'}>
            <ChevronArrowRight />
          </SliderControlButton>
        </ButtonGroup>
      </SliderControls>
    </SliderWrapper>
  );
};

export default Slider;
