import React from 'react';

import { Wrapper } from './styles';

const Loader = ({ size, color }) => {
  return <Wrapper size={size} strokeWidth={2} color={color} />;
};

export default Loader;
