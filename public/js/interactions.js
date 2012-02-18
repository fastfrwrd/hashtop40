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
    	var list = $('<ol></ol>'),
    		html = ""; //build from jade
    	
		// populate html with track infos
		if($('ol').length) {
			$('ol').replaceWith(list);
		} else {
			$('.content').html(list)
		}
	};


	var updateTracks = function(tracks) {
		// iterate through tracks
		// id compare
	}

    return {
        bind: bind,
        populateTracks: populateTracks,
        updateTracks: updateTracks,
    };

})(jQuery);

$(document).ready(function() {
	window.interactions.bind();
});