import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { store, history } from './store';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/settings" component={Settings} />
          <Route path="/profile/:username" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root')
);

// import sw from './sw';
// sw(); // Will be used for offline experience.
