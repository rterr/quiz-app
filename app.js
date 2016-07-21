$(document).ready(function() {
		// variables
		var questionCounter = 0;
		var scoreCounter = 0;

	  $("#next-question").click(function() {
			questionCounter++;
			$('div#start-page').toggle();
			$('span#question-counter-number').text(questionCounter);
	   	$('#question-page h2').text(questionList[questionCounter].question);
	  });

});
