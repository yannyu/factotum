Npc = function() {
    this.name = "default_name";
    this.class = "default_class";
    this.race = "default_race";
    this.location = "default_location";
};

//class vars
    random_npc_names = ["Andy", "Bobby", "Christina", "Dennis", "Elise", "Frances"];
    random_npc_class = ["Fighter", "Spellcaster", "Healer", "Runner"];
    random_npc_race = ["Human", "Elf", "Orc", "Goblin", "Dwarf"];
    random_npc_locations = ["In town", "In transit", "In the Cursed Mines", "In the Shrine of Beasts", "In the Misty Woods"]

    random_item_types = ["Axe", "Balloon", "Claw Hammer", "Dao", "Epee", "Fuschina", "Gauche"];
    random_item_prefixes = ["Shiny", "Dull", "Stupid", "Clever", "Useless", "Utile"];
    random_item_suffixes = ["of Fire", "of Ice", "of Bludgeoning", "of Anger", "of the Elements"]

Npc.prototype = {
    getInfo : function() {
        return this.name + ', the ' + this.race + ' ' + this.class + '\nCurrently: ' + this.location;
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
    }
};