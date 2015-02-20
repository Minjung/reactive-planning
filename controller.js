var app = module.parent.exports.app;
var model = module.parent.exports.model;

app.get('/', function(req, res) {
    res.render('index.jade');
});