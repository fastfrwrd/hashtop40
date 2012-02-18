var socket = io.connect('http://localhost');

socket.on('tweets:all', function(data) {
	interactions.populateTracks(data.tracks);
});

socket.on('tweets:update', function(data) {
	interactions.updateTracks(data.tracks);
});