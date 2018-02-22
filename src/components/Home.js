// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <React.Fragment>
    <p>This is Home</p>
    <Link to="/about">go About page</Link>
  </React.Fragment>
);
