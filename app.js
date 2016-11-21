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

// 开发阶段启用wabpack实时编译
if(isDev) {
	var webpack = require('webpack'),
		webpackDevMiddleware = require('webpack-dev-middleware'),
		webpackHotMiddleware = require('webpack-hot-middleware'),
		webpackDevConfig = require('./webpack.config.js');

	var compiler = webpack(webpackDevConfig);

	app.use(webpackDevMiddleware(compiler, {

		// public path should be the same with webpack config
		publicPath: webpackDevConfig.output.publicPath,
		noInfo: true,
		stats: {
			colors: true
		}
	}));
	app.use(webpackHotMiddleware(compiler));
}
// 设置模版
app.set('views','./dist');
app.engine('html', require('consolidate').handlebars);
app.set('view engine', 'html');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

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

module.exports = app;