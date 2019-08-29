Name: Prathic Srinivas

overview: 

Hangman is game played by kids and adults in which a person thinks of a word and another person tries to find it by guessing the letters of the word. In this game, the word that has to be identified is denoted by sequence of dashes where each dash represents a letter in the word that has to guessed. The player has to guess a letter and if the letter is correctly guessed then the letter is written on the right position on the dash. If the guessed letter is incorrect the other player draws a single piece of the hangman figure. If the player guessing guesses the word within the number of guesses allowed he/she wins or the other player wins. 

Is your vocabulary big enough to save the poor stick man? Play Hangman and find out!

Hangman brings the classic game Hangman to your device with animations and gameplay that will make you keep playing for more than 10 hours. This application has words from several categories such as:

1. Technology
2. Sports
3. Animals
4. General
5. Scientific
6. Plants
7. Vegetables
8. Food
9. Geography
10. Country
11. Weather
12. Clothes
13. Insects

Children can play single player game mode for the several hours and this game will help the improve their vocabulary.


API References:

This section lists out and explains all the methods used in the application.

1. init() : This method initializes all the variables and arrays to 0 to empties in case of an array.

2. playSound(sound): This method plays specific sound passed to it. It takes sound name as parameter.

3. stopSound(sound): This method pauses the sound name being passed to it as parameter and resets its play time to start.

4. catergoryList(): This method creates a category list for the player to choose from

5. randomWord(category): This method picks a random word from the category specified. It takes category as parameter.

6. wordData(word): This method spilts the word into an array and returns it to method from where it is called. It takes word as a parameter. 

7. letters(word): This method spilts the word into individual letters and pushes it into an array. It also takes the position of the array and stores it. It takes any word as parameter.

8. pageshide(shown,unshown): This method takes two parameters shown and unshown. When two page ids are passed to this method it hides one page and shows the other.

9. singlePlayer(): This method navigates user to next page and calls categoryList

10. multiPlayer(): This method navigates user to multiplayer game page and displays a pop up for the player1 to type in the word

11. singlePlayerGameStart(): This method navigates the user to single player game mode by picking a random word from the category selected.

12. multiPlayerGameStart(): This method is fired when the player on enters the word and presses play button. it assigns the word entered by the player1 as the new current word and starts the game. 

13. gameStart(): This method starts the time, draws stickman in canvas and display the keyboard with sequence of dashes of the word to be guessed.

14. guess(): This method is fired when ever a guess is made by the player. It passes the letter to several different functions to validate it and set it in the correct position.

15. validateGuess(guessedLetter): This method takes guessed letter as parameter which is then validated with original word to check if the guess is correct or not.

16. setLetters(identfiedLetter): This method takes an array as parameter which contains an  identified letter and its position. This parameter is then used to set the letter in the right dash in the sequences of dashes.

17. draw(): This method draws the stick man in the canvas.

18. hang(): This method is called every time a wrong guess is made by the player. It draws one part of the stick man for every wrong guess.

19 timerStart(): This method starts the elapsed time for the game. 

20. timerStop(): This method stops the timer.

21. hint(): This method is called when ever the hint button on the game screen is pressed. IT reveals on letter in the word. This function can be used only once per word by the player.

22, pause(): This method is triggered when the game is paused. It pauses the game and resumes the timer.

23. gameResume() :  this method is triggered when the resume button is pressed in the pause options. it resumes the game and resumes the timer.

24. quitGame(): This method is triggered when the quit button in the game pause menu is pressed. This method quits the game and navigates the player to the home screen.

25. lost(): This method is triggered when the player runs out of guesses. It displays the name the player was guessing and suggests a play again. 

26. win(): This method is triggered when the user guesses the word. It displays the user score.

27 restartGame(): This method is called when the reload button is pressed of when the player presses play again button. It picks a random word from the category again and loads the game in single player game mode. In multi player game mode it prompts to the player for a word to be entered.


Data Structures: (variable (variableType))

1. current_word[] (Array) : This holds the current word as and array. Example: {letters: Array(7), word: "firefox", totalLetters: 7}

2. current_category (string): This variable holds the current category the player is on in single player game mode. Ex: "Insects"

3. correctGuessCount (integer): This variable holds the value of correct guesses by the player. Ex : 3 

4. incorrectGuess[] (Array): This holds the incorrect guesses the player has made. Ex:["A","F","T"].

5. validatedGuess[] (Array): This holds the correct guess the player has made. Ex: ["B","A","L","L"]

6. gameMode (string): This stores the game mode the user is on. Ex: "singleplayer" or "Multiplayer"

7. timer (datetime): This variable maintains the elapsed time. 

8. startTime (datetime): This gets the current time.

9. score (integer): This variable stores the score of the player. Ex:30

10. guesscount (integer): This variable stores the incorrect guesses made by player. Ex: 6

11. wrongGuess_audio (audio): This variable stores the audio file that is played during wrong guesses.

12. GameLost_audio  (audio); This variable stores the audio file that is played if the player loses the game.

13. rightGuess_audio (audio): This variable stores the audio file that is played if the player makes a right guess

14. gameWin_audio (audio): This variable stores the audio file that is played if the player wins the game.

15. wordList[] (array): This array consists on all the categories and their respective words. Ex: var wordList={Technology:[{word:"chrome"}]

16. info[] (array): This array consists of the information(text) that is been used in the about page. Ex: var info={about:"text",legal:"text"}
