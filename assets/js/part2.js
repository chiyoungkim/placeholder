$(document).ready(function () {


	var password;
	var pass1="394824179";

	password=prompt('Please enter your password to view this page!',' ');

	if (password == null) {
		window.location="http://chiyoung.kim/puzz/sudoku.html";
	}
	else if (password != pass1)
	   {
	    window.location="http://chiyoung.kim/puzz/part2.html";
	}



});
