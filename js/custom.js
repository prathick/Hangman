/*
Developer: Prathic Srinivasan
SID: 217396812
Sounds from http://www.zapsplat.com
Fonts from http://fontsquirrel.com
*/


var current_word; // holds the current word to be guessed as an array
var current_category; //hold the current category of words the player has chosen
var correctGuessCount=0; //counts the correct number of guesses by the player
var incorrectGuess=[]; // stores all the incorrect guesses by the player
var validatedGuess=[]; // stores all the correct guesses by the player
var gameMode; //Stores the current game mode the player is playing
var timer; // Maintains the elapsed time of the game
var startTime; //used for getting the current time
var score=0; //  Player's score
var guesscount=0; // The total of both correct and incorret guesses by the player
var wrongGuess_audio = new Audio("sounds/wrongGuess_sound.mp3"); // sound for wrong guess
var GameLost_audio = new Audio("sounds/GameLost.mp3"); // sound for game lost
var rightGuess_audio = new Audio("sounds/guessRight.wav"); // sound for right guess
var gameWin_audio = new Audio("sounds/GameWin.mp3") // sound for game Won

/**
 *
 *Description: Window.onload is fired when the page loads. All the pages of the Game are created on load of the page
*/
window.onload = function (){

    console.log("startup code running");
    //These functions created the pages and append it to the body tag
    page1();
    page2();
    page3();
    page4();
    aboutpage();
    //Hides all the 2nd,3rd and 4th page of the game to display the home page.
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="none";
    document.getElementById("page4").style.display="none";
    document.getElementById("about").style.display="none";
 

};

/**
 *
 *Description: init() is called to set all the global variables to 0 or empties all the arrays used in several functions in the game
 * called when game restarts Ex init();
*/
function init(){
    validatedGuess=[]
    incorrectGuess=[];
    guesscount=0;
    score=0;
    correctGuessCount=0;
    var newscore= document.getElementById("score");
    newscore.innerHTML="0";
    var hintbtn = document.querySelector('.hintButton');
    hintbtn.disabled=false;
    hintbtn.innerHTML="Hint: 1";

}


/**
 *@param {sound} the audio file needs to be played. Ex: wrongGuess_audio
 *Description: playSound functions plays the audio based on the game situation. Ex: wrong guess, right guess, game won or lost
 *@return: plays audio
 * Ex: playsound(gameWin_audio)
*/
function playSound(sound){

    stopSound(sound); //stop function called
    sound.play(); // audio played

}
/**
 *@param {sound} the audio file needs to be stopped. Ex: wrongGuess_audio
 *Description: stopSound functions pauses the audio that is being played and resets it to the start.
 *@return: stops the audio played and resets to start
 *Ex: stopSound(gameWin_audio)
*/
function stopSound(sound){

    sound.pause(); // audio paused
    sound.currentTime = 0; // reset to start of the audio
}

/**
 *
 *Description: categoryList function creates list item <li> and pushes it into the un-orderlist element categoryList with each list item having a
 *category name on it
 *@return: A list with different categories on it for the player to select. 
 *Ex: categoryList();
*/
function categoryList(){

    var categoryList= document.querySelector(".categoryList");
    categoryList.innerHTML="";
    var categories= Object.getOwnPropertyNames(wordList); //getting all array keys
    categories.forEach(function(element){ //looping through the keys for form a list
        var newlistItem = document.createElement("li");
        newlistItem.setAttribute("class","categoryItem");
        newlistItem.onclick=function(){

            pageshide("page3","page4");
            current_category=element;
            singlePlayerGameStart();
        }
        newlistItem.innerHTML=element;
        categoryList.appendChild(newlistItem);// appending List item(li) to the catergory list(ul)
    });
    
}

/**
 *@param {category} takes category name as parameter to select a random word inside the category. Ex: Geography
 *Description: randomWord function picks a random word from the list of words in a particular category the player has selected.
 *@return: a random word from the array wordList.
 *Ex: randomWord(General);
*/
function randomWord(category){

    return wordData(wordList[category][ Math.floor(Math.random() * wordList[category].length)].word ); //returns random word
}

