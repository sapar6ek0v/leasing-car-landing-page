import React, { useEffect, useRef, useState } from 'react';

import { useScrollDirection } from '../../../helpers/hooks/useScrollDirection';
import { useModalContext } from '../../../helpers/hooks/useModalContext';
import { navLinks, componySlogan } from '../../../config';
import NavbarLink from './NavbarLink';
import { Button, CompanySlogan, Container, HeaderWrapper, Line, NavbarWrapper, Title } from './styles';

const Navbar = () => {
  const headerRef = useRef(null);
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const scrollDirection = useScrollDirection('down');
  const { openModal } = useModalContext();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    setScrolledToTop(window.pageYOffset < 50);
  }

  return (
    <>
      <HeaderWrapper ref={headerRef} scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
        <Container>
          <NavbarWrapper>
            <div className="leftSide">
              <Title>
                <span className="orange">Leasing</span>
                <span className="black">Car</span>
              </Title>
              <Line />
              <CompanySlogan>{componySlogan}</CompanySlogan>
            </div>

            <ul className="rightSide">
              {!!navLinks ? navLinks.map((link) => <NavbarLink key={link.path} link={link} />) : null}
              <Button onClick={openModal} type="button">
                Оставить заявку
              </Button>
            </ul>
          </NavbarWrapper>
        </Container>
      </HeaderWrapper>
    </>
  );
};

export default Navbar;
