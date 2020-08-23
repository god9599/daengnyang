const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');

const checkinfoRouter = require("./routes/checkinfo");
const inputinfoRouter = require("./routes/inputinfo");
const mymodalRouter = require("./routes/mymodal");
const reserveRouter = require("./routes/reserve");
const mapRouter = require('./routes/map');
const indexRouter = require('./routes/index');
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
app.use('/mypage',mypageRouter);
app.use('/map',mapRouter);
app.use('/reserve',reserveRouter);
app.use('/mymodal',mymodalRouter);
app.use('/inputinfo',inputinfoRouter);
app.use('/checkinfo',checkinfoRouter);



module.exports = app;
