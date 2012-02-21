var sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');

exports.init = init;

function init() {
	var t = new models.Track.fromURI('spotify:track:4EkQu2SOIogmEjT8MrwShX');
	$(document).ready(function() {
		//$('.content').append('<img src="' + t.data.album.cover + '" />');
		$('.content').append('<a href="spotify:track:4EkQu2SOIogmEjT8MrwShX"><img src="' + t.data.album.cover + '" />' + t.toString() + '</a>');
	});
}

