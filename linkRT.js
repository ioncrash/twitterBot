'use strict';

const TwitterPackage = require('twitter');
const secret = require('./prezSecret.js');

var Twitter = new TwitterPackage(secret);

const statusUpdate = function(text) {
  Twitter.post('statuses/update', {status: text}, function(error, tweet, response){
    if(error){
      console.log(error);
    }
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
};

Twitter.stream('statuses/filter', {follow: '816358436120264704'}, function(stream) {
  stream.on('data', function(tweet) {
    if (tweet.entities.urls.length > 0) {
      // statusUpdate("RT @" + tweet.user.screen_name + " " + tweet.text);
      let username = "@" + tweet.user.screen_name;
      let newTweet = "RT " + username + " " + tweet.text;
      statusUpdate(newTweet);
    }

    // statusUpdate("@ioncrash oh yeah???");
    // console.log("and he's feelin' goooooood " + username);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
