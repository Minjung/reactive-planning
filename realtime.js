var primus = module.parent.exports.primus;
var model = module.parent.exports.model; 

primus.on('connection', function(spark) {
    console.log("--- io.sockets.on connection");
    
    spark.on('hello', function() {
        spark.write('hola', "hola mundo");
    });
});