const queryDB = require("../models/queryDB");
const studentRouter = require("express").Router();

studentRouter
  .get("/", (req, res) => {
    const result = queryDB.getStudentInfo();
    result
      .then(data => {
        console.log(data);
        res.render("studentInfo", {
          layout: "navigationbar",
          pageTitle: "Student Details",
          students: data
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).send("Server Unavailable");
      });
  })
  .get("/rankings", async (req, res) => {
    try {
      let studentMaxMarks = {};
      const students = await queryDB.getAllStudents();
      const [maths, matMetadata] = await queryDB.getMaxMarks("maths");
      maths[0]["subject"] = "maths";
      const [physics, phyMetadata] = await queryDB.getMaxMarks("physics");
      const [chemistry, cheMetadata] = await queryDB.getMaxMarks("chemistry");
      const [english, engMetadata] = await queryDB.getMaxMarks("english");
      const [biology, bioMetadata] = await queryDB.getMaxMarks("biology");
      english[0]["subject"] = "english";
      physics[0]["subject"] = "Physics";
      chemistry[0]["subject"] = "chemistry";
      biology[0]["subject"] = "biology";
      // average marks
      let [avgEachSub, avgMetadata] = await queryDB.getAvgMarks();
      let [failCount, failMetadata] = await queryDB.getFailCount();
      //avgEachSub = conJson(avgEachSub);
      //failCount = conJson(failCount);
      studentMaxMarks = [
        maths[0],
        physics[0],
        chemistry[0],
        english[0],
        biology[0]
      ];
      res.render("studentReport", {
        layout: "navigationbar",
        pageTitle: "Exam Report",
        students,
        studentMaxMarks,
        avgEachSub,
        failCount
      });
    } catch (e) {
      res.status(400).send(e);
    }
  });

function conJson(obj) {
  var newobj = {};
  obj.forEach(ele => {
    let [sub, value] = Object.keys(ele);
    sub = ele.sub;
    Object.assign(newobj, { [sub]: ele[value] });
  });
  console.log(newobj);
  return newobj;
}
module.exports = studentRouter;
