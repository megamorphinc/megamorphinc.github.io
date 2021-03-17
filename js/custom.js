(function($) {
	jQuery(document).ready(function() {


	 $(".owl-carousel").owlCarousel({
	 	"items" : 3,
	 	"padding" : 30,	
	 	"margin" : 30,	
		"dots" : true,
	 	"autoplay" : true,
	 	'mousehover' : true,
	 	"autoplayTimeout" : 10000,
	 	"loop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 2
	 		},
	 		767 : {
	 			"items" : 3
	 		},
	 		991 : {
	 		 	"items" : 3
	 		}


	 	}
	 });



	var owl = $('.owl-carousel');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})




	});
})(jQuery);