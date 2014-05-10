//Owner: Dennis

Item = function () {
	//Item category
	this.type = null;
    this.prefix = null;
    this.suffix = null;
    //resources used to make the item
    this.resources = null;
    //quaklity of the crafted item
    this.quality = null;
    //final value of item
    this.cost = null;
    //sprite sheet reference
    this.spritesheetRef = null;
};

random_item_types = ['Weapon', 'Armor', 'Accessory'];
quality_prefixes = ['Janky', 'Servicable', 'Crafted', 'Runed', 'Legendary'];
random_item_suffixes = ['of Yann', 'of Dennis', 'of Adam'];

Item.prototype = {

	create : function() {
		this.type = '';
		this.prefix = '';
    	this.suffix = '';
    	this.quality = 0;
    	this.cost = 0;
    	this.resources = [];
    	this.spritesheetRef = 1;
	},
	
	getInfo : function() {
	    return this.prefix+' '+this.type+' '+this.suffix + ' Value: ' + this.cost;
	},
	
	randomize : function() {
	    

	    this.quality = game.rnd.integerInRange(0, 4);
	    
	    this.resources.push(allResources[game.rnd.integerInRange(0, 11)]);
	    this.resources.push(allResources[game.rnd.integerInRange(0, 11)]);
	    this.cost = this.calculateCost();

	    this.type = random_item_types[game.rnd.integerInRange(0,random_item_types.length-1)];
	    this.prefix = quality_prefixes[this.quality];
	    this.suffix = random_item_suffixes[game.rnd.integerInRange(0,random_item_suffixes.length-1)];

	    switch(this.type){
			case "Weapon":
				this.spritesheetRef = 66;
				break;
			case "Armor":
				this.spritesheetRef = 17;
				break;
			case "Accessory":
				this.spritesheetRef = 70;
				break;
			default:
				this.name = "Your naming funcition is broken: Check Resource.js: create";
		}
	},

	calculateCost : function() {
		/*TODO: Some stuff that calculates the cost of the item based on the input resources and final quality
		* 
		* ((resource[0] + resource[1]) / 2) ^ (1.this.quality) + base value
		*/
		return ( ( ( this.resources[0].power + this.resources[1].power ) / 2 ) ^ ( 1+ (this.quality/10) ) ) + 10;
	},

	debugInfo : function() {
		return this.type +' : '+
		this.prefix +' : '+
    	this.suffix +' : '+
    	this.quality +' : '+
    	this.cost +' : '+
    	this.resources[0].name +' : '+
    	this.resources[1].name +' : '+
    	this.spritesheetRef;
	}

};