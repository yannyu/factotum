//Owner: Dennis
Inventory = function () {
	this.inventoryItems = null;
	this.inventoryResources = null;
};

Inventory.prototype = {
	create : function() {
		//inventory arrays
		this.inventoryItems = Array();
		this.inventoryResources = Array();
	},

	//debug
	populateInventoryItems : function(numItems) {
		//nuke existing items
		this.inventoryItems = [];
		//create numItems new items
		for (var i = numItems - 1; i >= 0; i--) {
			item = new Item();
			item.create();
			item.randomize();
			this.inventoryItems.push(item);
		};
	},
	populateInventoryResources : function(numItems) {
		//nuke existing items
		this.inventoryResources = [];
		//create numItems new items
		for (var i = numItems - 1; i >= 0; i--) {
			resource = new Resource();
			resource.create();
			resource.randomize();
			this.inventoryResources.push(resource);
		};
	}
};