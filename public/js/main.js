//JS Code for Chops Snacks LLC Website
//By Abhi Nayar for Semi Erect
//http://www.linkedin.com/in/abhinayar
//For inquiries contact the developer at anayar2[at]gmail
//All Rights Reserved, Copyright 2017

$(document).ready(function(){
	/* Convoluted Index Page Parallax Function & Nav BG */
	$(window).on('load scroll', function(){
		/* Nav Code */
		if ($(document).scrollTop() > 70) {
			$(".navigation").addClass("active");
			$(".navigation .logo img.white").addClass("hidden");
			$(".navigation .logo img.black").removeClass("hidden");
		} else {
			$(".navigation").removeClass("active");
			$(".navigation .logo img.white").removeClass("hidden");
			$(".navigation .logo img.black").addClass("hidden");
		}
		
		/* Alert Hide */
		if ($(document).scrollTop() > ($("#Top").height() + 40)) {
			$(".page-alert").fadeOut(1500);
			$(".navigation").addClass("shifted");
		} else {
			$(".page-alert").fadeIn(1500);
			$(".navigation").removeClass("shifted");
		}
		
		/* Header Parallax */
		if($(document).scrollTop() > 0 && $(document).scrollTop() < 750){
			 var scroll =  $(this).scrollTop();
			 $(".header-parallax").css("transform", "translateY( " + (scroll/4) + "px)");
		} 
		/* Billboard Parallax */
		else if ($(document).scrollTop() > $(".billboard-parallax").offset().top && $(document).scrollTop() < ($(".billboard-parallax").offset().top + $(".billboard-parallax").height())) {
			var scroll =  $(document).scrollTop() - $(".billboard-parallax").offset().top;
			console.log(scroll);
			$(".billboard-parallax").css("transform", "translateY( " + (scroll/4) + "px)");
		}
	});
});