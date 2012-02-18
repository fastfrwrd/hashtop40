module.exports = function(app) {

  var Song = require('../models').Song,
      Twitter = require('ntwitter');

  var twitter = new Twitter({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
  });

  twitter.stream('statuses/filter', { track: '#spotify' }, function(stream) {
    stream.on('data', function (data) {
      console.log(data.text);
    });
  });

};