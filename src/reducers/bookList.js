const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      booksLoading: false,
      booksRequiestError: null,
    };
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        booksRequiestError: null,
        booksLoading: true,
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        booksRequiestError: null,
        booksLoading: false,
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        booksLoading: false,
        booksRequiestError: action.payload,
      };
    default:
      return state.bookList;
  }
};

export default updateBookList;
