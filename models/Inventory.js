//Owner: Dennis
Inventory = function () {
	this.inventoryItems = null;
	this.inventoryResources = null;
};

Inventory.prototype = {
		create : function() {
			this.inventoryItems = Array();
			this.inventoryResources = Array();
		},

		//debug
		populateInventoryItems : function(numItems) {
			for (var i = numItems - 1; i >= 0; i--) {
				item = new Item();
				item.create();
				item.randomize();
				this.inventoryItems.push(item);
			};
		}
};