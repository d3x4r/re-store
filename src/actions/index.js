/* eslint-disable import/prefer-default-export */
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

export const fetchBooks = (bookstoreService, dispatch) => async () => {
  dispatch(startBooksLoaded());

  try {
    const books = await bookstoreService.getBooks();
    dispatch(booksLoaded(books));
  } catch (err) {
    dispatch(onBooksRequestError(err));
  }
};
