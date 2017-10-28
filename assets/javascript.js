
$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('timer').html( + this.time + ' seconds remaining');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('timer').html(+ countdownTimer.time + ' seconds remaining');
			}
	// };


function check (){


	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;

		if (question1 == "Stugots") {
		correct++;
	}
		if (question2 == "Satriale's") {
		correct++;
	}
		if (question3 == "Pine Barrens") {
		correct++;
	}
		if (question4 == "Gun") {
		correct++;
	}
		if (question5 == "CAO Maduro L’Anniversaire Robusto") {
		correct++;
	}
		if (question6 == "Beretta") {
		correct++;
	}
		if (question7 == "Kinderhook") {
		correct++;
	}
		if (question8 == "Steve Buschemi") {
		correct++;
	}
		if (question9 == "David Chase") {
		correct++;
	}
		if (question10 == "True Romance") {
		correct++;
	}


var message = ["The Don", "I genuinely don’t think there’s anything to gain by keeping him around.", "I was seeing a therapist myself about a year ago. I had some issues. Enough said. I learned some coping skills."]
var pictures = ["assets/images/tony.webp", "assets/images/sil.webp", "assets/images/paul.gif"];
var range;

	if (correct < 4) {
		range = 2;
	}

	if (correct > 3 &&  correct< 8) {
		range = 1;
	}

	if (correct > 8) {
		range = 0;
	}



	document.getElementById("aftersubmit").style.visibility = "visible";

	document.getElementById("message").innerHTML = message[range];
	document.getElementById("numbercorrect").innerHTML = "You got " + correct + " correct";
	document.getElementById("pictures").src =pictures[range];
}