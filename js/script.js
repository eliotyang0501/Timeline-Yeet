/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	$("#right-scroll").click(function(){

		var left = $("#timeline").scrollLeft();

		$("#timeline").scrollLeft(left + 200);

		$("#timeline").animate({
			scrollLeft: left + 200
		});
	});


	//jquery code here

}); //end document.ready block
