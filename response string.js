var express = require("express");
var port = 8000;

app = express();


app.get('/', function (req, res) {

    res.send("This is String Reponse")

});

app.listen(port, function () {

    console.log("Server Run");

})