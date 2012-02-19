window.interactions = window.interactions || (function ($) {
    
    var initTracks = {};
    
    var bind = function() {
		//binds!
    };
    
    var populateTracks = function(tracks) {
		if($('.content ol').length > 0) {
		    $('.track').each(function(i, el) {
		        if(tracks[i].url !== $(el).find('a').attr('href')) {
		        	$(el).flip({
						direction: "lr",
						color: '',
						content: formatTrack(tracks[i], parseInt(i)+1),
						speed: 500,
						onEnd: function() {
							$(el).css('background','');
							trackRankChange($(el), (initTracks[tracks[i]._id] - parseInt(i)+1));
						}
					});
		        }
		    });
		} else {
		    var $list = $('<ol></ol>');
		    for(i in tracks) {
		      $list.append('<li class="track well span2">' + formatTrack(tracks[i], parseInt(i)+1) + '</li>');
		      initTracks[tracks[i]._id] = i+1;
		    }
		    $('.content').append($list);
		}
		bind();
	};

	var formatTrack = function(track, rank) {
		return '<div class="rank rank-current">' + rank + '</div><div class="album-art"><a href="' + track.url + '" target="_blank"><img class="cover" src="' + track.img + '" /><div class="track-name"> ' + track.title + '</div></a><div class="artist-name">' + track.artist + '</div></div>';
	};
	
	var trackRankChange = function($track, rankDifference) {
		var type;
		if (rankDifference > 0) {
		    type = "success";
		    rankDifference = "+"+rankDifference;
		} else {
			type = "danger";
		}
		$track.addClass('alert-' + type).append('<span class="rank rank-change ' + type + '">' + rankDifference + '</div>');
		setTimeout(function() {
			$track.animate({
				backgroundColor: "#f5f5f5"
			}, 500, function() {
				$track.removeClass('alert-' + type);
			});
		}, 2000);
	};
	
    return {
        bind: bind,
        populateTracks: populateTracks,
        formatTrack: formatTrack,
        trackRankChange: trackRankChange
    };

})(jQuery);

$(document).ready(function() {
	window.interactions.bind();
});