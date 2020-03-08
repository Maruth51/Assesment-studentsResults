//with out any
var SequelizeAuto = require("sequelize-auto");
var auto = new SequelizeAuto(process.env.DB_URL);

auto.run(function(err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
