const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var Day = "";
  if (currentDay == 0) {
    Day = "Sunday";
  } else if (currentDay == 1) {
    Day = "Monday";
  } else if (currentDay == 2) {
    Day = "Tuesday";
  } else if (currentDay == 3) {
    Day = "Wednesday";
  } else if (currentDay == 4) {
    Day = "Thursday";
  } else if (currentDay == 5) {
    Day = "Friday";
  } else {
    var Day = "Saturday";
  }
  res.render("list", { kindOfDay: Day });
});

app.listen(3000, function () {
  console.log("Server is running");
});
