module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    name: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "comentarios",
    schema: "admin"
  });

  return Comment;
};