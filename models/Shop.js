Shop = function() {

	//these are bad practicies, clean later
	var items = new Array();
	this.itemCapacity = 10;

};

Shop.prototype = {

	getItemAtIndex : function(itemNumber) {
		return items[itemNumber].getInfo();
	},

	insertItem : function(item) {
		items.push(item);
	},
	
	populate : function() {
		temp_item = new Item();
		temp_item.randomize();
		this.insertItem(temp_item);
	},

	clear : function () {
		this.items = new Array();
	},

	replaceItem : function (new_item) {
		items[0] = new_item;
	}


}


