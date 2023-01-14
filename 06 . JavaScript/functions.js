//^define a classic function
// &This is classic Style of functions

let printQuote = function (){
    console.log(" If say youre cooler than me ...does that make me hotter than you. ");
    console.log("-----------------------------");
}
// printQuote();

let sayHello = function (){
    console.log("Hey am Bharat, How are you all");
    console.log("hello am classic function");
    console.log("-----------------------------");

}
//sayHello();

//?user input and parameters

let nameParam = function (names){
    console.log( `Hey am ${names} How are you all`);
    console.log("-----------------------------");



}
//nameParam('Ram');

//?playing with two parameters you can called is param1 param2 but names make more sence

let nameSirname= function (name ,lastName,nickName){
    console.log( `Hey my name is: ${name} and my LastName is: ${lastName} , But you can call me  ${nickName} HeHe :)`);
    console.log("-----------------------------");
   
}
//nameSirname("Jayesh", "Bond" , "JemsBond");
//nameSirname("Peter", "Prabhakar", "MakadaMan");

//!cool Right
//^lest do one oldSchool example of additin 
let adder = function (num1,num2) {
 //^  basic logic
    Add = num1 + num2;
    
 //^not console this time simlpy return the value 
    return Add;
   
}
//^First save result in diffenren variables
let Result = adder(5,4);
//^now we print result using console
//console.log(Result);

// -----------------------------mordern but less used method--------------------------------------------------------

//^Function Expression method
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
//^long way for ubderstanding functinality 

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
// oddEven(5);
// oddEven(10);
// oddEven(0);

//^Short way ---------------------------------
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
// let newresult = oddEvenshort(1);
// console.log(newresult);

//^OR way  short----------------------------
function oddEvenshort2(number)
{
    if(number % 2 === 0)
    {
     return true;

    }
    return false;
}

// let newresult2 = oddEvenshort(10);
// console.log(newresult2);


//^OR shorter ----------------------------
function oddEvenshort3(number)
{
    return (number % 2 === 0);
}
// let newresult3 = oddEvenshort(5);
// console.log(newresult3);

//^ All function woked ,gave correct results

//~Function declaration method
//^ save fuction in a variable called function declaration and annonimous 

// -----------find remender of given number-------------

const remenderValue = function (number1, number2){
    return (number1 % number2 )
}
// let remResult = remenderValue(5 , 2);
// console.log(remResult);



/*
Red (!)
Blue (?)
Green (*)
Yellow (^)
Pink (&)
Purple (~)
Mustard (todo)
Grey (//)
 
 */
//^ ----------------------------------------Most impotant >>-------->-  Arrow Function >>---------->-
//? what exactly the arrow functions are ?
//~ The shortest and most used type of function are arrow >>-----> functions

const isEvenArrow = (number) => (number%2 === 0) ;     //thats it ...its finished   

//console.log( isEvenArrow(3));

//* ----------------------print massage -------------------------

const singSong = () => console.log("Happy Birthday To You"); //we print the song usig one line function

//singSong();

//! It is wroked only short functions or single task 

//? more exaples 

let votingAge = (age) => 
{
    if (age >= 18){
        console.log("You can vote");
    }
    else if (age <= 8)
    {
        console.log("You are just a child ");
    }
    else {
        console.log("You can not vote but Fill the form for voting card");
    }
}
votingAge(5);

// "---------- -- -------- ---------fetch first charecter of string ----------------- -- ----------------"

let firstChar = (names) => {
    return names[0];
}
let letter = firstChar('Nakul');
console.log(letter);


// ------------------------------------------------the end -----------------------------------------