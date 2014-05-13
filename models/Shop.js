Shop = function() {
	this.shopInventory = null;
	this.shopEquipment = null;
	this.itemCapacity = null;

};

Shop.prototype = {
	create : function() {

		this.shopInventory = new Inventory();
		this.shopInventory.create();

		this.shopEquipment = new Equipment();
		this.shopEquipment.create();

		this.itemCapacity = (this.shopEquipment.displays * 10) + 10;
	}
};


