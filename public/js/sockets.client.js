var socket = io.connect('http://localhost');

socket.on('songs:refresh', function(data) {
	interactions.populateTracks(data);
});