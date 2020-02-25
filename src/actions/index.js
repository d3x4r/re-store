/* eslint-disable import/prefer-default-export */
export const booksLoaded = (books) => ({
  type: 'BOOKS_LOADED',
  payload: books,
});

export const startBooksLoaded = () => ({
  type: 'START_BOOKS_LOADING',
  payload: '',
});

// export const endBooksLoaded = () => ({
//   type: 'END_BOOKS_LOADING',
//   payload: false,
// });
