
# Type Coercion and Falsy values

automatic or implicit conversion of values from one data type to another.

This mean conversion  from 
-  Number to String
- String to Number
- Boolean to Number
- etc.
note - We can perform all the activities Using mathematical operators

1.  Number + String = String
```javascript
let str = '2'+3;

 console.log(typeof str, str);

Output -  string 23
```

The above example will  converted numbers into string 

2.   Number - String = Number
```javascript
let num = "23"-10;

num = Number("23")-10 // Number("23") is equal to 23

console.log(num, typeof num);

Output - 13 number
```

3.   Number / String = Number
   ```javascript
  let num2 = "20"/ 2;

  console.log(num2, typeof num2);
  
 Output - 10 number
```

4.   Number * String = Number
   ```javascript
  let num2 = "20" * 2;

  console.log(num2, typeof num2);
  
 Output - 20 number
```

5.   Number % String = Number
   ```javascript
  let num2 = "20" % 3;

  console.log(num2, typeof num2);
  
 Output - 2 number
```

6.  With the expression 
```javascript
 console.log(2 + 6 + "15" -3 );
 
// 8+'15'-3

// '815'-3

// 812

 output - 812 
```

# Falsy  Values 

Basically, falsy values are Booleans which return a false value or 0 as an output

We have  **0, null, undefined, NaN**

```javascript
console.log(Boolean(""));

console.log(Boolean(0));

console.log(Boolean(null));

console.log(Boolean(undefined));

console.log(Boolean(NaN));

output - 
        false
        false
        false
        false
        false
```


# Truthy Values

The rest except falsy values are truty values 

```javascript

console.log(Boolean("bharat"));

console.log(Boolean(15));

console.log(Boolean([]));

console.log(Boolean({}));

console.log(Boolean(" "));

Output - 
true
true
true
true
true


```