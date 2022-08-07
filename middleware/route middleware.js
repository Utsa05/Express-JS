var express = require("express");
var port = 8080;

app = express();;

app.use("/contact", function (req, res, next) {
    console.log("I am Contact Middleware");
    next();
})

app.get('/', function (req, res) {
    res.send("Home");
})

app.get('/contact', function (req, res) {
    res.send("Contact");
})


app.get('/profile', function (req, res) {
    res.send("Profile");
})
app.listen(port, function () {
    console.log("Server run");
});