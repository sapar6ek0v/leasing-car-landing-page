import * as React from 'react';

import ModalProvider from '../context/modalContext';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Calculator from '../components/Calculator';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <ModalProvider>
      <Layout>
        <Slider />
        <Calculator />
        <Modal />
      </Layout>
    </ModalProvider>
  );
}
