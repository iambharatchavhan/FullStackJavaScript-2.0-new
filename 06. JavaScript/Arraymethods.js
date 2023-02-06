//Array methods ---at leats learn this much

//declare Array

let numbers = ['one','two','three','four','five','six','seven','eight','nine'];

// access array 
//console.log(numbers);

//First will see from start method
//Start
//deleting an element frome start
//numbers.shift();
//console.log(numbers);
// also it give return the deleted item
//deletedItem = numbers.shift();
//console.log(deletedItem);

//Adding element to the start
//numbers.unshift('zero')
//console.log(numbers);

//lets do try some methods on end
// numbers.pop()
// console.log(numbers);

// last item deledet 
//lest fetch deleted item
// lastItemDeleted=numbers.pop()
// console.log(lastItemDeleted);

//add new item  to the end of array
// numbers.push('ten');
// console.log(numbers);

//Middle part or anywhre in array
numbers.splice(2 ,2 ,                  'newItem');
// ------ index---no-ofitemdeleted-----added item 

console.log(numbers);




