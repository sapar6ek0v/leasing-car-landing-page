import styled from 'styled-components';

export const FlexContainer = styled.form`
  ${({ theme }) => theme.mixins.column};
  gap: 37px;
`;

export const InputFlexContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 32px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    gap: 16px;
  }
`;

export const LabelInputBox = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 24px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    gap: 8px;
  }
`;

//TODO:
export const Label = styled.label`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: ${({ theme }) => theme.colors.gray};

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize14};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Row = styled.div`
  display: grid;
  place-items: baseline;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 44px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

export const ResultContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 8px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    gap: 2px;
  }
`;
//TODO:
export const ResultTitle = styled.p`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: ${({ theme }) => theme.colors.gray3};

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize14};
  }
`;
//TODO:
export const DisplayResult = styled.p`
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 90%;
  color: ${({ theme }) => theme.colors.gray3};

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize22};
  }
`;
//TODO:
export const Button = styled.button`
  /* padding: 14px 52px 18px; */
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.fontSize30};
  ${({ theme }) => theme.mixins.button};

  @media (${({ theme }) => theme.bp.mobileS}) {
    min-height: 60px;
    min-width: 280px;
    ${({ theme }) => theme.mixins.fontSize22};
  }
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

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize22};
    top: 20px;
    right: 20px;
  }
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
  /* padding: 15px 17px; */
  border-radius: 16px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize22};
    top: 6px;
    right: 6px;
    width: 67px;
    height: 48px;
  }
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

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize22};
    top: 20px;
    right: 20px;
  }
`;
