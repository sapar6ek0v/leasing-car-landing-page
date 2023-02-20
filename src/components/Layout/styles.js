import styled from 'styled-components';

export const ContentWrapper = styled.main`
  @media (${({ theme }) => theme.bp.mobileS}) {
    width: 100%;
    margin: 0;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    width: 696px;
    margin: 0 auto;
  }

  @media (${({ theme }) => theme.bp.desktopXS}) {
    width: 928px;
  }

  @media (${({ theme }) => theme.bp.desktopL}) {
    width: 1344px;
  }
`;
