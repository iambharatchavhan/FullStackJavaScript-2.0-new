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

console.log(arr.map(function(num){
       sqrs = num ** 2;

    return sqrs;
}));
