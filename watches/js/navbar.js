$(document).ready(function() {
    function checkScroll() {
        if ($(window).width() < 768) {
            $('.navbar').addClass("scrolled");
            $('.main').css("margin-top", "53px");
        } 
        else {
            $('.main').css("margin-top", "80px"); 
            if ($(window).scrollTop() > 20) {
                $('.navbar').addClass("scrolled");
            } else {
                $('.navbar').removeClass("scrolled");
            }
        }
    }

    if ($('.navbar').length > 0) {
        $(window).on("scroll load resize", function() {
            checkScroll();
        });
    }
    $.ripple(".modern-btn", {
        debug: false, // Turn Ripple.js logging on/off
        on: 'mousedown', // The event to trigger a ripple effect

        opacity: 0.3, // The opacity of the ripple
        color: "auto", // Set the background color. If set to "auto", it will use the text color
        multi: false, // Allow multiple ripples per element

        duration: 0.4, // The duration of the ripple

        // Filter function for modifying the speed of the ripple
        rate: function(pxPerSecond) {
            return pxPerSecond;
        },

        easing: 'linear' // The CSS3 easing function of the ripple
    });
    
});
