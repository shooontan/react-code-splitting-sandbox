// @flow
/* eslint-disable no-console */
import * as React from 'react';
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

const LoadableOtherComponent = Loadable({
  loader: () => import(/* webpackChunkName: "OtherComponent" */ './OtherComponent'),
  loading: Loading,
  delay: 1000,
  timeout: 100,
});

const App = () => (
  <React.Fragment>
    <div>hello splitted world</div>
    <LoadableOtherComponent />
  </React.Fragment>
);

export default hot(module)(App);
