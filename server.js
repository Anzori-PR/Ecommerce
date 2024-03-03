// api/server.js
const jsonServer = require('json-server');
const express = require('express');
const app = express();

const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

module.exports = app;
