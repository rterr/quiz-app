$(document).ready(function() {
	// variables
	var questionCounter = -1;
	var scoreCounter = 0;
	shuffle(questionList);

	//start next question
	 $('span.next-question').click(function() {
		questionCounter++;

		$(this).parent('div').toggle();
		//add if statement that checks if questionCounter>5
		//if questionCounter>4, then toggle on the result-final div and output the correctCounter to it
		//else continue with displaying the next question
		$('span#question-counter-number').text(questionCounter + 1);
		$('span#score-counter-number').text(scoreCounter);
   		$('#question-page h2').text(questionList[questionCounter].question);
	 });

	//user selects an answer
	$('span.answer-option').click(function(){
		$('div#result-page').toggle();
		//if then statement
		//if id = questionList[questionCounter].correct (it's right)

		//else (it's wrong)
	 });

	//user selects new game
	$('span.new-game').click(function(){
		//reset the questionCounter and scoreCounter, run shuffle(questionList);
		// toggle off (this).parent('div') and toggle on start-page div
	});

//end	
});

//Fisher-Yates shuffle
function shuffle(array) {
	var m = array.length, t, i;
	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);
		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
		}
  	return array;
	}