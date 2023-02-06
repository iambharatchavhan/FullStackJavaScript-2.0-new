console.log("Q1-----------------------------------------------");

//? 1. Create a function that takes two numbers as arguments and returns their sum.

let addition = (a ,b) => {
    //return a + b;
    // or 
    console.log(a + b);
}

addition(3, 2) 
//➞ 5
addition(-3, -6) 
//➞ -9
addition(7, 3) 
//➞ 10
console.log("Q2-----------------------------------------------");
//? 2. Write a function that takes an integer minutes and converts it to seconds.

let convert = (minuts) => {
     
    // return minuts * 60 ;
    //or
    console.log(`Minuts: ${minuts} =  ${minuts * 60} Seconds `);
    //console.log("Minuts " +  minuts ,(minuts * 60)  + " Seconds ");
     
}

convert(5) 
// ➞ 300
convert(3)
//  ➞ 180
convert(2)
//  ➞ 120
console.log("Q3-----------------------------------------------");

//? 3. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

 let addition2 = (number) => {
     
    return number = number + 1;
   
 }
 console.log ( addition2(0));
//   ➞ 1
console.log(addition2(9));
// ➞ 10
console.log(addition2(-3));
//  ➞ -2
console.log("Q4-----------------------------------------------");

//?4 Write a function that takes the base and height of a triangle and return its area.

let triArea = (base, height) => {
      
   return (base * height) / 2;

}

console.log(triArea(3, 2));
// ➞ 3
console.log(triArea(7, 4));
// ➞ 14
console.log(triArea(10, 10));
// ➞ 50
console.log("Q5-----------------------------------------------");

//?5 Create a function that takes the age in years and returns the age in days.
 let calcAge= (age) => {

    return age * 365 ;
 }
console.log(calcAge(65));
 //➞ 23725
console.log(calcAge(0));
 //➞ 0
 console.log(calcAge(20));
// ➞ 7300
console.log("Q6-----------------------------------------------");

//?6 Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
/* 

function cubes(a)
 {
	retunr a ** 3
}

*/

function cubes(a)
 {
	return a ** 3
}
console.log(cubes(3));
// ➞ 27

console.log(cubes(5));
//  ➞ 125

console.log(cubes(10));
// ➞ 1000
console.log("Q7-----------------------------------------------");

//? 7 Create a function that takes an array containing only numbers and return the first element.
//!note The first element in an array always has an index of 0.
let getFirstValue = (arrnums) => {
      return arrnums[0];
}
console.log(getFirstValue([1, 2, 3]));
//  ➞ 1
console.log(getFirstValue([80,5, 100]));
//  ➞ 80
console.log(getFirstValue([-500, 0, 50]));
// ➞ -500
console.log("Q8-----------------------------------------------");

//? 8 Create a function that takes voltage and current and returns the calculated power.

let circuitPower = (voltage,current) => {
         
       return voltage * current ;
}
console.log(circuitPower(230, 10));
//  ➞ 2300
console.log(circuitPower(110, 3));
//  ➞ 330
console.log(circuitPower(480, 20));
//  ➞ 9600
console.log("---------------------Q9--------------------------");

//? Write a function that converts hours into seconds.

let howManySeconds = (hours) => ( hours * 60 )* 60;

console.log(howManySeconds(2));
// ➞ 7200
console.log(howManySeconds(10));
//  ➞ 36000
console.log(howManySeconds(24)); 
// ➞ 86400

console.log("---------------------Q10--------------------------");
//? Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

let nextEdge =(side1 ,side2) => (side1 + side2) -1 ;

console.log(nextEdge(8, 10) );
// ➞ 17
console.log(nextEdge(5, 7) );
// ➞ 11
console.log(nextEdge(9, 2) );
// ➞ 10
