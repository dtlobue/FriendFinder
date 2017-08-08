let friends = require('../data/friends.js');

module.exports = app => {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });

  app.post('/api/friends', (req, res) => {
    //handle incoming survey results
    //handle compatibility logic
    let friendMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    let userData = req.body;
    let userScores = userData.scores;

    let totalDifference;

    for (var i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      for (var j = 0; j < currentFriend.scores.length; j++) {
        let currentFriendScore = currentFriend.scores[j];
        let currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDifference <= friendMatch.friendDifference) {
        friendMatch.name = currentFriend.name;
        friendMatch.photo = currentFriend.photo;
        friendMatch.friendDifference = totalDifference;
      }
    }

    
};
