const ininitalState = {
  books: [],
  booksLoading: false,
  booksRequiestError: null,
};

const reducer = (state = ininitalState, action) => {
  switch (action.type) {
    case 'BOOKS_REQUEST':
      return { books: [], booksRequiestError: null, booksLoading: true };

    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        booksRequiestError: null,
        booksLoading: false,
      };

    case 'BOOKS_REQUEST_ERROR':
      return {
        books: [],
        booksLoading: false,
        booksRequiestError: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
