var express = require("express");
const multer = require("multer");
var port = 8000;
app = express();

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single("myfile");

app.post("/", function (req, res) {
    upload(req, res, function (error) {
        if (error) {
            res.send("error");
        } else {
            res.send("File Upload");
        }
    });

})



app.listen(port, function () {

    console.log("Server Run");

})