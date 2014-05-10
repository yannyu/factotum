Equipment = function() {
	//each piece of equipment should have an int representing it's level

	this.forge = null;
	this.anvil = null;
	this.distiller = null;
	this.displays = null;
};

Shop.prototype = {
	create : function() {
		this.forge = 0;
		this.anvil = 0;
		this.distiller = 0;
		this.displays = 0;
	}
}


