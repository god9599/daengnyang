const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');

const storeRouter = require("./routes/store");
const storeListRouter = require("./routes/storeList");
const qrcodeRouter = require("./routes/qrcode");
const mainRouter = require("./routes/main");
const checkinfoRouter = require("./routes/checkinfo");
const inputinfoRouter = require("./routes/inputinfo");
const mymodalRouter = require("./routes/mymodal");
const reserveRouter = require("./routes/reserve");
const mapRouter = require('./routes/map');
const indexRouter = require('./routes/index');
const mypageRouter = require('./routes/mypage');

//결제팀
const reservationRouter = require("./routes/reservation");
const modalRouter = require('./routes/modal');
const paymentRouter = require('./routes/payment');
const loginRouter = require('./routes/login');
const withdrawRouter = require('./routes/withdraw');

//보험팀
const fs = require('fs');
const insuranceJsonFile = fs.readFileSync('./routes/insuranceData.json', 'utf8');
const basicDataSetRouter = require("./routes/basicDataSet");
const collaborativeFiltering = require('./routes/collaborativeFiltering');
const insuranceDataSet = require("./routes/insuranceDataSet");
const insuranceByKeyword = require("./routes/insuranceByKeyword");

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', mainRouter);
app.use('/mypage',mypageRouter);
app.use('/map',mapRouter);
app.use('/reserve',reserveRouter);
app.use('/mymodal',mymodalRouter);
app.use('/inputinfo',inputinfoRouter);
app.use('/checkinfo',checkinfoRouter);
app.use('/main',mainRouter);
app.use('/qrcode',qrcodeRouter);
app.use('/storeList',storeListRouter);
app.use('/store',storeRouter);

app.use('/reservation',reservationRouter);
app.use('/modal',modalRouter);
app.use('/payment',paymentRouter);
app.use('/login',loginRouter);
app.use('/withdraw',withdrawRouter);

// app.use('/basicDataSet',basicDataSetRouter);
// app.use('/insuranceDataSet',insuranceDataSet);
// app.use('/insuranceByCollaborativeFiltering',collaborativeFiltering);
// app.use('/insuranceByKeyword',insuranceByKeyword);

app.get("/insuranceByCollaborativeFiltering", function(req, res) {
    res.render("insuranceByCollaborativeFiltering");
});

app.get("/insuranceByKeyword", function(req, res) {
    res.render("insuranceByKeyword");
});

app.post("/insurance", function(req, res) {
    res.json(insuranceJsonFile);
});

app.post("/insuranceByCollaborativeFiltering", function(req, res) {
    var recommendationResult = collaborativeFiltering.getData();
    res.json(recommendationResult);
});

module.exports = app;
