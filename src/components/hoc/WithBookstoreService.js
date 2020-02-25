/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const WithBookstoreService = (Wrapped) => (props) => (
  <BookstoreServiceConsumer>
    {(bookstoreService) => (
      <Wrapped {...props} bookstoreService={bookstoreService} />
    )}
  </BookstoreServiceConsumer>
);

export default WithBookstoreService;
