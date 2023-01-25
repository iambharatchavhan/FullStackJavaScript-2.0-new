//^ object spread operator

const firstObj = {
    myname : "Bharat",
    lastName : "Chavhan",
    age : 25
}

const secondObj = {
    myname : "Mayur",
    lastName : "Singh",
    age : 23,
    job : "Tcs"
}

// const newThirdObj ={...firstObj,...secondObj}
// const newFourthdObj ={...firstObj,...secondObj , shift: "9 to 5"} // added new key value pair

// console.log(newThirdObj);
// console.log(newFourthdObj);

//! same keys replace by the last key .... second key overide values

//^ using spread operator you and add index as key and value of array or string 

const theObje ={...["myValue1","myValue2","myValue3","myValue4"] }
// now they key will be index of an array 
console.log(theObje);
//* output - { '0': 'myValue1', '1': 'myValue2', '2': 'myValue3', '3': 'myValue4' }


//^  Real object Destrucuring for objects same as array not single difference

const newPerson = {
    firstname : "john",
    lastName : "doe",
    age : 20 ,
    song : "Baby Baby Baby yeeee"

}
// Whant to store the first keys as variable so we aceess them like normal variable
let {firstname ,lastName} = newPerson;
console.log(firstname);
console.log(lastName);

// we have seperated as the name of keys but ... but want to stror varible but with different name 
let {age:Jonhage , song:johnfevsong} = newPerson;
// now age not the variable but Johnage is 
console.log("Jonhage =",Jonhage);
console.log("johnfevsong =",johnfevsong);

//* Bonus toping we can store as many objest in the array 

//^  const users = [{},{},{},{}]

const users = [
    {
        userid : 1, username : "Bharat", password : 123456 
     },
     {
        userid : 2, username : "Savinder", password : 123123 
     }
     ,
     {
        userid : 3, username : "Atul", password : 1285296
     }

]

// Access all users 
/*
for(let user of users){
   
    console.log(user["username"]);
    console.log("_______________");
    console.log(user);
}
*/

// nested distructruring 

const [{userid}, ,{username}] = users ;
console.log(userid);
console.log(username);

