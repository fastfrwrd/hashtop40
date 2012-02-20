var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Song = new Schema({

  title: { type: String, trim: true, required: true },
  artist: { type: String, trim: true, required: true },
  img: { type: String, trim: true, required: false },
  url: { type: String, trim: true, required: true },
  rating: { type: Number, default: 1, required: true }

});

Song.statics.create = function(data, callback) {
  var self = this;
  self.findOne({ title: data.title, artist: data.artist }, function(err, song) {
    if(err) {
      return callback('Error looking up song');
    }
    else if(!song) {
      var newSong = new self(data);
      newSong.save(function(err) {
        if(err) return callback('Error saving new song');
        return callback(null, newSong);
      });
    }
    else {
      song.rating += 1;
      song.save(function(err) {
        if(err) return callback('Error saving song');
        return callback(null, song);
      })
    }
  });
};


exports.Song = mongoose.model('Song', Song);