// Merge two sorted arrays into one sorted array
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
// Expected output: [1, 2, 3, 4, 5, 6]

let i = 0, j = 0;
let ans = [];


while ( i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){ans.push(arr1[i++]);}
    else{ans.push(arr2[j++]);}
}

if(i < arr1.length){
    ans.push(...arr1.slice(i, arr1.length));
}


if(j < arr2.length){
    ans.push(...arr2.slice(j, arr2.length));
}

console.log(ans);