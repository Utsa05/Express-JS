var express = require("express");
var port = 8000;

app = express();


app.get('/download', function (req, res) {



    res.download("./images/laptop.jpg");

});

app.listen(port, function () {

    console.log("Server Run");

})