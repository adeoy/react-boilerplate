import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

import NotFound from '../containers/NotFound';

import routes from './index';

const App = () => {

  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
};

export default App;
