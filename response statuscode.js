var express = require("express");
var port = 8000;

app = express();


app.get('/', function (req, res) {

    res.status(401).end("Unauthorize ):");

});

app.listen(port, function () {

    console.log("Server Run");

})