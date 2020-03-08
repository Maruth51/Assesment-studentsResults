const Sequelize = require("sequelize");
const assesmentDB = require("../config/config");

const students = assesmentDB.define("students_info", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    field: "first_name",
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    field: "last_name",
    allowNull: false
  },
  gender: {
    type: Sequelize.CHAR,
    values: ["F", "M", "f", "m"],
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});

students
  .sync({ force: false })
  .then(() => {
    console.log("Students table synced");
  })
  .catch(err => {
    console.log("sync unsuccessfull", err);
  });

module.exports = students;
