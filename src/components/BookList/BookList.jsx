/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookListItem from '../BookListItem';
import './BookList.css';

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    );
  }
}

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array),
};

export default BookList;
