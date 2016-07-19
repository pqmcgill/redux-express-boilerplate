var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new (require('express'))();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

var server = require('http').Server(app);

app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

server.listen(port, function(error) {
	if (error) {
		console.error(error);
	} else {
		console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
	}
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
	socket.emit('message', { author: 'Patrick', message: 'Hello, World!' });
	socket.on('message_added', function(message) {
		console.log(message);
	});
});
