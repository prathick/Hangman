/**
 *Description: page1 creates the first page of the game
 *@return: appends a div element to the body tag
 *Ex page1();
*/
function page1(){

	var page1div1  = document.createElement('div');
	page1div1.setAttribute("class","wrapper");
	page1div1.setAttribute("id","page1");


	var page1div2 = document.createElement('div');

	var page1div3 = document.createElement('div');
	page1div3.setAttribute("class","header");

	var page1img =document.createElement('img');
	page1img.setAttribute("class","about");
	page1img.setAttribute("src","images/about.ico");
	page1img.setAttribute("onclick","pageshide('page1','about');");

	var page1header = document.createElement('h3');
	page1header.innerHTML="Hangman";

	var page1div4 = document.createElement('div');
	page1div4.setAttribute("class","content");

	var page1div5 = document.createElement('div');
	page1div5.setAttribute("class","gamestart");

	var page1button1 = document.createElement('button');
	page1button1.setAttribute("class","playbutton");
	page1button1.setAttribute("onclick","pageshide('page1','page2')");

	var page1span1 = document.createElement('span');
	page1span1.setAttribute("class","playicon");



	var page1span2 = document.createElement('span');
	page1span2.setAttribute("class","starttxt");
	page1span2.innerHTML="Start";


	page1button1.appendChild(page1span1);
	page1button1.appendChild(page1span2);


	page1div5.appendChild(page1button1);
	page1div4.appendChild(page1div5);

	page1div3.appendChild(page1img);
	page1div3.appendChild(page1header);

	page1div2.appendChild(page1div3);
	page1div2.appendChild(page1div4);

	page1div1.appendChild(page1div2);


	document.body.appendChild(page1div1);//append page1 to body


}

/**
 *Description: page2 creates the Second page of the game
 *@return: appends a div element to the body tag
 *Ex page2();
*/
function page2(){

	var page2div1  = document.createElement('div');
	page2div1.setAttribute("class","wrapper");
	page2div1.setAttribute("id","page2");

	var page2div2 = document.createElement('div');

	var page2div3 = document.createElement('div');
	page2div3.setAttribute("class","header");


	var page2img =document.createElement('img');
	page2img.setAttribute("class","about");
	page2img.setAttribute("src","images/home.ico");
	page2img.setAttribute("onclick","pageshide('page2','page1');");

	var page2header = document.createElement('h3');
	page2header.innerHTML="Hangman";

	var page2div4 = document.createElement('div');
	page2div4.setAttribute("class","content");

	var page2div5 = document.createElement('div');
	page2div5.setAttribute("class","gamestart");

	var page2button1 = document.createElement('button');
	page2button1.setAttribute("class","player1");
	page2button1.setAttribute("onclick","singlePlayer()");

	var page2span1 = document.createElement('span');
	page2span1.innerHTML="Single Player";

	var page2button2 = document.createElement('button');
	page2button2.setAttribute("class","player1");
	page2button2.setAttribute("onclick","multiPlayer()");

	var page2span2 = document.createElement('span');
	page2span2.innerHTML="Multi Player";


	page2button2.appendChild(page2span2);
	page2button1.appendChild(page2span1);

	page2div5.appendChild(page2button1);
	page2div5.appendChild(page2button2);

	page2div4.appendChild(page2div5);

	page2div3.appendChild(page2img);
	page2div3.appendChild(page2header);

	page2div2.appendChild(page2div3);
	page2div2.appendChild(page2div4);

	page2div1.appendChild(page2div2);

	document.body.appendChild(page2div1);//append page2 to body
}
/**
 *Description: page3 creates the third page of the game
 *@return: appends a div element to the body tag
 **Ex page3();
*/
function page3(){

	var page3div1 = document.createElement('div');
	page3div1.setAttribute("id","page3");
	page3div1.setAttribute("class","wrapper");

	var page3div2 = document.createElement('div');

	var page3div3 = document.createElement('div');
	page3div3.setAttribute("class","header");

	var page3img =document.createElement('img');
	page3img.setAttribute("class","about");
	page3img.setAttribute("src","images/home.ico");
	page3img.setAttribute("onclick","pageshide('page3','page1');");

	var page3header = document.createElement('h3');
	page3header.innerHTML="Category";

	var page3div4 = document.createElement('div');
	page3div4.setAttribute("class","content");

	var page3Ul = document.createElement('ul');
	page3Ul.setAttribute("class","categoryList");



	page3div3.appendChild(page3img);
	page3div3.appendChild(page3header);

	page3div4.appendChild(page3Ul);

	page3div2.appendChild(page3div3);
	page3div2.appendChild(page3div4);

	page3div1.appendChild(page3div2);

	document.body.appendChild(page3div1);//append page3 to body

}
/**
 *Description: page4 creates the fourth page of the game
 *@return: appends a div element to the body tag
 *Ex page4();
*/

