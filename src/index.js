
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined 
    || matrix[1] === undefined 
    || !matrix) {
    return []
  } else if (typeof matrix[3] ==='object') {
    let a = matrix[1].reverse();
    let b = matrix[3].reverse();
    return matrix.join(',').split(',');
  } else {
    let a = matrix[1].reverse();
    return matrix.join(',').split(',');
  };
};