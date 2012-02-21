window.templates = window.templates || (function() {

  var song = '<li class="well span2 track" data-id="{{track._id}}">\
      <div class="rank rank-current">{{rank}}</div> \
        <div class="album-art"> \
          <a href="{{track.url}}" target="_blank"><img class="cover" src="{{track.img}}" /> \
            <div class="track-name">{{track.title}}</div> \
          </a><div class="artist-name">{{track.artist}} \
        </div> \
      </div>\
    </li>';
  
  return { Song: song };

}).call(this);
