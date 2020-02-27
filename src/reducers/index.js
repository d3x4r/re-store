const ininitalState = {
  books: [],
  booksLoading: false,
  booksRequiestError: null,
  cartItems: [
    // {
    //   id: 1,
    //   name: 'First Book',
    //   count: 2,
    //   total: 40,
    // },
    // {
    //   id: 2,
    //   name: 'Second Book',
    //   count: 1,
    //   total: 15,
    // },
  ],
  totalPrice: 999,
};

const getUpdatedCart = (cart, selectedItemIndex, updatedItem) => {
  return cart.reduce((acc, cartItem, index) => {
    if (selectedItemIndex !== index) {
      return [...acc, cartItem];
    }

    return [...acc, updatedItem];
  }, []);
};

const getCartWithUpdatedItem = (cart, index) => {
  const selectedBook = cart[index];
  const { count, total } = selectedBook;
  const updatedBookData = {
    ...selectedBook,
    count: count + 1,
    total: total + total / count,
  };
  return getUpdatedCart(cart, index, updatedBookData);
};

const getCartWithAddedItem = (books, selectedBookId, cartItems) => {
  const selectedBook = books.find(({ id }) => id === selectedBookId);
  const { id, title, price } = selectedBook;
  const newCartItem = {
    id,
    name: title,
    count: 1,
    total: price,
  };
  return [...cartItems, newCartItem];
};

const getCartWithoutItem = (cart, index) => {
  const selectedBook = cart[index];
  const { count, total } = selectedBook;

  const updatedBookData = {
    ...selectedBook,
    count: count - 1,
    total: total - total / count,
  };
  return getUpdatedCart(cart, index, updatedBookData);
};

const reducer = (state = ininitalState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        booksRequiestError: null,
        booksLoading: true,
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        booksRequiestError: null,
        booksLoading: false,
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        booksLoading: false,
        booksRequiestError: action.payload,
      };

    case 'ADD_BOOK_TO_CART': {
      const { books, cartItems } = state;
      const selectedBookId = action.payload;

      const indexBookInCart = cartItems.findIndex(({ id }) => id === selectedBookId);

      if (indexBookInCart >= 0) {
        const cartWithUpdatedItem = getCartWithUpdatedItem(cartItems, indexBookInCart);
        return { ...state, cartItems: cartWithUpdatedItem };
      }

      const cartWithAddedItem = getCartWithAddedItem(books, selectedBookId, cartItems);
      return { ...state, cartItems: cartWithAddedItem };
    }

    case 'REMOVE_BOOK_FROM_CART': {
      const { cartItems } = state;
      const selectedBookId = action.payload;

      const indexBookInCart = cartItems.findIndex(({ id }) => id === selectedBookId);
      const currentCartItem = cartItems[indexBookInCart];
      const { count } = currentCartItem;

      if (count === 1) {
        return state;
      }
      const cartWithoutItem = getCartWithoutItem(cartItems, indexBookInCart);
      return { ...state, cartItems: cartWithoutItem };
    }

    case 'DELETE_BOOK_FROM_CART': {
      const { cartItems } = state;
      const selectedBookId = action.payload;

      const filteredCart = cartItems.filter(({ id }) => id !== selectedBookId);
      return { ...state, cartItems: filteredCart };
    }
    default:
      return state;
  }
};

export default reducer;
