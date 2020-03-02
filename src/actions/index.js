const startBooksLoaded = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

const booksLoaded = (books) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: books,
});

const onBooksRequestError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error,
});

const cartActionMessage = (timerId, visible) => ({
  type: 'SET_CART_ACTION_MESSAGE',
  payload: {
    timerId,
    visible,
  },
});

export const addBookToCart = (id) => ({
  type: 'ADD_BOOK_TO_CART',
  payload: id,
});

export const removeBookFromCart = (id) => ({
  type: 'REMOVE_BOOK_FROM_CART',
  payload: id,
});

export const deleteBookFromCart = (id) => ({
  type: 'DELETE_BOOK_FROM_CART',
  payload: id,
});

export const fetchBooks = (bookstoreService) => () => async (dispatch) => {
  dispatch(startBooksLoaded());
  try {
    const books = await bookstoreService.getBooks();
    dispatch(booksLoaded(books));
  } catch (err) {
    dispatch(onBooksRequestError(err));
  }
};

export const setActionCartMessage = (timerId = 0) => async (dispatch) => {
  if (timerId) {
    clearTimeout(timerId);
  }
  const timerID = setTimeout(() => {
    dispatch(cartActionMessage(0, false));
  }, 3000);

  dispatch(cartActionMessage(timerID, true));
};
