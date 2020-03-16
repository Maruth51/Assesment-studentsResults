const ifEqual = (a, b) => {
  if (a === b) {
    return true;
  } else return false;
};

const toTitleCase = str => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
const formatIndex = index => index + 1;

const checkPass = score => {
  if (parseInt(score, 10) < 35) {
    return "e81313";
  } else return "f2f5f7";
};
const convert = unixtimestamp => {
  var months_arr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  // Convert timestamp to milliseconds
  var date = new Date(parseInt(unixtimestamp, 10) * 1000);

  // Year
  var year = date.getFullYear();

  // Month
  var month = months_arr[date.getMonth()];

  // Day
  var day = date.getDate();

  // Hours
  var hours = date.getHours();

  // Minutes
  var minutes = "0" + date.getMinutes();

  // Seconds
  var seconds = "0" + date.getSeconds();

  // Display date time in MM-dd-yyyy h:m:s format
  var convdataTime =
    month +
    "-" +
    day +
    "-" +
    year +
    " " +
    hours +
    ":" +
    minutes.substr(-2) +
    ":" +
    seconds.substr(-2);
  return convdataTime;
};
function toCelcius(valNum) {
  return ((valNum - 32) / 1.8).toFixed(2);
}
module.exports = {
  ifEqual,
  toTitleCase,
  formatIndex,
  checkPass,
  convert,
  toCelcius
};
