import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <Switch>
      <Route path="/cart" component={CartPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
