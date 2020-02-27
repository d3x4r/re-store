/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { WithBookstoreService } from '../hoc';
import { fetchBooks, addBookToCart } from '../../actions';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';
import ErrorEndicator from '../ErrorEndicator';
import './BookList.css';

const BookList = ({ books, onAddToCart }) => (
  <ul className="book-list">
    {books.map((book) => (
      <li key={book.id} className="book-list__item">
        <BookListItem book={book} onAddToCart={onAddToCart} />
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
    // eslint-disable-next-line react/prop-types
    const { books, booksLoading, booksRequiestError, onAddToCart } = this.props;

    if (booksLoading) {
      return <Spinner />;
    }

    if (booksRequiestError) {
      return <ErrorEndicator />;
    }

    return <BookList books={books} onAddToCart={onAddToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, booksLoading, booksRequiestError } }) => {
  return { books, booksLoading, booksRequiestError };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddToCart: addBookToCart,
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
};

BookListContainer.defaultProps = {
  books: [],
};

BookListContainer.propTypes = {
  books: PropTypes.instanceOf(Array),
  booksLoading: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default WithBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer),
);
