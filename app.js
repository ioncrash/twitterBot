'use strict';

const TwitterPackage = require('twitter');
const secret = require('./secret.js');

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

Twitter.stream('statuses/filter', {track: '#honkeyTonkFlounder'}, function(stream) {
  stream.on('data', function(tweet) {
    let username = "@" + tweet.user.screen_name;
    statusUpdate("and he's feelin' goooooood " + username);
    // console.log("and he's feelin' goooooood " + username);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
