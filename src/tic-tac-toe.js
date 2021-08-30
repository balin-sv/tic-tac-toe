class TicTacToe {
  constructor() {
    this.currentPlayer = "x";
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.gameField[rowIndex][columnIndex] != null) {
      return;
    }

    if (this.currentPlayer === "x") {
      this.gameField[rowIndex][columnIndex] = "x";
      this.currentPlayer = "o";
    } else {
      this.gameField[rowIndex][columnIndex] = "o";
      this.currentPlayer = "x";
    }
  }

  isFinished() {
    if (this.getWinner() === "x" || this.getWinner() === "o" || this.isDraw()) {
      return true;
    } else if (this.getWinner() === null) {
      return false;
    }
  }

  getWinner() {
    let counterHorizontal;
    let auxHorizontal;
    let checker;

    //check horizontal
    for (let i = 0; i <= 2; i++) {
      for (let y = 0; y <= 2; y++) {
        if (
          (i === 0 && y === 0) ||
          (i === 0 && y === 1) ||
          (i === 0 && y === 2 && this.getFieldValue(i, y) !== null)
        ) {
          checker = this.getFieldValue(i, y);
          if (this.checkAll(checker) === checker) {
            return checker;
          }
        }

        if (
          (i === 0 && y === 0) ||
          (i === 1 && y === 0) ||
          (i === 2 && y === 0)
        ) {
          auxHorizontal = this.getFieldValue(i, y);
          counterHorizontal = 0;
        }
        if (this.getFieldValue(i, y) === auxHorizontal) {
          counterHorizontal++;
          if (counterHorizontal === 3) {
            return auxHorizontal;
          }
        }
      }
    }
    return null;
  }

  //check All

  checkAll(flag) {
    if (
      (this.getFieldValue(0, 0) === flag &&
        this.getFieldValue(1, 0) === flag &&
        this.getFieldValue(2, 0) === flag) ||
      (this.getFieldValue(0, 1) === flag &&
        this.getFieldValue(1, 1) === flag &&
        this.getFieldValue(2, 1) === flag) ||
      (this.getFieldValue(0, 2) === flag &&
        this.getFieldValue(1, 2) === flag &&
        this.getFieldValue(2, 2) === flag) ||
      (this.getFieldValue(0, 0) === flag &&
        this.getFieldValue(1, 1) === flag &&
        this.getFieldValue(2, 2) === flag) ||
      (this.getFieldValue(0, 2) === flag &&
        this.getFieldValue(1, 1) === flag &&
        this.getFieldValue(2, 0) === flag)
    ) {
      return flag;
    }
  }

  noMoreTurns() {
    for (let i = 0; i <= 2; i++) {
      for (let y = 0; y <= 2; y++) {
        if (this.getFieldValue(i, y) === null) {
          return false;
        }
      }
    }
    return true;
  }

  isDraw() {
    // if (this.noMoreTurns() && this.getWinner() === null) {
    //   return true;
    // } else {
    //   return false;
    // }

    return this.noMoreTurns() && this.getWinner() === null;
  }
  getFieldValue(rowIndex, colIndex) {
    return this.gameField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
