// Transpose a matrix (2D array)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
/* Expected output:
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
*/

let ans = [];

for (let i = 0; i < matrix[0].length; i++) {
  ans.push([]);
}


for(let i = 0; i < matrix[0].length; i++){
    for(let j = 0; j < matrix.length; j++){
        ans[i][j] = matrix[j][i];
    }
}

console.log(ans);