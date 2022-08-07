var express = require("express");
var port = 8000;

app = express();


app.get('/users', function (req, res) {

    res.append("name", "John");
    res.append("age", "54");
    res.append("city", "USA");
    res.status(200).send("Hi").end(); 

});



app.listen(port, function () {

    console.log("Server Run");

})