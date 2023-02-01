 // Higher Order Function 
 // reusable code componants 


 // all about circle 

//  arry of radus 
 const radius = [5,8,3,9,7];

 // logic of area
 const area= function (radius){
    return Math.PI * radius * radius ;
 }

 const diameter = function (radius){
    return radius * 2 ;
 }

/*
 // function tha take logic and radius 
 const calculateAria = function (r, logic){
     const output = [];
    //  empty array new Elements 
     for(i=0 ; i< r.length ; i ++){
        output.push(logic (r[i]));
        // called a logic(area()) function and passed index of an array in it
       
     }
     return output ;
     
  };

  console.log(calculateAria(radius,area));
//   console.log(calculateAria(radius,diameter));


  //  similar to map 
  console.log(radius.map(area));
 */

//   lets make out function like map polyphill. 

Array.prototype.calculate = function (logic){
    const output = [];
   //  empty array new Elements 
    for(i=0 ; i< this.length ; i ++){
       output.push(logic (this[i]));
      
      
    }
    return output ;
    
 };
console.log(radius.calculate(area));
console.log(radius.calculate(diameter));