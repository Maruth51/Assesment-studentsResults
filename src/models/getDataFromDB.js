//const assesDB = require("../config/config");
const stuTable = require("./studentsModel");
const marks = require("./marksModel");
//const { QueryTypes } = require("sequelize");
//const models = assesDB.models;
//const assesDB = require("../config/config");
function getAllStudents() {
  stuTable.hasOne(marks, { foreignKey: "id" });
  return stuTable.findAll({
    attributes: [["id", "studentId"], ["first_name", "firstName"]],
    include: [{ model: marks, required: true, attributes: ["maths"] }]
  });
  // .then(result => {
  //   console.log(result.map(ele => console.log(JSON.stringify(ele, null, 2))));
  // })
  // .catch(err => {
  //   console.log(err);
  // });
}

module.exports = { getAllStudents };
// assesDB
//   .query("SELECT * from marks", { type: QueryTypes.SELECT })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
