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

    return {
        bind: bind
    };

})(jQuery);

$(document).ready(function() {
	window.interactions.bind();
});