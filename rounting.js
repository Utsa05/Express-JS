var express = require("express");
var port = 8000;

app = express();

app.get("/", function (req, res) {

    res.send("Hello Express Js");
});

app.post("/profile", function (req, res) {

    res.send("Hi from Profile");
});

app.put("/contact", function (req, res) {

    res.send("Hi from Contact");
});

app.delete("/contact", function (req, res) {

    res.send("Hi from Contact");
});



app.listen(port, function () {
    console.log("Server Runed");
});