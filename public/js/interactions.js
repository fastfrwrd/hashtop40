window.interactions = window.interactions || (function ($) {
    
    var bind = function() {
		//binds here!
    };
    
    var populateTracks = function(tracks) {
		if($('.content ol').length > 0) {
		    $('ol li').each(function(i, el) {
		        if(tracks[i].url !== $(el).find('a').attr('href')) {
		            console.log('change at ' + i);
		        	$(el).flip({
						direction: "lr",
						color: '#f5f5f5',
						content: formatTrack(tracks[i]),
						speed: 500,
					});
		        }
		    });
		} else {
		    var $list = $('<ol></ol>');
		    for(i in tracks) {
		      $list.append('<li class="track well span2">' + formatTrack(tracks[i]) + '</li>');
		    }
		    $('.content').append($list);
		}
	};

	var formatTrack = function(track) {
		return '<div class="album-art"><a href="' + track.url + '" target="_blank"><img class="cover" src="' + track.img + '" /></a><div class="track-name"> ' + track.title + '</div><div class="artist-name">' + track.artist + '</div></div>';
	};
	
    return {
        bind: bind,
        populateTracks: populateTracks,
    };

})(jQuery);

$(document).ready(function() {
	window.interactions.bind();
});