const models = require("../config/db");

models.sequelize.createSchema('admin').then(() => {});

//
models.tutorials = require("./tutorial.model")(models.sequelize, models.Sequelize);
models.comments = require("./comment.model")(models.sequelize, models.Sequelize);

//start associations
//associate 1-N
models.tutorials.hasMany(models.comments, { as: "comments" });
models.comments.belongsTo(models.tutorials, {
  foreignKey: "tutorialId",
  as: "tutorial",
});

module.exports = models;