function drawInventory() {
	clearIcons();
	
	drawMainButtons();
	itemStats = game.add.text(32, (game.height - 100), '');
	headerText = game.add.text(32, 70, '');
	defaultText();
	drawInventoryTextBoxes();
}

function defaultText() {
	setItemStats('Mouse over items');
}

function setItemStats(text) {
	itemStats.setText(text);
}

function clearItemStats() {
	itemStats.setText('');
}

function setHeaderText(text) {
	headerText.setText(text);
}

function clearHeaderText() {
	headerText.setText('');
}

//clears the textBoxes array
function clearIcons() {
	iconDisplays.removeAll();
}

//call all clear functions
function clearScreen(){
	clearIcons();
	clearHeaderText();
	clearItemStats();
}

//iterates through shop inventory and lists all items
function drawInventoryTextBoxes() {	
	clearScreen();	
	setHeaderText('Inventory');

	for (var i = 0; i <= global_playerShop.shopInventory.inventoryItems.length - 1; i++) {
		x = ( 64 * ( i % 4 ) ) + 2;
		y = ( 64 * Math.floor( i / 4 ) ) + 2;
		r = iconDisplays.create( 32 + x, 100 + y, 'image_spritesheet', global_playerShop.shopInventory.inventoryItems[i].spritesheetRef);
		r.name = global_playerShop.shopInventory.inventoryItems[i].getInfo();
		r.invSpot = i;
		r.inputEnabled = true;
		r.input.enableDrag();
		r.events.onInputOver.add(displayInfo, this);
	};

}

function drawResourceTextBoxes() {
	clearScreen();
	setHeaderText('Resources');

	for (var i = 0; i <= global_playerShop.shopInventory.inventoryResources.length - 1; i++) {
		x = ( 64 * ( i % 4 ) ) + 2;
		y = ( 64 * Math.floor( i / 4 ) ) + 2;
		r = iconDisplays.create( 32 + x, 100 + y, 'image_spritesheet', global_playerShop.shopInventory.inventoryResources[i].spritesheetRef);
		r.name = global_playerShop.shopInventory.inventoryResources[i].getInfo();

		r.inputEnabled = true;
		r.input.enableDrag();
		r.events.onInputOver.add(displayInfo, this);
	};
}

function drawSkillTextBoxes() {	
	clearScreen();
	setHeaderText('Skills');

}

function drawShopTextBoxes() {
	clearScreen();
	setHeaderText('Shop');
	//anvil
	for (var i = 0; i <= 4; i++) {
		x = ( 64 * i ) + 2;
		r = iconDisplays.create( 32 + x, 100 + (64 * 0), 'image_spritesheet', (16*1)+i);
		r.name = 'anvil_'+i;

		r.inputEnabled = true;
		r.events.onInputOver.add(displayInfo, this);
	}
	//forge
	for (var i = 0; i <= 4; i++) {
		x = ( 64 * i ) + 2;
		r = iconDisplays.create( 32 + x, 100 + (64 * 1) + 32 , 'image_spritesheet', (16*4)+i);
		r.name = 'forge_'+i;

		r.inputEnabled = true;
		r.events.onInputOver.add(displayInfo, this);
	}
	//distiller
	for (var i = 0; i <= 4; i++) {
		x = ( 64 * i ) + 2;
		r = iconDisplays.create( 32 + x, 100 + (64 * 2) + (32 * 2) , 'image_spritesheet', (16*8)+i);
		r.name = 'distiller_'+i;

		r.inputEnabled = true;
		r.events.onInputOver.add(displayInfo, this);
	}

	//display
	for (var i = 0; i <= 4; i++) {
		x = ( 64 * i ) + 2;
		r = iconDisplays.create( 32 + x, 100 + (64 * 3) + (32 * 3) , 'image_spritesheet', (16*15)+i);
		r.name = 'display_'+i;

		r.inputEnabled = true;
		r.events.onInputOver.add(displayInfo, this);
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

function displayInfo(r, pointer) {
	setItemStats(r.name);
	//DEBUG!!!
	console.log(global_playerShop.shopInventory.inventoryItems[r.invSpot].debugInfo());
}