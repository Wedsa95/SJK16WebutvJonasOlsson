console.log("script init"); 
var calc__result = document.getElementById("calc__result");

window.onload = function addAllEventListeners(){
	console.log("addALL");
	var numberButtons = document.getElementsByClassName("calc__number");
	var signButtons = document.getElementsByClassName("calc__sign");
	var equalsButton = document.getElementsByClassName("calc__sign__equals");
	
	for(var i = 0; i < numberButtons.length; ++i){
		numberButtons[i].addEventListener('click', numberClickFunction, false);	
	}
	for(var j = 0; j < signButtons.length; ++j){
		signButtons[j].addEventListener('click', signClickFunction, false);
	}
	
	equalsButton.addEventListener('click',calcDisplayCheck, false);
}
function numberClickFunction(e){
	console.log("n C F");	
	var doc = this.innerHTML;
	calc__result.innerHTML = calc__result.innerHTML.concat(this.innerHTML);
}
function signClickFunction(e){
	console.log("s C F");
	if(!calc__result.innerHTML.charAt(0) == ""){
	calc__result.innerHTML = calc__result.innerHTML.concat(this.innerHTML);
	}
}
function calcDisplayCheck(){
		console.log("c D C");
		calc__result
		
}
function calcDisplayTransferData(){
		console.log("c D T D");
		
		var results__bord = document.getElementById("results__bord");
		var newLi = document.createElement("li");
		
		newLi.appendChild(document.createTextNode(num1 + num2 + sum));
		results__bord.appendChild(newLi);
}