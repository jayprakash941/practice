// https://leetcode.com/explore/learn/card/hash-table/185/hash_table_design_the_key/1126/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  var hash = {};
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (isNaN(parseInt(board[i][j]))) {
        continue;
      }
      if (hash['(' + board[i][j] + ')' + i]) {
        return false;
      }
      if (hash[j + '(' + board[i][j] + ')']) {
        return false;
      }
      if (hash[parseInt(i / 3) + '' + board[i][j] + '' + parseInt(j / 3)]) {
        return false;
      }
      hash['(' + board[i][j] + ')' + i] = 1;
      hash[j + '(' + board[i][j] + ')'] = 1;
      hash[parseInt(i / 3) + '' + board[i][j] + '' + parseInt(j / 3)] = 1;
    }
  }
  return true;
};

var board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(board));
