function drawNPCScreenButtons(){
	var newCharacterButton;
	newCharacterButton = game.add.button(600, 400, 'button', newNPC, this)
	newCharacterButton.name = 'newCharbtn'
	var returnToMainScreenButton;
	returnToMainScreenButton = game.add.button(600, 100, 'butt', returnToMainScreen, this)
	returnToMainScreenButton.name = 'returnToMainScreenBtn'
}

function newNPC() {
	global_npcs[0].randomize();
    global_textDisplays[0].setText(global_npcs[0].getInfo());
}

function returnToMainScreen() {
	game.state.start('MainScreenStateName');
}