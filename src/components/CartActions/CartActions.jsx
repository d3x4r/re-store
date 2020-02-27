import React from 'react';
import PropTypes from 'prop-types';
import './CartActions.css';

const CartActions = ({ actionHandlers, itemId }) => {
  const { onIncrease, onDecrease, onDelete } = actionHandlers;
  return (
    <div className="btn-group btn-group-sm" role="group">
      <button type="button" className="btn btn-primary" onClick={onIncrease(itemId)}>
        <i className="fa fa-plus" aria-hidden="true" />
      </button>
      <button type="button" className="btn btn-primary" onClick={onDecrease(itemId)}>
        <i className="fa fa-minus" aria-hidden="true" />
      </button>
      <button type="button" className="btn btn-danger" onClick={onDelete(itemId)}>
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </div>
  );
};

CartActions.propTypes = {
  actionHandlers: PropTypes.instanceOf(Object).isRequired,
  itemId: PropTypes.number.isRequired,
};

export default CartActions;
