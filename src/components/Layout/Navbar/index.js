import React, { useEffect, useRef, useState } from 'react';

import { useScrollDirection } from '../../../helpers/hooks/useScrollDirection';
import { useModalContext } from '../../../helpers/hooks/useModalContext';
import { useMediaQuery } from '../../../helpers/hooks/useMediaQuery';
import { navLinks, componySlogan } from '../../../config';
import NavbarLink from './NavbarLink';
import Menu from './Menu';
import {
  ApplicationButton,
  BurgerBar,
  BurgerMenu,
  CompanySlogan,
  Container,
  HeaderWrapper,
  Line,
  NavbarWrapper,
  Title,
} from './styles';

const Navbar = () => {
  const headerRef = useRef(null);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const scrollDirection = useScrollDirection('down');
  const { openModal } = useModalContext();
  const matchesMinWidth992 = useMediaQuery('(min-width: 992px)');
  const matchesMinWidth768 = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    setScrolledToTop(window.pageYOffset < 50);
  }

  useEffect(() => {
    if (!!matchesMinWidth992) {
      setIsMenuClicked(false);
    }
  }, [matchesMinWidth992]);

  const toggleMenu = () => setIsMenuClicked(!isMenuClicked);

  return (
    <>
      <HeaderWrapper ref={headerRef} scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
        <Container>
          <NavbarWrapper>
            <div className="leftSide">
              <Title scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
                <span className="orange">Leasing</span>
                <span className="black">Car</span>
              </Title>
              <Line />
              {matchesMinWidth768 && <CompanySlogan>{componySlogan}</CompanySlogan>}
            </div>

            {matchesMinWidth992 ? (
              <ul className="rightSide">
                {!!navLinks ? navLinks.map((link) => <NavbarLink key={link.path} link={link} />) : null}
                <ApplicationButton onClick={openModal} type="button">
                  Оставить заявку
                </ApplicationButton>
              </ul>
            ) : (
              <BurgerMenu onClick={toggleMenu}>
                <BurgerBar
                  clicked={isMenuClicked}
                  scrollDirection={scrollDirection}
                  scrolledToTop={scrolledToTop}
                />
                <BurgerBar
                  clicked={isMenuClicked}
                  scrollDirection={scrollDirection}
                  scrolledToTop={scrolledToTop}
                />
                <BurgerBar
                  clicked={isMenuClicked}
                  scrollDirection={scrollDirection}
                  scrolledToTop={scrolledToTop}
                />
              </BurgerMenu>
            )}
          </NavbarWrapper>
        </Container>
      </HeaderWrapper>

      <Menu opened={isMenuClicked} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
