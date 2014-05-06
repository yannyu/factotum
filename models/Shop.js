Shop = function() {
	this.shopInventory = null;
	this.itemCapacity = null;
};

Shop.prototype = {
	create : function() {
		this.shopInventory = new Inventory();
		this.shopInventory.create();
		this.itemCapacity = 10;
	}
}


