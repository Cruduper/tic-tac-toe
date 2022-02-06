//gamey = new Game() --- gamey.newGame() --- 

function Game() {
  this.board = new Board();
  this.player1 = new Player("x");
  this.player2 = new Player("o");
  this.gameOver = false;
}


Game.prototype.gameTurn = function( placement ) {

  const row = placement[0];
  const col = placement[1];
  const boardPlace = this.board.boardArr[row][col];

  if ( (this.player1.turn === true) && ( boardPlace === "") )  {
    this.board.addToBoard( this.player1.symbol, placement);
  }
  else if ( (this.player2.turn === true) && ( boardPlace === "") )  {
    this.board.addToBoard( this.player2.symbol, placement);
  }
  else  {
    alert("uh oh, an error occurred in Game.prototype.gameTurn!");
    return false;
  }

  this.changeTurn();

  if ( this.calcWinner(this.player1.symbol) ) {
    alert("player 1 wins!");
    this.gameOver = true;
    this.newGame();
  }
  else if ( this.calcWinner(this.player2.symbol) )  {
    alert("player 2 wins!")
    this.gameOver = true;
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


//UI Logic


let game = new Game();
game.newGame();


function oneTurn (thisArg) {

  const row = $(thisArg).closest("tr").index();
  const col = $(thisArg).index();

  if ( $(thisArg).text() === "") {
    if (game.player1.turn == true)  {
      $(thisArg).text(game.player1.symbol);
      $("#nameOne").toggleClass("turnRed");
      $("#nameTwo").toggleClass("turnRed");
    }
    else  {  
      $(thisArg).text(game.player2.symbol);
      $("#nameOne").toggleClass("turnRed");
      $("#nameTwo").toggleClass("turnRed");
    }

    game.gameTurn([ row, col ]);

    if (game.gameOver == true)  {
      $(".squares").text("");
      $("#nameOne").addClass("turnRed");
      $("#nameTwo").removeClass("turnRed");
      game.gameOver = false;
    }
  }
  else  {
    alert("That square is already occupied! Click somewhere else!");
  }
}

function bothNamesFilled(name1, name2)  {
  if ( ( name1 != "") && ( name2 != "") ) {
    $(".playerBox").hide();
    $(".grid").show();
    $(".names").show();
  }
}


$(document).ready(function() {
  let name1 = "";
  let name2 = "";

  $("button#p1Button").click( function() {
    name1 = $("input#p1Name").val();
    bothNamesFilled(name1, name2);
    $("#nameOne").text(name1);
  });


  $("button#p2Button").click( function() {
    name2 = $("input#p2Name").val();
    bothNamesFilled(name1, name2);
     $("#nameTwo").text(name2);
  });

  // if ( ($("playerOne").text() != "") && ($("playerOne").text() != "") ) {
  //   $("playerBox").hide();
  //   $("#grid").show();
  // }

  $(".squares").click( function() {
    
    oneTurn(this);
    


      


  });


  //var colIndex = $(this).closest("td").index();
  //var rowIndex = $(this).closest("tr").index();

});