const db = require("../models/start.models");
const Tutorial = db.tutorials;
const Comment = db.comments;

//Create and Save new Tutorials
module.exports = {
  async createTutorial(tutorial) {
  await Tutorial.create({
    title: tutorial.title,
    description: tutorial.description,
  })
    .then((tutorial) => {
      console.log(">> Created tutorial: " + JSON.stringify(tutorial, null, 4));
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while creating tutorial: ", err);
    });
},

//Create and Save new Comments

async createComment(tutorialId, comment) {
  await Comment.create({
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

//Get the comments for a given tutorial

async findTutorialById(tutorialId) {
  await Tutorial.findByPk(tutorialId, { include: ["comments"] })
    .then((tutorial) => {
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while finding tutorial: ", err);
    });
},

//Get the comments for a given comment id

async findCommentById(id) {
  await Comment.findByPk(id, { include: ["tutorial"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
    });
},

//Get all Tutorials include comments

async findAll() {
  await Tutorial.findAll({
    include: ["comments"],
  }).then((tutorials) => {
    return tutorials;
  });
},
};