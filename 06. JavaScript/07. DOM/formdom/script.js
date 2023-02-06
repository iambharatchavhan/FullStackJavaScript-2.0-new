

// copy  pasted code

function myFunction (){
    var x = document.forms["myForm"];
    var text = "";
    var i;
    for(i= 0; i< x.length; i++){
        text += x.elements[i].value + "<br>"
    }
    document.getElementById("getValue").innerHTML = text;
}

// document.getElementById("test1").innerHTML = "Hello iam from javascript (id test1) - getElementById"


