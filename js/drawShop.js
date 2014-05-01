function drawShop() {
	playerShop = new Shop();
	playerShop.create();
	playerShop.populate();
    textDisplays[2] = game.add.text(32, 210, 'None');
	textDisplays[2].setText(playerShop.getItemAtIndex(0));
};

function updateShop() {
	shopList = '';
    for (var i = 0; i <= playerShop.getItemLength() - 1; i++) {
    	shopList += (i+1).toString() + '. '
    		+ playerShop.getItemAtIndex(i)
    		+ '\n';
    	
    };
    textDisplays[2].setText(shopList);
};