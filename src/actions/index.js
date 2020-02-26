/* eslint-disable import/prefer-default-export */
export const booksLoaded = (books) => ({
  type: 'BOOKS_LOADED',
  payload: books,
});

export const startBooksLoaded = () => ({
  type: 'BOOKS_REQUEST',
});

export const onBooksRequestError = (error) => ({
  type: 'BOOKS_REQUEST_ERROR',
  payload: error,
});
