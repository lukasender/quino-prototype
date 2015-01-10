var express = require('express'),
    exphbs = require('express-handlebars'),
    http = require('http'),
    logger = require('./utils/logging'),
    Routes = require('./routes');

// Create an express instance and set a port variable
var app = express();
var port = process.env.QUINO_PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({
    defaultLayout: 'index.handlebars'
}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// Routes
app.get('/', Routes.index);
app.get('/help', Routes.help);
app.get('/contact', Routes.help);


// Set /static as our static content dir
app.use("/", express.static(__dirname + "/static/"));

// Fire this bitch up (start our server)
var server = http.createServer(app).listen(port, function() {
    logger.info('Express server listening on port ' + port);
});
