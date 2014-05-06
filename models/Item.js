//Owner: Dennis

Item = function () {
	this.type = null;
    this.prefix = null;
    this.suffix = null;
};

random_item_types = ['Weapon', 'Armor', 'Accessory'];
random_item_prefixes = ['Excellent', 'Good', 'Janky'];
random_item_suffixes = ['of Yann', 'of Dennis', 'of Adam'];

Item.prototype = {

	create : function() {
		this.type = '';
		this.prefix = '';
    	this.suffix = '';
	},
	
	getInfo : function() {
	    return this.prefix+' '+this.type+' '+this.suffix;
	},
	
	randomize : function() {
	    this.type = random_item_types[game.rnd.integerInRange(0,random_item_types.length-1)];
	    this.prefix = random_item_prefixes[game.rnd.integerInRange(0,random_item_prefixes.length-1)];
	    this.suffix = random_item_suffixes[game.rnd.integerInRange(0,random_item_suffixes.length-1)];
	}

};