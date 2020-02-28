import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './OrderResult.css';

const OrderResult = (props) => {
  const { price, count } = props;
  return (
    <div className="order-result">
      <Link className="order-result__button btn btn-success btn-sm" to="/cart" aria-label="order">
        <i className="fa fa-shopping-cart" aria-hidden="true" />
      </Link>
      <span className="order-result__count">
        {price && count ? `${count} items` : 'The cart is empty'}
      </span>
      <span>{price && count ? `(${price}$)` : null}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    cart: { totalPrice, totalCount },
  } = state;
  return { price: totalPrice, count: totalCount };
};

OrderResult.propTypes = {
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(OrderResult);
