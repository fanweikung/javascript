/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

collection[2] = "Something";
collection[collection.length] = "new item";
collection[9] = "the last item";

console.log(collection[8]);
console.log(collection.length);

console.log(collection);
