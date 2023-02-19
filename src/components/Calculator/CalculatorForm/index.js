import React, { useState } from 'react';

import { useModalContext } from '../../../helpers/hooks/useModalContext';
import RangeInput from '../RangeInput';
import {
  Button,
  DisplayResult,
  FlexContainer,
  Input,
  InputFlexContainer,
  InputWrapper,
  Label,
  LabelInputBox,
  MothIcon,
  MothTitleIcon,
  ResultContainer,
  ResultTitle,
  Row,
  RubIcon,
} from './styles';

const CalculatorForm = () => {
  const [price, setPrice] = useState(1000000);
  const [month, setMonth] = useState(1);

  const { openModal } = useModalContext();

  return (
    <FlexContainer>
      <InputFlexContainer>
        <LabelInputBox>
          <Label>Стоимость автомобиля</Label>
          <InputWrapper>
            <Input value={price} onChange={(event) => setPrice(event.target.value)} type="number" />
            <RubIcon>₽</RubIcon>
            <RangeInput
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              min={1000000}
              max={6000000}
            />
          </InputWrapper>
        </LabelInputBox>
        <LabelInputBox>
          <Label>Первоначальный взнос</Label>
          <InputWrapper>
            <Input />
            <MothIcon>10%</MothIcon>
            <RangeInput />
          </InputWrapper>
        </LabelInputBox>
        <LabelInputBox>
          <Label>Срок лизинга</Label>
          <InputWrapper>
            <Input value={month} onChange={(event) => setMonth(event.target.value)} type="number" />
            <MothTitleIcon>мес.</MothTitleIcon>
            <RangeInput value={month} onChange={(event) => setMonth(event.target.value)} min={1} max={60} />
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
        <Button onClick={openModal} type="button">
          Оставить заявку
        </Button>
      </Row>
    </FlexContainer>
  );
};

export default CalculatorForm;
