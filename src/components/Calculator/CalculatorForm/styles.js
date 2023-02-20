import styled from 'styled-components';

export const FlexContainer = styled.form`
  ${({ theme }) => theme.mixins.column};
  gap: 37px;
`;

export const InputFlexContainer = styled.div`
  ${({ theme }) => theme.mixins.column};

  @media (${({ theme }) => theme.bp.mobileS}) {
    gap: 16px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    gap: 32px;
  }

  @media (${({ theme }) => theme.bp.desktopL}) {
    flex-direction: row;
  }
`;

export const LabelInputBox = styled.div`
  ${({ theme }) => theme.mixins.column};

  @media (${({ theme }) => theme.bp.mobileS}) {
    gap: 8px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    gap: 24px;
  }
`;

//TODO:
export const Label = styled.label`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize14};
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixins.fontSize16};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Row = styled.div`
  display: grid;
  place-items: baseline;

  @media (${({ theme }) => theme.bp.mobileS}) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }

  @media (${({ theme }) => theme.bp.mobileL}) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 44px;
  }

  @media (${({ theme }) => theme.bp.desktopL}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    grid-row-gap: 0;
    place-items: flex-start;
  }
`;

export const ResultContainer = styled.div`
  ${({ theme }) => theme.mixins.column};

  @media (${({ theme }) => theme.bp.mobileS}) {
    gap: 2px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    gap: 8px;
  }
`;
//TODO:
export const ResultTitle = styled.p`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray3};

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize14};
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixins.fontSize16};
  }
`;
//TODO:
export const DisplayResult = styled.p`
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;

  color: ${({ theme }) => theme.colors.gray3};

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize22};
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixins.fontSize54};
  }
`;
//TODO:
export const Button = styled.button`
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.button};

  @media (${({ theme }) => theme.bp.mobileS}) {
    min-height: 60px;
    min-width: 280px;
    ${({ theme }) => theme.mixins.fontSize22};
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixins.fontSize30};
    padding: 14px 52px 18px;
  }
`;
//TODO:
export const RubIcon = styled.p`
  position: absolute;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  text-align: right;
  color: ${({ theme }) => theme.colors.gray};

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize22};
    top: 20px;
    right: 20px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixins.fontSize30};
    top: 16px;
    right: 24px;
  }
`;
//TODO:
export const MothIcon = styled.p`
  position: absolute;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.fCenter};
  color: ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.gray4};
  border-radius: 16px;

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize22};
    top: 6px;
    right: 6px;
    width: 67px;
    height: 48px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixins.fontSize20};
    width: 70px;
    height: 54px;
    top: 7px;
    right: 7px;
  }
`;
//TODO:
export const MothTitleIcon = styled.p`
  position: absolute;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.gray};

  @media (${({ theme }) => theme.bp.mobileS}) {
    ${({ theme }) => theme.mixins.fontSize22};
    top: 20px;
    right: 20px;
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixins.fontSize30};
    top: 16px;
    right: 24px;
  }
`;
