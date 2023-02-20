import styled from 'styled-components';
//TODO:
export const Wrapper = styled.li`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 6px 16px;
  border-radius: 8px;
  transition: var(--transition);

  a {
    text-decoration: none;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray11};
  }

  &:hover .dropdown {
    display: block;
    opacity: 1;
  }
`;
//TODO:
export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 1;
  min-width: 243px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white2};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.darkBrown},
    0px 14px 24px ${({ theme }) => theme.colors.darkBrown2};
  border-radius: 15px;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.4s linear 2s;

  a {
    display: block;
    text-decoration: none;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    ${({ theme }) => theme.mixins.fontSize16}
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: var(--transition);

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray18};
    }

    &:active {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
`;
