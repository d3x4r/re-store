/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
import OrderResult from '../OrderResult';

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo-link">reStore</a>
      <OrderResult />
    </header>
  );
};

export default Header;
