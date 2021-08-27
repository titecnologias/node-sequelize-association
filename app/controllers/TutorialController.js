const db = require("../models/start.models");
const Tutorial = db.tutorials;


module.exports = {
  //Create and Save new Tutorials

  async createTutorial(tutorial) {
    return await Tutorial.create({
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

  //Get the comments for a given tutorial

  async findTutorialById(tutorialId) {
    return await Tutorial.findByPk(tutorialId, { include: ["comments"] })
      .then((tutorial) => {
        return tutorial;
      })
      .catch((err) => {
        console.log(">> Error while finding tutorial: ", err);
      });
  },

  //Get all Tutorials include comments

  async findAll() {
    return await Tutorial.findAll({
      include: ["comments"],
    }).then((tutorials) => {
      return tutorials;
    });
  },
};