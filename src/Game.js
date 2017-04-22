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
    this.rules = new Rules();
  }

  Game.prototype.play = function (gridPosition) {
    this.isGridPositionEmpty(gridPosition);
    this.grid[gridPosition] = this.assignPlayerTurn();
    this.isThereAWinner();
  };


  Game.prototype.assignPlayerTurn = function() {
    var counts = {};
    (Object.values(this.grid)).forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    if (counts['X'] === undefined || counts['X'] === counts['O']) {
      return 'X';
    } else if (counts['O'] === undefined || counts['X'] > counts['O']) {
      return 'O';
    }
  };

  Game.prototype.isThereAWinner = function () {
    if (this.isTheWinner('X')) {
      return 'X wins!'
    } else if (this.isTheWinner('O')) {
      return 'O wins!'
    }
  };

  Game.prototype.isGridPositionEmpty = function(gridPosition) {
    if (this.grid[gridPosition] !== "") {
      throw new Error("This spot has already been taken");
    }
  };

  Game.prototype.isTheWinner = function (something) {
    var values_array = [];
    for (var [key, value] of Object.entries(this.grid)) {
      if (value == something) {
        values_array.push(key);
      }
    }
    return this.useGridValuesToFindWinner(values_array);
  };

    Game.prototype.useGridValuesToFindWinner = function (something) {
      for (var i = 0; i < this.rules.winningCombos.length; i++) {
        if (doTheRulesContainPlayerGridValues(this.rules.winningCombos[i], something)) {
          return "Winner!";
        }
      }
    };

    Game.prototype.isGridFull = function () {
      if(!("" in this.grid)) {
        return "The game has finished!"
      }
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
