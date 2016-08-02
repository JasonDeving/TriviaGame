$("table, #submit").hide();

$("#output").html("<button id='start'>Start</button>");
$("#start").on("click", function(){
	$("table, #submit").show();
	$("#start").hide();
	var timeLeft = 30;
	var elem = document.getElementById('output');
	var timerId = setInterval(countdown, 1000);
	function countdown() {
	  if (timeLeft == 0) {
	    clearTimeout(timerId);
	    call();
	  } else {
	    elem.innerHTML = timeLeft + ' seconds remaining';
	    timeLeft--;
	  }
	}
	$("#submit").click(function(){
		timeLeft = 0;
		clearTimeout(timerId);
	});
});

function call() {
		var q1 = $("input[name=q1]:checked").val();
		var q2 = $("input[name=q2]:checked").val();
		var q3 = $("input[name=q3]:checked").val();
		var q4 = $("input[name=q4]:checked").val();
		var q5 = $("input[name=q5]:checked").val();
		var correct = 0;
		var incorrect = 0;
		var unanswered = 0;
		var html;

    function question(question, answer) {
    	if(question == answer) {
       	    $("table, #submit").hide();
        	correct++;
    	} else if(question == undefined){
    		$("table, #submit").hide();
        	unanswered++;
    	} else {
    		$("table, #submit").hide();
    		incorrect++;
    	}
    }

    question(q1, 4);
    question(q2, "blue");
    question(q3, 4);
    question(q4, "red");
    question(q5, "yellow");

    html += "<h2>";
    html += "Correct: " + correct;
    html += "<br>";
    html += "Incorrect: " + incorrect;
    html += "<br>";
    html += "Unaswered: " + unanswered;
    html += "</h2>";

    $("#output").html(html);
    console.log("correct " + correct)
    console.log("incorrect " + incorrect)
    console.log("unanswered " + unanswered)
}; 


$("#submit").click(call);






