function drawInventory() {
	clearIcons();
	drawInventoryTextBoxes();
	drawMainButtons();
	itemStats = game.add.text(32, (game.height - 100), '');
	defaultText();
}

function defaultText() {
	replaceItemStats('Mouse over items');
}

function replaceItemStats(text) {
	itemStats.setText(text);
}

//clears the textBoxes array
function clearIcons() {
	iconDisplays.removeAll();
	/*
	for (var i = 0; i <= iconDisplays.length - 1; i++) {
			iconDisplays[i].setText('');
		};
	textBoxes = [];*/
}

//iterates through shop inventory and lists all items
function drawInventoryTextBoxes() {	
	clearIcons();
	if (global_playerShop.shopInventory.inventoryItems.length == 0) {
		//iconDisplays[0] = game.add.text(32, 100, 'As empty as your love life');
	}
	else {
		for (var i = 0; i <= global_playerShop.shopInventory.inventoryItems.length - 1; i++) {
			iconDisplays[i] = game.add.text( 32, ( 100 + (i * 64) ), i.toString() + '. ' + global_playerShop.shopInventory.inventoryItems[i].getInfo() );
		};
	}
}

function drawResourceTextBoxes() {
	clearIcons();

	for (var i = 0; i <= global_playerShop.shopInventory.inventoryResources.length - 1; i++) {
		x = ( 64 * ( i % 4 ) ) + 2;
		y = ( 64 * Math.floor( i / 4 ) ) + 2;
		r = iconDisplays.create( 32 + x, 100 + y, 'image_spritesheet', global_playerShop.shopInventory.inventoryResources[i].spritesheetRef);
		r.name = global_playerShop.shopInventory.inventoryResources[i].getInfo();
		console.log(r.name);
		r.inputEnabled = true;
		r.input.enableDrag();
		r.events.onInputOver.add(saySomething, this);
		//r.events.onInputOver.add(replaceItemStats(woodResources[i].getInfo(), this));
	};
}

function drawSkillTextBoxes() {	
	clearIcons();
	if (global_playerShop.shopInventory.inventoryItems.length == 0) {
		//iconDisplays[0] = game.add.text(32, 100, 'As empty as your love life');
	}
	else {
		for (var i = 0; i <= global_playerShop.shopInventory.inventoryItems.length - 1; i++) {
			//iconDisplays[i] = game.add.text( 32, ( 100 + (i * 30) ), i.toString() + '. ' + global_playerShop.shopInventory.inventoryItems[i].getInfo() );
		};
	}
}

function drawShopTextBoxes() {
	clearIcons();
	if (global_playerShop.shopInventory.inventoryItems.length == 0) {
		iconDisplays[0] = game.add.text(32, 100, 'As empty as your love life');
	}
	else {
		for (var i = 0; i <= global_playerShop.shopInventory.inventoryItems.length - 1; i++) {
			//iconDisplays[i] = game.add.text( 32, ( 100 + (i * 30) ), i.toString() + '. ' + global_playerShop.shopInventory.inventoryItems[i].getInfo() );
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
	clearIcons();
	global_playerShop.shopInventory.populateInventoryItems(5);
	drawInventoryTextBoxes();
}

function generateDebugResources() {
	clearIcons();
	//generateAllResources();
	global_playerShop.shopInventory.populateInventoryResources(5);
	drawResourceTextBoxes();
}

function saySomething(r, pointer) {
	//index = parseInt(r.name.slice(-1));
	replaceItemStats(r.name);
	console.log(r.name);
}