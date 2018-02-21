// @flow
/* eslint-disable no-console */
import * as React from 'react';
import { hot } from 'react-hot-loader';

import(/* webpackChunkName: "math" */ './math').then((math) => {
  console.log(math.add(16, 26));
});

const App = () => <div>hello splitted world</div>;

export default hot(module)(App);
