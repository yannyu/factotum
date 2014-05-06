function drawNPCScreenButtons(){
	var newCharacterButton;
	newCharacterButton = game.add.button(600, 400, 'button', newNPC, this)
	newCharacterButton.name = 'newCharbtn'
	var returnToMainScreenButton;
	returnToMainScreenButton = game.add.button(750, 25, 'butt', returnToMainScreen, this)
	returnToMainScreenButton.name = 'returnToMainScreenBtn'
	var addCharacterButton;
	addCharacterButton = game.add.button(600, 200, 'butt', addNPC, this);
	addCharacterButton.name = 'addCharacterBtn'
}

function newNPC() {
	for (i = 0; i < global_npcs.length; i++) {
		global_npcs[i].randomize();
   	    global_textDisplays[i].setText(global_npcs[i].getInfo());
	}
}

function returnToMainScreen() {
	game.state.start('MainScreenStateName');
}

function addNPC() {
	global_npcs.push(new Npc());
	global_npcs[global_npcs.length-1].create();
	global_textDisplays[global_npcs.length-1] = game.add.text(32, 30+(global_npcs.length-1)*70,global_npcs[global_npcs.length-1].getInfo());
}