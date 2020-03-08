const queryDB = require("../models/queryDB");
const studentRouter = require("express").Router();

studentRouter.get("/", (req, res) => {
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
});

module.exports = studentRouter;
