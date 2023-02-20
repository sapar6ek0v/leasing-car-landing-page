import React, { useState } from 'react';

import { useModalContext } from '../../../helpers/hooks/useModalContext';
import InputNumber from '../InputNumber';
import RangeInput from '../RangeInput';
import {
  Button,
  DisplayResult,
  FlexContainer,
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
  const [carCost, setCarCost] = useState(1000000);
  const [anInitialFee, setAnInitialFee] = useState(10000);
  const [leasingTerm, setLeasingTerm] = useState(1);

  const { openModal } = useModalContext();

  const initialInstallment = (carCost / 100) * 10;
  const monthlyPayment =
    Number(carCost) -
    Number(initialInstallment) *
      Number(parseFloat(`${12}%`) / (1 + parseFloat(`${12}%`)) - Number(leasingTerm) - 1);
  const amountOfTheLeasingAgreement =
    Number(carCost) + Number(leasingTerm) * Number(monthlyPayment.toFixed(0));

  return (
    <FlexContainer>
      <InputFlexContainer>
        <LabelInputBox>
          <Label>Стоимость автомобиля</Label>
          <InputWrapper>
            <InputNumber value={carCost} setValue={setCarCost} min={1000000} max={6000000} />
            <RubIcon>₽</RubIcon>
            <RangeInput
              value={carCost}
              onChange={(event) => setCarCost(event.target.value)}
              min={1000000}
              max={6000000}
            />
          </InputWrapper>
        </LabelInputBox>
        <LabelInputBox>
          <Label>Первоначальный взнос</Label>
          <InputWrapper>
            <InputNumber value={anInitialFee} setValue={setAnInitialFee} min={10000} max={1000000} />
            <MothIcon>10%</MothIcon>
            <RangeInput
              value={anInitialFee}
              onChange={(event) => setAnInitialFee(event.target.value)}
              min={10000}
              max={1000000}
            />
          </InputWrapper>
        </LabelInputBox>
        <LabelInputBox>
          <Label>Срок лизинга</Label>
          <InputWrapper>
            <InputNumber value={leasingTerm} setValue={setLeasingTerm} min={1} max={60} />
            <MothTitleIcon>мес.</MothTitleIcon>
            <RangeInput
              value={leasingTerm}
              onChange={(event) => setLeasingTerm(event.target.value)}
              min={1}
              max={60}
            />
          </InputWrapper>
        </LabelInputBox>
      </InputFlexContainer>

      <Row>
        <ResultContainer>
          <ResultTitle>Сумма договора лизинга</ResultTitle>
          <DisplayResult>{Math.floor(amountOfTheLeasingAgreement).toLocaleString()} ₽</DisplayResult>
        </ResultContainer>
        <ResultContainer>
          <ResultTitle>Ежемесячный платеж от</ResultTitle>
          <DisplayResult>{Math.floor(monthlyPayment).toLocaleString()} ₽</DisplayResult>
        </ResultContainer>
        <Button onClick={openModal} type="button">
          Оставить заявку
        </Button>
      </Row>
    </FlexContainer>
  );
};

export default CalculatorForm;
