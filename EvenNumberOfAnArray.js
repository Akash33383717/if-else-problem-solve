let arr = [1,2,3,4,5,6,7,8,4554656,546546546,435758,,65465,845,565376,31234267,34355689,31434356548759,1356766,2135646,545454]

let even = 0;
let odd = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0) {
        even += 1;
    } else {
        odd += 1;
    }
}

console.log(even)
console.log(odd)

