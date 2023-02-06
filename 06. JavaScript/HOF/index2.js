//^ map filter reduce

// map function  iterate  each and every value in the array 

//*  ex?

const arr = [9,7,6,5,4,3,2]

function double (number) {
    return number * 2
}

console.log(arr.map(double));

//^ also

console.log(arr.map(function (num){
    return num * 2;
}));

function sqr (num) {
 return   num **2;
}
console.log(sqr(9));

//

console.log(arr.map(function(num){
       sqrs = num ** 2;

    return sqrs;
}));

//filter function 

//! arr = [9,7,6,5,4,3,2]
// filter based on some logic

//? oddValues

function oddValues (num)
{
    return num %2 ;
} 
console.log(arr.filter(oddValues));

//& same 
console.log(arr.filter( (num)=> num%2));
//&even
/*
^  console.log(arr.filter((num)=>num%2===0));
^  const isEven = (num) => {
^  return num % 2 === 0;
^  }

*/

//* Reduce ---> to find sum or Max num 


//! arr = [9,7,6,5,4,3,2]
const arrTwo = [9,7,6,5,4,3,2]

function findSum (arrTwo){
    let sum = 0;

    for (let i=0 ; i< arrTwo.length; i++){
     sum = sum + arr[i];

    }
  return sum;
}
console.log(findSum(arrTwo));

const output = arrTwo.reduce((acc,curr) =>
{
    acc=  acc + curr;
    return acc;
},0);
console.log(output);

//^ how do we find out the max number of the array 
const findMax = arrTwo.reduce((acc,curr)=>{
    // pass current value and check it with the accumilator
     if (curr > acc){
        // if current is greater than accumilator assighn value to accumilator 
        acc = curr;
     }
     return acc ;
},0)

console.log(findMax);

//& more to learn about map filter reduce pending 