//let's create a greeting function

// function greetWorld(){
//     var greeting = "Hello World";
//     aler(greeting);
// }

function greetWorld(){
    try{
        var greeting = "Hello World";
        aler(greeting)
    }
    catch(err){
        alert(err);
    }
}

function checkPassword(){
    try{
        var pass = document.getElementById("f1").value;
        if(pass.length < 8){
            throw "Please enter at least 8 characters.";
        }
        if(pass.indexOf(" ") !== -1) {
            throw "No spaces are allowed in the password.";
        }

        var numberSomewhere = false;
        for(var i=0; i < numberSomewhere.length;i++){
            if(isNaN(pass[i])=== false){
                numberSomewhere = true;
                break;
            }
        }

        if(numberSomewhere===false){
            throw "Include at least 1 number.";
        }
    }
    catch(err){
        alert(err);
    }


}

