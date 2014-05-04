function drawMainScreen() {


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
}

function OpenNPCScreen() {
	//drawNPCButton();
}