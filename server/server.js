// load dependencies
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');

// connect to mongodb
var db_uri = 'mongodb://localhost/test';
var db = mongoose.connect(db_uri, { server: { socketOptions: { keepAlive: 1 } } });
db.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${ db_uri }`);
});

// bootstrap models
var models_path = path.join(__dirname, 'models');
fs.readdirSync(models_path)
	.filter( file => ~file.indexOf('.js') )
	.forEach( file => require( `${ models_path }/${ file }`) );

var app = new express();
var port = 3000;

// configure webpack dev environment
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
	stats: true,
	publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// serve static file for all requests
// push routing responsibility to client
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// fire up the server
app.listen(port, function(error) {
	if (error) {
		console.error(error);
	} else {
		console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
	}
});
