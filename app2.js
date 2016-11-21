var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var isDev = process.env.NODE_ENV !== 'production';

var index = require('./server/routes/index');
var users = require('./server/routes/users');

var app = express();
var router = express.Router();

// view engine setup

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views','./dist');
app.engine('html', require('consolidate').handlebars);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/vue', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
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

app.use(router);
app.listen('9090', function () {
	console.log('App is now running，at http://127.0.0.1:9090');
})