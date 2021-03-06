import React from 'react';
import PropTypes from 'prop-types';
import './BookListItem.css';

const BookListItem = ({ book, onAddToCart, timerId, setActionMessage }) => {
  const { title, author, description, price, id } = book;
  return (
    <section className="booklist-item">
      <div className="booklist-item__first-row">
        <img className="booklist-item__img" src="https://via.placeholder.com/150x200" alt={title} />
      </div>
      <div className="booklist-item__second-row">
        <h3 className="booklist-item__title">{title}</h3>
        <p className="text-muted">{author}</p>
        <p className="booklist-item__description">{description}</p>
        <span className="booklist-item__price">{`$${price}`}</span>
        <button
          className="booklist-item__order-button btn btn-primary btn-sm"
          type="button"
          onClick={() => {
            onAddToCart(id);
            setActionMessage(timerId);
          }}
        >
          <i className="fa fa-cart-arrow-down" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

BookListItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  timerId: PropTypes.number.isRequired,
  setActionMessage: PropTypes.func.isRequired,
};

export default BookListItem;
