const sequelize = require("sequelize");

const db = new sequelize(process.env.DB_URL);

db.authenticate()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => {
    console.log("connection failed");
    console.error(err);
  });

module.exports = db;
