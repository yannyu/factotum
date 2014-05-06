function drawNPCScreen() {
	drawNPCScreenButtons();
	for (i = 0; i < global_npcs.length; i++) {
		global_textDisplays[i] = game.add.text(32, 30+i*70,global_npcs[i].getInfo());
	}
}