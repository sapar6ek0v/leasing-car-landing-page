import React from 'react';
import { Link } from 'gatsby';

import { Dropdown, Wrapper } from './styles';

const NavbarLink = ({ link }) => {
  return (
    <Wrapper>
      <Link to={link.path}>{link.name}</Link>

      {link.submenu && (
        <Dropdown className="dropdown">
          {link.submenu.map((item) => (
            <Link to={item.path} key={item.path}>
              {item.name}
            </Link>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default NavbarLink;
