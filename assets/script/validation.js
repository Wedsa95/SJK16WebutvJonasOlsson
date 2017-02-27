console.log("script init");
/*Hej det ser inte så snygtut så att vi båda vet*/
document.getElementById("numberSum")
.addEventListener('change', numberSumFunction);
document.getElementById("idNumber")
.addEventListener('change', idNummberFuction);
document.getElementById("leapYear")
.addEventListener('change', leapYearFunction);

var idNumberResult = document.getElementById("idNumberResult");
var leapYearResult = document.getElementById("leapYearResult");
var numberSumResult = document.getElementById("numberSumResult");

function numberSumFunction(){
	var sum = 0;
	
	var numbers = document.getElementById("numberSum").value;
	
	for(var i = 0; i< numbers.length; i++){
		console.log(typeof(Number(numbers)));
		
		sum = sum + Number(numbers.charAt(i));	
		numberSumResult.innerHTML = sum;
	}
}

function idNummberFuction(){
	var sum = 0;
	var idNumbers = document.getElementById("idNumber").value;
	if(idNumbers.length == 11 || idNumbers.length == 13){
		idNumbers = idNumbers.replace("-", "");
		console.log(idNumbers);
	}
	if(idNumbers.length == 10||idNumbers.length == 12){
		if(idNumbers.length == 12){
			idNumbers = idNumbers.slice(2);
		}
		for(var i = 0; i <idNumbers.length; ++i){
			var temp = 0; 
			if(i%2 == 0){		
				temp = 2 * Number(idNumbers.charAt(i));
					if(temp >= 10){
						temp = temp - 9;
					}
				sum = sum + temp;
			}else{
				
				sum = sum + Number(idNumbers.charAt(i));
			}
		}
		console.log(typeof(idNumbers)+"  "+idNumbers);
		if(sum%10 == 0){
			idNumberResult.innerHTML = "Är ett giltigt personnummer";
			return;
		}else{
			idNumberResult.innerHTML = "Är inte ett giltigt personnummer";
			return;
		}
		
	}
	/* 18-9 = 1 + 8 16-9 = 1+6*/	
}

function leapYearFunction(){
	var leapNumber = document.getElementById("leapYear").value;
	if(leapNumber%4 == 0){
			if(leapNumber%100 == 0){
					if(leapNumber%400 === 0){
						leapYearResult.innerHTML = "Ja det är ett skottår";
						return;
					}else{
						leapYearResult.innerHTML = "Nej det är inte ett skottår";
						return;
					}	
			}else{
				leapYearResult.innerHTML = "Ja det är ett skottår";
				return;
			}	
	}else{
	leapYearResult.innerHTML = "Nej det är inte ett skottår";
	return;
	}
}
