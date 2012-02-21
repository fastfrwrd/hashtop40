var sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');
var Track = models.Track;

exports.init = init;

function init() {
	var t = new Track.fromURI('spotify:track:4EkQu2SOIogmEjT8MrwShX');
	console.log(t);
} 