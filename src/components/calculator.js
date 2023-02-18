import React from 'react';
import styled from 'styled-components';

import CalculatorForm from './calculatorForm';

const CalculatorWrapper = styled.section`
  padding: 80px 0 100px;
`;

const CalculatorTitle = styled.h2`
  max-width: 753px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 90%;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 44px;
`;

const Calculator = () => {
  return (
    <CalculatorWrapper>
      <CalculatorTitle>Рассчитайте стоимость автомобиля в лизинг</CalculatorTitle>
      <CalculatorForm />
    </CalculatorWrapper>
  );
};

export default Calculator;
