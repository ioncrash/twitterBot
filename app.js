const TwitterPackage = require('twitter');
const secret = require('./secret.js');

// const secret = {
//   consumer_key: 'KeOXyzn7QykjYZdPN673frJBi',
//   consumer_secret: 'ly3oM5iJIrupKNNLlzgsittoIXi8ST8i9Bt2lrzXzyvTmW89Ro',
//   access_token_key: '1240017013-a3FfRLcSKu8YbCtBBnO1b5Q7NboKbNZeqyj32Uv',
//   access_token_secret: '5q6RrziQAn2Hxye4dYOvGFqC8Z471lLw4ldAP9uXhGXEG'
// };

var Twitter = new TwitterPackage(secret);

Twitter.post('statuses/update', {status: "I'm testing a thing!"},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
