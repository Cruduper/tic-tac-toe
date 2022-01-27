//gamey = new Game() --- gamey.newGame() --- 

function Game() {
  this.board = new Board();
  this.player1 = new Player("x");
  this.player2 = new Player("o");
}


Game.prototype.gameTurn = function( placement ) {
  if ( (this.player1.turn === true) && ( this.board.boardArr[placement[0]][placement[1]] === "") )  {
    this.board.addToBoard( this.player1.symbol, placement);
  }
  else if ( (this.player2.turn === true) && (this.board.boardArr[placement[0]][placement[1]] === "") )  {
    this.board.addToBoard( this.player2.symbol, placement);
  }
  else  {
    alert("uh oh, an error occurred in Game.prototype.gameTurn!");
    return false;
  }

  this.changeTurn();

  if ( this.calcWinner(this.player1.symbol) ) {
    alert("player 1 wins!");
    this.newGame();
  }
  else if ( this.calcWinner(this.player2.symbol) )  {
    alert("player 2 wins!")
    this.newGame();
  }

  return true; 
}

Game.prototype.calcWinner = function(symb) {
  if( (this.board.boardArr[0][0] === symb) && (this.board.boardArr[1][0] === symb) && (this.board.boardArr[2][0] === symb) ) {
    return true;
  }
  else if ( (this.board.boardArr[0][1]=== symb) && (this.board.boardArr[1][1]=== symb) && (this.board.boardArr[2][1]=== symb) )  {
    return true;
  }
  else if ( (this.board.boardArr[0][2]=== symb) && (this.board.boardArr[1][2]=== symb) && (this.board.boardArr[2][2]=== symb) )  {
    return true;
  }
  else if ( (this.board.boardArr[0][0]=== symb) && (this.board.boardArr[0][1]=== symb) && (this.board.boardArr[0][2]=== symb) )  {
    return true;
  }
  else if ( (this.board.boardArr[1][0]=== symb) && (this.board.boardArr[1][1]=== symb) && (this.board.boardArr[1][2]=== symb) )  {
    return true;
  }
  else if ( (this.board.boardArr[2][0]=== symb) && (this.board.boardArr[2][1]=== symb) && (this.board.boardArr[2][2]=== symb) )  {
    return true;
  }
  else if ( (this.board.boardArr[0][0]=== symb) && (this.board.boardArr[1][1]=== symb) && (this.board.boardArr[2][2]=== symb) )  {
    return true;
  }
  else if ( (this.board.boardArr[0][2]=== symb) && (this.board.boardArr[1][1]=== symb) && (this.board.boardArr[2][0]=== symb) )  {
    return true;
  }
  else  {
    false;
  }
};

Game.prototype.newGame = function()  {
  this.board.clearBoard();
  this.player1.turn = true;
  this.player2.turn = false;
};

Game.prototype.changeTurn = function() {
  if (this.player1.turn === true)  {
    this.player1.turn = false;
    this.player2.turn = true;  
  }
  else  {
    this.player1.turn = true;
    this.player2.turn = false;
  }
};

Game.prototype.gameOver = function() {
  alert("game over! refresh to play again!");
};




function Board()  {
  this.boardArr;
  this.clearBoard();
}

  //placement is an array with 2 elements, element[0] = row, element[1] = column
Board.prototype.addToBoard = function(symbol, placement)  {
  this.boardArr[placement[0]][placement[1]] = symbol;
};

Board.prototype.clearBoard = function() {
  this.boardArr= [ ["", "", ""], ["", "", ""], ["", "", ""] ];
};




function Player(symb) {
  this.symbol = symb;
  this.myTurn; 
}

$(document).ready(function() {



});