// @flow
/* eslint-disable no-console */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';

import(/* webpackChunkName: "math" */ './math').then((math) => {
  console.log(math.add(16, 26));
});

const Loading = (props: { error: ?Error, pastDelay: boolean, timedOut: boolean }) => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  }
  return null;
};

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './components/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './components/About'),
  loading: Loading,
});

const App = () => (
  <React.Fragment>
    <div>hello splitted world</div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </React.Fragment>
);

export default hot(module)(App);
