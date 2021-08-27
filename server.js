const db = require("./app/models/start.models");

const populate = require("./populate");

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  populate();
});