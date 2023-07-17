const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html")
});

app.post("/", function (request, response) {
    var num1 = Number(request.body.num1); // Convert string to number
    var num2 = Number(request.body.num2); // Convert string to number

    var result = num1 + num2;
    response.send("The result of the calculation is " + result);
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});