let sum = 0;
let divider = 0;
for(i=1;i<51;i++) {
    sum = sum +i;
    divider = divider + i.toString.length;
}
console.log("avarage of " +sum+" is " + sum/divider)
console.log("The divider is "+divider)