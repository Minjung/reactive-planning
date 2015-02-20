// connect to current URL
var primus = Primus.connect()

primus.on("open", function () {
    console.log("Connected!")
})

primus.on("hola", function (data) {
    console.log("data = ", data)
})