/**
 *@param {word} takes word as a parameter to convert it into an array with different facts about the word. Ex: "javascript"
 *Description: wordData splits the word into an array with three different values.
 *1. letters: which is an array with the letters of the word as values.
 *2. word:  which contains the acutal word
 *3. totalLetters: which contains the total number of letters in the randomly picked word.
 *@return: an array of the randomly chosen word.
 *Ex:  wordData(Javascript);
*/
function wordData(word){

    return {
        letters: letters(word), //calls letters function
        word: word.toLowerCase(), //converts the word to lowercase and pushes it into the array
        totalLetters: word.length //pushes the length of the word into the array
      };
}

/**
 *@param {word} takes word as a parameter to split the word as an array. Ex: "javascript"
 *Description: letters function splits the word into each letter and pushes into an array.
 *@return: an array with values as the letters of the word randomly chosen and the position of each letter in the orginal word.
*/
function letters(word){
    var letters = []; //new array 
    for(var i=0; i<word.length; i++){ //looping through the word
        letters.push({
          letter: word[i], //pushing each letter of the word into the array
          position: i // with the position of the letter in the word
        });
      }
      return letters;
}
/**
 *@param {shown} is the current page that is visible to the player. id of the pages are passed as parameters. Ex: page1
 *@param {unshown} is the page that the player is navigating to.Id of the pages are passed as parameters. Ex:page2
 *Description: pageshide function hides the current page the player is on and displays the page the player wishes to navigate to.
 *@return: hides current page and shows thenext or previous page.
 *Ex: pageshide('page1','page2');
*/
function pageshide(shown,unshown){

    document.getElementById(shown).style.display="none"; //hides a page
    document.getElementById(unshown).style.display="block"; //shows a page

}


/**
 *Description: singlePlayer begins the single player game mode. this function navigates the player to the category list page to select the
 * catefory the player likes to play
 *@return: navigates the player to the category page
 * Ex: singlePlayer();
*/
function singlePlayer(){

    pageshide("page2","page3");
    categoryList(); //calls the categoryList function which generates the category list.


}
/**
 *Description: multiPlayer begins the multi player game mode. this function navigates the player to the game page.
 *@return: navigates the player to the game page
 * Ex: multiPlayer();
*/
function multiPlayer(){

    pageshide("page2","page4");
    var multiplayerModal = document.getElementById('guessWord');
    multiplayerModal.style.display = "block"; //displays popup for player one to enter a word
    document.querySelector("#playerWord").focus();//focuses on the text box for the player to enter a word.
}

/**
 *Description: singlePlayerGameStart genrates a random word from the list of words by calling the random word function and starts the single
 * player game mode
 * Ex: singlePlayerGameStart();
*/
function singlePlayerGameStart(){
    current_word=randomWord(current_category); //generates random word and stores as an array in current_word
    console.log(current_word);
    gameMode="singlePlayer"; //stores the current game mode the player is on
    gameStart();// calls game start function
}

/**
 *Description: multiPlayerGameStart hides the pop the player1 used to enter the word and calls the game start functionthe begin the game
 *Ex: multiPlayerGameStart();
*/
function multiPlayerGameStart(){
    var multiplayerModal = document.getElementById('guessWord');
    multiplayerModal.style.display = "none";
    var newguessword= document.getElementById('playerWord').value;
    console.log(newguessword.length)
    current_word=wordData(newguessword);
    console.log(current_word);
    gameMode="multiPlayer";
    gameStart();
}

