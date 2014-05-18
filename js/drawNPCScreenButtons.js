function drawNPCScreenButtons(){
	var newCharacterButton;
	newCharacterButton = game.add.button(600, 400, 'button', randomizeNPCs, this)
	newCharacterButton.name = 'newCharbtn'
	var returnToMainScreenButton;
	returnToMainScreenButton = game.add.button(750, 25, 'butt', returnToMainScreen, this)
	returnToMainScreenButton.name = 'returnToMainScreenBtn'
	var addCharacterButton;
	addCharacterButton = game.add.button(600, 200, 'butt', addNPC, this);
	addCharacterButton.name = 'addCharacterBtn'
	var killRandomCharacterButton;
	killRandomCharacterButton = game.add.button(600, 300, 'butt', killRandomNPC, this);
	killRandomCharacterButton.name = 'killRandomCharacterBtn'

}

function randomizeNPCs() {
	for (i = 0; i < global_npcs.length; i++) {
		global_npcs[i].tickNpcMovement();
   	    global_textDisplays[i].setText(global_npcs[i].getInfo());
	}
}

function returnToMainScreen() {
	game.state.start('MainScreenStateName');
}

function addNPC() {
	global_npcs.push(new Npc());
	global_npcs[global_npcs.length-1].create();
	global_textDisplays[global_npcs.length-1] = game.add.text(32, 30+(global_npcs.length-1)*100,global_npcs[global_npcs.length-1].getInfo());
}

function killRandomNPC() {
	for (i = 0; i < global_npcs.length; i++) {
		global_textDisplays[i].setText('');
	}

	unluckyNPC = game.rnd.integerInRange(0,global_npcs.length-1);
	global_npcs.splice(unluckyNPC, 1);

	for (i = 0; i < global_npcs.length; i++) {
		global_textDisplays[i].setText(global_npcs[i].getInfo());
	}
}