let fiveAndSeven = 0;
for ( let i = 1; i <=100; i++) {
    if (i%7 === 0 && i%5 === 0) {
        fiveAndSeven += 1;
    }
}


console.log("divisible by 5 and 7 between 1 and 100 -----> "+fiveAndSeven)
