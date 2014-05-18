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
        if (this.turnsFromDestination == 0) {
            temp_text += '\nCurrently in: ' + this.location;
            temp_text += '\nJust hanging out';
        } else if (this.destination == this.location) {
            temp_text += '\nCurrently in: ' + this.location;
            temp_text += '\nExploring ' + this.destination + ', ETA: ' + this.turnsFromDestination + ' turns';
        } else {
            temp_text += '\nCurrently in transit from: ' + this.location;
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
        if (this.turnsFromDestination == 0) { //If NPC isn't in transit, he may get a new destination
            if (game.rnd.integerInRange(0,1)) { //50% chance for NPC to select a new destination
                this.destination = random_npc_locations[game.rnd.integerInRange(0,random_npc_locations.length-1)];
                this.turnsFromDestination = game.rnd.integerInRange(3,8);
            } 
        } else { //Otherwise, NPC moves 1 turn closer to destination
            this.turnsFromDestination--;
            if (this.turnsFromDestination == 0 && this.location == this.destination) {
                if (game.rnd.integerInRange(0,1)) { //50% chance for NPC to get a new item
                    temp_item = new Item();
                    temp_item.create();
                    temp_item.randomize();
                    this.backpack.inventoryItems.push(temp_item);
                    console.log(this.name + ' the ' + this.race +' '+ this.class + ' found a ' + temp_item.getInfo())
                } 
            }
        }
    },

};