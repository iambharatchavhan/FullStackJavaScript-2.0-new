// what are the objects 
//important data type
//Reference type
// dont have index 
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

person.work();
console.log(person.lastName);
console.log(person.skills.skill1);
console.log(person.hobbies[1]);
// console.log(person.x); // why showing undefinded

// Bracket notation 
console.log(person["lastName"]);
// console.log(person['work()']); bracket notation se direct function call nahi kar sakte

//^ adding values  dot notation
person.language = "English";
person.progamming = ["c", "cpp","python"];


//^ adding values Brackts [] notation 
person["Village"] = "Mahagaon";
console.log(person);

// dot vs bracket .       you can not access spaces keys using dot notation 
console.log( person["Teachers Number"]);

//! NEXT more about object in Next Chap 