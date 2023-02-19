import { useContext } from 'react';

import { ModalContext } from '../../context/modalContext';

export const useModalContext = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};
