import React from 'react';

import CalculatorForm from './CalculatorForm';
import { CalculatorTitle, CalculatorWrapper } from './styles';

const Calculator = () => {
  return (
    <CalculatorWrapper>
      <CalculatorTitle>Рассчитайте стоимость автомобиля в лизинг</CalculatorTitle>
      <CalculatorForm />
    </CalculatorWrapper>
  );
};

export default Calculator;
