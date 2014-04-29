function drawBoard() {

	drawCharacter();


	var newCharacterButton;
    newCharacterButton = game.add.button(600, 400, 'button', newCharacter, this)
    newCharacterButton.name = 'newCharbtn'

}