/**
 *Description: gameStart starts the game by by calling a draw function and time start function and creating sequences of dashes 
 *of the word randomly picked
 Ex:gameStart();
*/
function gameStart(){
    startTime = new Date();
    timerStart(); // starts the timer
    draw(); //draws a stick hangman base
    var ul = document.getElementById("guesslist");
    ul.innerHTML = "";
    current_word.letters.forEach(function(element){ //loops through the current word to generate sequence of dashes
        var li = document.createElement("li");
        li.setAttribute("data-position",element.position);
        li.setAttribute("class","guesslistitem");
        li.appendChild(document.createTextNode("*"));
        ul.appendChild(li); //appends the list item(li) to the un ordered list(ul)
         console.log(element.letter);
    });

}
/**
 *Description: guess function is fired each time the guess is made by the player. this function calls several other fucntion to validate the guess 
 * perfroms other tasks based on the guess
 * Ex: guess();
*/
function guess(){
    var target = event.target;
    var guessedLetter=target.getAttribute("value");
    target.style.visibility = "hidden"; //hide the letter from on screen keyboard
    var identifiedLetter = validateGuess(guessedLetter);
    if(identifiedLetter.length>0){
        score += 10; //increase the score for good guess
        playSound(rightGuess_audio); // play sound for right guess
        var newscore= document.getElementById("score");
        newscore.innerHTML=score;
        setLetters(identifiedLetter); //set the letters on the sequence of dashes
    }else{
        incorrectGuess.push(guessedLetter); //push incorrect guess inside the array
        playSound(wrongGuess_audio) //play sound for wrong guess
        guesscount++; // increase guesscount
        hang(); //draw stick man 
        if(incorrectGuess.length == 7){ 

            console.log("lost")
            lost(); //call lost function if the guesscount is equal to 7 or player guesses 7 times
        }
    }
}

/**
 *@param {guessedLetter} guessed letter by the player Ex: 'A', 'B',etc.
 *Description: validateGuess validates the guessed letter by comparingthe guessed letter with the acutal word
 * @return: returns an array with the correct guesses.
 * Ex: validateGuess('a');
*/
function validateGuess(guessedLetter){

    var correctGuess=[];
    current_word.letters.forEach(function(element){ //loops the letters of the current word
        if(guessedLetter.toLowerCase()==element.letter.toLowerCase()){ //checks if the letter guessed is right

            correctGuess.push(element);//pushes the letter in the array.
            validatedGuess.push(element.letter); 

        }

    });

    return correctGuess; //returns an array with correct guesses

}

/**
 *@param {idnetifiedLetter} is array with a letter and its position is the actual word.
 *Description: setLetters sets the correct letters  guessed in the sequence of dashes created. 
 *Ex: setLetters(array);
*/
function setLetters(identifiedLetter){

    correctGuessCount += identifiedLetter.length; //correct guess count increased
    identifiedLetter.forEach(function(element){ //looping through the idenfied letters to place them in the correct position
        var li= document.querySelector( '[ data-position="'+element.position+'" ]' ); //setting letters in the list item
        li.classList.add("correct");
        li.innerHTML=element.letter;

    });

    if(correctGuessCount == current_word.letters.length){ //checking if all the letters are identified
        win(); //game won function called
    }

}

