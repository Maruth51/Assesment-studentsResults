//const assesDB = require("../config/config");
//const stuTable = require("./studentsModel");
//onst marks = require("./marksModel");
const { QueryTypes } = require("sequelize");
const db = require("../config/config");
async function getAllStudents() {
  try {
    const result = await db.query(
      "select A.id as id ,A.first_name as firstName ,A.last_name as lastname, B.maths,B.physics, chemistry,biology,english,maths+physics+chemistry+english+biology as Total from Students A inner join marks b on A.id = B.id order by id",
      {
        type: QueryTypes.SELECT
      }
    );
    return result;
  } catch (e) {
    return false;
  }
}
module.exports = { getAllStudents };
