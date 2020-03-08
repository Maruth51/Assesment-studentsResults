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

module.exports = { ifEqual, toTitleCase, formatIndex, checkPass };
