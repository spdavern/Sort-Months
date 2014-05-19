var xReportedBad = false;
var yReportedBad = false;
function checkInput(inputField, valueToCheck) {
	if (isNaN(parseInt(valueToCheck,10)) && valueToCheck!="") {
		if ((inputField=="X" && !(xReportedBad)) || (inputField=="Y" && !(yReportedBad))) {
			alert("The " + inputField + "value does not evaluate to an integer.  Please enter an integer.");
		};
		/* Remember that we've complained about the non-integer already. */
		if (inputField=="X"){
			xReportedBad = true;
		} else {
			yReportedBad = true;
		};
	} else {
		/* If the value is, at least temporarily, interpretable as an integer (or blank) then clear the ReportedBad variable. */
		if (inputField=="X"){
			xReportedBad = false;
		} else {
			yReportedBad = false;
		}
	}
};
function updateAnswer(operation) {
	alert("Button pressed");
	return Xinput.value;
	/*+ " " + document.getElementById("X").value minus / plus document.getElementById("Y").value is ? */
};