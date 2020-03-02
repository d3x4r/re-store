const updateUiState = (state, action) => {
  if (state === undefined) {
    return {
      cartActionMessage: {
        visible: false,
        timerId: 0,
      },
    };
  }

  switch (action.type) {
    case 'SET_CART_ACTION_MESSAGE': {
      const { timerId, visible } = action.payload;
      return { cartActionMessage: { timerId, visible } };
    }

    default:
      return state.uiState;
  }
};

export default updateUiState;
