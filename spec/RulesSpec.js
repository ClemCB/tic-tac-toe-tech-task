describe("Rules", function() {
  var rules;

  beforeEach(function() {
    rules = new Rules();
  });

  it("should hold an array of winning combinations of tic tac toe", function() {
    expect(rules.winningCombos.constructor.name).toEqual('Array')
  });

  it("should hold the winning combinations of tic tac toe", function() {
    expect(rules.winningCombos.length).toEqual(8)
  });

});
