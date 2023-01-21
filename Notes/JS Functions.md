# What are the Functions in javascript

 - functions are the fundamental building block of code 
 - functions are set of procedure that performs a task
 -  functions are reusable 
AKA functions are our servents just we have to Train them to do pecific task.
- Just need to call 


## Statemente *VS*  Expression

### Statemente
The statement is piece of code  but it does not retun any value.   
It will perfom some action like If you stored name in the variable it will not give you any return value but store name as value in that variable. 

*Example*

```javascript
let myName = "Bharat"
let x, y, z;
z = x + y;
```

This all are statementes who performs some actions but did not return any kind of value

###  Expression
 Expressions are  piece of code and  it  will aslo  produce some value or return some value.
 Remember that avaScript's expression is  *a valid set of literals* or vaiables or Operator that produce single value .

Remember that JavaScripts expression is  *a valid set of literals* or variables or Operator that produce a single value.

  *Example*
 
```javascript
a = 5 + 4

"India"

true && false
```


```javascript
  
 

# How many types of functions are there ?

 Basically there are three types functions exist in javascript 
 - Function Declaration aka Function statement aka classic function
 - Function Expression
 - Arrow functions

##  Function Declaration 
 aka Function statement aka classic function  
- A function declaration defines a function that will be executed when it is invoked/called.
 

  *Syntax*
```
  function function_name (param1, param2....)

  {
   Block of code or Statemente
    -------
    -------
    -------
   return (expression,array,object);
  }
  function_name(pass arg);
  
   *Examples*

```javascript

function sayHello(){

     console.log ("Hello Everyone");
}

sayHello();

```



```javascript
function add (a,b){

    return (a + b)
}

 c = add (3, 5);
```

## Making the Result app using a Function Declaration

```javascript
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

```


##  Function Expression
A function expression is similar to a function declaration, which can be stored in a variable. As soon as the function is defined with an expression, it is invoked. AKA called .

*Syntax*

```javascript
let syn = function (param)

{

   Block of code or Statemente

   return (expression,array,object);
}

syn()
```

  ### Squar of number 
  
```javascript
const numSquar = function (number){

    return  number * number;
}

console.log(numSquar(5));
```

```javascript
  

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
```

## Arrow Function

Arrow function — also called fat arrow function— is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. While both regular JavaScript functions and arrow functions work in a similar manner, there are certain differences between them.

Curly brackets aren’t required if only one expression is present. The above example can also be written like this:

```javascript
const arrowOddEven = num => (num % 2 === 0)
```

Advantages  
➡️  Less line of code 
➡️ Implicit Return
➡️ Function keyword not required 
➡️ Easy to read and Witing code


**Some Examples**

```javascript
const newArrow = (number) => (number <= 18) ;

console.log(newArrow(19));
```

```javascript
let sum = (a, b) => a + b;
console.log(sum(1 ,9));
```

```javascript
let double = n => n * 2; 

console.log(double(19));
```


Thasnks --- 📫✏️🎯