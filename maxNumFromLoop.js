let numbers = [56,34545435,75754745,4454354354];
let mx = numbers[0];
for (let i = 0; i< numbers.length; i++) {
    if (numbers[i]>mx) {
        mx = numbers[i]
    }
}
console.log(mx)

