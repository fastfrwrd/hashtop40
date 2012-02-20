var socket = io.connect();

socket.on('connected', function() {
  socket.emit('connected');
});

socket.on('songs:refresh', function(data) {
	interactions.populateTracks(data);
});
