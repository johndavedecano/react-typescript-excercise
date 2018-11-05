import * as React from 'react';
import { Route, Switch } from 'react-router';

import TodoApp from './TodoApp';
import NotFound from './NotFound';

import { hot } from 'react-hot-loader';

const App = hot(module)(() => (
  <Switch>
    <Route path="/" exact component={TodoApp} />
    <Route component={NotFound} />
  </Switch>
));

export default App