//Owner: Dennis

Item = function () {
	this.type = "default_type"
    this.prefix = "default_prefix"
    this.suffix = "default_suffix"
};

Item.prototype = {
	
	getInfo : function() {
	    return this.prefix+' '+this.type+' '+this.suffix;
	},
	
	randomize : function() {
	    this.type = random_item_types[game.rnd.integerInRange(0,random_item_types.length-1)];
	    this.prefix = random_item_prefixes[game.rnd.integerInRange(0,random_item_prefixes.length-1)];
	    this.suffix = random_item_suffixes[game.rnd.integerInRange(0,random_item_suffixes.length-1)];
	}

};