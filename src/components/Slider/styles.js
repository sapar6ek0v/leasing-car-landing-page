import styled from 'styled-components';

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
