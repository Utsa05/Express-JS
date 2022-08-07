var express = require("express");
var port = 8000;

app = express();


app.get('/', function (req, res) {

    let firstName = req.header("firstName");
    let lastName = req.header("lastName");
    res.end(firstName + " " + lastName);


});



app.listen(port, function () {

    console.log("Server Run");

})