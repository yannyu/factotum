Resource = function() {

	this.material = null;
	this.name = null;
	this.tier = null;
	this.power = null;
	this.spritesheetRef = null;
};


materialNames = ["Wood", "Ore", "Plant"];
woodNames= ["Oak", "Tea", "Pine", "Berch"];
oreNames= ["Iron", "Silver", "Adamantium", "Gadium"];
plantNames= ["Sage", "Thistle", "Mint", "Snarf"];
maxTier = 4;
maxPower = 2;

woodResources = [];
oreResources = [];
plantResources = [];
allResources = [];


Resource.prototype = {

	//this creates a Resource
	create : function() {
		this.material = '';
		this.name = '';
		this.tier = '';
		this.power = '';
		this.spritesheetRef = 0;

	},

	getInfo : function() {
		return this.name + ': Type ['
			+ this.material + '] Tier '
			+ this.tier + ' Power '
			+ this.power 
	},

	randomize : function() {
		this.material = materialNames[game.rnd.integerInRange(0, materialNames.length-1)];

		switch(this.material){
			case "Wood":
				this.name = woodNames[game.rnd.integerInRange(0, woodNames.length-1)];
				this.spritesheetRef = 27;
				break;
			case "Ore":
				this.name = oreNames[game.rnd.integerInRange(0, oreNames.length-1)];
				this.spritesheetRef = 22;
				break;
			case "Plant":
				this.name = plantNames[game.rnd.integerInRange(0, plantNames.length-1)];
				this.spritesheetRef = 9;
				break;
			default:
				this.name = "Your naming funcition is broken: Check Resource.js: create";
		}
		this.tier = game.rnd.integerInRange(1, maxTier);
		this.power =Math.round(game.rnd.realInRange(1, maxPower) + this.tier);

	},

	debugInfo : function() {
		return this.name +' : '+
		this.material +' : '+
    	this.tier +' : '+
    	this.dungeon +' : '+
    	this.power +' : '+
    	this.spritesheetRef;
	}

	
};

//generates all the resources for the game
function generateAllResources () {
	woodResources = [];
	oreResources = [];
	plantResources = [];
	allResources = [];


	tmpWoodNames = woodNames.slice(0);
	tmpOreNames = oreNames.slice(0);
	tmpPlantNames = plantNames.slice(0);


	//hardcoding is bad
	for ( var i = 0; i <= materialNames.length - 1; i++) {
		for ( var j = 1; j <= maxTier; j++) {
			r = new Resource();
			r.create();

			switch(materialNames[i]){
			case "Wood":
				r.material = 'Wood';
				r.name = tmpWoodNames[game.rnd.integerInRange(0, tmpWoodNames.length-1)];
				r.tier = j;
				r.power = (r.tier * Math.round(game.rnd.realInRange(-1, maxPower)) + (r.tier * 2))
				r.spritesheetRef = 27;
				//remove the name from the array so it doesn't appear twice
				tmp = tmpWoodNames.indexOf(r.name);
				tmpWoodNames.splice(tmp, 1);
				woodResources.push(r);
				allResources.push(r);
				break;
			case "Ore":
				r.material = 'Ore';
				r.name = tmpOreNames[game.rnd.integerInRange(0, tmpOreNames.length-1)];
				r.tier = j;
				r.power = (r.tier * Math.round(game.rnd.realInRange(-1, maxPower)) + (r.tier * 2))
				r.spritesheetRef = 22;
				//remove the name from the array so it doesn't appear twice
				tmp = tmpOreNames.indexOf(r.name);
				tmpOreNames.splice(tmp, 1);
				oreResources.push(r);
				allResources.push(r);
				break;
			case "Plant":
				r.material = 'Plant';
				r.name = tmpPlantNames[game.rnd.integerInRange(0, tmpPlantNames.length-1)];
				r.tier = j;
				r.power = (r.tier * Math.round(game.rnd.realInRange(-1, maxPower)) + (r.tier * 2))
				r.spritesheetRef = 9;
				//remove the name from the array so it doesn't appear twice
				tmp = tmpPlantNames.indexOf(r.name);
				tmpPlantNames.splice(tmp, 1);
				plantResources.push(r);
				allResources.push(r);
				break;


			}

		}

	}
};