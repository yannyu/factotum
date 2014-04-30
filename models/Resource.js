Resource = function() {

	this.material = null;
	this.name = null;
	this.tier = null;
	this.power = null;
};


materialNames = ["Wood", "Ore", "Plant"];
woodNames= ["Oak", "Tea", "Pine", "Berch"];
oreNames= ["Iron", "Silver", "Adamantium", "Gadium"];
plantNames= ["Fighter", "Spellcaster", "Healer", "Runner"];
maxTier = 5;
maxPower = 10;

Resource.prototype = {

	//this creates a Resource
	create : function() {
		this.material = materialNames[game.rnd.integerInRange(0, materialNames.length-1)];

		switch(this.material){
			case "Wood":
				this.name = woodNames[game.rnd.integerInRange(0, woodNames.length-1)];
				break;
			case "Ore":
				this.name = woodNames[game.rnd.integerInRange(0, woodNames.length-1)];
				break;
			case "Plant":
				this.name = woodNames[game.rnd.integerInRange(0, woodNames.length-1)];
				break;
			default:
				this.name = "Your naming funcition is broken: Check Resource.js: create";
		}
		this.tier = game.rnd.integerInRange(1, maxTier);
		this.power = game.rnd.integerInRange(1, maxPower);

	},

	getInfo : function() {
		return this.material + '\n'
			+ this.material + '\n'
			+ this.tier + '\n'
			+ this.power 
	}
};