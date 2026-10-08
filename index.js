// You will be developing a menu with milkshakes and burgers. 
// You will also be creating menu features for both the milkshake and burger.

//variables in global scope
const burgers = [`Hamburger`, `Cheeseburger`];
const featuredDrink = [`Strawberry Milkshake`];

console.log(burgers);
console.log(featuredDrink);

function addBurger(){
    const newBurger = `FlatBurger`;
   return burgers.push(newBurger);
}

if(true){
    const anotherNewBurger = `Maple Bacon Burger`;
    burgers.push(anotherNewBurger);
}

function changeFeaturedDrink (){
   return featuredDrink[0] = `The JavaShake`;
}
addBurger();
changeFeaturedDrink();

console.log(burgers);
console.log(featuredDrink);

