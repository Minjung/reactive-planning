var db = {
    db: 'reactive-planning',
    host: process.env.IP || 'localhost',
    no_ready_check: true,
    ttl: 60*60
};
var session = {
    secret: 'secretkey',
};
var server = {
    ip: process.env.IP || 'localhost',
    port: process.env.PORT || 8080
};

module.exports.db = db;
module.exports.session = session;
module.exports.server = server;