/**
 *
 *Description: draw uses javascript canvas to draw a stick man for hangman game.
 *@return: draws a stickman and vetical bars in the canvas
 *Ex: draw();
*/
function draw(){
    var ctx = document.getElementById("hangman").getContext('2d');
        ctx.fillStyle = "#3A7D5E";
        ctx.strokeStyle="#f1f1f1";
        ctx.lineWidth=3;
        ctx.fillRect(0, 0, 300, 300);
        ctx.beginPath(); //vertical bar
            ctx.moveTo(50,270);
            ctx.lineTo(50,25);
            ctx.stroke();
        ctx.beginPath(); //vertical bar long piece
            ctx.moveTo(65,270);
            ctx.lineTo(65,85);
            ctx.stroke();
        ctx.beginPath(); //vertical bar short piece
            ctx.moveTo(65,64);
            ctx.lineTo(65,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar
            ctx.moveTo(49,25);
            ctx.lineTo(175,25);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar short piece
            ctx.moveTo(49,40);
            ctx.lineTo(86,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar long piece
            ctx.moveTo(106,40);
            ctx.lineTo(175,40);
            ctx.stroke();
        ctx.beginPath(); //small vertical bar
            ctx.moveTo(173,25);
            ctx.lineTo(173,40);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(100,25);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(60,90);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(60,90);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(100,25);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //ground
            ctx.moveTo(35,270);
            ctx.lineTo(265,270);
            ctx.stroke();
        ctx.beginPath(); //noose
            ctx.moveTo(150,40);
            ctx.lineTo(150,80);
            ctx.stroke();
    
}

/**
 *
 *Description: hang function is fired when an incorrect guess is made and it draws each part of the stick man for evey incorrect guess
 *Ex: hang();
*/

function hang(){
var ctx = document.getElementById("hangman").getContext('2d');
    if(guesscount==1){
        ctx.beginPath(); //head
            ctx.arc(150, 100, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //mouth
            ctx.arc(150, 103, 9, 0, Math.PI);
            ctx.stroke();
    }
     if(guesscount==2){
        ctx.beginPath(); //body
            ctx.moveTo(150,120);
            ctx.lineTo(150,190);
            ctx.stroke();
    }
     if(guesscount==3){
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,108);
            ctx.lineTo(160,108);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,135);
            ctx.lineTo(180,160);
            ctx.stroke();
    }
    if(guesscount==4){
        ctx.beginPath(); //left arm
            ctx.moveTo(150,135);
            ctx.lineTo(120,160);
            ctx.stroke();
    }
    if(guesscount==5){
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //sad mouth
            ctx.arc(150, 112, 9, 0, Math.PI, true);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,188);
            ctx.lineTo(180,230);
            ctx.stroke();
    }
    if(guesscount==6){
        ctx.beginPath(); //left leg
            ctx.moveTo(151,188);
            ctx.lineTo(120,230);
            ctx.stroke();
    }
    if(guesscount==7){
        ctx.fillRect(138, 90, 24, 24); //cover face
        ctx.fillRect(118, 121.2, 70, 120); //cover body
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,108);
            ctx.lineTo(160,108);
            ctx.stroke();
        ctx.beginPath(); //body
            ctx.moveTo(150,135);
            ctx.lineTo(150,205);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,150);
            ctx.lineTo(180,175);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(150,150);
            ctx.lineTo(120,175);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,203);
            ctx.lineTo(180,245);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,203);
            ctx.lineTo(120,245);
            ctx.stroke();
        ctx.lineWidth=2;
        ctx.beginPath(); //left eye
            ctx.moveTo(140,93);
            ctx.lineTo(146,98);
            ctx.stroke();
            ctx.moveTo(140,98);
            ctx.lineTo(146,93);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(154,98);
            ctx.lineTo(160,93);
            ctx.stroke(); 
            ctx.moveTo(154,93);
            ctx.lineTo(160,98);
            ctx.stroke();
    }
}

/**
 *
 *Description: timerStart starts the gametimer which holds the elapsed time the player plays every game.
 * Ex: timeStart();
*/
function timerStart() {
    // later record end time
    var endTime = new Date();

    // time difference in ms
    var timeDiff = endTime - startTime;

    // strip the miliseconds
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff % 60);

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    var minutes = Math.round(timeDiff % 60);

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    var hours = Math.round(timeDiff % 24);

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    // the rest of timeDiff is number of days
    var days = timeDiff;


    var gameTime= document.getElementById('time');
    gameTime.innerHTML= "Time:  " +minutes + ":" + seconds;
    timer =  setTimeout(timerStart, 1000); //updates timer every second
   
}

/**
 *
 *Description: timerStop stops the times when eveer called. This function is called when the game is paused or won or lost.
 *Ex: timerStop();
*/
function timerStop(){
    var timeheader=document.getElementById('time');
    var timeval=document.getElementById('time').innerHTML;
    window.clearTimeout(timer);
    timeheader.innerHTML=timeval;
}

