//numPlayers is user inputted number of players
var numPlayers;
function startGame(){
	numPlayers = prompt("Insert number of players", "2");
	prompt("Would you like to play online or offline mode?","online, offline");
	if(numPlayers < 2 || numPlayers > 6)
	{
		window.alert("Please enter a number between 2 and 6");
		numPlayers = prompt("Insert number of players", "2");
	}

}


//returns the number of players
function players(){
		return numPlayers;
}

//TODO in progress
//allow players to choose colors
var playerColor; //playerColor is str var that holds a player's color
var playerColorsArray = ["", ""]; //playerColorsArray is array var that holds playerColor

//function chooseColor() prompts the user to select colors
function chooseColor(){
	var colors = ["red", "white", "blue", "green", "black", "yellow"];

//for loop that prompts players to select colors
for(a=0;a<numPlayers;a++){
	//prompts players to select colors
	playerColor = prompt("Choose a color player", "red, white, blue, green, black, yellow");
	
	//stores playerColor into array
	playerColorsArray[a] = playerColor;
	
	} //end of for loop

//for loop that prints out player colors 
for(b = 0; b<numPlayers; b++){
	document.write("Player " + (b+1) + " Color: " + playerColorsArray[b] + "<br>");
	
}//end of for loop

} //end of chooseColor() function


//displays a sample theme card
function themeCard(){
	window.alert("Theme Card");
}

//displays a sample picture card
function pictureCard(){
	window.alert("Theme Card");
}

//displays a sample potluck card
function potLuckCard(){
	window.alert("Theme Card");
}

//create tooltips: https://www.w3schools.com/howto/howto_css_tooltip.asp

//how to move image
function move() {
 var elem = document.getElementById("p1");   
  var pos = 0;
  pos++; 
  elem.style.right = pos + '10px'; 
}

//alerts the user the game has been saved
//sample functionality for project
function saveGame(){
	window.alert("Game saved!");
}

//ends the game and shows the win condition
function endGame(){
	window.alert("Win Condition. Congratulations Player 1!");
}

//alerts the user there is no saved games
//sample functionality for project
function noSavedGame(){
window.alert("Error: No saved game! Please press 'Start New Game' to play!");
}




