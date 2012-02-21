window.interactions = window.interactions || (function ($) {
            
    var bind = function() {
		//binds!
    };
    
    var populateTracks = function(tracks) {
		var $list = $('<ol id="current-list"></ol>');
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
	    return Mustache.to_html(templates.Song, { rank: rank, track: track });
	};
	
    return {
        bind: bind,
        populateTracks: populateTracks,
        replaceTrack: replaceTrack,
    };

}).call(this, jQuery, templates);

$(document).ready(function() {
  window.interactions.bind();

  //Fetch all tracks (hack for heroku)
  $.get('/tracks',function(data) {
    if(!data.error) {
      return window.interactions.populateTracks(data);
    }
  });
});
