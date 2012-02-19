window.interactions = window.interactions || (function ($) {
    
    var bind = function() {
    	$('.track').click(function() {
    		$(this).flip({
    			direction: "lr",
    			color: '#f5f5f5',
    			content: '<img class="album-art" src="http://baconmockup.com/100/100" />', //the new interior of the li
    			speed: 100,
    		});
    	});
    };
    
    var populateTracks = function(tracks) {
    
		var tracks = $.map(tracks, function(n, i) {
			return { 
			  songurl:n.url, //replace with twitter url
			  coverurl:n.img,
			  trackname:n.title,
			  artistname:n.artist,
			}
		});
		console.log(tracks);
		var $list = $('<ol></ol>');
		for(i in tracks) {
		  $list.append('<li class="track well span2"><div class="album-art"><a href="' + tracks[i].songurl + '"><img class="cover" src="' + tracks[i].coverurl + '" /></a><div class="track-name"> ' + tracks[i].trackname + '</div><div class="artist-name">' + tracks[i].artistname + '</div></div></li>');
		}
		$('ol').replaceWith($list);
	};


	var updateTracks = function(tracks) {
		// iterate through tracks
		// id compare
		// flip em baby!
	};
	
	var formatTrack = function(track) {
		return { 
		  songurl:"http://open.spotify.com", //replace with twitter url
		  coverurl:track.image[1]['#text'],
		  trackname:track.name,
		  artistname:track.artist.name,
		}
	};

    return {
        bind: bind,
        populateTracks: populateTracks,
        updateTracks: updateTracks,
        formatTrack: formatTrack
    };

})(jQuery);

$(document).ready(function() {
	window.interactions.bind();
});