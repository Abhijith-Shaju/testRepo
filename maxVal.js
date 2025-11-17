// Find the maximum value in an array
const values = [5, 9, 3, 19, 7];
// Expected output: 19


const max = Math.max(...values);
// const max = values.reduce( (a, b) => (a > b) ? a : b);

console.log(max);