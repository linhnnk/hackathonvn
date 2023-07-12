function fillform() {
	var mainform = document.getElementById("mainForm");
	var titlefield = document.getElementById("titleField");
	var descfield = document.getElementById("descriptionField");

	// if(titlefield.value == "") {
	// 	alert("Please enter a title");
	// 	document.getElementById("titleField").className = document.getElementById("titleField").className + " missinginput";
	// 	return false;
	// }
	// else
	if (descfield.value == "" && titlefield.value == "") {
		alert("Please enter a title and description");
		document.getElementById("descriptionField").className = document.getElementById("descriptionField").className + " missinginput";
		document.getElementById("titleField").className = document.getElementById("titleField").className + " missinginput";
		return false;
	}
	else if (descfield.value == "" && titlefield.value != "") {
		alert("Please enter a description");
		document.getElementById("descriptionField").className = document.getElementById("descriptionField").className + " missinginput";
		document.getElementById("titleField").className = document.getElementById("titleField").className + " nomissing";
		return false;
	}
	else if (descfield.value != "" && titlefield.value == "") {
		alert("Please enter a title");
		document.getElementById("titleField").className = document.getElementById("titleField").className + " missinginput";
		document.getElementById("descriptionField").className = document.getElementById("descriptionField").className + " nomissing";
		return false;
	}

	else if (document.getElementById("checkbox").checked == false) {
		alert("Please accept the software license.");
		return false;
	}
	else {
		mainform.onsubmit();
	}
}