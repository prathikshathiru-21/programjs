var spacer = {
  blank: function () {
      return "";
  },

  newLine: function () {
      return "\n";
  },

  line: function (length, character) {
      var longString = "****************************************";
      longString += "----------------------------------------";
      longString += "========================================";
      longString += "++++++++++++++++++++++++++++++++++++++++";
      longString += "                                        ";

      length = Math.max(0, length);
      length = Math.min(40, length);
      return longString.substr(longString.indexOf(character), length);
  },

  wrap: function (text, length, character) {
      var padLength = length - text.length - 3;
      var wrapText = character + " " + text;
      wrapText += spacer.line(padLength, " ");
      wrapText += character;
      return wrapText;
  },

  box: function (text, length, character) {
      var boxText = spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      boxText += spacer.wrap(text, length, character) + spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      return boxText;
  }
};


var getPlayerName = function (player) {
  return player.name;
};

var getPlayerHealth = function (player) {
  return player.name + " has health " + player.health;
};

var getPlayerPlace = function (player) {
  return player.name + " is in " + player.place;
};

var getPlayerItems = function (player) {
  var itemsString = "Items:" + spacer.newLine();

  player.items.forEach(function (item, index) {
      itemsString += "   " + (index + 1) + ") " + item + spacer.newLine();
  });

  return itemsString;
};

var getPlayerInfo = function (player, character) {
  var place = getPlayerPlace(player);
  var health = getPlayerHealth(player);
  var longest = Math.max(place.length, health.length) + 4;

  var info = spacer.box(getPlayerName(player), longest, character);
  info += spacer.wrap(place, longest, character);
  info += spacer.newLine() + spacer.wrap(health, longest, character);
  info += spacer.newLine() + spacer.line(longest, character);

  info += spacer.newLine();
  info += "  " + getPlayerItems(player);
  info += spacer.newLine();
  info += spacer.line(longest, character);

  info += spacer.newLine();

  return info;
};

var showPlayerInfo = function (player, character) {
  console.log(getPlayerInfo(player, character));
};



var player1 = {
  name: "Kandra",
  place: "The Dungeon of Doom",
  health: 50,
  items: ["a trusty lamp"]
};

showPlayerInfo(player1, "=");

player1.items.push("a rusty key");
showPlayerInfo(player1, "*");

player1.items.pop();
showPlayerInfo(player1, "+");

var getPlayerItemsNumbered = function (player) {
  var itemsString = "Items:" + spacer.newLine();

  player.items.forEach(function (item, index) {
      itemsString += "   " + (index + 1) + ") " + item + spacer.newLine();
  });

  return itemsString;
};

var getPlayerInfoNumbered = function (player, character) {
  var place = getPlayerPlace(player);
  var health = getPlayerHealth(player);
  var longest = Math.max(place.length, health.length) + 4;

  var info = spacer.box(getPlayerName(player), longest, character);
  info += spacer.wrap(place, longest, character);
  info += spacer.newLine() + spacer.wrap(health, longest, character);
  info += spacer.newLine() + spacer.line(longest, character);

  info += spacer.newLine();
  info += "  " + getPlayerItemsNumbered(player);
  info += spacer.newLine();
  info += spacer.line(longest, character);

  info += spacer.newLine();

  return info;
};

showPlayerInfo(player1, "=");


var showItem = function (player, itemNumber) {
  var itemIndex = itemNumber - 1;
  if (itemIndex >= 0 && itemIndex < player.items.length) {
      console.log(player.name + "'s item #" + itemNumber + ": " + player.items[itemIndex]);
  } else {
      console.log("Invalid item number.");
  }
};

showItem(player1, 1); 
var addItem = function (player, itemTitle) {
  player.items.push(itemTitle);
  console.log(itemTitle + " added to " + player.name + "'s items.");
};


addItem(player1, "a magical potion");
showPlayerInfo(player1, "="); 

  
  /* Further Adventures
   *
   * 1) Add and remove items at the prompt
   *    using push and pop. Notice what is displayed
   *    when push and pop are called.
   *
   * 2) Use the index argument for forEach
   *    to number the items displayed. Make
   *    the numbers start at 1.
   *
   * 3) Write a showItem function that accepts
   *    a player and an itemNumber as arguments
   *    and displays the specified player item.
   *
   * 4) Write an addItem function that accepts
   *    a player and an item title as arguments
   *    and adds the item title to the player's
   *    item array.
   *
   */