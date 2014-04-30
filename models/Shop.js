shop.prototype.getItemAtIndex = function(itemNumber) {
	return items[itemNumber].getInfo();
}
shop.prototype.insertItem = function(item) {
	items.push(item);
}
shop.prototype.populate = function() {
	temp_item = new item();
	temp_item.randomize();
	this.insertItem(temp_item);
}
shop.prototype.clear = function () {
	this.items = new Array();
}
shop.prototype.replaceItem = function (new_item) {
	items[0] = new_item;
}


function shop() {
	var items = new Array();
	this.itemCapacity = 10;
}