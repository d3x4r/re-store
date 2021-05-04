import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header';
import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <div></div>
        <Route path="/cart" component={CartPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
