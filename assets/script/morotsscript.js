var json;
var recipe__numbers = document.getElementsByClassName("recipe__numbers");
var recipe__one__batch =  [100, 2, 2, 1, 0.5, 1, 1, 2, 100, 50, 2, 16, 12];
var recipe__input = document.getElementById("recipe__input");
var all__voters = document.getElementById("all__voters");
var your__vote = document.getElementById("your__vote");
var stars = document.getElementsByClassName("material-icons gray");



function inputBoxChange(){
	for(var i = 0; i < recipe__one__batch.length; ++i){
			if(recipe__input.value == 6){
				recipe__numbers[i].innerHTML = recipe__one__batch[i];
			}	
			if(recipe__input.value == 12){
				recipe__numbers[i].innerHTML = 2 * recipe__one__batch[i];
			}	
			if(recipe__input.value == 18){	
				recipe__numbers[i].innerHTML = 3 * recipe__one__batch[i];
			}	
			if(recipe__input.value == 24){	
				recipe__numbers[i].innerHTML = 4 * recipe__one__batch[i];
			}	
			if(recipe__input.value == 30){	
				recipe__numbers[i].innerHTML = 5 * recipe__one__batch[i];
			}	
			if(recipe__input.value == 36){	
				recipe__numbers[i].innerHTML = 6 * recipe__one__batch[i];
			}
	}
}
function starChange(ratingValue){
		for(var i = 0; i < ratingValue; i++){
			stars[i].style.animationName = "icons";
			stars[i].style.color = "green";
		}
	}
function sendVoteScore(e){
	var ratingValue;
	
	if(this == stars[0]){
		ratingValue = "1";
	}else if(this == stars[1]){
		ratingValue = "2";
	}else if(this == stars[2]){
		ratingValue = "3";
	}else if(this == stars[3]){
		ratingValue = "4";
	}else if(this == stars[4]){
		ratingValue = "5";
	}else{ratingValue = "5";}
	
	starChange(ratingValue);
	
	console.log(ratingValue);
	var sendRating = new XMLHttpRequest();
	
	sendRating.onreadystatechange = function(){
		
		if(this.readyState === 4 && this.status === 200){
			loadTotalRating();
				console.log("ggggg");
		}
	}
	sendRating.open("GET",
	"https://edu.oscarb.se/sjk15/api/recipe/?api_key=9e721dd3ec43ce1d&recipe=morrotskaka&rating=" + ratingValue
	, true);
	sendRating.send();
	
}
function loadTotalRating(){
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function(){
		
		if(this.readyState === 4 && this.status === 200){
			
			var response = this.responseText;
			
			json = JSON.parse(response);
			
			all__voters.innerHTML = json.votes;
			your__vote.innerHTML = json.rating.toFixed(1);
			console.log(json);
		}
	}
	xhttp.open("GET",
	"https://edu.oscarb.se/sjk15/api/recipe/?api_key=9e721dd3ec43ce1d&recipe=morrotskaka"
	, true);
	
	xhttp.send();
	
}
window.onloads = function(){
	document.getElementById("recipe__input")
	.addEventListener("change", inputBoxChange, false);

	for(var i = 0; i < stars.length; ++i){
		stars[i].addEventListener("click", sendVoteScore, false);
		starArray[i] = stars[i] + i;
	}

}
window.onloads = loadTotalRating();