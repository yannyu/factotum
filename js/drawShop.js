function drawShop() {
	playerShop = new Shop();
	playerShop.populate();
    textDisplays[2] = game.add.text(32, 210, 'None');
    textDisplays[2].setText(playerShop.getItemAtIndex(1));
}