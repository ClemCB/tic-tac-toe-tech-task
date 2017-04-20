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
    this.isThereAWinner();
  };

  Game.prototype.isGridPositionEmpty = function(gridPosition) {
    if (this.grid[gridPosition] !== "") {
      throw new Error("This spot has already been taken")
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
      var x_grid_indexes = []
      var o_grid_indexes = []
      for (var [key, value] of Object.entries(this.grid)) {
        if (value == 'X') {
          x_grid_indexes.push(key);
        } else if (value == 'O') {
          o_grid_indexes.push(key)
        }
    }
    return this.useGridValuesToFindWinner(x_grid_indexes, o_grid_indexes)
  };


  Game.prototype.useGridValuesToFindWinner = function (x_grid_indexes, o_grid_indexes) {
    for (var i = 0; i < this.rules.winningCombos.length; i++) {
      if (doTheRulesContainPlayerGridValues(this.rules.winningCombos[i], x_grid_indexes)) {
        return "X wins!"
      } else if (doTheRulesContainPlayerGridValues(this.rules.winningCombos[i], o_grid_indexes)) {
        return "O wins!"
      }
    }
    return isGridFull(x_grid_indexes, o_grid_indexes)
  };

  function isGridFull(x, o) {
    return (x.length + o.length === 9) ? "The game has finished!" : false;
   };

  function doTheRulesContainPlayerGridValues(rules, player_grid_indexes){
    for(var i = 0; i < rules.length; i++){
     if(player_grid_indexes.indexOf(rules[i]) === -1)
      return false;
    }
    return true;
  }

  exports.Game = Game;

})(this);
