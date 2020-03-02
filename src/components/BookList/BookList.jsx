/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { WithBookstoreService } from '../hoc';
import { fetchBooks, addBookToCart, setActionCartMessage } from '../../actions';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';
import ErrorEndicator from '../ErrorEndicator';
import './BookList.css';

const BookList = ({ books, onAddToCart, setActionMessage, timerId }) => (
  <ul className="book-list">
    {books.map((book) => (
      <li key={book.id} className="book-list__item">
        <BookListItem
          book={book}
          onAddToCart={onAddToCart}
          setActionMessage={setActionMessage}
          timerId={timerId}
        />
      </li>
    ))}
  </ul>
);

class BookListContainer extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const {
      books,
      booksLoading,
      booksRequiestError,
      onAddToCart,
      setActionMessage,
      timerId,
    } = this.props;

    if (booksLoading) {
      return <Spinner />;
    }

    if (booksRequiestError) {
      return <ErrorEndicator />;
    }
    return (
      <BookList
        books={books}
        onAddToCart={onAddToCart}
        setActionMessage={setActionMessage}
        timerId={timerId}
      />
    );
  }
}

const mapStateToProps = (props) => {
  const {
    bookList: { books, booksLoading, booksRequiestError },
    uiState: {
      cartActionMessage: { timerId },
    },
  } = props;

  return { books, booksLoading, booksRequiestError, timerId };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddToCart: addBookToCart,
      setActionMessage: setActionCartMessage,
    },
    dispatch,
  );
};

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array),
  onAddToCart: PropTypes.func.isRequired,
  setActionMessage: PropTypes.func.isRequired,
  timerId: PropTypes.number.isRequired,
};

BookListContainer.defaultProps = {
  books: [],
  booksRequiestError: null,
};

BookListContainer.propTypes = {
  books: PropTypes.instanceOf(Array),
  booksLoading: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  booksRequiestError: PropTypes.bool,
  onAddToCart: PropTypes.func.isRequired,
  setActionMessage: PropTypes.func.isRequired,
  timerId: PropTypes.number.isRequired,
};

export default WithBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer),
);
