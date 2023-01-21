# Datatypes.

 **What are the falsy values in JavaScript?**
 -   `''`
-   0
-   `null`
-   `undefined`
-   `false`
-   `NaN`

****
**How to check if a value is falsy?**
Use the `!!` operator or `Boolean` function to check if they’re falsy.
*****
**What are truthy values?**
Values that are return true 
****
**What is the difference between Implicit and Explicit Coercion?**
 JavaScript interpreter converts  one type to another = Implicit
 ```javascript
 
 console.log(1 + '2'); // returned because 1 is converted to `'1'` implicitly.

  output - 12
```
 
 Done by calling a method or using an operator to convert a type =  Explicit conversion  
```javascript
+'1' + +'2'

output 3 
```

We can also do the same things with functions. For example, we can use the `parseInt` function instead of using the unary `+` operator.
```javascript
parseInt('1') + parseInt('2') // result will be same 
```

****
**What Does 0 || 1 Return?**
Since `0` is falsy, it’ll trigger the second operand to run, which gives us 1. Therefore, it should return 
****
**What Does 0 && 1 Return?**
Since `0` is falsy, it’ll stop running since we have short-circuited evaluation. Therefore, we get 0 returned.
****
**What Does 4 < 5 < 6 Return?**
4 < 5 = true 
True = 1
1 < 6 = true 
Result
True
****
**What Does 6 > 5 > 4 Return?**

6 > 5 = True 
True = 1 
1 > 4 = False


****
**What Does   typeof undefined == typeof null   Return?**

`typeof undefined` returns `'undefined'` and `typeof null` returns `'object'` .

Since `'undefined'` does equal `'object'` , the expression should be `false` .
****
**What Does typeof typeof 10 Return**
JavaScript evaluates `typeof typeof 10` as `typeof (typeof 10)` . Therefore, this returns `typeof 'number'` , which returns `'string'` since `'number'` is a string.

****
**What are the data types we have in latest JavaScript?**

1.  Boolean
2.  null
3.  undefined
4.  Number
5.  BigInt
6.  String
7.  Symbol
8.  Object

****
What is the difference between `null` and `undefined`?

**Answer:**

Both `null` and `undefined` behaves almost the same way when used in code. But as part of best practice, difference between those two lies in their usage.

`null` represents intentional absence of an object. That means, if there is a place where the code expects an object, but we are unable to provide one, then we give back `null`. Example: `match()` is a string method that returns an array of all matches of a supplied pattern.

```javascript
const str = "Orange is orange";
const result = str.match(/orange/gi);
console.log(result); // ["Orange", "orange"]
```

Here the `match()` method returned an array. After all, array is a type of object. So, we can say that, `result` is always expecting an object. If there was no match found, then there is no object to return to `result`. In order to state an intentional absence of an object, `match()` method returns `null` if no match is found.

```javascript
const str = "Orange is orange";
const result = str.match(/Apple/gi);
console.log(result); // null
```

On the other hand, `undefined` is the value of a variable that is declared, but not initialized. Also, a function in JavaScript by default returns `undefined`. So in those context, we can use `undefined`.

****
I need to check if the value of variable `a` is `undefined`. For that, I wrote the following code:

```javascript
if (a === undefined) {
  console.log("a is declared");
} else {
  console.log("a is declared and initialized");
}
```

What happened is, if `a` is not declared, above code throws `ReferenceError` in the first line. How can we resolve this issue?
**Answer:**

We can use `typeof` operator.

```javascript
if (typeof a === "undefined") {
  // ...
}
```

`typeof` does not throw error for undeclared variables.

****

**What is Closure? Give an example.**

PENDING

****
