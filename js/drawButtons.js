function drawButtons(){
	var newCharacterButton;
	newCharacterButton = game.add.button(600, 400, 'button', newCharacter, this)
	newCharacterButton.name = 'newCharbtn'
	var transferItemButton;
	transferItemButton = game.add.button(500, 400, 'dummy', transferItem, this)
	transferItemButton.name = 'transferItembtn'
	var returnToMainButton;
	returnToMainButton = game.add.button(300, 400, 'mainButton', returnToMain, this)
	returnToMainButton.name = "returnToMainBtn"
}

function returnToMain() {
	game.state.start('MainScreenStateName');
}