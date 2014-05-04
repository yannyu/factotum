function drawNPCScreenButtons(){
	var newCharacterButton;
	newCharacterButton = game.add.button(600, 400, 'button', newNPC, this)
	newCharacterButton.name = 'newCharbtn'
	var transferItemButton;
	transferItemButton = game.add.button(500, 400, 'dummy', transferItem, this)
	transferItemButton.name = 'transferItembtn'
}

function newNPC() {
	npcs[0].randomize();
    textDisplays[0].setText(npcs[0].getInfo());
}