'use strict';

const TwitterPackage = require('twitter');
const secret = require('./timedSecret.js');

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

let keyWord = 'cute';

// listen for anyone tweeting at the bot
Twitter.stream('statuses/filter', {track: '@catFriendFinder'}, function(stream) {
  stream.on('data', function(tweet) {
    // when the tweet happens, update keyWord to the last word of the last @
    let words = tweet.text.split(' ');
    keyWord = words[words.length-1];

  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

const retweet = function() {
    let params = {
      // "term1 term2" is an AND search, filter:media returns only image and video tweets
        q: "cat " + keyWord + " filter:media",  // REQUIRED
        result_type: 'mixed',
        lang: 'en'
    }
    // for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets

    Twitter.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            let statuses = data.statuses;
            let target = data.statuses.find((e) => {
              return e.text.includes('cat');
            });
            let retweetId = '';
            if (target) {
              retweetId = target.id_str;
            }
            // Tell TWITTER to retweet
            Twitter.post('statuses/retweet/' + retweetId, {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                }
                // if there was an error while tweeting
                else if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
};

retweet();
// retweet in every 50 minutes
setInterval(retweet, 300000);
