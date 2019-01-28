var friendsArray = [{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
      "name": "Ja Rule",
      "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores": [
          4,
          2,
          4,
          3,
          1,
          4,
          3,
          5,
          2,
          2
      ]
  },
  {
    "name": "Lupe",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        2,
        2,
        4,
        3,
        5,
        4,
        3,
        5,
        3,
        2
    ]
},
{
    "name": "Jenny",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        4,
        4,
        3,
        3,
        4,
        3,
        5,
        2,
        5
    ]
}
]; 

//   compatibleArray = []

//   function compatibilaty (user) {
//       var bestMatch = 0;
//       var bestObject;

//       for (i = 0; i < friendsArray.length; i++){
//           var matchDifference = 0;
//           for (var j = 0; j < friendsArray[i]; j++) {
//             matchDifference += Math.abs(friendsArray[i].scores[j] - user.scores[j]); 
//           }
//           if (bestMatch < matchDifference || bestMatch === null) {
//               bestMatch = matchDifference;
//               bestObject = friendsArray[i];
//           }
//       }
//       return bestObject;
//   }

  module.exports = friendsArray ;