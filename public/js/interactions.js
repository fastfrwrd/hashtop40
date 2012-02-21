window.interactions = window.interactions || (function ($) {
            
    var bind = function() {
		//binds!
    };
    
    var populateTracks = function(tracks) {
		var $list = $('<ol id="current-list"></ol>');
		console.log()
		for(i in tracks) {
		  $list.append(formatTrack(tracks[i], parseInt(i)+1));
		}
		$('ol').remove();
		$('.content').append($list);
	};
	
	var replaceTrack = function(id, newRank) {
		//get the old rank
		var oldRank = 41; //want to get whole list if item is new
		$('#current-list li').each(function(i, el) {
		  	if($(el).data('id') === id) {
		  		oldRank = $(el).find('.rank').html();
		  		$(el).addClass('alert-info').find('.rank'). html(newRank);
		  		return false;
			}
		});
		//create a new, hidden version of the list
		$('#current-list').clone(true).attr('id','new-list').hide().insertAfter('#current-list');
		//change the rank of the item
		$('#new-list li:nth-child(' + oldRank + ')').find('.rank').html(newRank);
		//musical chairs
		$('#new-list li:nth-child(' + newRank + ')').before($('#new-list li:nth-child(' + oldRank + ')'));
		//decrement the values for the old items between the new rank and old rank
		$('#new-list li').each(function(i, el) {
			if(i >= newRank) { $(el).find('.rank').html(i+1); }
			if(i == oldRank) { return false; }
		})
		//quicksand with new HTML, colorz
		$('#current-list').quicksand('#new-list li', function() {
		    $('#current-list li:nth-child(' + newRank + ')').animate({ 
				backgroundColor: "#f5f5f5",
				color: '#333',
			}, 2000, function() { 
				$(this).removeClass('alert-info'); 
			});
			//kill the invisible list
			$('#new-list').remove();
		});
	};

	var formatTrack = function(track, rank) {
		return '<li class="track well span2" data-id="' + track._id + '">' +
			'<div class="rank rank-current">' + rank + '</div>' + 
			  '<div class="album-art">' + 
				'<a href="' + track.url + '" target="_blank">' + 
				  '<img class="cover" src="' + track.img + '" />' + 
				  '<div class="track-name"> ' + track.title + '</div>' + 
				'</a>' + 
			  '<div class="artist-name">' + track.artist + '</div>' + 
			'</div>' +
		  '</li>';
	};
	
	var trackRankChange = function($track, rankDifference) {
		if(rankDifference == null) {
			rankDifference = "new!";
		}
		else if (parseInt(rankDifference) > 0) {
		    rankDifference = "+"+rankDifference;
		}
		$track.addClass('alert-information').append('<span class="rank rank-change ' + type + '">' + rankDifference + '</div>');
		setTimeout(function() {
			$track.animate({
				backgroundColor: "#f5f5f5"
			}, 1000, function() {
				$track.removeClass('alert-information');
			});
		}, 5000);
	};
	
    return {
        bind: bind,
        populateTracks: populateTracks,
        replaceTrack: replaceTrack,
    };

})(jQuery);

$(document).ready(function() {
	window.interactions.bind();
});