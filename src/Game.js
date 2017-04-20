(function(exports) {

  function Game() {
    this.grid = {0:"",
                 1: "",
                 2: "",
                 3: "",
                 4: "",
                 5: "",
                 6: "",
                 7: "",
                 8: ""};
   this.playCount = 0;
  };

  Game.prototype.play = function (gridPosition) {
    this.isGridPositionEmpty(gridPosition)
    this.grid[gridPosition] = this.assignPlayerTurn();
    this.playCount += 1;
  };

  Game.prototype.isGridPositionEmpty = function(gridPosition) {
    if (this.grid[gridPosition] !== "") {
      return "This spot has already been taken"
    }
  };

  Game.prototype.assignPlayerTurn = function() {
    var counts = {};
    (Object.values(this.grid)).forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    if (counts['X'] == undefined) {
      return 'X'
    } else if (counts['O'] == undefined || counts['X'] > counts['O']) {
      return 'O'
    } else {
      return 'X'
    }
  };

  Game.prototype.isThereAWinner = function () {
    var x = []
    var o = []
    for (var [key, value] of Object.entries(this.grid)) {
      if (value == 'X') {
        x.push(key);
      } else if (value == 'O') {
        o.push(key)
      }
    }
  };

  exports.Game = Game;

})(this);
