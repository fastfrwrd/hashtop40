var Song = require('../models').Song;


module.exports = function(app) {

  function EmitSongs(socket) {
    Song
    .find()
    .desc('rating', '_id')
    .limit(40)
    .run(function(err, songs) {
        if(!err && songs) {
            socket.emit('songs:refresh', songs);
        }
    });
  }

  app.socket.sockets.on('connection', function(sock) {

  //Bootstrap client
  sock.on('connected', function() {
    EmitSongs(sock);
  });

  app.EventEmitter.on('songs:refresh', function() {
    EmitSongs(sock);
  });

});

};
