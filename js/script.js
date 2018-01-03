//custom jquery functions

$(document).ready(function() {
	$(".white, .red").fadeIn(1000);
	$(".black").fadeIn(2000)
	$("#sidebar").slideDown(500);
	$("#description").slideDown(1100);
	$("#devstack").slideDown(2200);
	$("#fullstack").fadeIn(2000);
	$('#fullstack').animate({backgroundColor: '#fff'}, 'slow');
});