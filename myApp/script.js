/**
 * * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * TODO: Add more order objects (PO, WO, CO...etc)
 * TODO: Add more entity types (supplier, employee...etc)
 */

// can't access them directly in the console as they run in the context of script.js, not browser
import Order from "./Order.js";
import Customer from "./Customer.js";

const salesOrder = new Order(
  1001,
  "SO",
  "00001",
  4242,
  "Red bike",
  300,
  2,
  Date(),
  true
);

const soldTo = new Customer(
  4242,
  "Stevie",
  "1234 billing address",
  "5678 far far away",
  "X",
  true
);

// can't be accessed direclty in the console
class Fulfillment {
  constructor(
    // define parameters
    lot,
    branchPlant,
    location,
    carrier
  ) {
    // define properties
    this.lot = lot;
    this.inventory = {
      branchPlant: branchPlant,
      location: location,
    };
    this.carrier = carrier;
  }
  // add methods like normal functions
  updateCarrier(carrier) {
    this.carrier = carrier;
  }
}
const shipping = new Fulfillment("Lot 2001", "Ontario", "1.2.3", "FedEx");

/**
 * Shouldn't I be able to access it from console too, as it's defined here? Why can't it be accessed direclty in the console?
 */

const FulfillmentInConsole = {
  lot: 2001,
  inventory: {
    branchPlant: "Ontario",
    location: "1.2.3",
  },
  carrier: "FedEx",
  updateCarrier: function (carrier) {
    this.carrier = carrier;
  },
};

/**
 * Copied from 02_02. Why reference backpack error when accessing it from console?
 */
// const backpack = {
//   name: "Everyday Backpack",
//   volume: 30,
//   color: "grey",
//   pocketNum: 15,
//   strapLength: {
//     left: 26,
//     right: 26,
//   },
//   lidOpen: false,
//   toggleLid: function (lidStatus) {
//     this.lidOpen = lidStatus;
//     updateBackpack(`Lid status changed.`);
//   },
//   newStrapLength: function (lengthLeft, lengthRight) {
//     this.strapLength.left = lengthLeft;
//     this.strapLength.right = lengthRight;
//     updateBackpack(`Strap lengths updated.`);
//   },
// };

console.log("Order: ", salesOrder);
console.log("Is this order DTC: ", salesOrder.directShip);
console.log("Sold To", soldTo);
console.log("Customer discount allowed? ", soldTo.applyDiscount);
console.log("Shipping: ", shipping);
console.log("Ship by: ", shipping.carrier);
console.log("Shipping in Console: ", FulfillmentInConsole);
