import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import BookstoreServive from './services';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import store from './store';

const bookstoreService = new BookstoreServive();

const AppContainer = () => (
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
);

it('default render correctly', () => {
    const tree = renderer
        .create(<AppContainer />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});