var express = require("express");
var port = 8000;

app = express();


app.get('/create', function (req, res) {

    res.redirect("http://localhost:8000/home");

});

app.get('/home', function (req, res) {

    res.send("Welcom To Home");

});

app.listen(port, function () {

    console.log("Server Run");

})