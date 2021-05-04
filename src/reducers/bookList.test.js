import updateBookList from './bookList'

const defaultStoreState = {
  books: [],
  booksLoading: false,
  booksRequiestError: null,
};

test('store default state', () => {
  expect(updateBookList()).toEqual(defaultStoreState);
});
