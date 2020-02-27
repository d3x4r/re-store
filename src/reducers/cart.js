const updateItemInCart = (cart, selectedItemIndex, updatedItem) => {
  return cart.reduce((acc, cartItem, cartItemIndex) => {
    if (selectedItemIndex !== cartItemIndex) {
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
  return updateItemInCart(cart, index, updatedBookData);
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
  return updateItemInCart(cart, index, updatedBookData);
};

const updateCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      totalPrice: 0,
    };
  }
  switch (action.type) {
    case 'ADD_BOOK_TO_CART': {
      const {
        bookList: { books },
        cart: { cartItems },
      } = state;
      const selectedBookId = action.payload;

      const indexBookInCart = cartItems.findIndex(({ id }) => id === selectedBookId);

      if (indexBookInCart >= 0) {
        const cartWithUpdatedItem = getCartWithUpdatedItem(cartItems, indexBookInCart);
        return { totalPrice: 0, cartItems: cartWithUpdatedItem };
      }

      const cartWithAddedItem = getCartWithAddedItem(books, selectedBookId, cartItems);
      return { totalPrice: 0, cartItems: cartWithAddedItem };
    }

    case 'REMOVE_BOOK_FROM_CART': {
      const {
        cart: { cartItems },
      } = state;
      const selectedBookId = action.payload;

      const indexBookInCart = cartItems.findIndex(({ id }) => id === selectedBookId);
      const currentCartItem = cartItems[indexBookInCart];
      const { count } = currentCartItem;

      if (count === 1) {
        return { totalPrice: 0, cartItems };
      }
      const cartWithoutItem = getCartWithoutItem(cartItems, indexBookInCart);
      return { totalPrice: 0, cartItems: cartWithoutItem };
    }

    case 'DELETE_BOOK_FROM_CART': {
      const {
        cart: { cartItems },
      } = state;
      const selectedBookId = action.payload;

      const filteredCart = cartItems.filter(({ id }) => id !== selectedBookId);
      return { totalPrice: 0, cartItems: filteredCart };
    }
    default:
      return state.cart;
  }
};

export default updateCart;
