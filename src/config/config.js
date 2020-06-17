const sequelize = require("sequelize");

const db = new sequelize(
  process.env.DB_URL ||
    "postgres://afxopwln:9bK5EyE7v4csiHSObCKLVhSlejh-cgA8@drona.db.elephantsql.com:5432/afxopwln"
);

db.authenticate()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => {
    console.log("connection failed");
    console.error(err);
  });

module.exports = db;
