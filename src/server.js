// @flow
/* eslint-disable no-console */
import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './app';

const Server = () => (
  <React.Fragment>
    <div>hello splitted world</div>
    <StaticRouter>
      <App />
    </StaticRouter>
  </React.Fragment>
);

export default Server;
