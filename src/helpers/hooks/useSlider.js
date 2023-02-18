import { useState } from 'react';

export const useSlider = (data) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const length = data?.length;
  const current = slideIndex + 1;

  const nextSlide = () => setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);

  const prevSlide = () => setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);

  const moveDot = (index) => setSlideIndex(index);

  return { length, current, slideIndex, prevSlide, nextSlide, moveDot };
};
