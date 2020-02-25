import React from 'react';
import PropTypes from 'prop-types';
import './BookListItem.css';

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <>
      <span>{title}</span>
      <span>{author}</span>
    </>
  );
};

BookListItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookListItem;
