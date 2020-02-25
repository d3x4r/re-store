import React from 'react';
import './OrderResult.css';

const OrderResult = () => {
  return (
    <div className="order-result">
      <a
        className="order-result__button btn btn-success btn-sm"
        href="/#"
        aria-label="order"
      >
        <i className="fa fa-shopping-cart" aria-hidden="true" />
      </a>
      <span>5 items</span>
      <span>(210$)</span>
    </div>
  );
};

export default OrderResult;
