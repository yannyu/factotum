function drawInventory() {
	clearTextBoxes();
	drawInventoryTextBoxes();
	drawInventoryButtons();
}

//clears the textBoxes array
function clearTextBoxes() {
	for (var i = 0; i <= textDisplays.length - 1; i++) {
			textDisplays[i].setText('');
		};
	textBoxes = [];
}

function drawInventoryTextBoxes() {	
	console.log(global_playerShop.shopInventory.inventoryItems.length);
	if (global_playerShop.shopInventory.inventoryItems.length == 0) {
		textDisplays[0] = game.add.text(32, 100, 'As empty as your love life');
	}
	else {
		for (var i = 0; i <= global_playerShop.shopInventory.inventoryItems.length - 1; i++) {
			textDisplays[i] = game.add.text( 32, ( 100 + (i * 30) ), global_playerShop.shopInventory.inventoryItems[i].getInfo() );
		};
	}
}
	
function drawInventoryButtons() {
	var returnToMainButton;
	returnToMainButton = game.add.button((game.width - 50), (game.height - 50), 'mainButton', returnToMain, this);
	returnToMainButton.name = "returnToMainBtn";

	var showInventoryButton;
	showInventoryButton = game.add.button(50, 10, 'showInventoryButtonImage', returnToMain, this);
	showInventoryButton.name = "showInventoryBtn";

	var showResourcesButton;
	showResourcesButton = game.add.button(200, 10, 'showResourcesButtonImage', returnToMain, this);
	showResourcesButton.name = "showResourcesBtn";

	var showSkillsButton;
	showSkillsButton = game.add.button(350, 10, 'showSkillsButtonImage', returnToMain, this);
	showSkillsButton.name = "showSkillsBtn";

	var showShopButton;
	showShopButton = game.add.button(450, 10, 'showShopButtonImage', returnToMain, this);
	showShopButton.name = "showShopBtn";

	//debug buttons
	var generateInventoryButton;
	generateInventoryButton = game.add.button(0, (game.height - 50), 'mainButton', generateDebugInventory, this);
	generateInventoryButton.name = "generateInventoryBtn";

	
}

//debug
function generateDebugInventory() {
	clearTextBoxes();
	global_playerShop.shopInventory.populateInventoryItems(5);
	drawInventoryTextBoxes();
}