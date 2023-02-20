import styled from 'styled-components';

export const CalculatorWrapper = styled.section`
  @media (${({ theme }) => theme.bp.mobileS}) {
    padding: 64px 0 47px;
    max-width: 280px;
    margin: 0 auto;
  }

  @media (${({ theme }) => theme.bp.mobileL}) {
    max-width: 450px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    padding: 80px 0 100px;
    max-width: 100%;
    width: 100%;
  }

  @media (${({ theme }) => theme.bp.desktopL}) {
    padding: 100px 0 110px;
  }
`;
//TODO:
export const CalculatorTitle = styled.h2`
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.black};

  @media (${({ theme }) => theme.bp.mobileS}) {
    max-width: 197px;
    font-size: 34px;
    line-height: 90%;
    margin-bottom: 32px;
  }

  @media (${({ theme }) => theme.bp.mobileL}) {
    max-width: 380px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    max-width: 753px;
    ${({ theme }) => theme.mixins.fontSize54};
    margin-bottom: 38px;
  }

  @media (${({ theme }) => theme.bp.desktopXS}) {
    margin-bottom: 44px;
  }
`;