function page4(){

	var page4div1  = document.createElement('div');
	page4div1.setAttribute("class","wrapper");
	page4div1.setAttribute("id","page4");


	var page4div2 = document.createElement('div');

	var page4div3 = document.createElement('div');
	page4div3.setAttribute("class","gamecontent");


	var page4div4 = document.createElement('div');
	page4div4.setAttribute("class","gameheaders");

	var page4div5 = document.createElement('div');
	page4div5.setAttribute("class","timeholder");

	var page4header1 = document.createElement("h3");
	page4header1.setAttribute("id","time");
	page4header1.innerHTML="Time:  0:0";

	var page4div6 = document.createElement('div');
	page4div6.setAttribute("class","scoreholder");

	var page4header2 = document.createElement("h3");
	page4header2.innerHTML="Score : ";

	var page4dspan1 = document.createElement('span');
	page4dspan1.setAttribute("id","score");

	var page4div7 = document.createElement('div');
	page4div7.setAttribute("class","hintholder");

	var page4button1 = document.createElement('button');
	page4button1.setAttribute("class","hintButton");
	page4button1.setAttribute("onclick","hint()");
	page4button1.innerHTML="Hint: 1";

	var page4dspan2 = document.createElement('span');
	//page3dspan1.setAttribute("id","score");

	var page4div8 = document.createElement('div');
	page4div8.setAttribute("class","clear");

	var page4div21 = document.createElement('div');
	page4div21.setAttribute("class","pauseholder");

	var page4button4 = document.createElement('button');
	page4button4.setAttribute("class","pause");
	page4button4.setAttribute("onclick","pause()");

	var page4button5 = document.createElement('button');
	page4button5.setAttribute("class","reload");
	page4button5.setAttribute("onclick","restartGame()");

	var page4div9 = document.createElement('div');
	page4div9.setAttribute("class","drawing");

	var pag4canvas = document.createElement('canvas');
	pag4canvas.setAttribute("id","hangman");
	pag4canvas.setAttribute("width","300px");
	pag4canvas.setAttribute("height","300px");

	var page4div10 = document.createElement('div');
	page4div10.setAttribute("class","guessbox");

	var page4ul = document.createElement('ul');
	page4ul.setAttribute("id","guesslist");
	
	var page4div11 = document.createElement('div');
	page4div11.setAttribute("id","letterBank");

	var page4div12 = document.createElement('div');
	page4div12.setAttribute("class","firstrow");

	page4div12.innerHTML='<div id="a" value="A" onclick="guess()">A</div><div id="b" value="B" onclick="guess()">B</div><div id="c" value="C" onclick="guess()">C</div><div id="d" value="D" onclick="guess()">D</div><div id="e" value="E" onclick="guess()">E</div><div id="f" value="F" onclick="guess()">F</div><div id="g" value="G" onclick="guess()">G</div><div id="h" value="H" onclick="guess()">H</div><div id="i" value="I" onclick="guess()">I</div><div id="j" value="J" onclick="guess()">J</div><div id="k" value="K" onclick="guess()">K</div>';

	var page4div13 = document.createElement('div');
	page4div13.setAttribute("class","secondrow");


	page4div13.innerHTML='<div id="l" value="L" onclick="guess()">L</div><div id="m" value="M" onclick="guess()">M</div><div id="n" value="N" onclick="guess()">N</div><div id="o" value="O" onclick="guess()">O</div><div id="p" value="P" onclick="guess()">P</div><div id="q" value="Q" onclick="guess()">Q</div><div id="r" value="R" onclick="guess()">R</div><div id="s" value="S" onclick="guess()">S</div><div id="t" value="T" onclick="guess()">T</div>';


	var page4div14 = document.createElement('div');
	page4div14.setAttribute("class","thirdrow");


	page4div14.innerHTML='<div id="u" value="U" onclick="guess()">U</div><div id="v" value="V" onclick="guess()">V</div><div id="w" value="W" onclick="guess()">W</div><div id="x" value="X" onclick="guess()">X</div><div id="y" value="Y" onclick="guess()">Y</div><div id="z" value="Z" onclick="guess()">Z</div>';



	var page4div15 = document.createElement('div');
	page4div15.setAttribute("id","myModal");
	page4div15.setAttribute("class","modal");


	var page4div16 = document.createElement('div');
	page4div16.setAttribute("class","modal-content");


	var page4div17 = document.createElement('div');
	page4div17.setAttribute("id","modalBody");
	page4div17.setAttribute("class","modal-body");


	var page4para = document.createElement('p');
	page4para.innerHTML="Some text in the Modal Body";

	var page4button2 = document.createElement("button");
	page4button2.setAttribute("class","playagain");
	page4button2.setAttribute("onclick","restartGame()");
	page4button2.innerHTML="Play Again";

	var page4div18 = document.createElement('div');
	page4div18.setAttribute("id","guessWord");
	page4div18.setAttribute("class","modal");


	var page4div19 = document.createElement('div');
	page4div19.setAttribute("class","modal-content");


	var page4div20 = document.createElement('div');
	page4div20.setAttribute("id","guessWordbody");
	page4div20.setAttribute("class","modal-body");


	var page4para2 = document.createElement('p');
	page4para2.innerHTML="Enter the word to be Guessed";

	var page4input = document.createElement('input');
	page4input.setAttribute("type","text");
	page4input.setAttribute("name","word");
	page4input.setAttribute("id","playerWord");

	var page4button3 = document.createElement("button");
	page4button3.setAttribute("class","playagain");
	page4button3.setAttribute("onclick","multiPlayerGameStart()");
	page4button3.innerHTML="Start";


	var page4div22 = document.createElement('div');
	page4div22.setAttribute("id","gamepause");
	page4div22.setAttribute("class","modal");


	var page4div23 = document.createElement('div');
	page4div23.setAttribute("class","modal-content");


	var page4div24 = document.createElement('div');
	page4div24.setAttribute("class","modal-body");


	var page4button6 = document.createElement("button");
	page4button6.setAttribute("class","resume");
	page4button6.setAttribute("onclick","gameResume()");
	page4button6.innerHTML="Resume";

	var page4button7 = document.createElement("button");
	page4button7.setAttribute("class","quit");
	page4button7.setAttribute("onclick","quitGame()");
	page4button7.innerHTML="Quit";





	
	



	// header append
	page4div5.appendChild(page4header1);
	page4header2.appendChild(page4dspan1);
	page4div6.appendChild(page4header2);


	page4button1.appendChild(page4dspan2);
	page4div7.appendChild(page4button1);

	page4div4.appendChild(page4div5);
	page4div4.appendChild(page4div6);
	page4div4.appendChild(page4div7);
	page4div4.appendChild(page4div8);
	page4div4.appendChild(page4div21);
	// header append end

	//drawing
	page4div9.appendChild(pag4canvas);

	
	//guess list
	page4div10.appendChild(page4ul);

	//letter bank start
	page4div11.appendChild(page4div12);
	page4div11.appendChild(page4div13);
	page4div11.appendChild(page4div14);
	//letterbank end

	page4div21.appendChild(page4button4);
	page4div21.appendChild(page4button5);

	page4div3.appendChild(page4div4);
	//page4div3.appendChild(page4div8);
	
	page4div3.appendChild(page4div9);
	page4div3.appendChild(page4div10);
	page4div3.appendChild(page4div11);


	//modal popup
	page4div17.appendChild(page4para);
	page4div17.appendChild(page4button2);
	page4div16.appendChild(page4div17);
	page4div15.appendChild(page4div16);

	page4div20.appendChild(page4para2);
	page4div20.appendChild(page4input);
	page4div20.appendChild(page4button3);
	page4div19.appendChild(page4div20);
	page4div18.appendChild(page4div19);



	page4div24.appendChild(page4button6);
	page4div24.appendChild(page4button7);
	page4div23.appendChild(page4div24);
	page4div22.appendChild(page4div23);




	page4div2.appendChild(page4div3);


	page4div1.appendChild(page4div2);
	page4div1.appendChild(page4div15);
	page4div1.appendChild(page4div18);
	page4div1.appendChild(page4div22);



	document.body.appendChild(page4div1);//append page4 to body

}

