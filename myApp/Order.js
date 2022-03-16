/**
 * Create class for Order object type.
 * @param <insert here>
 */

class Order {
  // defines parameters
  constructor(
    orderNumber,
    orderType,
    orderCompany,
    customer,
    item,
    price,
    orderQuantity,
    orderDate,
    directShip
  ) {
    //defines properties
    this.orderNumber = orderNumber;
    this.orderType = orderType;
    this.orderCompany = orderCompany;
    this.customer = customer;
    this.lineItem = {
      item: item,
      price: price,
      orderQuantity: orderQuantity,
    };
    this.orderDate = orderDate;
    this.directShip = directShip;
  }
  // add methods like normal functions
  changeQuantity(quantity) {
    this.orderQuantity = quantity;
  }
  addDiscount(discount) {
    this.price = this.price - discount;
  }
}

export default Order;
