$(document).ready(function () {


	var password;
	var pass1="3";

	password=prompt('What was the solution?',' ');


	if (password == null) {
		window.location="http://chiyoung.kim/puzz/part2.html";
	}
	else if (password != pass1)
	   {
	    window.location="http://chiyoung.kim/puzz/stegosaurus.html";
	}


});
