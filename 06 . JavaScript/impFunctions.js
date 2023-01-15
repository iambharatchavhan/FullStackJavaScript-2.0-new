//? Functions in javascrit 
/* 
 fundamental building block of code
 reusable 
 ?servant - AKA Bots
^  who performs duties for us - AKA Agyyakari (but First Training is important)
    
   ~ AKA - set of procedure that performs a task  
   need to call
   They can  also help to each other
*/

/* 
^Function Declaration
!Syntax--> 


  function function_name (param1, param2....)
  {
   Block of code or Statemente
   return (expression,array,object);
  }
 ^ passed arguments goes in param and executes-
function_name(pass arg);
*/

console.log("------------------------------------------");

function sayHello(){
     console.log ("Hello Everyone");
}
//sayHello();


// ! ------------------------------------
function add (a,b){
    return (a + b)
}
 c = add (3, 5);
 //console.log(c);


 function minus(){
     return 5 - 2;

 }
result = minus();
//console.log (result);

// ! -----make app for exam result and undrstood how functions help each other--------

//? Advance return exaple 

function ObtainMarks(html,css,js){
     sum = html + css + js;

     return sum;

}
totalMarks = ObtainMarks(60,70,80);
console.log(`Total Maraks: ${totalMarks}`);


//!---------------------------------------

function obtainPercentage(totalPer){
    per = totalPer / 300 * 100;

    return per ;
}
percentage = obtainPercentage(totalMarks);
console.log(`Percentage : ${percentage} %`);

//!----------------------------

function passFail (passPercentage){
    if (passPercentage < 35)
    {
     console.log("Better Luck Next Time ..You are Fail");
     console.log("------------------------------------------")
    }
    else{
     console.log("Greetings ..... Your are Pass");
     console.log("------------------------------------------")


    }
}
passFail(percentage);

//!----------------------return understood ---------------
//?templet leterals --study 

//^ Function Expression
/* 

!syntax

variable = function (param)
{
   Block of code or Statemente
   return (expression,array,object);

}
varible()
^ Stores return value in varible

*/

const numSquar = function (number){
    return  number * number;

}
console.log(numSquar(5));


const addition = function  (a ,b){
    add = a + b;
    return add;

}
console.log(add(5,5));

oddEven = function (number)
{
    if(number % 2 === 0)
    {
     return true;

    }
    else
    {
        return false;
    }
}
console.log(oddEven(10)) 


oddEvenShort = function (number)
{
    if(number % 2 === 0){
        return true;
    }
    return false
}
console.log(oddEvenShort(5));
/*
^  ------- >>--------> Arrow Functions <---------<< -------

 let variable = () => 

^  ------- >>--------> Arrow Functions <---------<< -------
*/


const arrowOddEven = (num) => (num % 2 === 0)


console.log(arrowOddEven(2));

//!--------------------------------difference between-------------