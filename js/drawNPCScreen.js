function drawNPCScreen() {
	drawNPCScreenButtons();
	global_textDisplays[0] = game.add.text(32, 30,global_npcs[0].getInfo());
}