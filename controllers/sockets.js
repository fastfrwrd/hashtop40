module.exports = function(app) {

  app.socket.on('connection', function(socket) {
    
    //console.log('asdf\n');
    // emit all tracks on connection
    //socket.emit('tweet:all', { tracks: [] })

  });

};
