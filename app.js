// @flow
/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import Loadable from 'react-loadable';
import render from './views/render';

const app = express();

app.get('/about', render);
app.get('/', render);

app.use(express.static(path.join(__dirname, 'public')));

Loadable.preloadAll()
  .then(() => {
    app.listen(3000, () => {
      console.log('Running on http://localhost:3000/');
    });
  })
  .catch((err) => {
    console.log(err);
  });
