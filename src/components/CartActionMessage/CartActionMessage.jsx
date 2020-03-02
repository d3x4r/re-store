import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CartActionMessage.css';

const CartActionMessage = ({ messageData, visible }) => {
  const { message, type } = messageData;
  const messageClassName = `cart-action-message alert alert-${type}`;
  return (
    visible && (
      <div className={messageClassName} role="alert">
        {message}
      </div>
    )
  );
};

CartActionMessage.defaultProps = {
  messageData: {},
};

CartActionMessage.propTypes = {
  messageData: PropTypes.instanceOf(Object),
  visible: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {
    cart: { cartLastAction },
    uiState: {
      cartActionMessage: { visible },
    },
  } = state;

  const messageMap = {
    added: {
      message: 'Item was added in cart',
      type: 'success',
    },
    removed: {
      message: 'Item was removed from cart',
      type: 'warning',
    },
    deleted: {
      message: 'Item was deleted from cart',
      type: 'danger',
    },
  };

  return {
    messageData: messageMap[cartLastAction],
    visible,
  };
};

export default connect(mapStateToProps)(CartActionMessage);
