import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 11;
  transform: translateY(0%);
  width: 100%;
  padding: 21px 0;
  transition: var(--transition);

  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);

  @media (${({ theme }) => theme.bp.mobileS}) {
    background: ${({ theme }) => theme.colors.black3};
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    background: ${({ theme }) => theme.colors.white};
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        transform: translateY(-100%);
      `};
    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        transform: translateY(0%);
        background: ${({ theme }) => theme.colors.white};
        box-shadow: 0px 4px 44px ${({ theme }) => theme.colors.black4};
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
      `};
  }
`;

export const Container = styled.div`
  @media (${({ theme }) => theme.bp.mobileS}) {
    width: 280px;
    margin: 0 auto;
  }

  @media (${({ theme }) => theme.bp.mobileL}) {
    width: 450px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    width: 696px;
  }

  @media (${({ theme }) => theme.bp.desktopXS}) {
    width: 928px;
  }

  @media (${({ theme }) => theme.bp.desktopL}) {
    width: 1344px;
  }
`;

export const NavbarWrapper = styled.nav`
  ${({ theme }) => theme.mixins.apart};
  width: 100%;

  .leftSide {
    ${({ theme }) => theme.mixins.center};
  }

  .rightSide {
    ${({ theme }) => theme.mixins.center};
  }

  @media (${({ theme }) => theme.bp.mobileL}) {
    gap: 15px;
  }

  @media (${({ theme }) => theme.bp.desktopXS}) {
    gap: 95px;
  }
`;
//TODO:
export const ApplicationButton = styled.button`
  margin-left: 24px;
  padding: 12px 24px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 40px;
  background-color: transparent;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.orange};
  ${({ theme }) => theme.mixins.fCenter};
  transition: var(--transition);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};
    border-color: ${({ theme }) => theme.colors.orange};
  }

  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orangePressed};
    border-color: ${({ theme }) => theme.colors.orangePressed};
  }

  &:disabled {
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.orange2};
    color: ${({ theme }) => theme.colors.orange2};
    cursor: not-allowed;
  }
`;
//TODO:
export const Title = styled.h4`
  position: relative;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  ${({ theme }) => theme.mixins.fontSize26};

  .orange {
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (${({ theme }) => theme.bp.mobileS}) {
    .black {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    .black {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .black {
      ${(props) =>
        props.scrollDirection === 'down' &&
        !props.scrolledToTop &&
        css`
          color: ${({ theme }) => theme.colors.black};
        `};
    }
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 30px;
  background: ${({ theme }) => theme.colors.gray2};
  margin: 0 20px 0 17px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    display: none;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    display: block;
  }
`;
//TODO:
export const CompanySlogan = styled.h5`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.92px;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.black2};
`;

export const BurgerMenu = styled.div`
  cursor: pointer;
  ${({ theme }) => theme.mixins.column};
  justify-content: center;

  @media (${({ theme }) => theme.bp.mobileS}) {
    gap: 4px;
    width: 26px;
    height: 26px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    gap: 7px;
    width: 28px;
    height: 28px;
  }

  @media (${({ theme }) => theme.bp.mobileS}) {
    display: block;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    display: none;
  }
`;

export const BurgerBar = styled.div`
  width: 100%;
  height: 2px;
  transition: ${(props) =>
    props.clicked ? 'ease-out 0.5s' : 'cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s'};

  &:nth-child(2) {
    transform: ${(props) => (props.clicked ? 'scale(0.01)' : 'rotate(0) translate(0)')};
  }

  &:nth-child(3) {
    width: ${(props) => (props.clicked ? '100%' : '80%')};
  }

  @media (${({ theme }) => theme.bp.mobileS}) {
    background-color: ${({ theme }) => theme.colors.white};

    &:nth-child(1) {
      transform: ${(props) =>
        props.clicked ? 'rotate(45deg) translate(3.1px, 6px)' : 'rotate(0) translate(0)'};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.clicked ? 'rotate(135deg) translate(-2.9px, 6px)' : 'rotate(0) translate(0)'};
    }
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    background-color: ${({ theme }) => theme.colors.gray};

    &:nth-child(1) {
      transform: ${(props) =>
        props.clicked ? 'rotate(45deg) translate(5.2px, 7.5px)' : 'rotate(0) translate(0)'};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.clicked ? 'rotate(135deg) translate(-5.1px, 7.5px)' : 'rotate(0) translate(0)'};
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        background-color: ${({ theme }) => theme.colors.gray};
      `};
  }
`;
