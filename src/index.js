const express = require("express");
const bodyParser = require("body-parser");
const getStudent = require("./models/getDataFromDB");
//const stuTable = require("./models/studentsModel");
const expressHbs = require("express-handlebars");
const path = require("path");
//helpers
const helpers = require("./views/helpers/helpers");
const ifEqual = helpers.ifEqual;
//

const app = express();

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: { ifEqual }
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(bodyParser.json());
//create a server object:
app.get("/", (req, res) => {
  res.render("home", {
    layout: "hero",
    pageTitle: "Home Page"
  });
});

app.get("/students", (req, res) => {
  const data = getStudent.getAllStudents();
  data
    .then(result => {
      res.status(200).send(JSON.stringify(result, null, 2));
    })
    .catch(err => {
      console.log(err);
    });
});
// stuTable
//   .findAll({ raw: true })
//   .then(
//   .catch(err => {
//     res.status(400);
//   });
//});

app.get("/web/students", (req, res) => {
  res.render("students", {
    layout: "navigation",
    pageTitle: "Students"
  });
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
