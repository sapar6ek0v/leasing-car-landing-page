import styled from 'styled-components';

export const ContentWrapper = styled.main`
  margin: 0 auto;
  @media (${({ theme }) => theme.bp.desktopS}) {
    max-width: 928px;
  }

  @media (${({ theme }) => theme.bp.mobileS}) {
    width: 100%;
    margin: 0;
  }
`;
