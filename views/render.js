// @flow
/* eslint-disable no-unused-vars */
import * as express from 'express';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import App from '../src/app';

const stats = require('../public/dist/react-loadable.json');

export default function render(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const modules = [];
  const context = {};

  const Capture = (
    <StaticRouter location={req.url} context={context}>
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <App />
      </Loadable.Capture>
    </StaticRouter>
  );

  const html = ReactDOMServer.renderToString(Capture);

  const bundles = getBundles(stats, modules);

  const styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
  const scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));

  res.send(`<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My App</title>
      ${styles.map(style => `<link href="/dist/${style.file}" rel="stylesheet"/>`).join('\n')}
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="/dist/bundle.js"></script>
      ${scripts.map(script => `<script src="/dist/${script.file}"></script>`).join('\n')}
    </body>
  </html>`);
}
