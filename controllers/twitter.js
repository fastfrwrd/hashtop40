module.exports = function(app) {

  var Song = require('../models').Song
  //     Twitter = require('ntwitter');

  // var twitter = new Twitter({
  //   consumer_key: process.env.TWITTER_KEY,
  //   consumer_secret: process.env.TWITTER_SECRET,
  //   access_token_key: process.env.TWITTER_TOKEN_KEY,
  //   access_token_secret: process.env.TWITTER_TOKEN_SECRET
  // });

  // twitter.stream('statuses/filter', { track: '#spotify' }, function(stream) {
  //   stream.on('data', function (data) {
  //     var body = data.text;

  //     tweet = body ? body.match(/^#nowplaying ([^\–]+) – ([^\–]+) on #Spotify[\s]?(.+)$/i) : false;

  //     if(tweet && tweet.length > 2) {
  //       console.log(tweet[1]);
  //     }
  //   });
  // });

};