describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should be initiated with a 'grid' object", function() {
    expect(game.grid.constructor.name).toEqual('Object')
  });

  it("the grid object contains 9 key values pointing to empty strings, representing the tic-tac-toe squares (testing first square)", function() {
    expect(game.grid[0]).toEqual("")
  });

  it("the grid object contains 9 key values pointing to empty strings, representing the tic-tac-toe squares (testing last square)", function() {
    expect(game.grid[8]).toEqual("")
  });

  it("the grid object contains 9 key values pointing to empty strings, representing the tic-tac-toe squares (testing object length)", function() {
    expect(game.grid[9]).toEqual(undefined)
  });

  describe("play", function() {

    it("the game count increases when play function is called by a player", function() {
      game.play()
      expect(game.playCount).toEqual(1)
    });

  });

});
