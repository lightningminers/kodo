var path = require('path');
var koa = require('koa');
var statics = require('koa-static');
var logger = require('koa-logger');
var app = koa();

app.use(statics(path.resolve('.')));
app.use(logger());
app.listen(3001);
