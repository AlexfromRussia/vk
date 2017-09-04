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
import Friend from './app/components/Friend';
import Messange from './app/components/Messange';
import Auth from './app/components/Auth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './app/components/Navigation';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <MuiThemeProvider>
        <Route component={Root}>
          <Route path="/" component={Profile}/>
          <Route path="/feed" component={Feed}/>
          <Route path="/friend" component={Friend}/>
          <Route path="/messange" component={Messange}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/" component={Navigation}/>
        </Route>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

