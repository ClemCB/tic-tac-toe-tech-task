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
    this.rules = new Rules;
  };

  Game.prototype.play = function (gridPosition) {
    this.isGridPositionEmpty(gridPosition)
    this.grid[gridPosition] = this.assignPlayerTurn();
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
    return this.searchRulesForWinner(x, o)
  };


  Game.prototype.searchRulesForWinner = function (x_grid_indexes, o_grid_indexes) {
    for (var i = 0; i < this.rules.winningCombos.length; i++) {
      if (arrayContainsAnotherArray(this.rules.winningCombos[i], x_grid_indexes)) {
        return "X wins!"
      } else if (arrayContainsAnotherArray(this.rules.winningCombos[i], o_grid_indexes)) {
        return "O wins!"
      }
    }
  };

  function arrayContainsAnotherArray(needle, haystack){
    for(var i = 0; i < needle.length; i++){
     if(haystack.indexOf(needle[i]) === -1)
      return false;
    }
    return true;
  }

  exports.Game = Game;

})(this);
