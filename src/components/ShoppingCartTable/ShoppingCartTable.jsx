/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ShoppingCartTable.css';
import CartActions from '../CartActions';
import { addBookToCart, removeBookFromCart, deleteBookFromCart } from '../../actions';

const ShoppingCartTable = ({ items, total, actionHandlers }) => {
  const renderRow = (item, i) => {
    const { name, total, count, id } = item;
    return (
      <tr key={id}>
        <th scope="row">{i + 1}</th>
        <td>{name}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <CartActions actionHandlers={actionHandlers} itemId={id} />
        </td>
      </tr>
    );
  };

  return (
    <section className="shoppingcart-table">
      <h2 className="shoppingcart-table">Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <p className="shoppingcart-table__price-container">
        Total:
        <span>{`$${total}`}</span>
      </p>
    </section>
  );
};

ShoppingCartTable.defaultProps = {
  items: [],
  total: 0,
};

ShoppingCartTable.propTypes = {
  items: PropTypes.instanceOf(Array),
  total: PropTypes.number,
  actionHandlers: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => {
  const {
    cart: { cartItems, totalPrice },
  } = state;
  return {
    items: cartItems,
    total: totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionHandlers: {
      onIncrease: (id) => () => {
        dispatch(addBookToCart(id));
      },
      onDecrease: (id) => () => {
        dispatch(removeBookFromCart(id));
      },
      onDelete: (id) => () => {
        dispatch(deleteBookFromCart(id));
      },
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
