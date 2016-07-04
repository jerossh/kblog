import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

import NotFound from './components/notFound';
import App from './containers/appContainer';
import PostsContainer from './containers/postsContainer';
import PostContainer from './containers/postContainer';

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const enhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, enhancer);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PostsContainer} />
                <Route path=":cate" component={PostsContainer} />
                <Route path="p/:postId.html" component={PostContainer} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

