const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');

const mapRouter = require('./routes/map');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mypageRouter = require('./routes/mypage');
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mypage',mypageRouter);
app.use('/map',mapRouter);

module.exports = app;
