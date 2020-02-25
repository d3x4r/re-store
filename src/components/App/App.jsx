import React from 'react';
import PropTypes from 'prop-types';
import { WithBookstoreService } from '../hoc';
// import Spinner from '../Spinner';

const App = ({ bookstoreService }) => {
  return <div>App</div>;
};

App.propTypes = {
  bookstoreService: PropTypes.instanceOf(Object).isRequired,
};

export default WithBookstoreService(App);
