/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorEndicator from '../ErrorEndicator';

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorEndicator />
    }

    return children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundry;
