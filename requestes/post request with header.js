var express = require("express");
var port = 8000;

app = express();


app.post('/', function (req, res) {

    let userName = req.header("userName");
    let password = req.header("password");
    res.send("User Name:" + userName + " Password:" + password);

});



app.listen(port, function () {

    console.log("Server Run");

})