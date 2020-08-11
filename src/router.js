import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Example from './routes/example/IndexPage';
import Products from './routes/products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Example} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
