function drawInventory() {
	drawTextBoxes();
	drawInventoryButtons();
}

function drawTextBoxes() {
	textDisplays = Array();
	textDisplays[0] = game.add.text(32, 30, 'None');
    textDisplays[1] = game.add.text(32, 150, 'None');

}

function drawInventoryButtons() {
	var returnToMainButton;
	returnToMainButton = game.add.button((game.width - 50), (game.height - 50), 'mainButton', returnToMain, this)
	returnToMainButton.name = "returnToMainBtn"
	
}