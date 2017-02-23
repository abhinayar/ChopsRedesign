/* Homepage Scrolling */
//By Abhi Nayar
//Dep: jQuery

$(window).on('load scroll', function(){
    /* Header Parallax */
    if($(document).scrollTop() > 0 && $(document).scrollTop() < 750){
         var scroll =  $(this).scrollTop();
         $(".header-parallax").css("transform", "translateY( " + (scroll/4) + "px)");
    } 
    /* Billboard Parallax */
    else if ($(document).scrollTop() > $(".billboard-parallax").offset().top && $(document).scrollTop() < ($(".billboard-parallax").offset().top + $(".billboard-parallax").height())) {
        var scroll =  $(document).scrollTop() - $(".billboard-parallax").offset().top;
        //console.log(scroll);
        $(".billboard-parallax").css("transform", "translateY( " + (scroll/4) + "px)");
    }
    
    /* Instagram Integratiom JS Code */
    $.getJSON(
        'https://api.instagram.com/v1/users/2347871100/media/recent/?access_token=2347871100.1677ed0.1ebbf6b9279c4f17a17c46b157740e87&callback=?',
        function(data) {
            //console.log(data);
            displayInstagramPosts(data.data);
        }
    );
    
    function displayInstagramPosts(data) {
        //var sources = [];
        //var links = [];
        var vals = ["one", "two", "three", "four", "five", "six", "seven", "eight"]
        var imgWrappers = $(".imageRow .row .img-wrapper");
        
        for (var i = 0; i < 8; i++) {
            var imgSrc = data[i].images.standard_resolution.url;
            //sources.push(imgSrc);
            var link = data[i].link;
            
            $('.imageRow .row .img-wrapper.' + vals[i]).css('background-image','url("' + imgSrc + '")').attr("data-target", link).addClass("insta-photo");
        }        
    }
    
    $("#loveChops .img-wrapper").on('click', function(){
        if ($(this).hasClass("insta-photo")) {
            window.location.href = $(this).attr("data-target");
        }
    });
});