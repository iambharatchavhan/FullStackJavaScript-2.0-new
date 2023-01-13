//define a classic function
//This is classic Style of functions
let printQuote = function (){
    console.log(" If say youre cooler than me ...does that make me hotter than you. ");
    console.log("-----------------------------");
}
//printQuote();

let sayHello = function (){
    console.log("Hey am Bharat, How are you all");
    console.log("hello am classic function");
    console.log("-----------------------------");

}
//sayHello();

//user input and parameters

let nameParam = function (names){
    console.log( `Hey am ${names} How are you all`);
    console.log("-----------------------------");



}
//nameParam('Ram');

//playing with two parameters you can called is param1 param2 but names make more sence
let nameSirname= function (name ,lastName,nickName){
    console.log( `Hey my name is: ${name} and my LastName is: ${lastName} , But you can call me  ${nickName} HeHe :)`);
    console.log("-----------------------------");
   
}
//nameSirname("Jayesh", "Bond" , "JemsBond");
//nameSirname("Peter", "Prabhakar", "MakadaMan");

//cool Right
// lest do one oldSchool example of additin 
let adder = function (num1,num2) {
    //   basic logic
    Add = num1 + num2;
    
    // not console this time simlpy return the value 
    return Add;
   
}
//First save result in diffenren variables
let Result = adder(5,4);
//now we print result using console
//console.log(Result);

// -----------------------------mordern but less used method--------------------------------------------------------

//Function declaration method
/*
-----------------------------------------
syntax 

function function-name (parameters){

    block of code
    block of code
    block of code

}
function-name(values);
------------------------------------------
*/
//long way for ubderstanding functinality 
function oddEven(number){
   
    if(number%2 === 0)
    {
        console.log(`Number : ${number} is Even`)
    }
    else if(number%2 != 0)
    {
        console.log(`Number : ${number} is Odd`)
         
    }
    else if(number === 0)
    {
        console.log(`Number : ${number} is not Even or Odd`)
         
    }
    else 
    {
        console.log(`Number : ${number} not a number`)

    }

}
oddEven(5);
oddEven(10);
oddEven(0);

//Shot way ---------------------------------
function oddEvenshort(number)
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
let newresult = oddEvenshort(1);
console.log(newresult);

//OR wy  short----------------------------
function oddEvenshort2(number)
{
    if(number % 2 === 0)
    {
     return true;

    }
    return false;
}

let newresult2 = oddEvenshort(10);
console.log(newresult2);


//OR shorter ----------------------------
function oddEvenshort3(number)
{
    return (number % 2 === 0);
}
let newresult3 = oddEvenshort(5);
console.log(newresult3);

// All function woked ,gave correct results

// ----------------------------------------Most impotant >-------->>  Arrow Function --------------------------