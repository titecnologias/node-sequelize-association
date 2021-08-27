const db = require("./app/config/db");

const populate = require('./populate');
const tests = require('./tests');

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  populate();
  tests();
});