/**
 *
 *Description: hint reveals on letter from the actual word for the player. The player can invoke this function only once during the game play.
 *@return: Reveals on letter from the actual letter and sets it in the sequence of dashes.
 *Ex: hint();
*/
function hint(){

     var hintbtn = document.querySelector('.hintButton');
     hintbtn.innerHTML="Hint: 0"; 
     hintbtn.disabled=true; //disables the hint button because the player has only one hint per game

    if(validatedGuess.length == 0){ //checks if player has already made a right guess
        var hint_letter = current_word.letters[Math.floor(Math.random() * current_word.letters.length)].letter;//picks random letter if no right guesses are made.
        var hintidentified=validateGuess(hint_letter); 
        var hideletter = hintidentified[0].letter;
        document.querySelector('#'+hideletter).style.visibility='hidden';
        setLetters(hintidentified); //sets the letter in the dashes

    }else{
        current_word.letters.some(function(element){ //loops through the current word to check if player has already guessed

            if(!validatedGuess.includes(element.letter)){
                var secondguess=validateGuess(element.letter);
                console.log(secondguess);
                var hideletter = secondguess[0].letter;
                document.querySelector('#'+hideletter).style.visibility='hidden'; //hides lettersin onscreen keyboard
                setLetters(secondguess);
                return element;//breaks the for loop
            }

        });
    }
}
/**
 *
 *Description: pause function is triggered when the game is paused by the player. It pauses the game
 *Ex: pause();
*/
function pause(){
    var modal = document.getElementById('gamepause');
    modal.style.display = "block"; //hides the popup
    timerStop();// stops timer

}
/**
 *
 *Description: gameResume function is triggered when the game is resumed by the player. it resumes the game play
 *Ex: gameResume();
*/
function gameResume(){
    var modal = document.getElementById('gamepause');
    modal.style.display = "none"; //hides the popup
    timerStart(); //starts the timer 
}
/**
 *
 *Description: quitGame quits the game and navigates the player to home screen. It is triggered if the game is quit by the player.
 *Ex: quitGame()
*/
function quitGame(){

    var modal = document.getElementById('gamepause');
    modal.style.display = "none";//hide popup
    pageshide("page4","page1"); 
}


/**
 *
 *Description: lost is triggered when the game is lost ie) when the player runs out of the guesses.
 *@returns: ends the game and sugguests the player to play again
 *Ex: lost();
*/
function lost(){

    timerStop(); // stops timer
    playSound(GameLost_audio);//plays sound
    var lostText = document.querySelector('#modalBody p');
    lostText.innerHTML="You Lost.. The word is "+current_word.word;
    var modal = document.getElementById('myModal');
    modal.style.display = "block";// play again popup shown

}

/**
 *
 *Description: win is triggered when the game is won ie) when the player guesses the word
 *@returns: the game is won and suggests the player to play again
 *Ex: win();
*/
function win(){

    timerStop();//time stopped
    playSound(gameWin_audio); //aduio played
    var winText = document.querySelector('#modalBody p');
    winText.innerHTML="Awesome,You have Won! Your Score "+ score;
    var modal = document.getElementById('myModal');
    modal.style.display = "block"; //win pop up showed

}




/**
 *
 *Description: restartGame is triggered when the player clikcs on the play again or reload button. Thi function reinitilizes all 
 *all the variables and arrays and generates a new word if it is a single player mode or prompts to the player to enter 
 *a new word if it is a multi player game mode
 *@returns: resets the game
 *Ex: restartGame();
*/
function restartGame(){
    init();
    if(gameMode=="singlePlayer"){//checks the game mode

        singlePlayerGameStart();

    }else{
        var multiplayerModal = document.getElementById('guessWord');
        var txtbox= document.querySelector("#playerWord");
        txtbox.value="";
        multiplayerModal.style.display = "block";
         document.querySelector('#playerWord').focus();
    }
    //displays all the letters on the on sscreen keyboard.
    var firstrowletters=document.querySelector(".firstrow").children;

    for (var i = 0; i < firstrowletters.length; i++) {
        if (firstrowletters[i].tagName == "DIV") {   
        firstrowletters[i].style.visibility = 'visible';  
        }
    }
    var secondrowletters=document.querySelector(".secondrow").children;
    for (var i = 0; i < secondrowletters.length; i++) {
        if (secondrowletters[i].tagName == "DIV") {   
            secondrowletters[i].style.visibility = 'visible'; 
        }
    }
    var thirdrowletters=document.querySelector(".thirdrow").children;
    for (var i = 0; i < thirdrowletters.length; i++) {
        if (thirdrowletters[i].tagName == "DIV") {  
            thirdrowletters[i].style.visibility = 'visible'
         }
    }

    var modal = document.getElementById('myModal');
    modal.style.display = "none"; //hides the popup.

}









