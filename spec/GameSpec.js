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

  it("should be initiated with the rules object", function() {
    expect(game.rules.constructor.name).toEqual('Rules')
  });

  describe("play", function() {

    it("the game function accepts the chosen grid position from a player", function() {
      game.play(0)
      expect(game.grid[0]).toEqual("X")
    });

    it("the game prevents the same grid position from being chosen twice", function() {
      game.grid[0] = "X"
      expect(function() {game.isGridPositionEmpty(0)}).toThrowError("This spot has already been taken")
    });

    it("the game alternates players between 'O' and 'X'", function() {
      game.play(0)
      expect(game.grid[0]).toEqual("X")

      game.play(4)
      expect(game.grid[4]).toEqual("O")

      game.play(5)
      expect(game.grid[5]).toEqual("X")
    });
  });

  describe("winning combinations", function() {

    it("useGridValuesToFindWinner function called to check winner", function() {
      spyOn(game, 'useGridValuesToFindWinner')
      game.isThereAWinner()
      expect(game.useGridValuesToFindWinner).toHaveBeenCalled()
    });

    it("the game returns a win when a combo is achieved after more than 3 turns", function() {
      game.play(5) // X
      game.play(2)
      game.play(6) // X
      game.play(1)
      game.play(3) // X
      game.play(8)
      game.play(4) // X
      expect(game.isThereAWinner()).toEqual("X wins!")
    });

    it("[0, 1, 2]", function() {
      game.play(0) // X
      game.play(5)
      game.play(1) // X
      game.play(6)
      game.play(2) // X
      expect(game.isThereAWinner()).toEqual("X wins!")
    });

    it("[0, 3, 6]", function() {
      game.play(0) // X
      game.play(5)
      game.play(3) // X
      game.play(2)
      game.play(6) // X
      expect(game.isThereAWinner()).toEqual("X wins!")
    });

    it("[0, 4, 8]", function() {
      game.play(1)
      game.play(0) // O
      game.play(3)
      game.play(4) // O
      game.play(7)
      game.play(8) // O
      expect(game.isThereAWinner()).toEqual("O wins!")
    });

    it("[1, 4 ,7]", function() {
      game.play(5)
      game.play(1) // O
      game.play(3)
      game.play(4) // O
      game.play(8)
      game.play(7) // O
      expect(game.isThereAWinner()).toEqual("O wins!")
    });

    it("[2, 4, 6]", function() {
      game.play(2) // X
      game.play(1)
      game.play(4) // X
      game.play(8)
      game.play(6) // X
      expect(game.isThereAWinner()).toEqual("X wins!")
    });

    it("[2, 5, 8]", function() {
      game.play(2) // X
      game.play(1)
      game.play(5) // X
      game.play(6)
      game.play(8) // X
      expect(game.isThereAWinner()).toEqual("X wins!")
    });

    it("[3, 4, 5]", function() {
      game.play(0)
      game.play(3) // O
      game.play(1)
      game.play(4) // O
      game.play(6)
      game.play(5) // O
      expect(game.isThereAWinner()).toEqual("O wins!")
    });

    it("[6, 7, 8]", function() {
      game.play(6) // X
      game.play(1)
      game.play(7) // X
      game.play(4)
      game.play(8) // X
      expect(game.isThereAWinner()).toEqual("X wins!")
    });
  });

  describe("game ends", function() {

    it("when all 9 grid positions taken", function() {
      game.grid = {0:"X", 1: "O", 2: "X", 3: "O", 4: "O", 5: "X", 6: "X", 7: "X", 8: "O"};
      expect(game.isThereAWinner()).toEqual("The game has finished!")
    });
  });
});
