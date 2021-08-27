const db = require("../models/start.models");
const Comment = db.comments;

module.exports = {
//Create and Save new Comments

async createComment(tutorialId, comment) {
  return await Comment.create({
    name: comment.name,
    text: comment.text,
    tutorialId: tutorialId,
  })
    .then((comment) => {
      console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
},

//Get the comments for a given comment id

async findCommentById(id) {
  return await Comment.findByPk(id, { include: ["tutorial"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
    });
},
};