/**
 *Description: aboutpage creates the about page of the game
 *@return: appends a div element to the body tag
 *Ex aboutpage();
*/

function aboutpage(){

	var page5div1  = document.createElement('div');
	page5div1.setAttribute("class","wrapper");
	page5div1.setAttribute("id","about");

	var page5div2 = document.createElement('div');

	var page5div3 = document.createElement('div');
	page5div3.setAttribute("class","header");

	var page5img =document.createElement('img');
	page5img.setAttribute("class","about");
	page5img.setAttribute("src","images/home.ico");
	page5img.setAttribute("onclick","pageshide('about','page1');");

	var page5header1 = document.createElement('h3');
	page5header1.innerHTML="About";

	var page5div4 = document.createElement('div');
	page5div4.setAttribute("class","content");

	var page5header2 = document.createElement('h4');
	page5header2.setAttribute("class","aboutheader")
	page5header2.innerHTML="About:";

	var page5para1 = document.createElement('p');
	page5para1.setAttribute("class","aboutcontent");
	page5para1.innerHTML=info.about;

	var page5header3 = document.createElement('h4');
	page5header3.setAttribute("class","aboutheader2")
	page5header3.innerHTML="Legal Notices:";


	var page5para2 = document.createElement('p');
	page5para2.setAttribute("class","aboutcontent");
	page5para2.innerHTML=info.legal;


	page5div4.appendChild(page5header2);
	page5div4.appendChild(page5para1);
	page5div4.appendChild(page5header3);
	page5div4.appendChild(page5para2);


	page5div3.appendChild(page5img);
	page5div3.appendChild(page5header1);


	page5div2.appendChild(page5div3);
	page5div2.appendChild(page5div4);

	page5div1.appendChild(page5div2);

	document.body.appendChild(page5div1);//append about page to body



}

