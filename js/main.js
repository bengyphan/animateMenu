$('#hamburger').click(function() {
	$(this).toggleClass('open');
	$("#menu").toggleClass('open');
	if($("#menu").hasClass('hidden')) {
		$("#menu").removeClass('hidden')
	} else {
		$("#menu").addClass('hidden');
	}
})
