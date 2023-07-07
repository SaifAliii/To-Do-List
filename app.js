const express = require("express");
const bodyParser = require("body-parser");

var items = [];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var today = new Date();
  var day = today.toLocaleString("en-US", options);
  res.render("list", { day: day, items: items });
});

app.post("/", function (req, res) {
  var item = req.body.item;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running");
});
