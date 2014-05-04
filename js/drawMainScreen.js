function drawMainScreen() {

<<<<<<< HEAD

	var MapButton, InventoryButton, NPCButton;
	MapButton = game.add.button(100, 200, 'button', OpenMap, this)
	MapButton.name = 'MapButton';
	InventoryButton = game.add.button(300, 200, 'button', OpenInventoryScreen, this)
	InventoryButton.name = 'transferItembtn'
	NPCButton = game.add.button(500, 200, 'button', OpenNPCScreen, this)
	NPCButton.name = 'NPCScreen';

}


function OpenMap() {
		//drawMapButton();
}

function OpenInventoryScreen() {
	drawInventoryButton();
=======
	//drawMapButton();
	accessInventory();
	//drawNPCButton();
>>>>>>> ca8cecf482688570661cdc2bb9460edcd2c0aba0
}

function OpenNPCScreen() {
	//drawNPCButton();
}
