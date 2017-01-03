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
    statusUpdate("and he's feelin' goooooood");
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
