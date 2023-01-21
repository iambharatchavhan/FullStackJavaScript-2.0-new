#  Execution context
 It is the most important topic in the  Javascript. 
in the very fisrt for code execcution 
- Memory creation phase 
- big box - container creates 

```javascript
  
var a = 20 ;

function exc (num) {

 var  c = num * num ;

  return c;

}

var sqr1 = exc(a) ;

var sqr2 = exc(10);
```

*Memory componant*
 
![[Kaagaz_20230120_185959131354-1.jpg]]

In the phase of memory creation  a vairable inviroment created  in Which evrything strores as value key pair 

*code componant* 

![[Kaagaz_20230120_190255230833-1.jpg]]

In the code componant  **One line of code Executed at a time** 

## **Why Javascript is synchronous single threaded language ?**

_The term single threaded mean one command-line of code runs at a time 
and the word synchronous mean line by line in specific order_


```javascript
  
var a = 20 ;

function exc (num) {

 var  c = num * num ;

  return c;

}

var sqr1 = exc(a) ;

var sqr2 = exc(10);
```

## lets understand how code executed behind the scene

When code or program runs the  Global execution context created.
code runs/scan line by line .

![[Kaagaz_20230120_202428876308-1.jpg]]




in the second s