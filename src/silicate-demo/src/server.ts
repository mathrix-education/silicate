import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import {join} from 'path';

const express = require('express');

enableProdMode();

const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Relative path to the the main file
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require(`../../../dist/server/main`);

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

const cache = {};

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  if (cache[req.url]) {
    res.send(cache[req.url]);
  } else {
    res.render('index', {req}, (err, html) => {
      cache[req.url] = html;
      res.send(html);
    });
  }
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
