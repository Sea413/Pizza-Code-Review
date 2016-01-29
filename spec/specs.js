describe("Player", function(){
  it("defines a new user based on name input", function(){
  var testObject = new Player ("Summer",0,0);
  expect(testObject.name).to.equal("Summer");
});

  it ("It will determine the existing current total", function(){
    var testObject = new Player ("Summer",0,0);
    testObject.currentscore = 0;
    expect(testObject.currentscore).to.equal(0);
});
  it ("It will verify that totalscore is cumulative", function(){
    var testObject = new Player ("Summer",0,0);
    testObject.totalscore = 0;
    expect(testObject.totalscore).to.equal(0);
});
    it("tests that return value is between 1 and 6", function() {
      var testObject = new Player ("Summer",0,0);
      var turnOne = testObject.dieroll();
    expect("0123456").to.include(testObject.currentscore);
    });
    it("Total score is an added value from current score", function() {
      var testObject = new Player ("Summer",6,0);
      var turnOne = testObject.dieroll();
    expect("789101112").to.include(testObject.totalscore);
    });
});
