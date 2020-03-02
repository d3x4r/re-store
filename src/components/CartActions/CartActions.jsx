import React from 'react';
import PropTypes from 'prop-types';
import './CartActions.css';

const CartActions = ({ actionHandlers, itemId, setActionCartMessage, timerId }) => {
  const { onIncrease, onDecrease, onDelete } = actionHandlers;
  const onClickHandler = (message, id) => () => {
    let currentAction;
    if (message === 'added') {
      currentAction = onIncrease;
    } else if (message === 'removed') {
      currentAction = onDecrease;
    } else if (message === 'deleted') {
      currentAction = onDelete;
    }
    currentAction(id);
    setActionCartMessage(timerId);
  };
  return (
    <div className="btn-group btn-group-sm" role="group">
      <button type="button" className="btn btn-primary" onClick={onClickHandler('added', itemId)}>
        <i className="fa fa-plus" aria-hidden="true" />
      </button>
      <button type="button" className="btn btn-primary" onClick={onClickHandler('removed', itemId)}>
        <i className="fa fa-minus" aria-hidden="true" />
      </button>
      <button type="button" className="btn btn-danger" onClick={onClickHandler('deleted', itemId)}>
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </div>
  );
};

CartActions.propTypes = {
  actionHandlers: PropTypes.instanceOf(Object).isRequired,
  itemId: PropTypes.number.isRequired,
  setActionCartMessage: PropTypes.func.isRequired,
  timerId: PropTypes.number.isRequired,
};

export default CartActions;
