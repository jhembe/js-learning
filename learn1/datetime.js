var rightNow = new Date();
console.log(rightNow);
// now using different methods of date and time
// let me create an array representing days from sunday to saturday
var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log("Today is " + rightNow.getDate());
console.log("Today is " + week[rightNow.getDay()])
console.log(rightNow.getTime());

// i want to create a function to print out the current time every time
var now = new Date();
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();
console.log("The time is : " + hour +":"+ min +":"+ sec);

// now let's create a function for it

function tellTime(){
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    console.log("The time is : " + hour +":"+ min +":"+ sec);
}

// now let's create a function to say hi to the user
// const fname = prompt("Hey, What's Your name : ");
// console.log("Welcome back "+fname+" !");

function popup(message){
    alert(message);
}

function fullname(){
    var first = document.getElementById("fname").value
    sname = "Gabriel";
    if (first === "Joseph"){
        document.getElementById("lname").value = sname;
    }
    else{
        document.getElementById("lname").value = sname;
    }
}

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
    case "60608" :
    cityName = "Chicago";
    break;
    case "68114" :
    cityName = "Omaha";
    break;
    case "53212" :
    cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}
