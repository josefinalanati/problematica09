var email = document.getElementsByClassName("email")
var password = document.getElementsByClassName("password")
var error = document.getElementById ("error")
var input = document.getElementById ("password")
var inputwo = document.getElementById("email")
var label = document.getElementById ("password")
var labeltwo = document.getElementById ("email")

function validationFunction() {
	if (email.value === '' || email.value === null) {
		wrong.innerHTML = '<p>Please enter your email</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		return;
	}

	if (
		email.value.search(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		) == -1
	) {
		wrong.innerHTML = '<p>The email entered is not valid</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		return;
	}
	if (password.value === '' || password.value === null) {
		wrong.innerHTML = '<p>Please enter a password</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		return;
	}
	else {
		success.innerHTML = '<p>Every validation has passed</p>';
		success.style.display = 'contents';
		success.style.color = '#27ae60';
	}