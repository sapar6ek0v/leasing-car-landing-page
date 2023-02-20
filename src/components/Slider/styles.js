import styled, { css } from 'styled-components';

export const SliderWrapper = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.black3};
  overflow: hidden;

  @media (${({ theme }) => theme.bp.mobileS}) {
    min-height: 550px;
    border-radius: 0px 0px 32px 32px;
    padding: 20px 24px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    min-height: 472px;
    max-height: 696px;
    border-radius: 32px;
    padding: 0 44px 68px;
  }

  @media (${({ theme }) => theme.bp.desktopXS}) {
    max-width: 928px;
    max-height: 473px;
    padding: 70px 44px 0px 70px;
  }

  @media (${({ theme }) => theme.bp.desktopL}) {
    max-width: 1344px;
    padding: 0px 0px 0px 70px;
  }
`;

export const SliderCard = styled.div``;

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

export const SliderControls = styled.div`
  position: absolute;
  width: 57%;
  bottom: 44px;
  right: 44px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => theme.mixins.center};
  gap: 16px;
`;

//TODO:
export const SliderControlButton = styled.button`
  position: relative;
  width: ${(props) => (props.active ? '48px' : '24px')};
  height: ${(props) => (props.active ? '48px' : '24px')};
  max-height: 48px;
  max-width: 48px;
  background: transparent;
  ${({ theme }) => theme.mixins.fCenter};
  border: 2px solid ${({ theme }) => theme.colors.white4};
  border-radius: 50%;
  filter: drop-shadow(0px 10px 30px ${({ theme }) => theme.colors.gray6});
  transition: var(--transition);

  svg {
    height: 22px;
    width: 22px;
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray7};
    border-color: ${({ theme }) => theme.colors.gray8};
    box-shadow: 0px 10px 30px ${({ theme }) => theme.colors.gray6};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray9};
    border-color: ${({ theme }) => theme.colors.gray9};
    box-shadow: 0px 10px 30px ${({ theme }) => theme.colors.gray6};
  }

  &:disabled {
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.black5};
    filter: drop-shadow(0px 10px 30px ${({ theme }) => theme.colors.gray6});
    cursor: not-allowed;
    svg {
      fill: ${({ theme }) => theme.colors.gray10};
    }
  }
`;

export const SliderDots = styled.div`
  ${({ theme }) => theme.mixins.center};
  gap: 18px;
`;

export const Dot = styled.div`
  cursor: pointer;
  width: ${(props) => (props.active ? '12px' : '6px')};
  height: ${(props) => (props.active ? '12px' : '6px')};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  opacity: ${(props) => (props.active ? 1 : 0.4)};
  transition: var(--transition);
`;
