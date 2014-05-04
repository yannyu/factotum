function drawNPCScreen() {
	drawNPCScreenButtons();
	var returnToMainScreenButton;
	returnToMainScreenButton = game.add.button(600, 100, 'button', returnToMainScreen, this)
	returnToMainScreenButton.name = 'returnToMainScreenBtn'
	textDisplays[0] = game.add.text(32, 30,npcs[0].getInfo());
}

function returnToMainScreen() {
	game.state.start('MainScreenStateName');
}