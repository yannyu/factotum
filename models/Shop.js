Shop = function() {

	//these are bad practicies, clean later
	items = null;
	itemCapacity = null;

};

Shop.prototype = {

	create : function() {
		this.items = new Array();
		this.itemCapacity = 10;
	},

	getItemAtIndex : function(itemNumber) {
		return this.items[itemNumber].getInfo();
	},

	insertItem : function(item) {
		this.items.push(item);
	},
	
	populate : function() {
		temp_item = new Item();
		temp_item.randomize();
		this.insertItem(temp_item);
	},

	clear : function () {
		this.items = new Array();
	},

	replaceItem : function (new_item, position) {
		this.items[position] = new_item;
	},

	getItemLength : function() {
		return this.items.length;
	}


}


