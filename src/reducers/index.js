import updateBookList from './bookList';
import updateCart from './cart';
import updateCartMessage from './cartMessage';
import updateUiState from './uiState';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    cart: updateCart(state, action),
    cartMessage: updateCartMessage(state, action),
    uiState: updateUiState(state, action),
  };
};

export default reducer;
