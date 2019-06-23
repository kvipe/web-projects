$(document).ready(function() {
	$('.face-menu-wrapper a').smoothScroll();
	$('.about-inner-wrapper a').smoothScroll();

	$('.preview-image img').on('click', function(){
		$(this).parent().children('.preview-image-popup').show("swing");
	});
	$('.preview-image-popup .popup-close').on('click', function(){
		$(this).parent().hide("swing");
	});
})