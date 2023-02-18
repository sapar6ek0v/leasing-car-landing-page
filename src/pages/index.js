import * as React from 'react';

import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Calculator from '../components/Calculator';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Calculator />
    </Layout>
  );
}
