//Owner: Yann
Npc = function() {
    this.name = "default_name";
    this.class = "default_class";
    this.race = "default_race";
    this.location = "default_location";
    this.backpack = null;
    this.destination = "default_destination";
    this.turnsFromDestination = null;
};

//class vars
    random_npc_names = ["Andy", "Bobby", "Christina", "Dennis", "Elise", "Frances"];
    random_npc_class = ["Fighter", "Spellcaster", "Healer", "Runner"];
    random_npc_race = ["Human", "Elf", "Orc", "Goblin", "Dwarf"];
    random_npc_locations = ["town", "the Cursed Mines", "the Shrine of Beasts", "the Misty Woods"];

Npc.prototype = {
    getInfo : function() {
        temp_text = this.name + ', the ' + this.race + ' ' + this.class +  ' with ' + this.backpack.inventoryItems.length + ' items';
        temp_text += '\nCurrently in: ' + this.location;
        if (this.turnsFromDestination == 0) {
            temp_text += '\nJust hanging out';
        } else if (this.destination == this.location) {
            temp_text += '\nCurrently exploring ' + this.destination + ', ETA: ' + this.turnsFromDestination + ' turns';
        } else {
            temp_text += '\nHeading to ' + this.destination + ', ETA: ' + this.turnsFromDestination + ' turns';
        }
        return temp_text;
    },

    randomize : function() {
        this.name = random_npc_names[game.rnd.integerInRange(0,random_npc_names.length-1)];
        this.class = random_npc_class[game.rnd.integerInRange(0,random_npc_class.length-1)];
        this.race = random_npc_race[game.rnd.integerInRange(0,random_npc_race.length-1)];
        this.location = random_npc_locations[game.rnd.integerInRange(0,random_npc_locations.length-1)];
    },

    create: function () {
        this.name = random_npc_names[game.rnd.integerInRange(0,random_npc_names.length-1)];
        this.class = random_npc_class[game.rnd.integerInRange(0,random_npc_class.length-1)];
        this.race = random_npc_race[game.rnd.integerInRange(0,random_npc_race.length-1)];
        this.location = random_npc_locations[game.rnd.integerInRange(0,random_npc_locations.length-1)];
        this.destination = random_npc_locations[game.rnd.integerInRange(0,random_npc_locations.length-1)];

        this.backpack = new Inventory();
        this.backpack.create();
        this.backpack.populateInventoryItems(game.rnd.integerInRange(0,5));
        this.turnsFromDestination = 0;
    },

    tickNpcMovement : function() {
        if (this.turnsFromDestination == 0) {
            if (game.rnd.integerInRange(0,1)) {
                this.destination = random_npc_locations[game.rnd.integerInRange(0,random_npc_locations.length-1)];
                this.turnsFromDestination = game.rnd.integerInRange(3,8);
            }
        } else {
            this.turnsFromDestination--;
        }
    },

};