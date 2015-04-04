jQuery(document).ready(function(){
	jQuery('a.btn-toggle').click(function(even){
		even.preventDefault();
		jQuery('#navigation .main-menu ul').slideToggle();
	});
	$("#signupForm").validate({	
		rules: {
			name_question: "required",
			email_question: {
				required: true,
				email: true
			},
			mobile: {
				required: true,
				number: true
			}
		},
		messages: {
			name: "Please enter your name",
			email: "Please enter a valid email address",
			mobile: "Please enter a valid mobile number"
		}
	});
});

jQuery(window).resize(function(){
	if(jQuery(window).width() >= 768){
		jQuery('#navigation .main-menu ul').show()
	}
	else{
		jQuery('#navigation .main-menu ul').hide()

	}
});