/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { WithBookstoreService } from '../hoc';
import {
  booksLoaded,
  startBooksLoaded,
  onBooksRequestError,
} from '../../actions';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';
import ErrorEndicator from '../ErrorEndicator';
import './BookList.css';

class BookList extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { books, booksLoading, booksRequiestError } = this.props;

    if (booksLoading) {
      return <Spinner />;
    }

    if (booksRequiestError) {
      return <ErrorEndicator />;
    }

    return (
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-list__item">
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, booksLoading, booksRequiestError }) => {
  return { books, booksLoading, booksRequiestError };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: async () => {
      dispatch(startBooksLoaded());

      try {
        const books = await bookstoreService.getBooks();
        dispatch(booksLoaded(books));
      } catch (err) {
        dispatch(onBooksRequestError(err));
      }
    },
  };
};

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array),
  booksLoading: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default WithBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);
