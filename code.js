var runs = 0;
var wickets = 0;
var balls = 0.0;
var runsArr = [];

function addRuns(elem) {  //add runs and wickets
	runsArr.join("");
	switch(elem) {
		case "zero":
			runs = runs + 0;
			runsArr.unshift("0");
			break;
		case "one":
			runs = runs + 1;
			runsArr.unshift(1);
			break;
		case "two":
			runs = runs + 2;
			runsArr.unshift(2);
			break;
		case "three":
			runs = runs + 3;
			runsArr.unshift(3);
			break;
		case "four":
			runs = runs + 4;
			runsArr.unshift(4);
			break;
		case "five":
			runs = runs + 5;
			runsArr.unshift(5);
			break;
		case "six":
			runs = runs + 6;
			runsArr.unshift(6);
			break;
		case "wicket":
			addWicket();
			break;				
	}
	addBall();
	document.getElementById("wickets").innerHTML = wickets;
	document.getElementById("runs").innerHTML = runs;
	document.getElementById("balls").innerHTML = balls.toFixed(1);
	document.getElementById("timeline").innerHTML = runsArr;
	//alert(runsArr);
}

function addBall() {
	var str = balls.toString();
	if(str.endsWith(".5")) {
		balls = balls + 0.5;
		balls = Math.round(balls * 10) / 10;
	} else {
		balls = balls + 0.1;
		balls = Math.round(balls * 10) / 10;
	}
}

function addWicket() {
	if(wickets < 10) {
		wickets = wickets + 1;
		runsArr.unshift("W");
	} else {
		alert("ALL OUT!");
		balls = balls - 0.1;
	}
}

function init() {
	
}

window.onload = init;