import styled from 'styled-components';

export const ContentWrapper = styled.main`
  @media (${({ theme }) => theme.bp.desktopS}) {
    max-width: 928px;
    margin: 0 auto;
  }
`;
