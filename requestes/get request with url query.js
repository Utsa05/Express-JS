var express = require("express");
var port = 8000;

app = express();


app.get('/', function (req, res) {
    //get request url =>http://localhost:8000?pageNo=2&totalPage=300

    let pageNo = req.query.pageNo;
    let totalPage = req.query.totalPage;
    res.end(pageNo + " " + totalPage);


});



app.listen(port, function () {

    console.log("Server Run");

})