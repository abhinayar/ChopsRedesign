/* Ordering Code */
/* Dependencies: SnipCart API */
//By Abhi Nayar, Copyright 2017
//For ChopsSnacks LLC

/* Show continue shopping */
Snipcart.execute('config', 'show_continue_shopping', true);

/* Update which buy button is shown when different product options are clicked */
$(".product-button-wrapper").click(function(){
	var option = $(this).attr("data-target");
	$(".order-quant .quantity").text("1");
	
	if (option == "sub") {
		//Grey out increment options
		$(".order-quant-row .minus, .order-quant-row .plus").addClass("inactive");
	} else {
		$(".order-quant-row .minus, .order-quant-row .plus").removeClass("inactive");
	}
	
	$(".buy-button-wrapper a").addClass("hidden");
	$(".buy-button-wrapper a." + option).removeClass("hidden");
});

/* Increment data-item-quantity when clicked */
$(".buy-button-wrapper a").on("click", function(e){
	e.preventDefault();
	var quantity = parseInt($(".order-quant .quantity").text(), 10);
	$(this).data('item-quantity', quantity);
	$(this).trigger("click");
});