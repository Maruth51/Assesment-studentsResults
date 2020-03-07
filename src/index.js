const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
//create a server object:

app.get("/", (req, res) => {
  res.render("home", {
    layout: "hero",
    pageTitle: "Home"
  });
});

app.get("/web/students", (req, res) => {
  res.render("students", {
    layout: "navigation",
    pageTitle: "Students",
    students
  });
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
