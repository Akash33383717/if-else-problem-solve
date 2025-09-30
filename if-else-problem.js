// 1 কোনো সংখ্যা ধনাত্মক নাকি ঋণাত্মক চেক করো
const number = -34;

if (number>0) {
    console.log("Number is positive.")
} else if (number<0) {
    console.log("Number is negative.")
} else{
    console.log("Error happend, Try with a vaild number.")
}

// 2 কোনো সংখ্যা জোড় নাকি বেজোড় চেক করো

const evenOrOdd = 5;

if (evenOrOdd===0) {
    console.log("Number is Zero.")
} else if (evenOrOdd%2 === 0){
    console.log("Number is Even.")
} else {
    console.log("Number is Odd")
}

// 3 দুইটা সংখ্যা তুলনা করে বড় কোনটা বের করো

const a = 34;
const b = 344;

if (a>b) {
    console.log(a + " (a) is bigger than (b) " +b)
} else {
    console.log(b + " (a) is bigger than (b) " +a)
}

// 4 তিনটা সংখ্যা তুলনা করে সবচেয়ে বড় বের করো

const num1 = 111;
const num2 = 111;
const num3 = 111;

if (num1 === num2 && num2 === num3) {
    console.log("All number are same, try with different number's")
} else if (num1>num2 && num1>num3) {
    console.log(num1 + " (num1) is the biggest number.")
} else if (num2>num3 && num2>num3) {
    console.log(num2 + " (num2) is the biggest number.")
} else {
    console.log(num3 + " (num3) is the biggest number.")
}

// 5 বয়স দেখে মানুষ ভোট দিতে পারবে কি না (১৮ বা বেশি হলে পারবে)

const ageOfVoter = 18;

if (ageOfVoter>=18) {
    console.log("This person is eligible for Vote.")
} else {
    console.log("Person is not eligible for Vote.")
}

// 6 একটি সংখ্যা ৫ দ্বারা বিভাজ্য কি না

const oneNum = 35;

if (oneNum%5===0) {
    console.log("This number is Divisible by 5.")
} else {
    console.log("Number is not divisible by 5.")
}

// 7 একটি সংখ্যা ৩ এবং ৫ উভয় দ্বারা বিভাজ্য কি না

const div3And5 = 30;

if (div3And5%3===0 && div3And5%5 === 0) {
    console.log("Number is divisible by 3 and 5.")
} else {
    console.log("Number is not divisible by 3 and 5.")
}

// 8 কোনো অক্ষর vowel নাকি consonant চেক করো

const letterCheke = "b";

if (letterCheke === "a" || letterCheke ==="e" || letterCheke ==="i" || letterCheke ==="o" || letterCheke ==="u") {
    console.log("Letter is vowel and the letter is : " + letterCheke)
} else {
    console.log("Letter is consonant.")
}

// 9 একটি সংখ্যা ০, ধনাত্মক, না ঋণাত্মক তা বের করো


// যদি সংখ্যা > 0 → console.log("Positive")


// যদি সংখ্যা < 0 → console.log("Negative")


// যদি সংখ্যা === 0 → console.log("Zero")


// 10 একজন শিক্ষার্থীর নাম্বার দিলে সে পাস নাকি ফেল করেছে (পাস মার্ক ৪০)

const markOfStudent = 34;

if (markOfStudent >= 40) {
    console.log("Congratulation, You are pass.")
} else {
    console.log("Sorry, you are fail.")
}

// 11 দিন সংখ্যা দিয়ে সপ্তাহের দিন বের করো (1=Sunday, 2=Monday, … 7=Saturday)

const day = 8;

if (day === 1) {
    console.log("Today is Saturday.")
} else if (day === 2) {
    console.log("Today is Sunday.")
}  else if (day === 3) {
    console.log("Today is Monday.")
}  else if (day === 4) {
    console.log("Today is Teusday.")
}  else if (day === 5) {
    console.log("Today is Wednesday.")
}  else if (day === 6) {
    console.log("Today is Thuesday.")
} else if (day ===7) {
    console.log("Today is Friday")
} else {
    console.log("Try with a vlaid number.")
}

// 12 একটি সংখ্যা ১০০-এর সমান, বড় না ছোট তা বের করো

const numBigOrSmall = 105;

if (numBigOrSmall > 100) {
    console.log("Number is greater than 100.")
} else if (numBigOrSmall < 100) {
    console.log("Number is smaller than 100.")
} else {
    console.log("The number is 100.")
}

// 13 কোনো পণ্যের দাম ৫০০ টাকার বেশি হলে “Free Delivery” নইলে “Delivery Charge ৫০ টাকা”


const item = 550;

if (item >= 500) {
    console.log("Free Delivery.")
} else {
    console.log("Delivery Charge 50.")
}

// 14 একটি সংখ্যা ৫০ থেকে ১০০ এর মধ্যে আছে কি না

// 15 কোনো ছাত্রের নাম্বার দেখে গ্রেড দাও (>=80=A, >=60=B, >=40=C, নাহলে F)
// 17 তাপমাত্রা ৩০ ডিগ্রি বেশি হলে “Hot”, ১৫ থেকে ৩০ হলে “Warm”, ১৫ এর নিচে হলে “Cold”

