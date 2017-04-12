function inspect(func) {
	console.log(func);

	var raw = func.toString();
	var code = raw.split('/*BEGIN*/')[1].split('/*END*/')[0];
	var codeBox = document.getElementById('code-hint');
	codeBox.textContent = code;
	console.log(code);
}

function deactivateAll() {
	var forms = document.querySelectorAll('form');
	for (var i=0; i<forms.length; i++){
		// console.log(forms[i]);
		forms[i].removeAttribute('data-active');
	}
}

function goTo(nodeName) {
	if (nodeName == 'intro'){
		yesVotes = 0;
		noVotes = 2;
	}
	deactivateAll();
	document.getElementById(nodeName).setAttribute('data-active', '');
}

function goToNext(formId) {
	deactivateAll();
	var query = '#' + formId + ' + form';
	// console.log('query!!', query);
	document.querySelector('#' + formId + ' + form').setAttribute('data-active', '');
}