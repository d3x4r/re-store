const ininitalState = {
  books: [],
};

const reducer = (state = ininitalState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
