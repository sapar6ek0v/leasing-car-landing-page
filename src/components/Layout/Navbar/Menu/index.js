import React, { useEffect } from 'react';

import { useModalContext } from '../../../../helpers/hooks/useModalContext';
import { navLinks } from '../../../../config';
import NavbarLink from '../NavbarLink';
import { ApplicationButton } from '../styles';
import { Button, FixedWrapper, LinkWrapper, Wrapper } from './styles';

const Menu = ({ opened, toggleMenu }) => {
  const { openModal, isOpen } = useModalContext();

  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
  }, [isOpen]);

  return (
    <FixedWrapper opened={opened} onClick={toggleMenu}>
      <Wrapper opened={opened} onClick={(event) => event.stopPropagation()}>
        <Button onClick={toggleMenu} />
        {!!navLinks ? (
          <LinkWrapper>
            {navLinks.map((link) => (
              <NavbarLink key={link.path} link={link} />
            ))}
          </LinkWrapper>
        ) : null}
        <ApplicationButton onClick={openModal} type="button">
          Оставить заявку
        </ApplicationButton>
      </Wrapper>
    </FixedWrapper>
  );
};

export default Menu;
