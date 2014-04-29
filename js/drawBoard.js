function drawBoard() {

	drawCharacter();


	var newCharacterButton;
    newCharacterButton = game.add.button(600, 400, 'button', newCharacter, this, 0, 0, 0)
    newCharacterButton.name = 'newCharbtn'

}