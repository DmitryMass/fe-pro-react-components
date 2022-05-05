import React from 'react';
import HeaderLogo from './HeaderLogo';
import List from './navMenu/NavList';
import { navLinks } from './navMenu/DataNav';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <HeaderLogo>My Logo</HeaderLogo>
        <List items={navLinks} />
      </div>
    </header>
  );
};

export default Header;
