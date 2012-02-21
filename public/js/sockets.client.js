var socket = io.connect();

//socket.on('connect', function() {
//  socket.emit('connect');
//});

socket.on('songs:refresh', function(data) {
	interactions.populateTracks(data);
});
