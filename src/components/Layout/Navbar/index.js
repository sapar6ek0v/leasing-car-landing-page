import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

import { useScrollDirection } from '../../../helpers/hooks/useScrollDirection';
import { navLinks, componySlogan } from '../../../config';
import { Button, CompanySlogan, Container, HeaderWrapper, Line, NavbarWrapper, Title } from './styles';

const Navbar = () => {
  const headerRef = useRef(null);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection('down');

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
            {!!navLinks
              ? navLinks.map((link) => (
                  <li className="link">
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))
              : null}
            <Button type="button">Оставить заявку</Button>
          </ul>
        </NavbarWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Navbar;
