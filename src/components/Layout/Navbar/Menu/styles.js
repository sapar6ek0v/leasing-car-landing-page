import styled, { css } from 'styled-components';

export const FixedWrapper = styled.div`
  height: ${(props) => (props.opened ? '100vh' : '0')};
  display: ${(props) => (props.opened ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.black6};
  z-index: 1000;
`;

export const Wrapper = styled.div`
  z-index: 11000;
  height: calc(100vh - 128px);
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  ${({ theme }) => theme.mixins.column};
  align-items: flex-start;
  justify-content: space-between;

  ${(props) =>
    props.opened
      ? css`
          animation: 0.5s linear forwards ${({ theme }) => theme.mixins.fadeInX};
        `
      : css`
          animation: 0.5s linear forwards ${({ theme }) => theme.mixins.fadeInX};
        `};

  @media (${({ theme }) => theme.bp.mobileS}) {
    width: 60%;
    padding: 64px 24px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    width: 40%;
    padding: 64px 44px;
  }
`;

export const LinkWrapper = styled.div`
  ${({ theme }) => theme.mixins.column};

  @media (${({ theme }) => theme.bp.mobileS}) {
    gap: 15px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    gap: 20px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: none;
  border: none;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 18px;
    min-width: 18px;
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  &::before {
    transform: rotate(45deg) translate(1px, 0px);
  }

  &::after {
    transform: rotate(130deg) translate(-1px, 1px);
  }
`;
