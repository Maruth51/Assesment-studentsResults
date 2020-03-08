const sequelize = require("sequelize");

const assesmentDB = new sequelize(process.env.DB_URL);

assesmentDB
  .authenticate()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => {
    console.log("connection failed");
    console.error(err);
  });

module.exports = assesmentDB;
