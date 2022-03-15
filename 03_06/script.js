/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// grap object with context
console.log("The backpack object:", backpack);

// grab properry inside an object using dot notation
console.log("The pocketNum value is:", backpack.pocketNum);
console.log("The strap length L: ", backpack.strapLength.left);

// use bracket notation if passing variable as the property name or the proerty name has non-conventional name because it's wrapped around as a string.
var query = "pocketNum";

console.log("Use bracket notation to get the pocketNum:", backpack[query]);
