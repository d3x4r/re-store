/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { WithBookstoreService } from '../hoc';
import { booksLoaded, startBooksLoaded } from '../../actions';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';
import './BookList.css';

class BookList extends Component {
  componentDidMount() {
    this.downloadBooks();
  }

  downloadBooks = async () => {
    // eslint-disable-next-line no-shadow
    const { bookstoreService, booksLoaded, startBooksLoaded } = this.props;
    startBooksLoaded();
    const books = await bookstoreService.getBooks();
    booksLoaded(books);
  };

  render() {
    const { books, booksLoading } = this.props;

    if (booksLoading) {
      return <Spinner />;
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

const mapStateToProps = ({ books, booksLoading }) => {
  return { books, booksLoading };
};

const mapDispatchToProps = {
  booksLoaded,
  startBooksLoaded,
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithBookstoreService(BookList));
