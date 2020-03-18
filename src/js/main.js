$(function() {

	var curSlide = 1;

	function makeCenterDiv(el) {

		// console.log($(el).length);
		// $(el).each(function() {

		var elem = el
		var w = elem.width();
		var h = elem.height();

		var nw = -w / 2;
		var nh = -h / 2;

		elem.css({
			"top" : "50%",
			"left" : "50%",
			"margin-left" : nw + "px",
			"margin-top" : nh + "px"
		});

		// })
	}

	function makefit(el) {

		// console.log($(el).length);
		$(el).each(function() {

			var elem = $(this);
			var w = elem.width();
			var h = elem.height();

			var nw = -w / 2;
			var nh = -h / 2;

			elem.css({
				"top" : "5%",
				"left" : "10%",
				"bottom" : "5%",
				"right" : "10%",
			// "margin-left" : nw + "px",
			// "margin-top" : nh + "px"
			});

		})
	}

	makeCenterDiv($(".container .slide:first-of-type .inner"));
	

	$(document).keydown(nextSlide);

	function nextSlide(e) {

		if (e.keyCode == 39) {
			if (curSlide == 50)
				return;

			curSlide++;
			var nextslide = $(".slide" + curSlide);
			if (nextslide.length) {
				$(".slide").hide();
				nextslide.removeClass("bounceInRight").addClass("animated bounceInLeft").show();
				if(nextslide.hasClass("tslide")){
					nextslide.find("h1").css({
						"-webkit-animation-delay": ".5s",
						"-moz-animation-delay": ".5s",
						"-o-animation-delay": ".5s",
						"-ms-animation-delay": ".5s",
					}).addClass("animated bounceIn");
				}
			}
		}

		else if (e.keyCode == 37) {
			if (curSlide == 1)
				return;
			curSlide--;
			var nextslide = $(".slide" + curSlide);
			if (nextslide.length) {
				$(".slide").hide();
				nextslide.removeClass("bounceInLeft").addClass("animated bounceInRight").show();
			}

		}

	}
	
	
	

	
	
	
	

})
