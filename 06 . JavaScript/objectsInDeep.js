// let's learn objects in deep ----> for in loop in objects 

//^ Object litterals 
const person = {

    firstName: "Atul",
    lastName : "Strivastava",
    age : 25,
    hobbies : ["Chess", "Cricket","Badbinton"],

    "Teachers Number" : 9766363628,

    work : function (){
           console.log("Im a Full stack javascript Developer");
    },

  skills : {
            skill1 : "javascript",
            skill2 : "Html",
            Shkill3 : "CSS",
            totalProjects : 26 
  }

}

//for in loop 
//^ for accessing all values of keys 

/* 

for(let key in person){
    console.log(person[key]);
}

*/




// ------------------------------------
/* 

for(let key in person){
    console.log(`${key} : ${person[key]}`); // derect value print
}

*/

/*

for(let key in person){
    console.log(key ," :  ", person[key]);
}


*/


//? what is computed properties ==== exreacting variables and put then into obj as key value pair

//^ Example -->

let key1 = "tShirtBlack" ;
let key2 = "tShirtWhite" ;
let key3 = "tShirtRed";
let key4 = "tShirtPink";

let value1 = 999;
let value2 = 888;
let value3 = 7777;
let value4 = 1010;

const storeOfTishirt = {
    [key1] : value1,
    [key2] : value2,
    [key3] : value3,
    [key4] : value4,
}
console.log(storeOfTishirt);

//second option  or

const secondSteoreOfTishirts = {} // Empty object

secondSteoreOfTishirts[key1]= value1; // added key value one bye one
secondSteoreOfTishirts[key2]= value2;
secondSteoreOfTishirts[key3]= value3;
secondSteoreOfTishirts[key4]= value4;

console.log(secondSteoreOfTishirts);

//^ Objects descructuring 