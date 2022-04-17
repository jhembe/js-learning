console.log("We're onboard.")
function checkForNames(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    if(fname.length === 0 || lname.length === 0){
        alert("Please Enter your names");
        return false;
    }
}

function checkForSelection(selectId){
    // storing selection value in a variable country
    var country = document.getElementById(selectId);
    // console.log(country);
    if(country.selectedIndex == 0){
        alert("Please select a state.");
        return false;
    }
}

function checkForRadios(){
    var radios = document.getElementsByName("rl");
    console.log(radios)

    for(var i=0; i < radios.length; i++){
        if(radios[i].checked){
            return true;
        }
    }

    alert("Please Check One.")
    return false;
}