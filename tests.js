const controller = require("./app/controllers/tutorial.controller");

module.exports = async () => {
  const tut1Data = await controller.findTutorialById(id);
  console.log(
    ">> Tutorial id=" + tut1Data.id,
    JSON.stringify(tut1Data, null, 2)
  );
  /*
  >> Tutorial id=1 {
    "id": 1,
    "title": "Tut#1",
    "description": "Tut#1 Description",
    "createdAt": "2020-04-14T09:49:14.000Z",
    "updatedAt": "2020-04-14T09:49:14.000Z",
    "comments": [
      {
        "id": 1,
        "name": "bezkoder",
        "text": "Good job!",
        "createdAt": "2020-04-14T09:49:14.000Z",
        "updatedAt": "2020-04-14T09:49:14.000Z",
        "tutorialId": 1
      },
      {
        "id": 2,
        "name": "zkoder",
        "text": "One of the best tuts!",
        "createdAt": "2020-04-14T09:49:14.000Z",
        "updatedAt": "2020-04-14T09:49:14.000Z",
        "tutorialId": 1
      }
    ]
  }
  */

  const tut2Data = await controller.findTutorialById(tut2.id);
  console.log(
    ">> Tutorial id=" + tut2Data.id,
    JSON.stringify(tut2Data, null, 2)
  );
  /*
  >> Tutorial id=2 {
    "id": 2,
    "title": "Tut#2",
    "description": "Tut#2 Description",
    "createdAt": "2020-04-14T09:49:14.000Z",
    "updatedAt": "2020-04-14T09:49:14.000Z",
    "comments": [
      {
        "id": 3,
        "name": "aKoder",
        "text": "Hi, thank you!",
        "createdAt": "2020-04-14T09:49:14.000Z",
        "updatedAt": "2020-04-14T09:49:14.000Z",
        "tutorialId": 2
      },
      {
        "id": 4,
        "name": "anotherKoder",
        "text": "Awesome tut!",
        "createdAt": "2020-04-14T09:49:15.000Z",
        "updatedAt": "2020-04-14T09:49:15.000Z",
        "tutorialId": 2
      }
    ]
  }
  */

  //Get Comment by given id

  const comment1Data = await controller.findCommentById(comment1.id);
  console.log(
    ">> Comment id=" + comment1.id,
    JSON.stringify(comment1Data, null, 2)
  );
  /*
  >> Comment id=1 {
    "id": 1,
    "name": "bezkoder",
    "text": "Good job!",
    "createdAt": "2020-04-14T09:49:14.000Z",
    "updatedAt": "2020-04-14T09:49:14.000Z",
    "tutorialId": 1,
    "tutorial": {
      "id": 1,
      "title": "Tut#1",
      "description": "Tut#1 Description",
      "createdAt": "2020-04-14T09:49:14.000Z",
      "updatedAt": "2020-04-14T09:49:14.000Z"
    }
  }
  */

  const comment2Data = await controller.findCommentById(comment2.id);
  console.log(
    ">> Comment id=" + comment2.id,
    JSON.stringify(comment2Data, null, 2)
  );
  /*
  >> Comment id=3 {
    "id": 3,
    "name": "aKoder",
    "text": "Hi, thank you!",
    "createdAt": "2020-04-14T09:49:14.000Z",
    "updatedAt": "2020-04-14T09:49:14.000Z",
    "tutorialId": 2,
    "tutorial": {
      "id": 2,
      "title": "Tut#2",
      "description": "Tut#2 Description",
      "createdAt": "2020-04-14T09:49:14.000Z",
      "updatedAt": "2020-04-14T09:49:14.000Z"
    }
  }
  */

  //Get all Tutorials

  const tutorials = await controller.findAll();
  console.log(">> All tutorials", JSON.stringify(tutorials, null, 2));
  /*
  >> All tutorials [
    {
      "id": 1,
      "title": "Tut#1",
      "description": "Tut#1 Description",
      "createdAt": "2020-04-14T09:49:14.000Z",
      "updatedAt": "2020-04-14T09:49:14.000Z",
      "comments": [
        {
          "id": 1,
          "name": "bezkoder",
          "text": "Good job!",
          "createdAt": "2020-04-14T09:49:14.000Z",
          "updatedAt": "2020-04-14T09:49:14.000Z",
          "tutorialId": 1
        },
        {
          "id": 2,
          "name": "zkoder",
          "text": "One of the best tuts!",
          "createdAt": "2020-04-14T09:49:14.000Z",
          "updatedAt": "2020-04-14T09:49:14.000Z",
          "tutorialId": 1
        }
      ]
    },
    {
      "id": 2,
      "title": "Tut#2",
      "description": "Tut#2 Description",
      "createdAt": "2020-04-14T09:49:14.000Z",
      "updatedAt": "2020-04-14T09:49:14.000Z",
      "comments": [
        {
          "id": 3,
          "name": "aKoder",
          "text": "Hi, thank you!",
          "createdAt": "2020-04-14T09:49:14.000Z",
          "updatedAt": "2020-04-14T09:49:14.000Z",
          "tutorialId": 2
        },
        {
          "id": 4,
          "name": "anotherKoder",
          "text": "Awesome tut!",
          "createdAt": "2020-04-14T09:49:15.000Z",
          "updatedAt": "2020-04-14T09:49:15.000Z",
          "tutorialId": 2
        }
      ]
    }
  ]
  */
}