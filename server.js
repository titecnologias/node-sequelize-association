const db = require("./app/models/start.models");

const populate = require("./populate");
// create ou init tables
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
 // populate();
});