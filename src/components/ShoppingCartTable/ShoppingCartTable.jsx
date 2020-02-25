import React from 'react';
import './ShoppingCartTable.css';
import CartActions from '../CartActions';

const ShoppingCartTable = () => {
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
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>$40</td>
            <td>
              <CartActions />
            </td>
          </tr>
        </tbody>
      </table>
      <p className="shoppingcart-table__price-container">
        Total:
        <span>$201</span>
      </p>
    </section>
  );
};

export default ShoppingCartTable;
