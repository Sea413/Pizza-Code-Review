describe("Customer", function(){
  it("Defines the current customer name", function(){
  var testObject = new Customer ("Jerry","Trifling","kale");
  expect(testObject.name).to.equal("Jerry");
  expect(testObject.psize).to.equal("Trifling");
  expect(testObject.topping).to.equal("kale");
});
  it("Expands the definition of customer to include the size of the pizza", function(){
    var testObject = new Customer ("Jerry","Trifling");
    expect(testObject.name).to.equal("Jerry");
    expect(testObject.psize).to.equal("Trifling");
});
  it("continue the expansion of the customer instructor to include topping size", function(){
    var testObject = new Customer ("Jerry","Trifling","kale");
    expect(testObject.name).to.equal("Jerry");
    expect(testObject.psize).to.equal("Trifling");
    expect(testObject.topping).to.equal("kale");
});
  it("will begin to include pricing as a potential variable", function(){
    var testObject = new Customer ("Jerry","Trifling","kale", 0);
    expect(testObject.name).to.equal("Jerry");
    expect(testObject.psize).to.equal("Trifling");
    expect(testObject.topping).to.equal("kale");
    expect(testObject.cost).to.equal(0);
});
  it("will begin create parameters for pricing.", function(){
    var testObject = new Customer ("Jerry","Trifling","kale", 0);
    expect(testObject.sizeselect("Abhorrent")).to.equal(12);
});
  it("will further expand upon pricing parameters to include toppings.", function(){
    var testObject = new Customer ("Jerry","Abhorrent","kale", 0);
    expect(testObject.toppingselect("kale")).to.equal(55);
});
  it("will finalize pricing options.", function(){
    var testObject = new Customer ("Jerry","Abhorrent","kale", 0);
    expect(testObject.sizeselect("Abhorrent")).to.equal(12);
    expect(testObject.toppingselect("kale")).to.equal(67);
});
});
