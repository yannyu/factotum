function drawButtons(){
	var newCharacterButton;
	newCharacterButton = game.add.button(600, 400, 'button', newCharacter, this)
	newCharacterButton.name = 'newCharbtn'
	var transferItemButton;
	transferItemButton = game.add.button(500, 400, 'dummy', transferItem, this)
	transferItemButton.name = 'transferItembtn'
}