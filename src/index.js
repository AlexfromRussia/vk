import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Profile from './app/components/Profile';
import Root from './app/components/Root';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import Feed from './app/components/Feed';
import './app/style/style.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Root}>
        <Route path="/" component={Profile}/>
        <Route path="/feed" component={Feed}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
