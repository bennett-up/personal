$(document).ready(function(){
	$('#card').hover(function(){  
	   $('#octo').stop().fadeTo(2000, 0);},  
	function(){  
	  $('#octo').stop().fadeTo('slow', 1);  
	});
});  