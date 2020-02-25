import React from 'react';
import BookList from '../BookList';
import ShoppingCartTable from '../ShoppingCartTable';

const HomePage = () => (
  <>
    <BookList books={[]} />
    <ShoppingCartTable />
  </>
);

export default HomePage;
