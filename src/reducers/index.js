const ininitalState = {
  books: [],
  booksLoading: false,
};

const reducer = (state = ininitalState, action) => {
  switch (action.type) {
    case 'START_BOOKS_LOADING':
      return { booksLoading: true };
    case 'BOOKS_LOADED':
      return { books: action.payload, booksLoading: false };

    default:
      return state;
  }
};

export default reducer;
