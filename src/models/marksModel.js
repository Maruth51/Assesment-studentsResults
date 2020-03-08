const Sequelize = require("sequelize");
const assesmentDB = require("../config/config");

const marks = assesmentDB.define("Mark", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: { model: "students_infos", Key: "id" }
  },
  maths: {
    type: Sequelize.STRING,
    allowNull: false
  },
  physics: {
    type: Sequelize.STRING,
    allowNull: false
  },
  chemistry: {
    type: Sequelize.STRING,
    allowNull: false
  },
  english: {
    type: Sequelize.STRING,
    allowNull: false
  },
  biology: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

marks
  .sync({ force: false })
  .then(() => {
    console.log("marks table synced");
  })
  .catch(err => {
    console.log("marks sync unsuccessfull", err);
  });

module.exports = marks;
