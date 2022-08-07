var express = require("express");
var port = 8000;

app = express();


app.get('/clearCookie', function (req, res) {


    res.clearCookie("name");
    res.clearCookie("age");
    res.clearCookie("city");
    res.end("Clear Cookie");

});



app.listen(port, function () {

    console.log("Server Run");

})