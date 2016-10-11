//Check Off List Items
$("ul").on("click", "li", function() {
	$(this).toggleClass("marked");
});

// Delete List Item
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// New List  Item
$('input:text').keypress(function(event) {
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-angle-down").click(function(){
	$('input:text').fadeToggle();
});