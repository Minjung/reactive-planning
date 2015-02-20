var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser')
var favicon = require("serve-favicon");
var serveStatic = require("serve-static");
var Primus = require('primus');
var app = express();
var server = require('http').createServer(app);
var primus = new Primus(server, { transformer: 'sockjs' });
var MongoStore = require('connect-mongo')(session);
var conf = require(__dirname + "/conf.js");
var model = require(__dirname + "/model.js");

server.listen(conf.server.port, function() {
    console.log("--- app.listen");
});

app.use(cookieParser());
app.use(session({
    secret: conf.session.secret,
    maxAge: new Date(Date.now() + 3600000),
    store: new MongoStore(conf.db),
    resave: true,
    saveUninitialized: true
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", {
    layout: false,
    pretty: true
});
app.use(require('stylus').middleware(__dirname + '/frontend'));
//app.use(favicon());
app.use(serveStatic(__dirname + '/frontend'));

module.exports.app = app;
module.exports.model = model;
module.exports.primus = primus;
require(__dirname + "/realtime.js");
require(__dirname + "/controller.js");