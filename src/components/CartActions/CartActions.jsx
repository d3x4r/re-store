import React from 'react';
import './CartActions.css';

const CartActions = () => {
  return (
    <div className="btn-group btn-group-sm" role="group">
      <button type="button" className="btn btn-primary">
        <i className="fa fa-plus" aria-hidden="true" />
      </button>
      <button type="button" className="btn btn-primary">
        <i className="fa fa-minus" aria-hidden="true" />
      </button>
      <button type="button" className="btn btn-danger">
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </div>
  );
};

export default CartActions;
