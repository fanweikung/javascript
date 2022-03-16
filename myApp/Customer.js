/**
 * Create classs for customer object type.
 * @param <insert here>
 */
class Customer {
  constructor(
    // define parameters
    customerId,
    customerName,
    addressBilling,
    addressShipping,
    billingType,
    applyDiscount
  ) {
    // define properties
    this.customerId = customerId;
    this.customerName = customerName;
    this.addresses = {
      addressBilling: addressBilling,
      addressShipping: addressShipping,
    };
    this.billingType = billingType;
    this.applyDiscount = applyDiscount;
  }
  // add methods like normal functions
  updateAddresses(billingAddr, shippingAddr) {
    this.addressBilling = billingAddr;
    this.addressShipping = shippingAddr;
  }
  allowDiscount(boolean) {
    this.applyDiscount = boolean;
  }
}

export default Customer;
