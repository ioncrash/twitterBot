const TwitterPackage = require('twitter');
const secret = require('./secret.js');

var Twitter = new TwitterPackage(secret);

Twitter.post('statuses/update', {status: "I'm testing a thing!"},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