const tamparature = 22;

if (tamparature < 15) {
    console.log("Weather is cold.")
} else if (tamparature > 30) {
    console.log("weather is hot.")
} else {
    console.log("weather is warm.")
}

// 19 ইউজার পুরুষ না মহিলা (gender ভ্যারিয়েবল দেখে) সেটা প্রিন্ট করো


const genderOfHuman = "male";

if (genderOfHuman === "male") {
    console.log("He is a male.")
} else {
    console.log("She is a female.")
}

// 📝 নতুন ২০টা if-else problem (JavaScript)

// 1. কোনো সংখ্যা ৭ দ্বারা বিভাজ্য কি না।
const Number7 = 3434;

if (Number7%7===0) {
    console.log("Number is divisible by 7.")
} else {
    console.log("Number is not divisible by 7.")
}
// 2. 

// easy

// 3.

const number1 = 23;
const number2 = 23;
const number3 = 2;

if (number1 === number2 && number2 === number3) {
    console.log("Number are same.")
} else if (number1 < number2 && number1 < number3) {
    console.log("Number1 ----> [ " +number1 +" ] <---- is smaller than other.")
} else if (number2 < number1 && number2 < number3) {
    console.log("Number2 ----> [ " +number2 +" ] <---- is smaller than other.")
} else {
    console.log("Number3 ----> [ " +number3 +" ] <---- is smaller than other.")
}

// 4. 

function lastNumCheke(anyNum) {
    let chekingNum = anyNum%10;

    if (chekingNum%2 === 0) {
        return "Last number is even."
    } else {
        return "Last number is odd."
    }
}

console.log(lastNumCheke(13));

// 5. 

const numOf100 = 4879384473;

if (numOf100 % 2 === 0) {
    console.log("Number is 100 ar gonitok.")
} else {
    console.log("Number is not 100 ar gonitok.")
}

// 6. 

const ageOfTeen =2;

if (ageOfTeen < 13 || ageOfTeen > 19) {
    console.log("Person is not teenager.")
} else {
    console.log("Person is teenager.")
}

// 7. 

const num1OfSum = 2;
const num2OfSum = 45;
const sum = num1OfSum + num2OfSum;

if (sum >= 100) {
    console.log("It's a big sum.")
} else {
    console.log("It's a small sum.")
}

// 8. 

const anynum1to10 = 11;

if (anynum1to10 < 1 || anynum1to10 > 10) {
    console.log("No, Number is not here (Between 1 and 10).")
} else {
    console.log("Yes, Number is between 1 and 10.")
}

// 9. 

const run = 500;

if (run === 50) {
    console.log("It's a half century.")
} else {
    console.log("Run : "+ run )
}

// 10. 

const fizzBuzz = 9;

if (fizzBuzz%3 === 0 && fizzBuzz%5 === 0) {
    console.log("FizzBuzz.")
} else if (fizzBuzz%5 === 0) {
    console.log("Buzz. Number is divisible by 5.")
} else {
    console.log("Fizz. Number is divisible by 3.")
}

// 11. 

const ch = "a";

if (ch >= "A" && ch <= "Z") {
    console.log("Letter is uppercase.")
} else if ( ch >= "a" && ch <= "z") {
    console.log("Letter is lowercase.")
} else {
    console.log("It's not a letter.")
}

// 12. 

const Age = 343;

if (Age < 12) {
    console.log("child")
} else if (Age <= 19) {
    console.log("Teen")
} else if (Age <=59) {
    console.log("Adult")
} else {
    console.log("Senior")
}

// 13. 

const manyTest = 77;

if (manyTest>0) {
    if (manyTest%2===0){
        console.log("Number is even.")
    } else {
        console.log("Number is odd.")
    }
} else if (manyTest === 0) {
    console.log("Number is Zero.")
} else {
    console.log("It's a Negative number, Try with a Positive number.")
}

// 14. 

// x

// 15. 

// x

// 16. 

const marryAge = 22;

if (marryAge >= 21) {
    console.log("Can marry legally.")
} else {
    console.log("Too Young.")
}

// 17. 

const lastnumber = 55;

if(lastnumber%10===5) {
    console.log("Last number is 5.")
} else {
    console.log("Last number is not 5.")
}

// 18. 

const pass = 234;

if (pass === 1234) {
    console.log("Login successful.")
} else {
    console.log("Wrong password.")
}

// 19. 

const nagVsPos = 3434;

if (nagVsPos > 0) {
    console.log("Number is positive.")
} else {
    console.log("Absolute value = " + Math.abs(nagVsPos))
}

// 20. 

// x

// 🔟 নতুন if-else প্র্যাকটিস প্রশ্ন

const digitOfNumber = 34;

if (digitOfNumber.toString().length === 2) {
    console.log("Two digit Number.")
} else {
    console.log("Not Two Digit.")
}

const ifnum = 7777;

if (ifnum % 10 ===0) {
    console.log("Ends with Zero.")
} else {
    console.log("Not Ends with Zero.")
}