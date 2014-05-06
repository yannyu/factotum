function drawInventory() {
	drawTextBoxes();
	drawInventoryButtons();
}

function drawTextBoxes() {
	textDisplays = Array();
	textDisplays[0] = game.add.text(32, 100, 'None');
    textDisplays[1] = game.add.text(32, 200, 'None');

}

function drawInventoryButtons() {
	var returnToMainButton;
	returnToMainButton = game.add.button((game.width - 50), (game.height - 50), 'mainButton', returnToMain, this);
	returnToMainButton.name = "returnToMainBtn";

	var showInventoryButton;
	showInventoryButton = game.add.button(50, 50, 'showInventoryButtonImage', returnToMain, this);
	showInventoryButton.name = "showInventoryBtn";

	var showResourcesButton;
	showResourcesButton = game.add.button(200, 50, 'showResourcesButtonImage', returnToMain, this);
	showResourcesButton.name = "showResourcesBtn";

	var showSkillsButton;
	showSkillsButton = game.add.button(350, 50, 'showSkillsButtonImage', returnToMain, this);
	showSkillsButton.name = "showSkillsBtn";

	var showShopButton;
	showShopButton = game.add.button(450, 50, 'showShopButtonImage', returnToMain, this);
	showShopButton.name = "showShopBtn";

	
}