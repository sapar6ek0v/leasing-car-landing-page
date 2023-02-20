import styled from 'styled-components';

export const CalculatorWrapper = styled.section`
  padding: 80px 0 100px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    padding: 64px 0 47px;
    max-width: 280px;
    margin: 0 auto;
  }
`;
//TODO:
export const CalculatorTitle = styled.h2`
  max-width: 753px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 90%;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 44px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    max-width: 197px;
    font-size: 34px;
    line-height: 90%;
    margin-bottom: 32px;
  }
`;
