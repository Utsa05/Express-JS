var express = require("express");
var port = 8000;

app = express();


app.get('/cookie', function (req, res) {

    res.cookie("name", "John");
    res.cookie("age", "54");
    res.cookie("city", "USA");
    res.status(200);
    res.end("Cookie Set");

});



app.listen(port, function () {

    console.log("Server Run");

})