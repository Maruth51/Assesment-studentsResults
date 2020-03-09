const { QueryTypes } = require("sequelize");
const db = require("../config/config");
async function getAllStudents() {
  try {
    return await db.query(
      "select A.id as id ,A.first_name as firstName ,A.last_name as lastname, B.maths,B.physics, chemistry,biology,english,maths+physics+chemistry+english+biology as Total from Students A inner join marks b on A.id = B.id order by id",
      {
        type: QueryTypes.SELECT
      }
    );
  } catch (e) {
    return false;
  }
}
async function getMaxMarks(sub) {
  try {
    return await db.query(
      `select students.id,first_name,${sub} from students inner join marks on students.id = marks.id where ${sub} in (select max(${sub}) from marks)`
    );
  } catch (e) {
    console.log("some error ocurred");
  }
}
async function getAvgMarks() {
  try {
    return await db.query(
      "select 'maths' as sub, round(avg(maths),2) as avg from marks union select 'physics' as sub,round(avg(physics),2) as avg from marks union select 'chemistry' as sub, round(avg(chemistry),2) as avg from marks union select 'english' as sub,round(avg(english),2) as avg from marks union select 'biology' as sub, round(avg(biology),2) as avg from marks;"
    );
  } catch (e) {
    console.log("some error ocurred in get average marks query");
  }
}

async function getFailCount() {
  try {
    return await db.query(
      "select 'maths' as sub, count(maths) from marks where maths < 35 union select 'physics' as sub,count(physics) from marks where physics < 35 union select 'chemistry' as sub, count(chemistry)  from marks where chemistry < 35 union select 'english' as sub,count(english) from marks where english < 35 union select 'biology' as sub, count(biology) from marks where biology < 35"
    );
  } catch (e) {
    console.log("some error ocurred in Fail Count query", e);
  }
}

module.exports = { getAllStudents, getMaxMarks, getAvgMarks, getFailCount };
