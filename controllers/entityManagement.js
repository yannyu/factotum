function transferItem() {
	//console.log('transfer?');
    playerShop.replaceItem(items[0]);
    textDisplays[2].setText('Item in shop: ' + playerShop.getItemAtIndex(0));
}

function newCharacter() {
	npcs[0].randomize();
    textDisplays[0].setText(npcs[0].getInfo());
    playerShop.items[0].randomize();
    
    textDisplays[1].setText(playerShop.items[0].getInfo());
    updateShop();
    //temporary_item = new item();
    //temporary_item.randomize();
    //console.log(temporary_item.getInfo());
    //playerShop.replaceItem(temporary_item);
    //textDisplays[2].setText('Item in shop: ' + playerShop.getItemAtIndex(0));
}