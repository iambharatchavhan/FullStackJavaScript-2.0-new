let myarray = [1,2,3,4,5];

console.log(myarray);

// This inherit from Array.prototype 
console.log(myarray.__proto__ );                      //*  Object(0) []
                                                                     //^ > equal
console.log(Array.prototype );                       //*  Object(0) []


//to object inherit
console.log(myarray.__proto__.__proto__ );   //* [Object: null prototype] {}
                                                                         //^ > equal
console.log(Object.prototype);               //* [Object: null prototype] {}
 
// to null 
console.log(myarray.__proto__.__proto__.__proto__ );   //* null
                                                             //^ > equal
console.log(Object.prototype.__proto__);               //* null

//^ This chain he call prototypal chaining 
//^ and the ability to inherit from its parent is called prototypal inheritance

//& like above For function and for object its act as same --
