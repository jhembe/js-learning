function fillcountry(){
    var phoneCode = document.getElementById("code").value
    console.log(phoneCode);

    switch(phoneCode){
        case "+255":
            countryName = "Tanzania";
            break;
        case "+254":
            countryName = "Kenya";
            break;
        case "+256":
            countryName = "Uganda";
            break;
        default:
            countryName = "Undefined";
    }

    document.getElementById("country").value = countryName;
}

function expandLoris(){
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which<br>make up the genus Nycticebus. They have a round head, narrow snout,<br>large eyes, and a variety of distinctive coloration patterns that are species-dependent.<br>The hands and feet of slow lorises have several adaptations that give them a <br>pincer-like grip and enable them to grasp branches for long periods of time.<br>Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function placeList(){
    var listwithin = "<ol><li>Head</li><li>Knees</li><li>Toes</li></ol>";
    document.getElementById("list").innerHTML = listwithin;
}

var eparagraph = document.getElementsByTagName("p");
console.log(eparagraph);

// now narrowing the targetting
var div = document.getElementById("ny");
var specific = div.getElementsByTagName("p");
var contents = specific[1].innerHTML;
console.log(specific[1].innerHTML);

// objects concept

var plan1 = {
    name : "Basic",
    price : 3.99,
    space : 100,
    transfer : 1000,
    pages : 10
};

propertyExists = "name" in plan1;
console.log(propertyExists);

/// creating a constructor
function Plan(name,price,space,transfer,pages){
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
}

plan1 = new Plan("Basic",3.99,100,1000,10);
plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);

