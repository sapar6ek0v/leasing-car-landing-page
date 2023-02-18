import React, { useState } from 'react';
import styled from 'styled-components';

import RangeInput from './rangeInput';

const FlexContainer = styled.form`
  ${({ theme }) => theme.mixins.column};
  gap: 37px;
`;

const InputFlexContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 32px;
`;

const LabelInputBox = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 24px;
`;

const Label = styled.label`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: ${({ theme }) => theme.colors.grey};
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  max-height: 68px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white2};
  border: 1px solid transparent;
  border-radius: 16px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  padding: 16px 24px;
  ${({ theme }) => theme.mixins.fontSize30};
  color: ${({ theme }) => theme.colors.grey};

  &:is(:focus, :focus-within) {
    outline: none;
  }
`;

const Row = styled.div`
  display: grid;
  place-items: baseline;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 44px;
`;

const ResultContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 8px;
`;

const ResultTitle = styled.p`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: ${({ theme }) => theme.colors.gray3};
`;

const DisplayResult = styled.p`
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 90%;
  color: ${({ theme }) => theme.colors.gray3};
`;

const Button = styled.button`
  ${({ theme }) => theme.mixins.fCenter};
  padding: 14px 52px 18px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 40px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.fontSize30};
  color: ${({ theme }) => theme.colors.white};
`;

const RubIcon = styled.p`
  position: absolute;
  top: 16px;
  right: 24px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.fontSize30};
  text-align: right;
  color: ${({ theme }) => theme.colors.grey};
`;

const MothIcon = styled.p`
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
  color: ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.gray4};
  padding: 15px 17px;
  border-radius: 16px;
`;

const MothTitleIcon = styled.p`
  position: absolute;
  top: 16px;
  right: 24px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  ${({ theme }) => theme.mixins.fontSize30};
  color: ${({ theme }) => theme.colors.grey};
`;

const CalculatorForm = () => {
  const [price, setPrice] = useState(1000000);
  const [month, setMonth] = useState(1);

  return (
    <FlexContainer>
      <InputFlexContainer>
        <LabelInputBox>
          <Label>Стоимость автомобиля</Label>
          <InputWrapper>
            <Input value={price} onChange={(event) => setPrice(event.target.value)} type="number" />
            <RangeInput
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              min={1000000}
              max={6000000}
            />
            <RubIcon>₽</RubIcon>
          </InputWrapper>
        </LabelInputBox>
        <LabelInputBox>
          <Label>Первоначальный взнос</Label>
          <InputWrapper>
            <Input />
            <RangeInput />
            <MothIcon>10%</MothIcon>
          </InputWrapper>
        </LabelInputBox>
        <LabelInputBox>
          <Label>Срок лизинга</Label>
          <InputWrapper>
            <Input value={month} onChange={(event) => setMonth(event.target.value)} type="number" />
            <RangeInput value={month} onChange={(event) => setMonth(event.target.value)} min={1} max={60} />
            <MothTitleIcon>мес.</MothTitleIcon>
          </InputWrapper>
        </LabelInputBox>
      </InputFlexContainer>

      <Row>
        <ResultContainer>
          <ResultTitle>Сумма договора лизинга</ResultTitle>
          <DisplayResult>4 467 313 ₽</DisplayResult>
        </ResultContainer>
        <ResultContainer>
          <ResultTitle>Ежемесячный платеж от</ResultTitle>
          <DisplayResult>114 455 ₽</DisplayResult>
        </ResultContainer>
        <Button type="button">Оставить заявку</Button>
      </Row>
    </FlexContainer>
  );
};

export default CalculatorForm;
