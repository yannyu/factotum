function drawInventory() {
	clearTextBoxes();
	drawInventoryTextBoxes();
	drawMainButtons();
}

//clears the textBoxes array
function clearTextBoxes() {
	for (var i = 0; i <= textDisplays.length - 1; i++) {
			textDisplays[i].setText('');
		};
	textBoxes = [];
}

//iterates through shop inventory and lists all items
function drawInventoryTextBoxes() {	
	clearTextBoxes();
	if (global_playerShop.shopInventory.inventoryItems.length == 0) {
		textDisplays[0] = game.add.text(32, 100, 'As empty as your love life');
	}
	else {
		for (var i = 0; i <= global_playerShop.shopInventory.inventoryItems.length - 1; i++) {
			textDisplays[i] = game.add.text( 32, ( 100 + (i * 30) ), i.toString() + '. ' + global_playerShop.shopInventory.inventoryItems[i].getInfo() );
		};
	}
}

function drawResourceTextBoxes() {
	clearTextBoxes();
	generateAllResources();
	/*
	if (global_playerShop.shopInventory.inventoryResources.length == 0) {
		textDisplays[0] = game.add.text(32, 100, 'As empty as your love life');
	}
	else {
		for (var i = 0; i <= global_playerShop.shopInventory.inventoryResources.length - 1; i++) {
			textDisplays[i] = game.add.text( 32, ( 100 + (i * 30) ), i.toString() + '. ' + global_playerShop.shopInventory.inventoryResources[i].getInfo() );
		};
	}*/
	for (var i = 0; i <= woodResources.length - 1; i++) {
			textDisplays[i] = game.add.text( 32, ( 100 + (i * 30) ), i.toString() + '. ' + woodResources[i].getInfo() );
		};
}

function drawSkillTextBoxes() {	
	clearTextBoxes();
	if (global_playerShop.shopInventory.inventoryItems.length == 0) {
		textDisplays[0] = game.add.text(32, 100, 'As empty as your love life');
	}
	else {
		for (var i = 0; i <= global_playerShop.shopInventory.inventoryItems.length - 1; i++) {
			//textDisplays[i] = game.add.text( 32, ( 100 + (i * 30) ), i.toString() + '. ' + global_playerShop.shopInventory.inventoryItems[i].getInfo() );
		};
	}
}

function drawShopTextBoxes() {
	clearTextBoxes();
	if (global_playerShop.shopInventory.inventoryItems.length == 0) {
		textDisplays[0] = game.add.text(32, 100, 'As empty as your love life');
	}
	else {
		for (var i = 0; i <= global_playerShop.shopInventory.inventoryItems.length - 1; i++) {
			//textDisplays[i] = game.add.text( 32, ( 100 + (i * 30) ), i.toString() + '. ' + global_playerShop.shopInventory.inventoryItems[i].getInfo() );
		};
	}
}


//draws the various inventory buttons
function drawMainButtons() {
	var returnToMainButton;
	returnToMainButton = game.add.button((game.width - 50), (game.height - 50), 'mainButton', returnToMain, this);
	returnToMainButton.name = "returnToMainBtn";

	var showInventoryButton;
	showInventoryButton = game.add.button(50, 10, 'showInventoryButtonImage', drawInventoryTextBoxes, this);
	showInventoryButton.name = "showInventoryBtn";

	var showResourcesButton;
	showResourcesButton = game.add.button(200, 10, 'showResourcesButtonImage', drawResourceTextBoxes, this);
	showResourcesButton.name = "showResourcesBtn";

	var showSkillsButton;
	showSkillsButton = game.add.button(350, 10, 'showSkillsButtonImage', drawSkillTextBoxes, this);
	showSkillsButton.name = "showSkillsBtn";

	var showShopButton;
	showShopButton = game.add.button(450, 10, 'showShopButtonImage', drawShopTextBoxes, this);
	showShopButton.name = "showShopBtn";

	//debug buttons

	var generateInventoryButton;
	generateInventoryButton = game.add.button(0, (game.height - 50), 'mainButton', generateDebugInventory, this);
	generateInventoryButton.name = "generateInventoryBtn";

	var generateResourcesButton;
	generateResourcesButton = game.add.button(50, (game.height - 50), 'mainButton', generateDebugResources, this);
	generateResourcesButton.name = "generateResourcesBtn";	
}

//debug
function generateDebugInventory() {
	clearTextBoxes();
	global_playerShop.shopInventory.populateInventoryItems(5);
	drawInventoryTextBoxes();
}

function generateDebugResources() {
	clearTextBoxes();
	global_playerShop.shopInventory.populateInventoryResources(5);
	drawResourceTextBoxes();
}