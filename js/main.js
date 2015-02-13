// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
// remap jQuery to $

(function($) {

    /* trigger when page is ready */
    $(document).ready(function() {
        $('.grid').css('cursor','crosshair');
        /* ---------------- Initialize Vars --------------------- */
        var mouseDown = false;
        
        /* ---------------- Change cursor when in grid --------------------- */
        $('.grid').css('cursor','crosshair');
        
        /* ----------------- Layout the grid ----------------------*/
        for (var i = 0; i < 94; i++) {
            $('.grid').append("<div class='row'>");
            for (var j = 0; j < 90; j++) {
                $('.grid').append("<div class='block'></div>");
            }
        }
        
        /* ---------------- Is the mouse up or down? ---------------*/
        $(document).mousedown(function() {
                mouseDown = true;
            })
            .mouseup(function() {
                mouseDown = false;
            });

        /* ---------------- Draw or Erase ---------------*/
        $('.block').hover(function() {
            if ($('input[name=radioName]:checked', '#radioControl').val() == 1){
                if (mouseDown) {
                    
                    $(this).css("opacity", "+=0.1");
                }
            }
            if ($('input[name=radioName]:checked', '#radioControl').val() == 2){
                if (mouseDown) {
                    $(this).css("opacity", "-=0.1");
                }
            }
        });
        
        /* ---------------- Clear the board ---------------*/
        $( ".push_button" ).click(function() {
            $('.block').css("opacity", "0");
        });
    });


    /* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);