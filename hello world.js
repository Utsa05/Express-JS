var express = require("express");
var port = 8000;

app = express();

app.get("/", function (req, res) {

    res.send("Hello Express Js");
});

app.listen(port, function () {
    console.log("Server Runed");
});