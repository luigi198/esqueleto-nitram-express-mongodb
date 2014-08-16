/* ===================
    Variables
   =================== */

var express = require('express'),
	env = process.env.NODE_ENV || 'development',
	config = require('./config/config')[env],
	fs = require('fs'),
	mongoose = require('mongoose');

require('express-namespace');

// -----------------------
// Mongoose
// -----------------------

mongoose.connect(config.db);

fs.readdirSync(__dirname + '/app/models').forEach(function(file) {
	if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

/* ===================
    Main
   ==================== */

var app = express();

// 301 redirect to domain
app.use(function(req, res, next) {
	if (env == 'production' && req.headers.host != '[TODO: url without protocol]') {
		res.redirect(301, '[TODO: url]');
		res.end();
	} else {
		next();
	}
});

// Bootstrap application settings
require('./config/express')(app, config);

// Start the app by listening on <port>
var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

// Expose app
exports = module.exports = app;