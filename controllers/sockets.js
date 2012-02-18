module.exports = function(socket) {

  socket.sockets.on('connection', function(sock) {
    
    var tracks = { 
      tracks: [
        { 
          '4VRLGNMTfymoYzD4dLAsNb': {
            'songname':'Somebody That I Used To Know',
            'artistname':'Gotye',
            'coverimage':'http://placekitten.com/100/100',
          }
        },
        //more tracks. in order of rank
      ]
    };

    sock.emit('tweets:all', tracks);

  })

};
