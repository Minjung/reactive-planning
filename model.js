var mongoose = require('mongoose');
//var uuid = require('mongoose-uuid');
var conf = require(__dirname + "/conf.js");
mongoose.connect('mongodb://' + conf.db.host + '/' + conf.db.db);
var Schema = mongoose.Schema;


var planningSessionSchema = new Schema({
    managers: String
});


var PlanningSession = mongoose.model('PlanningSession', planningSessionSchema);

// User model definition
var userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

var User = mongoose.model('User', userSchema);

// Module exports
module.exports.User = User;
module.exports.PlanningSession = PlanningSession;