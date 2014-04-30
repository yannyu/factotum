function drawShop() {
	playerShop = new shop();
	playerShop.populate();
    textDisplays[2] = game.add.text(32, 210, 'None');
    textDisplays[2].setText(playerShop.getItemAtIndex(0));
}