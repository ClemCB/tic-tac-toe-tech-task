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

  Game.prototype.play = function () {
    this.playCount += 1;
  };

  Game.prototype.viewGrid = function () {
    return Object.values(game.grid)
  };

  exports.Game = Game;

})(this);
