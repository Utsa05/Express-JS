var express = require("express");
var port = 8000;

app = express();


app.post('/', function (req, res) {


    res.send("Post Request");


});



app.listen(port, function () {

    console.log("Server Run");

})