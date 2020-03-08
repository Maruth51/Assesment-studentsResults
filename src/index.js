const express = require("express");
const bodyParser = require("body-parser");

const expressHbs = require("express-handlebars");
const path = require("path");
//routers
const studentRouter = require("./routers/student");
//helpers
const helpers = require("./views/helpers/helpers");
const ifEqual = helpers.ifEqual;
const formatIndex = helpers.formatIndex;
const checkPass = helpers.checkPass;
//

const app = express();

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: { ifEqual, formatIndex, checkPass }
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

//midddlewares
app.use(bodyParser.json());
app.use("/students", studentRouter);

//home page
app.get("/", (req, res) => {
  res.render("home", {
    layout: "hero",
    pageTitle: "Home Page"
  });
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
