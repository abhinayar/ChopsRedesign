//Contact Page Map JS
//By Abhi Nayar
//Dependencies: Google Maps API v3

var map;
//INIT MAP FUNCTION
//NOTE: Must be outisde the ready function
function initMap() {    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(41.309916, -72.935905),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        disableDefaultUI: true
    });
    
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.309916, -72.935905),
        map: map
    });
    
    marker.addListener('click', function() {
        window.location.href = "https://www.google.com/maps/place/1245+Chapel+St+%23504,+New+Haven,+CT+06511/data=!4m2!3m1!1s0x89e7d9ad11d8db73:0x66b6f798a4d801f3?sa=X&ved=0ahUKEwiywpfC2ZbSAhVGPiYKHR9TBskQ8gEIGTAA";
    });
}