import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const SliderTitleStack = styled.div`
  position: absolute;
  z-index: 1;
  ${({ theme }) => theme.mixins.column};
  gap: 24px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    left: 20px;
    bottom: 120px;
    max-width: 249px;
  }

  @media (${({ theme }) => theme.bp.mobileL}) {
    left: 20px;
    right: 20px;
    margin: 0 auto;
    max-width: 270px;
    align-items: center;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    left: 44px;
    right: 44px;
    bottom: 68px;
    align-items: baseline;
    max-width: 585px;
    margin: 0;
  }

  @media (${({ theme }) => theme.bp.desktopXS}) {
    top: 70px;
    left: 70px;
    max-width: 585px;
  }
`;

//TODO:
export const SliderTitle = styled.h1`
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;

  ${(props) =>
    !props.active &&
    css`
      animation: 1s linear forwards ${({ theme }) => theme.mixins.fadeOut};
    `}

  ${(props) =>
    props.active &&
    css`
      animation: 1s linear forwards ${({ theme }) => theme.mixins.fadeIn};
    `}

  @media (${({ theme }) => theme.bp.mobileS}) {
    font-size: 32px;
    line-height: 90%;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixins.fontSize54};
  }
`;
//TODO:
export const SliderInformTitle = styled.p`
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.white};

  ${(props) =>
    !props.active &&
    css`
      animation: 1s linear forwards ${({ theme }) => theme.mixins.fadeOut};
    `}

  ${(props) =>
    props.active &&
    css`
      animation: 1s linear forwards ${({ theme }) => theme.mixins.fadeIn};
    `}
`;
//TODO:
export const SliderButton = styled.button`
  padding: 12px 24px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  ${({ theme }) => theme.mixins.button};
`;

export const SliderImageWrapper = styled.div`
  position: relative;
  border-radius: 0px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.black2};
  }

  ${(props) =>
    !props.active &&
    css`
      animation: 1s linear forwards ${({ theme }) => theme.mixins.fadeOutX};
    `}

  ${(props) =>
    props.active &&
    css`
      animation: 1s linear forwards ${({ theme }) => theme.mixins.fadeInX};
    `}

  @media (${({ theme }) => theme.bp.mobileS}) {
    height: 261px;
    width: 462px;
    margin: -24px;
  }

  @media (${({ theme }) => theme.bp.mobileL}) {
    width: 100%;
    margin: 0;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    width: 571px;
    height: 321px;
    margin: 0 auto;
  }

  @media (${({ theme }) => theme.bp.desktopXS}) {
    height: 379px;
    width: 675px;
    margin: 0;
    margin-left: auto;
  }

  @media (${({ theme }) => theme.bp.desktopL}) {
    height: 472px;
    width: 841px;
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
