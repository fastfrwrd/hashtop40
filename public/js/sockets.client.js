var socket = io.connect('http://localhost');

socket.on('connect', function() {
	socket.emit('tweet:all', function(data) {
		console.log(data);
	});
});