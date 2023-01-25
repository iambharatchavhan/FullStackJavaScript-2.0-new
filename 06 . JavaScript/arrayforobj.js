//^ Basics of array for objects

//? Premetive vs reference type

let numOne = 10 ;
let numTwo = numOne ;

console.log("numOne",numOne);
console.log("numTwo",numTwo);
// Output
//! numOne 10
//! numTwo 10
//?__________
numOne++
console.log("numOne",numOne);
console.log("numTwo",numTwo);
// Output
//! numOne 11
//! numTwo 10
//?__________

//^ As acpected result

//? What about reference type 

let myArrayOne = [1,2,3,4,5];
let myArrayTwo =  myArrayOne;

console.log("myArrayOne",myArrayOne);
console.log("myArrayTwo",myArrayTwo);

//^ we have same output in both array 
// myArrayOne [ 1, 2, 3, 4, 5 ]
// myArrayTwo [ 1, 2, 3, 4, 5 ]

myArrayTwo.push(6);
console.log("myArrayOne",myArrayOne);
console.log("myArrayTwo",myArrayTwo);
//^ now what will be the output
// myArrayOne [ 1, 2, 3, 4, 5, 6 ]
// myArrayTwo [ 1, 2, 3, 4, 5, 6 ]
//^ As we see the arrayTwo changed

//^ how to clone array method -1
let arrayThree = myArrayOne.slice(0);

console.log("arrayThree",arrayThree);
//^ output
// arrayThree [ 1, 2, 3, 4, 5, 6 ]
// now when will change arryThree it not affect myArrayOne
arrayThree.push(7);
console.log("myArrayOne",myArrayOne);
console.log("arrayThree",arrayThree);
// myArrayOne [ 1, 2, 3, 4, 5, 6 ]
// arrayThree [ 1, 2, 3, 4, 5, 6 , 7]

//^ how to clone array method -2  concat two arrays 
 let myArrayFour = [8,9].concat(myArrayOne);
console.log("myArrayFour",myArrayFour);

//^ how to clone array method -3  spread operator 

let myArrayFive = [...myArrayOne];

console.log("myArrayFive",myArrayFive);
// we have succesfully cloned array  now we clone plus add value in it

let myArraySix = [7,8,9,10,...myArrayOne];
console.log("myArraySix",myArraySix);
// we successfully achived  but now we want elements at last 
let myArraySeven = [...myArrayOne,7,8,9,10,11,12,13];
console.log("myArraySeven",myArraySeven);
// now it seems simple 

// *----------*_______________*-----------------*_________*----------------*_________ 
//^ Array destructuring 

const mySpecialArray = ["one","Two","Three","Four"];
// we will try to save values in seperate variables 

let [one,two,three] = mySpecialArray;
console.log(one);
console.log(two);
console.log(three);

// we have Printed vairables , but now we want rest value in seperate array. 
const mySplArray1 = ["one","Two","Three","Four","five","six"];

let [myvariable1,myvariable2,myvariable3, ...mySpArry2] = mySplArray1;

console.log("myvariable1",myvariable1);
console.log("myvariable2",myvariable2);
console.log("myvariable3",myvariable3);
console.log("mySpArry2",mySpArry2);


//^ Skiping elements

const mySkiped = [20, 100, 200, 500];

let [x, , y,z] = mySkiped ;
console.log("x", x);
console.log("y", y);
console.log("z", z);

// we have saved  20 200 and 500 skipping 100 




// *----------*_______________*-----------------*_________*----------------*_________ 












