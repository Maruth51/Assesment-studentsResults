const express = require("express");
const bodyParser = require("body-parser");
const DarkSky = require("dark-sky");
const moment = require("moment");
const expressHbs = require("express-handlebars");
const path = require("path");

//routers
const studentRouter = require("./routers/student");

//helpers
const helpers = require("./views/helpers/helpers");
const ifEqual = helpers.ifEqual;
const formatIndex = helpers.formatIndex;
const checkPass = helpers.checkPass;
const toTitleCase = helpers.toTitleCase;
const convert = helpers.convert;
const toCelcius = helpers.toCelcius;
//

const app = express();

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: { ifEqual, formatIndex, checkPass, toTitleCase, convert, toCelcius }
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

//DarkSky Api
const darksky = new DarkSky(process.env.DS_URL);
app.get("/weather", async (req, res) => {
  try {
    const forecast = await darksky
      .options({
        latitude: "13.08784",
        longitude: "80.27847",
        exclude: ["minutely", "hourly"]
        //time: moment()
      })
      .get();
    res.render("weatherReport", {
      layout: "hero",
      pageTitle: "Weather Forecast",
      current: forecast.currently,
      daily: forecast.daily.data
    });
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
