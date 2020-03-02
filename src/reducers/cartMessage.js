const updateCartMessage = (state, action) => {
  if (state === undefined) {
    return {
      message: '',
      messageId: '',
    };
  }

  switch (action.type) {
    case 'SET_CART_MESSAGE': {
      // console.log(action.payload);
      const { message, messageId } = action.payload;
      // console.log(action.payload);
      return { message, messageId };
    }

    // case 'SET_CART_MESSAGE_ID': {
    //   console.log(action.payload);
    //   return { ...state, messageId: action.payload };
    // }

    default:
      return state.cartMessage;
  }
};

export default updateCartMessage;
