import styled from 'styled-components';

export const FlexContainer = styled.form`
  ${({ theme }) => theme.mixins.column};
  gap: 37px;
`;

export const InputFlexContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 32px;
`;

export const LabelInputBox = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 24px;
`;

//TODO:
export const Label = styled.label`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: ${({ theme }) => theme.colors.gray};
`;

export const InputWrapper = styled.div`
  position: relative;
`;
//TODO:
export const Input = styled.input`
  width: 100%;
  max-height: 68px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.gray11};
  border: 2px solid ${({ theme }) => theme.colors.gray11};
  border-radius: 16px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  padding: 16px 24px;
  ${({ theme }) => theme.mixins.fontSize30};
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
`;

export const Row = styled.div`
  display: grid;
  place-items: baseline;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 44px;
`;

export const ResultContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 8px;
`;
//TODO:
export const ResultTitle = styled.p`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: ${({ theme }) => theme.colors.gray3};
`;
//TODO:
export const DisplayResult = styled.p`
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 90%;
  color: ${({ theme }) => theme.colors.gray3};
`;
//TODO:
export const Button = styled.button`
  padding: 14px 52px 18px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.fontSize30};
  ${({ theme }) => theme.mixins.button};
`;
//TODO:
export const RubIcon = styled.p`
  position: absolute;
  top: 16px;
  right: 24px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.fontSize30};
  text-align: right;
  color: ${({ theme }) => theme.colors.gray};
`;
//TODO:
export const MothIcon = styled.p`
  max-width: 70px;
  max-height: 54px;
  position: absolute;
  top: 7px;
  right: 7px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.fontSize20};
  ${({ theme }) => theme.mixins.fCenter};
  color: ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.gray4};
  padding: 15px 17px;
  border-radius: 16px;
`;
//TODO:
export const MothTitleIcon = styled.p`
  position: absolute;
  top: 16px;
  right: 24px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.fontSize30};
  color: ${({ theme }) => theme.colors.gray};
`;
