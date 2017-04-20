"use strict"

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
      game.play(0)
      expect(game.playCount).toEqual(1)
    });

    it("the game function accepts the chosen grid position from a player", function() {
      game.play(0)
      expect(game.grid[0]).toEqual("X")
    });

    it("the game prevents the same grid position from being chosen twice", function() {
      game.grid[0] = "X"
      game.play(0)
      expect(game.isGridPositionEmpty()).toEqual("This spot has already been taken")
    });

    it("the game alternates players between 'O' and 'X'", function() {
      game.play(0)
      game.play(4)
      expect(game.grid[4]).toEqual("O")
      game.play(5)
      expect(game.grid[5]).toEqual("X")
    });
  });

  describe("check for winner", function() {

    it("the game returns a win if a combo of three is found", function() {
      expect(game.isThereAWinner()).toEqual("Winner!")
    });

  });
});
