const transpose = function(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
   
  for (let row = 0; row < matrix.length; row++) {
      
    for (let column = 0; column < matrix[row].length; column++) {
      newMatrix[column][row] = matrix[row][column];
    }
  } return newMatrix;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const newLetters = transpose(letters);
  const vertJoin = newLetters.map(ls => ls.join(''));
  for (let l of vertJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;






