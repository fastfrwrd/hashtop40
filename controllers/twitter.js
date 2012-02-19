var Song = require('../models').Song,
      Twitter = require('ntwitter'),
      LastFMNode = require('lastfm').LastFmNode;


module.exports = function(app) {

  var twitter = new Twitter({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
  });

  twitter.stream('statuses/filter', { track: '#spotify' }, function(stream) {
    stream.on('data', function (data) {
      var body = data.text;

      var tweet = body ? body.match(/^#nowplaying ([^\–]+) – ([^\–]+) on #Spotify[\s]?(.+)$/i) : false;

      if(tweet && tweet.length > 3) {
        QueryLastFM(tweet[1], tweet[2], function(err, data) {
          if(err) {
            console.log('ERROR: ' + err.message);
          }
          else {
            //Save the song in the db
            var obj = {
              title: data.track.name,
              artist: data.track.artist.name,
              url: data.track.url
            };
            if(data.track.album && data.track.album.image) {
              obj.img = data.track.album.image[0]['#text'];
            }
            else {
              obj.img = '/img/kitten.jpeg';
            }

            Song.create(obj, function(err, song) {
              if(song) {
                app.EventEmitter.emit('songs:refresh', song);
              }
            });
          }
        });
      }
    });
  });

};


function QueryLastFM(artist, title, callback) {
  var lastfm = new LastFMNode({
    api_key    : 'ed4a5a62952f9741457ff27aea2a4d6b',
    secret : '9f2d205135022a26172c4c32c6349e6d'
  });

  lastfm.request('track.getInfo', {
    artist: artist,
    track: title,
    handlers: {
      success: function(data) {
        console.log(data);
        return callback(null, data);
      },
      error: function(error) {
        console.log(error);
        return callback(error);
      }
    }
  });

}
