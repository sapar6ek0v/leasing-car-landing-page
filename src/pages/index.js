import * as React from 'react';

import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Calculator from '../components/calculator';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Calculator />
    </Layout>
  );
}
