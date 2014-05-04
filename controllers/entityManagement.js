function transferItem() {
	//console.log('transfer?');
    global_playerShop.replaceItem(global_entityItems[0],0);
    global_textDisplays[2].setText('Item in shop: ' + global_playerShop.getItemAtIndex(0));
    console.log(global_playerShop.getItemAtIndex(0));
}

function newCharacter() {
	global_npcs[0].randomize();
    global_textDisplays[0].setText(global_npcs[0].getInfo());
    global_playerShop.items[0].randomize();
    
    global_textDisplays[1].setText(global_playerShop.items[0].getInfo());
}