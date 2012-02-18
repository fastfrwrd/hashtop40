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
			  songurl:"http://open.spotify.com", //replace with twitter url
			  coverurl:n.image[1]['#text'],
			  trackname:n.name,
			  artistname:n.artist.name,
			}
		});
		tracks = { tracks: tracks };
		console.log();
    	
		$.ajax({
			url: '/populate',
			data: tracks,
			success: function(data) {
				if($('ol').length) {
					$('ol').replaceWith(data);
				} else {
					$('.content').html(data)
				}
			}
		});
		
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