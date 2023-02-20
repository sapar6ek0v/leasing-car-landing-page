import styled from 'styled-components';
//TODO:
export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.gray11};
  border: 2px solid ${({ theme }) => theme.colors.gray11};
  border-radius: 16px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;

  color: ${({ theme }) => theme.colors.gray};
  transition: var(--transition);

  &:is(:focus, :focus-within) {
    outline: none;
    background: transparent;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray12};
    background: ${({ theme }) => theme.colors.gray13};
    cursor: not-allowed;

    & + p {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }

  @media (${({ theme }) => theme.bp.mobileS}) {
    max-height: 60px;
    height: 60px;
    ${({ theme }) => theme.mixins.fontSize22};
    padding: 20px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    max-height: 68px;
    height: 68px;
    padding: 16px 24px;
    ${({ theme }) => theme.mixins.fontSize30};
  }
`;
