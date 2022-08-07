var express = require("express");
const multer = require("multer");
var port = 8000;


var Multer = multer();
app = express();

app.use(Multer.array());
app.use(express.static('public'));
app.post('/', function (req, res) {

    let reqBody = req.body;
    let jsonString = JSON.stringify(reqBody);
    res.send(jsonString);

});



app.listen(port, function () {

    console.log("Server Run");

})