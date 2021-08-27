const controller = require("./app/controllers/tutorial.controller");

module.exports = async () => {
    const tut1 = await controller.createTutorial({
    title: "Tut#1",
    description: "Tut#1 Description",
  });
  /*
  >> Created tutorial: {
      "id": 1,
      "title": "Tut#1",
      "description": "Tut#1 Description",     
      "updatedAt": "2020-04-14T09:49:14.021Z",
      "createdAt": "2020-04-14T09:49:14.021Z" 
  }
  */
  
  const tut2 = await controller.createTutorial({
    title: "Tut#2",
    description: "Tut#2 Description",
  });
  /*
  >> Created tutorial: {
      "id": 2,
      "title": "Tut#2",
      "description": "Tut#2 Description",
      "updatedAt": "2020-04-14T09:49:14.052Z",
      "createdAt": "2020-04-14T09:49:14.052Z"
  }
  */
  
  
  //Create Comments
  
  const comment1 = await controller.createComment(tut1.id, {
    name: "bezkoder",
    text: "Good job!",
  });
  /*
  >> Created comment: {
      "id": 1,
      "name": "bezkoder",
      "text": "Good job!",
      "tutorialId": 1,
      "updatedAt": "2020-04-14T09:49:14.071Z",
      "createdAt": "2020-04-14T09:49:14.071Z"
  }
  */
  
  await controller.createComment(tut1.id, {
    name: "zkoder",
    text: "One of the best tuts!",
  });
  /*
  >> Created comment: {
      "id": 2,
      "name": "zkoder",
      "text": "One of the best tuts!",
      "tutorialId": 1,
      "updatedAt": "2020-04-14T09:49:14.081Z",
      "createdAt": "2020-04-14T09:49:14.081Z"
  }
  */
  
  const comment2 = await controller.createComment(tut2.id, {
    name: "aKoder",
    text: "Hi, thank you!",
  });
  /*
  >> Created comment: {
      "id": 3,
      "name": "aKoder",
      "text": "Hi, thank you!",
      "tutorialId": 2,
      "updatedAt": "2020-04-14T09:49:14.855Z",
      "createdAt": "2020-04-14T09:49:14.855Z"
  }
  */
  
  await controller.createComment(tut2.id, {
    name: "anotherKoder",
    text: "Awesome tut!",
  });
  /*
  >> Created comment: {
      "id": 4,
      "name": "anotherKoder",
      "text": "Awesome tut!",
      "tutorialId": 2,
      "updatedAt": "2020-04-14T09:49:15.478Z",
      "createdAt": "2020-04-14T09:49:15.478Z"
  }
  */
}
