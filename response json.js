var express = require("express");
var port = 8000;

app = express();


app.get('/', function (req, res) {

    let users =
        [
            {
                name: "John Smith",
                age: 46,
                country: "USA"

            },
            {
                name: "Marry Smith",
                age: 36,
                country: "USA"

            },

            {
                name: "Prantik",
                age: 5,
                country: "Bangladesh"

            },

            {
                name: "Utsa",
                age: 22,
                country: "Bangladesh"

            },
        ];

    res.json(users).end();

});

app.listen(port, function () {

    console.log("Server Run");

})