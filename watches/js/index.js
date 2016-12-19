$(document).ready(function() {
    console.log('ready');
    $('#new-product').owlCarousel({
        // loop: true,
        rewind: true,
        // dotsEach: 1,
        nav: true,
        margin: 30,
        navText: [
        	'<button class="btn btn-narrow modern-btn"><i class="fa fa-chevron-left"></i></button>', 
        	'<button class="btn btn-narrow modern-btn"><i class="fa fa-chevron-right"></i></button>'
        ],
        responsive: {
            0: {
                items: 1
            },
            550: {
            	items: 2
            },
            768: {
            	items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('#manufacturers').owlCarousel({
        // loop: true,
        rewind: true,
        // dotsEach: 1,
        nav: true,
        margin: 30,
        navText: [
            '<button class="btn btn-narrow modern-btn"><i class="fa fa-chevron-left"></i></button>', 
            '<button class="btn btn-narrow modern-btn"><i class="fa fa-chevron-right"></i></button>'
        ],
        responsive: {
            0: {
                items: 2
            },
            550: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
});
