$(document).ready(function() {
	// var owl = $('.owl-carousel');
    var owl = $('#info-slide');
	var inner = $('.inner-slide');
    var complete = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.item').each(function(index){
    	$(this).css('background', 'url(' + $(this).attr('data-src') + ') center no-repeat');
    	$(this).css('background-size', 'cover');
    })

    owl.on('initialized.owl.carousel', function(e){
		inner.addClass('pulse animated').one(complete, function(){
    		inner.removeClass('pulse animated');
    	});
    });
    owl.on('translated.owl.carousel', function(e){
		inner.addClass('slideInRight animated').one(complete, function(){
    		inner.removeClass('slideInRight animated');
    	});
    });

    // owl.on('drag.owl.carousel', function(e){
    // 	inner.addClass('fadeOutRight animated').one(complete, function(){
    // 		inner.removeClass('fadeOutRight animated');
    // 	});
    // });
	owl.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        items: 1,
        nav: true,
        navText: [
        	'<button class="btn btn-narrow modern-btn"><i class="fa fa-chevron-left"></i></button>', 
        	'<button class="btn btn-narrow modern-btn"><i class="fa fa-chevron-right"></i></button>'
        ],
        margin: 0,
        stagePadding: 0,
        smartSpeed: 450,
        autoplay: true,
	    autoplayTimeout: 5000,
	    autoplayHoverPause: true
    });
    
	
    $.ripple(".btn-narrow", {
        debug: false,
        on: 'mousedown',
        opacity: 0.3, 
        color: "auto",
        multi: false,
        duration: 0.4,
        rate: function(pxPerSecond) {
            return pxPerSecond;
        },

        easing: 'linear'
    });
});
