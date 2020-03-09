const queryDB = require("../models/queryDB");
const studentRouter = require("express").Router();

studentRouter
  .get("/", (req, res) => {
    const result = queryDB.getAllStudents();
    result
      .then(data => {
        console.log(data);
        res.render("studentMarks", {
          layout: "navigationbar",
          pageTitle: "student Marks",
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
      const [maths, matMetadata] = await queryDB.getMaxMarks("maths");
      const [physics, phyMetadata] = await queryDB.getMaxMarks("physics");
      const [chemistry, cheMetadata] = await queryDB.getMaxMarks("chemistry");
      const [english, engMetadata] = await queryDB.getMaxMarks("english");
      const [biology, bioMetadata] = await queryDB.getMaxMarks("biology");
      // average marks
      const [avgEachSub, avgMetadata] = await queryDB.getAvgMarks();
      const [failCount, failMetadata] = await queryDB.getFailCount();
      studentMaxMarks = {
        maths: maths[0],
        physics: physics[0],
        chemistry: chemistry[0],
        english: english[0],
        biology: biology[0],
        avgEachSub,
        failCount
      };
      res.send(studentMaxMarks);
    } catch (e) {
      res.status(400).send(e);
    }
  });

module.exports = studentRouter;
