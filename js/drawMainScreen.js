function drawMainScreen() {
	var MapButton, InventoryButton, NPCButton;
	MapButton = game.add.button(100, 200, 'MapButton', OpenMap, this)
	MapButton.name = 'MapButton';
	InventoryButton = game.add.button(300, 200, 'InventoryButton', OpenInventoryScreen, this)
	InventoryButton.name = 'transferItembtn'
	NPCButton = game.add.button(500, 200, 'NPCButton', OpenNPCScreen, this)
	NPCButton.name = 'NPCScreen';
}


function OpenMap() {
		//drawMapButton();
}

function OpenInventoryScreen() {
	//drawMapButton();
	//drawMainScreen.MapButton.kill();
	//console.log(game.drawMainScreen.MapButton());
	//accessInventory();
	//drawNPCButton();
	game.state.start('InventoryScreenStateThing');
}

function OpenNPCScreen() {
	//drawNPCButton();
}
