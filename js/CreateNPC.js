random_npc_names = ["Andy", "Bobby", "Christina", "Dennis", "Elise", "Frances"];
random_npc_class = ["Fighter", "Spellcaster", "Healer", "Runner"];
random_npc_race = ["Human", "Elf", "Orc", "Goblin", "Dwarf"];

random_item_types = ["Axe", "Balloon", "Claw Hammer", "Dao", "Epee", "Fuschina", "Gauche"];
random_item_prefixes = ["Shiny", "Dull", "Stupid", "Clever", "Useless", "Utile"];
random_item_suffixes = ["of Fire", "of Ice", "of Bludgeoning", "of Anger", "of the Elements"]

npc.prototype.getInfo = function() {
    return this.name+'\n'+this.class+'\n'+this.race;
}

npc.prototype.randomize = function() {
    this.name = random_npc_names[game.rnd.integerInRange(0,random_npc_names.length-1)];
    this.class = random_npc_class[game.rnd.integerInRange(0,random_npc_class.length-1)];
    this.race = random_npc_race[game.rnd.integerInRange(0,random_npc_race.length-1)];
}

function npc() {
    this.name = "default_name";
    this.class = "default_class";
    this.race = "default_race";
}


function newCharacter() {
	npcs[0].randomize();
    textDisplays[0].setText(npcs[0].getInfo());
    items[0].randomize();
    textDisplays[1].setText(items[0].getInfo());
}