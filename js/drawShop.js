function drawShop() {
	global_playerShop.create();
	global_playerShop.populate();
    global_textDisplays[2] = game.add.text(32, 210, 'None');
	global_textDisplays[2].setText(global_playerShop.getItemAtIndex(0));
    console.log(global_playerShop.getItemAtIndex(0));
};

function updateShop() {
	shopList = '';
    for (var i = 0; i <= global_playerShop.getItemLength() - 1; i++) {
    	shopList += (i+1).toString() + '. '
    		+ global_playerShop.getItemAtIndex(i)
    		+ '\n';
    	
    };
    global_textDisplays[2].setText(shopList);
};