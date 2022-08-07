var express = require("express");
var bodyParser = require("body-parser");
var port = 8000;

app = express();

app.use(bodyParser.json());
app.post('/', function (req, res) {

    let jsonData = req.body;
    //let jsonString = JSON.stringify(jsonData);
    let name=jsonData['name'];
    let age = jsonData['age'];
    res.send(name + "\n"+age);

});



app.listen(port, function () {

    console.log("Server Run");

})