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

  @media (${({ theme }) => theme.bp.mobileS}) {
    display: none;
  }
`;

export const Container = styled.div`
  @media (${({ theme }) => theme.bp.desktopS}) {
    max-width: 928px;
    margin: 0 auto;
  }
`;

export const NavbarWrapper = styled.nav`
  ${({ theme }) => theme.mixins.apart};
  gap: 95px;
  width: 100%;

  .leftSide {
    ${({ theme }) => theme.mixins.center};
  }

  .rightSide {
    ${({ theme }) => theme.mixins.center};
  }
`;
//TODO:
export const Button = styled.button`
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

  .black {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 30px;
  background: ${({ theme }) => theme.colors.gray2};
  margin: 0 20px 0 17px;
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
