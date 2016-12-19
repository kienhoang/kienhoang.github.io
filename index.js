$(document).ready(function(){
	console.log('ready');
	var btnSubmit = $('#btnSubmit');
	btnSubmit.click(function(){
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();
		console.log(name);
		console.log(email);
		console.log(message);
		btnSubmit.prop('disabled', true);
		btnSubmit.html('Sending...');
		if ((name !== "") && (email !== "") && (message !== "")){
			$.post('https://contact-kienhg96.herokuapp.com/post', {name: name, email: email, message: message}, function(data){
				if (data === 'OK'){
					console.log('OK');
					btnSubmit.html('OK');
					btnSubmit.prop('disabled', false);
					$('#name').val('');
					$('#email').val('');
					$('#message').val('');
					setTimeout(function(){
						btnSubmit.html('Send');
					}, 3000);
				}
			});
		}
		else {
			alert('You must fill 3 fields')
		}
	});
});