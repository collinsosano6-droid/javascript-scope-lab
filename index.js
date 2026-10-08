// You will be developing a menu with milkshakes and burgers. 
// You will also be creating menu features for both the milkshake and burger.

//variables in global scope
let burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = ["Strawberry Milkshake"];

console.log(burgers);
console.log(featuredDrink);

function addBurger(){
    let newBurger = "FlatBurger";
    burgers.push(newBurger);
}

if(true){
    let anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
}

function changeFeaturedDrink (){
    featuredDrink[0] = "The JavaShake";
}
addBurger();
changeFeaturedDrink();

console.log(burgers);
console.log(featuredDrink);

