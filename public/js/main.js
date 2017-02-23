//JS Code for Chops Snacks LLC Website
//By Abhi Nayar for Semi Erect
//http://www.linkedin.com/in/abhinayar
//For inquiries contact the developer at anayar2[at]gmail
//All Rights Reserved, Copyright 2017

$(document).ready(function(){
	/* Nav Scroll Function */
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
			$(".page-alert").addClass("hidden");
			$(".navigation").addClass("shifted");
		} else {
			$(".page-alert").removeClass("hidden");
			$(".navigation").removeClass("shifted");
		}
	});
    
    $(".spinner-spin2").click(function(){
        if ($(".mobile-nav-list").hasClass("open")) {
            $(".mobile-nav-list").addClass("closed").removeClass("open");
            $(".spinner-spin2").addClass("closed").removeClass("open");
        } else {
          $(".mobile-nav-list").addClass("open").removeClass("closed");
            $(".spinner-spin2").addClass("open").removeClass("closed");
        }
    });
    
    /* Smooth Scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 80
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Product Page Functions */
    $(".product-subpage .product-button-wrapper").click(function(){
        $(".product-subpage .product-button-wrapper").removeClass("active");
        $(this).addClass("active");
    });
    
    function incrementQuantity(plusOrMinus) {
        var curQuant = parseInt($("span.quantity").text(),10);
        if(plusOrMinus == "-") {
            if (curQuant != 1 && curQuant > 0) {
                curQuant--;
            }
        } else {
            curQuant++;
        }
        $("span.quantity").text(curQuant);
    } $(".product-subpage .minus").click(function(){
        incrementQuantity("-");
    }); $(".product-subpage .plus").click(function(){
        incrementQuantity("+");
    });
    
    /* Image Switching for Product Pages */
    $(".product-subpage .sub-image").click(function(){
        var target = $(this).data("target");
        $(".product-subpage .sub-image").removeClass("active");
        $(this).addClass("active");
        //console.log(target);
        //console.log(".product-subpage .item-image img." + target);
        $(".product-subpage .item-image img").removeClass("active");
        $(".product-subpage .item-image img." + target).addClass("active");
    });
});
