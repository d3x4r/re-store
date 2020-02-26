/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
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
    this.downloadBooks();
  }

  downloadBooks = async () => {
    const {
      bookstoreService,
      booksLoaded,
      startBooksLoaded,
      onBooksRequestError,
    } = this.props;
    startBooksLoaded();

    try {
      const books = await bookstoreService.getBooks();
      booksLoaded(books);
    } catch (err) {
      onBooksRequestError(err);
    }
  };

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

const mapDispatchToProps = {
  booksLoaded,
  startBooksLoaded,
  onBooksRequestError,
};

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array),
  bookstoreService: PropTypes.instanceOf(Object).isRequired,
  booksLoaded: PropTypes.func.isRequired,
  startBooksLoaded: PropTypes.func.isRequired,
  booksLoading: PropTypes.bool.isRequired,
  onBooksRequestError: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithBookstoreService(BookList));
