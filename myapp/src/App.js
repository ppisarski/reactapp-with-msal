import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './containers/Layout';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';

class App extends Component {
  render = () => (
    <Layout>
      <Route path="/" exact component={Welcome} />
      <Route path="/404" render={NotFound} status={404} />
      <Route path="/robots933456.txt" render={NotFound} status={404} />
      {/* <Redirect to="/404" /> */}
    </Layout >
  )
};

export default App;