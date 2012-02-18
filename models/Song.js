var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Song = new Schema({

  title: { type: 'String', trim: true, required: true },
  artist: { type: 'String', trim: true, required: true },
  art: { type: 'String', trim: true, required: true },
  song_ref: { type: 'String', trim: true, required: true },
  rating: { type: 'Integer' default: 1, required: true }

});


exports.Song = mongoose.model('Song', Song);