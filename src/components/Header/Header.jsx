/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import OrderResult from '../OrderResult';

const Header = () => {
  return (
    <header className="header">
      <Link className="header__logo-link" to="/">
        reStore
      </Link>
      <OrderResult />
    </header>
  );
};

export default Header;
