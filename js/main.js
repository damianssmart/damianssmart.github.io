function askQuestions() {




var firstName = prompt('what is your first name?')
var lastName = prompt('what is your last name?')

var fullName = firstName + ' ' + lastName;

console.log('user\'s name is: ' + fullName);

$('h2').text('Hello' + fullName);

var age = prompt('how old are you?');
age = parseInt(age);

if (age>= 18) {

	console.log('User is an adult');
	alert('welcome adult');

} else if (age>=13) {

	console.log('user is a teenager');
	alert('come back in a few yesrs!');

}


if (firstName == 'General'  &&   lastName != 'Assembly')
	console.log('user is General');
	alert('welcome General');



var faveColor = prompt('What is your favourite colour').toLowerCase(); 

if (faveColor == 'red') {



	$('h1').css('color', faveColor);

}}




// when the page has loaded 
$(function() {

	$('img').on('click', askQuestions);


	// when the user clicks on a h3
	$('h3').on('mouseenter', function(){


		//close all sections
		$('h3').not(this).next().slideUp(100);

		// Hide the next element
		$(this).next().slideToggle(2000);

	});
});