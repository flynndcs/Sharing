var createError = require('http-errors');
var session = require("express-session");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var imagePage = require('./api/image.js');
var wmtsRouter = require('./api/wmtsFetch.js');
var createRouter = require('./api/create.js');
var selectRouter = require("./api/select.js");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({secret: 'secret'}));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/wmtsFetch', wmtsRouter);
app.use('/image', imagePage);
app.use('/create', createRouter);
app.use('/select', selectRouter);

app.use(express.static(path.join(__dirname, 'client')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
