import React from 'react';
// import { graphql } from 'gatsby';

import { useMediaQuery } from '../../../helpers/hooks/useMediaQuery';
import { useModalContext } from '../../../helpers/hooks/useModalContext';
import {
  SliderButton,
  SliderImage,
  SliderImageWrapper,
  SliderInformTitle,
  SliderTitle,
  SliderTitleStack,
  Wrapper,
} from './styles';

const SliderCard = ({ item, index, slideIndex }) => {
  const { openModal } = useModalContext();
  const matches = useMediaQuery('(min-width: 992px)');

  // const data = graphql`
  //   query MyQuery {
  //     file(relativePath: { eq: img }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `;

  return (
    <Wrapper key={item.id}>
      {slideIndex === index && (
        <>
          <SliderTitleStack>
            <SliderTitle active={index === slideIndex}>{item.title}</SliderTitle>
            {matches && <SliderInformTitle active={index === slideIndex}>{item.slogan}</SliderInformTitle>}
            <SliderButton onClick={openModal} type="button">
              Оставить заявку
            </SliderButton>
          </SliderTitleStack>

          <SliderImageWrapper active={index === slideIndex}>
            <SliderImage src={item.img} alt={item.imgAlt} />
          </SliderImageWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default SliderCard;
