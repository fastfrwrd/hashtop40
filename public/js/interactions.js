window.interactions = window.interactions || (function ($, templates) {

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
              if(initTracks[tracks[i]._id]) {
                trackRankChange($(el), (parseInt(initTracks[tracks[i]._id]) - parseInt(i) - 1));
              } else {
                trackRankChange($(el));
              }
            }
          });
        }
      });
    } else {
      var $list = $('<ol></ol>');
      for(i in tracks) {
        $list.append('<li class="track well span2">' + formatTrack(tracks[i], parseInt(i)+1) + '</li>');
        initTracks[tracks[i]._id] = parseInt(i)+1;
      }
      $('.content').append($list);
    }
    bind();
  };

  var formatTrack = function(track, rank) {
    return Mustache.to_html(templates.Song, { rank: rank, track: track });
  };

  var trackRankChange = function($track, rankDifference) {
    var type;
    if(rankDifference == null) {
      type = "success";
      rankDifference = "new!";
    }
    else if (parseInt(rankDifference) > 0) {
      type = "success";
      rankDifference = "+"+rankDifference;
    } else {
      type = "danger";
      rankDifference = "";
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
    initTracks: initTracks
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
