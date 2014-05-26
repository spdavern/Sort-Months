var X = NaN;
var Y = NaN;
var operator = "";
var resultText;

$(document).ready(function(){
	/* Validate and process number inputs. */
	$(".numberInputs").change(function() {
		var inputID = $(this).attr("id");
		var entry = $(this).val();
		if(isInteger(entry)) {
			/* Clear entry error message, if any. */
			$("#"+inputID+"Error").text("");
			/* Record the entry. */
			if (entry.trim()=="") {
				if (inputID=="X") {X = NaN} else {Y = NaN};
			} else {
				if (inputID=="X") {X = parseInt(entry,10)} else {Y = parseInt(entry,10)};
			}
		} else {
			$("#"+inputID+"Error").text(" "+inputID + " must be an integer!");
		};
		/* Update the Result. */
		updateResult();
	});

	/* Operator button functionality. */
	$(':button').on('click', function() {
		operator = $(this).val();
		updateResult();
	})
});

/* 	Function that evaluates if "value" is an integer.
	Spaces are ignored. */
function isInteger(value) {
	var isInt = value.trim() == "";
	if (!isInt) {
		isInt = !isNaN(parseInt(value,10)) && (parseFloat(value,10) == parseInt(value,10))
	};
	return  isInt;
};

/* 	Build the result text string and update the DOM. */
function updateResult() {
	/* Rebuild the result text. */
	if (isNaN(X)) {resultText = "X "} else {resultText = X + " "};
	if (operator=="") {
		resultText = resultText + "minus / plus";
	} else {
		if (operator=="+") {resultText = resultText + "plus"} else {resultText = resultText + "minus"};
	}
	if (isNaN(Y)) {resultText = resultText + " Y"} else {resultText = resultText + " " + Y};
	resultText = resultText + " is ";
	if (isNaN(X) || isNaN(Y) || operator == "") {
		resultText = resultText + " ?";
	} else {
		var Z;
		if (operator=="+") {Z = X + Y} else {Z = X - Y};
		resultText = resultText + Z;
	};

	/* Update the DOM. */
	$(".result").text(resultText);
	return;
};