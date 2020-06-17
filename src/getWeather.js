const axios = require("axios").default;
const url = `https://api.darksky.net/forecast/${process.env.DarkSky ||
  "4b62494295a703fbf86168b84aa123e3"}/37.8267,-122.4233`;

axios
  .get(url)
  .then(result => console.log(result))
  .catch(err => console.log(err));
