import React from 'react';
import { Link } from 'react-router-dom';
import './OrderResult.css';

const OrderResult = () => {
  return (
    <div className="order-result">
      <Link
        className="order-result__button btn btn-success btn-sm"
        to="/cart"
        aria-label="order"
      >
        <i className="fa fa-shopping-cart" aria-hidden="true" />
      </Link>
      <span>5 items</span>
      <span>(210$)</span>
    </div>
  );
};

export default OrderResult;
