// function inspect(func) {
// 	console.log(func);

// 	var raw = func.toString();
// 	var code = raw.split('/*BEGIN*/')[1].split('/*END*/')[0];
// 	var codeBox = document.getElementById('code-hint');
// 	codeBox.textContent = code;
// 	console.log(code);
// }

function deactivateAll() {
	var forms = document.querySelectorAll('form');
	for (var i=0; i<forms.length; i++){
		// console.log(forms[i]);
		forms[i].removeAttribute('data-active');
	}
}

function goTo(nodeName) {
	deactivateAll();
	var destination = document.getElementById(nodeName);
	destination.setAttribute('data-active', '');
	if (destination.dataset.onload){
		eval(destination.dataset.onload)();
	}
}

function goToNext(formId, form) {

	// console.log(form);
	// console.log($(form).validate());
	// if (formId == "first-vote")
	// 	return false;

	deactivateAll();
	var query = '#' + formId + ' + form';
	// console.log('query!!', query);
	// document.querySelector('#' + formId + ' + form').setAttribute('data-active', '');
	var destinationId = document.querySelector('#' + formId + ' + form').id;
	goTo(destinationId);
}

$(function(){
	var inspectable = $('[data-inspect]').text();
	if (inspectable){
		$('#code-hint').hide().text(inspectable);
	}

	$('[data-toggle]').click(function(){
		$('#code-hint').toggle();
	});
});

