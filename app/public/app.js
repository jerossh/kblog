//import { createDevTools } from 'redux-devtools';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import { posts } from './reducers';

import App from './components/app';
import NotFound from './components/notFound';
import HomeContainer from './containers/homeContainer';
import PostsContainer from './containers/postsContainer';
//import PostContainer from './containers/postContainer';

const reducer = combineReducers({
    posts,
    routing: routerReducer
});


const store = applyMiddleware(thunk)(createStore)(reducer)

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={HomeContainer} />
                <Route path=":cate" component={PostsContainer} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

