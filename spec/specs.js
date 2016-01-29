describe("Customer", function(){
  it("Defines the current customer name", function(){
  var testObject = new Customer ("Jerry");
  expect(testObject.name).to.equal("Jerry");
});
  it("Expands the definition of customer to include the size of the pizza", function(){
    var testObject = new Customer ("Jerry","small");
    expect(testObject.name).to.equal("Jerry");
    expect(testObject.psize).to.equal("small");
});
it("continue the expansion of the customer instructor to include topping size", function(){
  var testObject = new Customer ("Jerry","small","kale");
  expect(testObject.name).to.equal("Jerry");
  expect(testObject.psize).to.equal("small");
  expect(testObject.toppingselect).to.equal("kale");
});
});
