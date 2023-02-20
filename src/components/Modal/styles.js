import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

export const Wrapper = styled.div`
  height: ${(props) => (props.opened ? '100vh' : '0')};
  display: ${(props) => (props.opened ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.black6};
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: ${(props) => (props.opened ? 'calc(100vh - 120px)' : '0')};
  width: ${(props) => (props.opened ? '100vw' : '0')};
  display: ${(props) => (props.opened ? 'block' : 'none')};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 32px 32px 0px 0px;

  ${(props) =>
    props.opened
      ? css`
          animation: 1s linear forwards ${({ theme }) => theme.mixins.fadeInY};
        `
      : css`
          animation: 1s linear forwards ${({ theme }) => theme.mixins.fadeInY};
        `};

  @media (${({ theme }) => theme.bp.mobileS}) {
    height: ${(props) => (props.opened ? 'calc(100vh - 60px)' : '0')};
  }
`;

export const Container = styled.div`
  width: 655px;
  height: 100%;
  margin: 0 auto;
  ${({ theme }) => theme.mixins.column};
  justify-content: center;
  gap: 24px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    width: 280px;
  }
`;

export const Form = styled.form`
  ${({ theme }) => theme.mixins.column};
  gap: 32px;
  /* margin-bottom: 8px; */

  @media (${({ theme }) => theme.bp.mobileS}) {
    gap: 8px;
  }
`;
//TODO:
export const Title = styled.h5`
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 90%;
  color: ${({ theme }) => theme.colors.black};

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize22};
  }
`;
//TODO:
export const Description = styled.p`
  max-width: 466px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: ${({ theme }) => theme.colors.gray};
  /* margin-bottom: 20px; */

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize14};
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: ${(props) => props.error && '12px'};

  @media (${({ theme }) => theme.bp.mobileS}) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const InputLabelGroup = styled.div`
  position: relative;
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  height: 48px;
`;
//TODO:
export const Input = styled.input`
  ${({ theme }) => theme.mixins.input};
`;

export const PhoneInputMask = styled(InputMask)`
  ${({ theme }) => theme.mixins.input};
`;

//TODO:
export const Label = styled.label`
  font-family: 'Gilroy';
  font-style: normal;

  color: ${({ theme }) => theme.colors.gray};
  position: absolute;
  left: 24px;
  transition: var(--transition);

  ${(props) =>
    props.active
      ? css`
          top: 8%;
          font-weight: 400;
          ${({ theme }) => theme.mixins.fontSize12};
        `
      : css`
          top: 30%;
          font-weight: 700;
          ${({ theme }) => theme.mixins.fontSize16};
        `}
`;

export const ButtonBlock = styled.div`
  ${({ theme }) => theme.mixins.apart};
  /* padding: 26px 23px 26px 33px; */
  /* border: 2px solid ${({ theme }) => theme.colors.gray11}; */
  border-radius: 16px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fCenter};
    flex-direction: column;
    gap: 10px;
  }
`;
//TODO:
export const InformTitle = styled.p`
  max-width: 330px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black2};

  span {
    color: ${({ theme }) => theme.colors.black};
  }
`;
//TODO:
export const Button = styled.button`
  min-width: 174px;
  min-height: 40px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  ${({ theme }) => theme.mixins.fontSize16};
  ${({ theme }) => theme.mixins.button};
`;

export const SocialButtonGroup = styled.div`
  ${({ theme }) => theme.mixins.fCenter};
  gap: 16px;
`;

export const SocialButton = styled.button`
  width: 48px;
  height: 48px;
  border: 2px solid ${({ theme }) => theme.colors.gray14};
  border-radius: 200px;
  padding: 11px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray};
    text-align: center;
  }

  ${({ theme }) => theme.mixins.smallButtonEffects};
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 28px;
`;

export const CloseButton = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  border: none;
  background: ${({ theme }) => theme.colors.gray11};
  ${({ theme }) => theme.mixins.smallButtonEffects};
  border-radius: 100px;

  svg {
    fill: ${({ theme }) => theme.colors.gray15};
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 19px;
    border: 1.5px solid ${({ theme }) => theme.colors.gray15};
    position: absolute;
    top: 50%;
    left: 50%;

    @media (${({ theme }) => theme.bp.mobileS}) {
      width: 9px;
    }
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @media (${({ theme }) => theme.bp.mobileS}) {
    width: 24px;
    height: 24px;
  }
`;
//TODO:
export const ErrorTitle = styled.span`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: ${({ theme }) => theme.colors.red};
  padding-top: 4px;
`;

export const DoneIcon = styled.span`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  right: 12px;
  ${({ theme }) => theme.mixins.fCenter};
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 8px;
`;
