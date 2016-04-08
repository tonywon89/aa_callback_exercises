var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame (stacks) {
  this.stacks = stacks;
}

HanoiGame.prototype.run = function() {
  /*
    until two of the towers are empty and one of the empty towers is
    tower 0
      get a move from the player
      check if move is valid
      make the move on the tower if valid
  */
};

HanoiGame.prototype.promptMove = function (callback) {
  console.log(this.stacks);
  reader.question("Where would you like to move from? ", function (startTowerIdx) {
    reader.question("Where would you like to move to? ", function (endTowerIdx) {
      callback(parseInt(startTowerIdx), parseInt(endTowerIdx));
    });
  });
};

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];

  var start = startTower[startTower.length - 1];
  var end = endTower[endTower.length - 1];


  if (startTower.length === 0) {
    return false;
  } else if (endTower.length === 0) {
    return true;
  } else if (start > end) {
    return false;
  } else {
    return true;
  }
};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (this.isValidMove.bind(this, startTowerIdx, endTowerIdx)()) {
    this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
    return true;
  } else {
    return false;
  }
};


var game = new HanoiGame([[3, 2], [1], []]);
game.move(0, 2);
console.log(game.stacks);
game.move(2, 1);
console.log(game.stacks);
// console.log(game);
// game.promptMove(function (start, end) {
//   console.log(start + ":" + end);
// });

// console.log(game.isValidMove(0, 1));
// console.log(game.isValidMove(1, 2));
// console.log(game.isValidMove(0, 2));
// console.log(game.isValidMove(1, 0));
// console.log(game.isValidMove(2, 0));
// reader.close();
