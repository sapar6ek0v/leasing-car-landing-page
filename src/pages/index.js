import * as React from 'react';

import Layout from '../components/Layout';
import Calculator from '../components/calculator';
import Slider from '../components/slider';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Calculator />
    </Layout>
  );
}
