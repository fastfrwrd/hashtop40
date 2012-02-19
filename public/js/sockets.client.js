var socket = io.connect();

socket.on('songs:refresh', function(data) {
	interactions.populateTracks(data);
});
